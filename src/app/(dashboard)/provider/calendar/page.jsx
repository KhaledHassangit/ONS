"use client";
import Calender from "@/components/dashboard/calendar/Calendar";
import { Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
    <div className="flex flex-col gap-4 w-full p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row w-full sm:w-fit p-[3px] justify-center items-center bg-[#F7F8F9] rounded-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              tab.id === 2
                ? router.push("/provider/calender/profile")
                : router.push("/provider/calender");
              setActiveTab(tab.id);
            }}
            className={`${
              activeTab === tab.id
                ? "bg-(--main-orange-color) text-white"
                : "text-black"
            } px-2 justify-center items-center h-[43px] w-full sm:w-[150px] flex gap-[6px] rounded-lg transition-all duration-200 mb-1 sm:mb-0`}
          >
            <tab.icon size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base font-normal whitespace-nowrap">{tab.title}</span>
          </button>
        ))}
      </div>

      <h6 className="text-base font-normal text-[#4F617D] px-2">Calendar</h6>

      <div className="w-full overflow-x-auto">
        <Calender />
      </div>
    </div>
  );
}
