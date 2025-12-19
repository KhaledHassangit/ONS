"use client";
// import Calender from "@/components/dashboard/cleaners/Calender/Calender";
import { Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CalendarComponent from "@/components/dashboard/calendar/Calendar";

const tabs = [
  {
    id: 1,
    title: "Calendar",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Profile",
    icon: User,
  },
];

const days = [
  {
    id: 1,
    title: "Today",
  },
  {
    id: 2,
    title: "Back",
  },
  {
    id: 3,
    title: "Next",
  },
];

const months = [
  {
    id: 1,
    title: "Month",
  },
  {
    id: 2,
    title: "Week",
  },
  {
    id: 3,
    title: "Day",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeDay, setActiveDay] = useState(1);
  const [activeMonth, setActiveMonth] = useState(1);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 w-fit p-[3px] justify-center items-center bg-[#F7F8F9] h-[49px] rounded-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              tab.id === 2
                ? router.push("/cleaners/calender/profile")
                : router.push("/cleaners/calender");
              setActiveTab(tab.id);
            }}
            className={`${
              activeTab === tab.id
                ? "bg-(--main-orange-color) w-[150px] text-white"
                : "text-black"
            } px-2 justify-center items-center h-[43px] flex gap-[6px] rounded-lg transition-all duration-200`}
          >
            <tab.icon size={20} />
            <span className="text-base font-normal">{tab.title}</span>
          </button>
        ))}
      </div>

      <h6 className="text-base font-normal text-[#4F617D]">Calendar</h6>
      {/* <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 p-[10px] rounded-[10px] h-[56px] bg-[#F7F8F9] items-center">
            {days.map((item) => (
              <button
                onClick={() => setActiveDay(item.id)}
                key={item.id}
                className={`h-[44px] text-base font-normal ${
                  activeDay === item.id
                    ? "bg-(--main-dark-color) text-white"
                    : "text-black"
                } px-2 justify-center items-center flex gap-[6px] rounded-lg transition-all duration-200`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <p className="text-base font-normal">10 Mar 2025 - 16 Avr 2025</p>
          <div className="flex gap-4 p-[10px] rounded-[10px] h-[56px] bg-[#F7F8F9] items-center">
            {months.map((item) => (
              <button
                onClick={() => setActiveMonth(item.id)}
                key={item.id}
                className={`h-[44px] text-base font-normal ${
                  activeMonth === item.id
                    ? "bg-(--main-dark-color) text-white"
                    : "text-black"
                } px-2 justify-center items-center flex gap-[6px] rounded-lg transition-all duration-200`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      <CalendarComponent />
    </div>
  );
}
