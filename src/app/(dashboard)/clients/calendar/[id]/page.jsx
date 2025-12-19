"use client";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Home,
  Bath,
  Users,
} from "lucide-react";
import Calendar from "@/components/dashboard/calendar/Calendar";
import Image from "next/image";

export default function page() {
  const [selectedView, setSelectedView] = useState("Week");

  const data = [
    {
      id: 1,
      image: "/images/Rectangle 34624624 (1).svg",
      type: "Villa",
      location: "Riyadh, Saudi Arabia,",
    },
    {
      id: 2,
      image: "/images/Rectangle 34624624 (1).svg",
      type: "Villa",
      location: "Riyadh, Saudi Arabia,",
    },
    {
      id: 3,
      image: "/images/Rectangle 34624624 (1).svg",
      type: "Villa",
      location: "Riyadh, Saudi Arabia,",
    },
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "13:00 AM",
    "14:00 AM",
    "15:00 AM",
    "16:00 AM",
  ];

  const weekDays = [
    { day: "Sunday", date: "07/10", reservations: 0 },
    { day: "Monday", date: "07/11", reservations: 0 },
    { day: "Tuesday", date: "07/12", reservations: 0 },
    { day: "Wednesday", date: "07/13", reservations: 0 },
    { day: "Thursday", date: "07/14", reservations: 0 },
    { day: "Friday", date: "07/15", reservations: 0 },
    { day: "Saturday", date: "07/16", reservations: 0 },
  ];

  const appointments = [
    { day: 0, time: 8, type: "service", text: "Service Selected" },
    { day: 1, time: 2, type: "checkout", text: "Check Out\nGeste" },
    { day: 2, time: 3, type: "checkout", text: "Check Out\nGeste" },
    { day: 2, time: 2, type: "service", text: "Service Selected" },
    { day: 3, time: 4, type: "checkout", text: "Check Out\nGeste" },
    { day: 4, time: 0, type: "checkout", text: "Check Out\nGeste" },
    { day: 5, time: 3, type: "service", text: "Service Selected"  },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-base font-normal text-[#4F617D]">Calendar</h1>
        <div className="flex flex-col gap-4">
          {/* Villa Cards */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className='h-[131px] w-full flex flex-col gap-4 justify-between bg-[#F4F4F4] rounded-xl p-4'>
            <div className="flex flex-col justify-between  gap-2">
             <div className="flex items-center gap-2">
             <Image
                src={"/images/Rectangle 34624624 (1).svg"}
                alt="image"
                width={62}
                height={62}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <div className="w-[54px] h-[38px] rounded-[36px] p-3 bg-[#FFD9C2] text-[#4F617D] text-base font-normal flex justify-center items-center">
                  {"Villa"}
                </div>
                <div className="flex items-center gap-[2px]">
                  <Image
                    src="/images/Pin_duotone.svg"
                    alt="location"
                    width={24}
                    height={24}
                  />
                  <p className="text-base font-normal text-[#4F617D]">
                    Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
             </div>

              <div className="flex  gap-2 items-center">
              <div className="flex gap-1 items-center">
                <Image
                  src="/images/dash/property/Hotel, Building.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center font-medium text-(--main-light-color)">
                  <span>3</span> <span>Floors</span>
                </p>
              </div>

              <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
                <Image
                  src="/images/dash/property/Room, Service, Clean.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center font-medium text-(--main-light-color)">
                  <span>7</span> <span>Rooms</span>
                </p>
              </div>

              <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
                <Image
                  src="/images/dash/property/column-resize-square.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center font-medium text-(--main-light-color)">
                  <span>300</span> <span>m</span>
                </p>
              </div>

              <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
                <Image
                  src="/images/dash/property/Bath, Bathroom.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center  font-medium text-(--main-light-color)">
                  <span>4</span> <span>bathrooms</span>
                </p>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Calendar
        timeSlots={timeSlots}
        appointments={appointments}
        weekDays={weekDays}
      />
    </div>
  );
}
