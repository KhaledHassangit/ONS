import React from "react";

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
];

const daysData = [
  {id:1, date: "07/10", day: "Sunday", reservations: "0 Reservation" },
  {id:2, date: "07/11", day: "Monday", reservations: "03 Reservation" },
  {id:3, date: "07/12", day: "Tuesday", reservations: "0 Reservation" },
  {id:4, date: "07/13", day: "Wednesday", reservations: "0 Reservation" },
  {id:5, date: "07/14", day: "Thursday", reservations: "0 Reservation" },
  {id:6, date: "07/15", day: "Friday", reservations: "0 Reservation" },
  {id:7, date: "07/16", day: "Saturday", reservations: "0 Reservation" },
];

const appointments = [
  { time: "8:00 AM", day: 4, type: "work", text: "AI work" },
  // { time: "10:00 AM", day: 1, type: "work", text: "AI work" },
  { time: "10:00 AM", day: 2, type: "available", text: "Available for work" },
  { time: "11:00 AM", day: 2, type: "work", text: "AI work" },
  { time: "12:00 AM", day: 3, type: "work", text: "AI work" },
  // { time: "1:00 AM", day: 0, type: "available", text: "Available for work" },
  { time: "1:00 AM", day: 6, type: "available", text: "Available for work" },
];

export default function Calender() {
  return (
    <div>
      <div className="grid w-full justify-between grid-cols-8">
        <div className="flex bg-[#F7F8F9] text-xs border-l font-normal justify-center items-center h-[56px] rounded-tl-xl p-[12px_10px] border-t border-b border-[#DEDEDE] flex-col">
          Time
        </div>
        {daysData?.map((item) => (
          <div
            key={item?.id}
            className="flex last:rounded-tr-xl bg-[#F7F8F9] h-[56px] p-[12px_10px] !border-l !border-r  !border-t !border-b border-[#DEDEDE] flex-col"
          >
            <p className="text-xs text-center font-normal">
              {item?.day} {item?.date}
            </p>
            <p className="text-xs text-center font-semibold">
              {item?.reservations}
            </p>
          </div>
        ))}
      </div>

      {timeSlots?.map((item) => (
        <div key={item?.id} className="grid w-full justify-between grid-cols-8">
          <div className="flex bg-[#F7F8F9] text-xs border-l font-normal justify-center items-center h-[56px]  p-[12px_10px] border-t border-b border-[#DEDEDE] flex-col">
            {item}
          </div>
          {daysData?.map((item, index) => {
            const appointment = appointments?.find(
              (appointment) => appointment?.day == index
            );
            console.log(appointment);
            return (
              <div
                key={item?.id}
                className="flex  justify-center items-center bg-[#F7F8F9] h-[56px] p-[12px_10px] !border-l !border-r  !border-t !border-b border-[#DEDEDE] flex-col"
              >
                {appointment && (
                  <p
                    className={`text-xs text-center font-normal w-[100px] h-[44px] flex justify-center items-center rounded-[2px] text-white ${
                      appointment?.type == "work"
                        ? "bg-[#4F617D]"
                        : "bg-[#F59331] shadow-[0px_0px_12px_0px_#F59331CC]"
                    }`}
                  >
                    {appointment?.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
