"use client";
import { handleAddTimeSlot } from "@/features/provider/provider-calander"; // Ensure this is a Redux async thunk
import { Modal } from "antd";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch

const timeSlots = [
  "12:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
];

// Helper function to format date as MM/DD
const formatDate = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}`;
};

// Helper function to convert 24-hour time to 12-hour format
const convertTo12Hour = (time24) => {
  if (!time24) return "";
  const [hours, minutes] = time24.split(":");
  const hour = parseInt(hours);

  if (hour === 0) return `12:${minutes} AM`;
  if (hour < 12) return `${hour}:${minutes} AM`;
  if (hour === 12) return `12:${minutes} PM`;
  return `${hour - 12}:${minutes} PM`;
};

// Helper function to convert 12-hour time to 24-hour format
const convertTo24Hour = (time12) => {
  if (!time12) return "";
  const [time, period] = time12.split(" ");
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours);

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}:00`;
};

// Helper function to get week dates starting from a specific date
const getWeekDates = (startDate) => {
  const dates = [];
  const currentDate = new Date(startDate);

  // Get the start of the week (Sunday)
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    dates.push({
      id: i + 1,
      date: formatDate(date),
      fullDate: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("en-US", { weekday: "long" }),
      reservations: "0",
      timestamp: date.getTime(),
    });
  }

  return dates;
};

// Helper function to convert API data to calendar appointments
const convertApiDataToAppointments = (apiData, weekDays) => {
  if (!apiData || !weekDays) return [];

  return apiData
    .map((item) => {
      // Find the matching day
      const matchingDay = weekDays.find((day) => day.fullDate === item.date);
      if (!matchingDay) return null;

      // Convert time format
      const timeFrom = convertTo12Hour(item.time_from);
      const timeTo = convertTo12Hour(item.time_to);

      return {
        ...item,
        id: item.id,
        property_id: item.property_id,
        time: timeFrom,
        day: matchingDay.id,
        type: "work", // Default type
        text: `Scheduled: ${timeFrom} - ${timeTo}`,
        fullData: item, // Keep original data for reference
      };
    })
    .filter(Boolean); // Remove null entries
};

// Generate sample API data for testing
const generateSampleApiData = (currentDate) => {
  const date = new Date(currentDate);
  return [
    {
      id: 3,
      property_id: 1,
      date: date.toISOString().split("T")[0],
      time_from: "17:20:53",
      time_to: "20:20:53",
    },
    {
      id: 2,
      property_id: 1,
      date: new Date(date.setDate(date.getDate() + 1))
        .toISOString()
        .split("T")[0],
      time_from: "17:20:53",
      time_to: "20:20:53",
    },
    {
      id: 1,
      property_id: 1,
      date: new Date(date.setDate(date.getDate() + 1))
        .toISOString()
        .split("T")[0],
      time_from: "17:20:53",
      time_to: "20:20:53",
    },
  ];
};

export default function Calendar({
  timeSlots: customTimeSlots = timeSlots,
  apiData = null,
  selectedView = "Week", // Use selectedView as initial state
  onTypeOfServiceClick = () => {},
}) {
  const isFutureTime = (time12) => {
    const now = new Date();
    const [hours, minutes] = time12.split(":");
    const timeSlot = new Date();
    timeSlot.setHours(parseInt(hours), parseInt(minutes), 0, 0); // Set the time based on the slot

    // If the timeSlot is in the future, return true, otherwise false
    return timeSlot > now;
  };

  const filteredTimeSlots = customTimeSlots.filter((time) => {
    return isFutureTime(time);
  });

  const dispatch = useDispatch(); // Initialize dispatch
  const [open, setOpen] = useState(false);
  const [slotModalOpen, setSlotModalOpen] = useState(false);
  const [rowData, setRowData] = useState({});
  const [activeView, setActiveView] = useState(selectedView);
  const [isMobile, setIsMobile] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState({
    date: "",
    time_from: "",
    time_to: "",
    status: "available",
  });

  // Generate week dates based on current date
  const weekDays = useMemo(() => getWeekDates(currentDate), [currentDate]);
  const [visibleDays, setVisibleDays] = useState(weekDays);

  // Convert API data to appointments
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = apiData || generateSampleApiData(currentDate);
    const converted = convertApiDataToAppointments(data, weekDays);
    setAppointments(converted);
  }, [apiData, weekDays, currentDate]);

  // Update appointments when current date changes
  useEffect(() => {
    if (apiData === null) {
      const data = generateSampleApiData(currentDate);
      const converted = convertApiDataToAppointments(data, weekDays);
      setAppointments(converted);
    }
  }, [currentDate, apiData, weekDays]);

  // Update visible days when week days change
  useEffect(() => {
    if (isMobile) {
      const endIndex = Math.min(currentDayIndex + 2, weekDays.length);
      setVisibleDays(weekDays.slice(currentDayIndex, endIndex));
    } else {
      setVisibleDays(weekDays);
    }
  }, [isMobile, currentDayIndex, weekDays]);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate date range for display
  const dateRange = useMemo(() => {
    if (weekDays.length === 0) return "No dates available";
    const startDate = weekDays[0].date;
    const endDate = weekDays[weekDays.length - 1].date;
    const year = new Date(weekDays[0].fullDate).getFullYear();
    return `${startDate} - ${endDate} ${year}`;
  }, [weekDays]);

  const handleViewChange = (view) => {
    setActiveView(view);
    if (view === "Day" && isMobile) {
      setVisibleDays(weekDays.slice(currentDayIndex, currentDayIndex + 1));
    } else if (view === "Week") {
      setVisibleDays(weekDays.slice(0, 7));
    } else {
      setVisibleDays(weekDays);
    }
  };

  const handlePrevDays = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7); // Move back by 7 days (1 week)
    setCurrentDate(newDate); // Update current date to previous week
    setCurrentDayIndex(0); // Reset the day index to start of the new week
  };

  const handleNextDays = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7); // Move forward by 7 days (1 week)
    setCurrentDate(newDate); // Update current date to next week
    setCurrentDayIndex(0); // Reset the day index to start of the new week
  };

  const handleTodayClick = () => {
    setCurrentDate(new Date());
    setCurrentDayIndex(0);
  };

  // Update handleSlotClick to handle appointment creation
  const handleSlotClick = (day, time) => {
    // Check if slot is already booked
    const isBooked = appointments.some(
      (apt) => apt.day === day.id && apt.time === time
    );

    if (isBooked) {
      alert("This time slot is already booked. Please select another time.");
      return;
    }

    setSelectedSlot({
      date: day.fullDate,
      time_from: time,
      time_to: getNextTimeSlot(time),
      status: "available",
    });
    setOpen(true);
  };

  const getNextTimeSlot = (currentTime) => {
    const index = customTimeSlots.indexOf(currentTime);
    if (index === -1 || index === customTimeSlots.length - 1) {
      return currentTime; // Return same time if last slot or invalid
    }
    return customTimeSlots[index + 1];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedSlot((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add appointment after successful API call
  const handleSubmitSlot = async () => {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("accessToken")
      )?.accessToken;
      if (!accessToken) {
        alert("Authentication required. Please log in.");
        return;
      }

      const formData = new FormData();
      formData.append("provider[0][date]", selectedSlot.date);
      formData.append(
        "provider[0][time_from]",
        convertTo24Hour(selectedSlot.time_from)
      );
      formData.append(
        "provider[0][time_to]",
        convertTo24Hour(selectedSlot.time_to)
      );
      formData.append("provider[0][status]", selectedSlot.status);

      const result = await dispatch(
        handleAddTimeSlot({
          accessToken,
          formData,
        })
      ).unwrap();

      if (result?.status === 1) {
        // Add new appointment to local state in API format
        const newAppointment = {
          id: Date.now(),
          property_id: 1,
          date: selectedSlot.date,
          time_from: convertTo24Hour(selectedSlot.time_from),
          time_to: convertTo24Hour(selectedSlot.time_to),
        };

        // Convert and add to appointments
        const convertedAppointment = convertApiDataToAppointments(
          [newAppointment],
          weekDays
        )[0];
        if (convertedAppointment) {
          setAppointments((prev) => [...prev, convertedAppointment]);
        }

        setSlotModalOpen(false);
        alert("Time slot added successfully!");
      } else {
        alert("Failed to add time slot. Please try again.");
      }
    } catch (error) {
      console.error("Error adding time slot:", error);
      alert("Failed to add time slot. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex bg-[#F7F8F9] h-[56px] rounded-[10px] p-[10px] items-center gap-2 md:gap-4 w-full md:w-auto">
          <button
            onClick={handleTodayClick}
            className="bg-[#292760] w-[60px] md:w-[72px] h-[36px] text-white rounded-lg text-sm md:text-base font-normal"
            aria-label="Go to today"
          >
            Today
          </button>
          <button
            onClick={handlePrevDays}
            disabled={isMobile && currentDayIndex === 0}
            className="w-[60px] md:w-[72px] h-[36px] rounded-lg text-sm md:text-base font-normal disabled:opacity-50"
            aria-label="Previous days"
          >
            Back
          </button>
          <button
            onClick={handleNextDays}
            disabled={isMobile && currentDayIndex >= weekDays.length - 2}
            className="w-[60px] md:w-[72px] h-[36px] rounded-lg text-sm md:text-base font-normal disabled:opacity-50"
            aria-label="Next days"
          >
            Next
          </button>
        </div>

        <div className="text-sm md:text-base font-normal text-black">
          {dateRange}
        </div>

        <div className="flex bg-[#F7F8F9] h-[56px] rounded-[10px] p-[10px] items-center gap-2 md:gap-4 w-full md:w-auto">
          <button
            onClick={() => handleViewChange("Month")}
            className={`${
              activeView === "Month"
                ? "bg-[#292760] text-white"
                : "text-[#292760]"
            } w-[60px] md:w-[72px] h-[36px] rounded-lg text-sm md:text-base font-normal`}
            aria-label="Month view"
          >
            Month
          </button>
          <button
            onClick={() => handleViewChange("Week")}
            className={`${
              activeView === "Week"
                ? "bg-[#292760] text-white"
                : "text-[#292760]"
            } w-[60px] md:w-[72px] h-[36px] rounded-lg text-sm md:text-base font-normal`}
            aria-label="Week view"
          >
            Week
          </button>
          <button
            onClick={() => handleViewChange("Day")}
            className={`${
              activeView === "Day"
                ? "bg-[#292760] text-white"
                : "text-[#292760]"
            } w-[60px] md:w-[72px] h-[36px] rounded-lg text-sm md:text-base font-normal`}
            aria-label="Day view"
          >
            Day
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div
          className={`rounded-lg border border-[#DEDEDE] overflow-hidden ${
            !isMobile ? "min-w-[768px]" : ""
          }`}
        >
          <div
            className={`grid ${
              isMobile ? "grid-cols-3" : "grid-cols-8"
            } h-[56px] rounded-tl-xl border-b border-[#DEDEDE]`}
          >
            <div className="p-4 bg-[#F7F8F9] rounded-tl-xl flex justify-center items-center h-[56px] border-r border-[#DEDEDE]">
              Time
            </div>
            {visibleDays.map((day, index) => (
              <div
                key={index}
                className="p-4 h-[56px] bg-[#F7F8F9] flex flex-col justify-center items-center text-center border-r border-[#DEDEDE] last:border-r-0"
              >
                <div className="text-xs font-normal text-black">
                  {day.day} {day.date}
                </div>
                <div className="text-xs text-black font-bold">
                  {day.reservations} Reservation
                  {day.reservations !== "1" ? "s" : ""}
                </div>
              </div>
            ))}
          </div>

          <div className={`grid ${isMobile ? "grid-cols-3" : "grid-cols-8"}`}>
            <div className="border-r border-[#DEDEDE]">
              {customTimeSlots.map((time, index) => (
                <div
                  key={index}
                  className="h-16 p-3 border-b border-[#DEDEDE] flex justify-center items-center text-sm text-black"
                >
                  {isMobile ? time.split(" ")[0] : time}
                </div>
              ))}
            </div>

            {visibleDays.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="border-r border-[#DEDEDE] last:border-r-0"
              >
                {customTimeSlots.map((time, timeIndex) => {
                  const appointment = appointments.find(
                    (apt) =>
                      apt.day === day.id &&
                      apt.time.split(":")[0] === time.split(":")[0]
                  );

                  return (
                    <div
                      key={timeIndex}
                      className="h-[64px] p-[10px_5px] md:p-[30px_10px] flex justify-center items-center border-b border-gray-100 relative cursor-pointer"
                      onClick={() => {
                        if (appointment && appointment.type === "service") {
                          setOpen(true);
                          setRowData(appointment);
                        } else {
                          handleSlotClick(day, time);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select time slot for ${day.day} ${day.date} at ${time}`}
                    >
                      {appointment && (
                        <div
                          className={`w-full h-[44px] rounded-[2px] text-[10px] md:text-xs font-medium text-center flex items-center justify-center text-white bg-[#4F617D]
                            ${
                              false &&
                              (appointment.type === "service"
                                ? "bg-[#F59331] shadow-[0px_0px_12px_0px_#F59331CC]"
                                : appointment.type === "work"
                                ? "bg-[#4F617D]"
                                : "bg-[#28A745]")
                            }
                            `}
                        >
                          <span className="whitespace-pre-line px-1 text-[14px] ">
                            Check Out <br /> Geste
                            {/* {isMobile && appointment.text.length > 10
                              ? appointment.text.substring(0, 10) + "..."
                              : appointment.text} */}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Selection Modal */}
      <Modal
        width="90%"
        style={{ maxWidth: "610px" }}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        aria-labelledby="service-modal-title"
      >
        <div className="flex flex-col gap-6">
          <Image
            src="/logo.svg"
            alt="On Next Stay Logo"
            width={36}
            height={51.42857360839844}
          />
          <h6
            id="service-modal-title"
            className="text-xl md:text-2xl font-medium text-[#0A0A1F]"
          >
            Select the type of service you want to order
          </h6>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <Image

                src="/images/Frame 2121458409.svg"
                alt="Service option 1"
                width={272}
                height={195}
                className="w-full h-auto cursor-pointer"
                onClick={()=>{
                  onTypeOfServiceClick("cleaning")
                }}
              />
              
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/Frame 2121458440.svg"
                alt="Service option 2"
                width={272}
                height={195}
                className="w-full h-auto cursor-pointer"
                onClick={()=>{
                  onTypeOfServiceClick("maintenance")
                }}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Slot Selection Modal */}
      <Modal
        title="Schedule Appointment"
        width="90%"
        style={{ maxWidth: "500px" }}
        open={slotModalOpen}
        onCancel={() => setSlotModalOpen(false)}
        footer={[
          <button
            key="cancel"
            onClick={() => setSlotModalOpen(false)}
            className="px-4 py-2 mr-2 border border-gray-300 rounded-lg"
            aria-label="Cancel appointment scheduling"
          >
            Cancel
          </button>,
          <button
            key="submit"
            onClick={handleSubmitSlot}
            className="px-4 py-2 bg-[#292760] text-white rounded-lg"
            aria-label="Save appointment"
          >
            Save
          </button>,
        ]}
        centered
        aria-labelledby="schedule-modal-title"
      >
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="text"
              name="date"
              value={selectedSlot.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              readOnly
              aria-describedby="date-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <select
              name="time_from"
              value={selectedSlot.time_from}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              aria-describedby="time-from-input"
            >
              {customTimeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <select
              name="time_to"
              value={selectedSlot.time_to}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              aria-describedby="time-to-input"
            >
              {customTimeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={selectedSlot.status}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              aria-describedby="status-input"
            >
              <option value="available">Available</option>
              <option value="work">Work</option>
              <option value="service">Service</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
}
