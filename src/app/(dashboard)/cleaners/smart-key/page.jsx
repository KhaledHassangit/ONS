"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { SidebarContext } from "@/context/sidebarContext";
import { useRouter } from "next/navigation";

export default function page() {
  const { isOpen } = useContext(SidebarContext);
  const [activeTab, setActiveTab] = useState("checkin");
  const router = useRouter();
  const tabs = [
    { id: "checkin", label: "Checkin history" },
    { id: "checkout", label: "Checkout history" },
    { id: "welcoming", label: "Welcoming message" },
    { id: "checkout-message", label: "Checkout message" },
    { id: "rules", label: "Property rules" },
  ];

  return (
    <div className="flex flex-col gap-4 p-2 sm:p-4">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xl font-bold text-[#0A0A1F]">Address</p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full md:w-auto">
          <button className="bg-[#292760] text-white flex justify-center items-center h-[40px] text-sm sm:text-base font-medium rounded-lg px-3 sm:px-6 py-2 flex-1 md:flex-none">
            Temp access code
          </button>
          <button 
            onClick={() => router.push("/cleaners/smart-key/request-smart-key")} 
            className="bg-[#FF8A00] gap-2 text-white flex justify-center items-center h-[40px] text-sm sm:text-base font-medium rounded-lg px-3 sm:px-6 py-2 flex-1 md:flex-none"
          >
            <Image src="/images/key.svg" alt="key" width={20} height={20} />
            <span className="whitespace-nowrap">Request a smart lock</span>
          </button>
        </div>
      </div>

      {/* Tabs section */}
      <div className="overflow-x-auto w-full">
        <div className="flex border !mb-1 min-w-max border-[#E0E4EB] rounded-xl p-2 sm:p-[4px] w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-[#FF8A00] text-white"
                  : "text-[#4F617D]"
              } min-w-[100px] sm:min-w-[120px] md:min-w-[180px] flex justify-center items-center text-xs sm:text-sm font-normal h-9 sm:h-10 py-2 sm:py-3 px-1 sm:px-2 rounded-lg transition-colors`}
            >
              <span className="truncate">{tab.label}</span>
            </button>
          ))}
          <button className="ml-auto h-9 sm:h-10 bg-[#292760] min-w-[80px] sm:min-w-[120px] md:min-w-[180px] text-xs sm:text-base font-medium text-white py-2 sm:py-3 px-1 sm:px-2 rounded-lg flex items-center justify-center gap-1 sm:gap-2">
            <Image
              src="/images/scan-barcode.svg"
              alt="scan-barcode"
              width={16}
              height={16}
              className="sm:w-[20px] sm:h-[20px]"
            />
            <span className="hidden sm:inline">Property QR code</span>
            <span className="sm:hidden">QR code</span>
          </button>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col gap-2 p-2 rounded-xl border border-[#0000001F]">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-3 md:gap-8 bg-[#F4F4F4] rounded-xl p-2 sm:p-[12px_8px] shadow-sm"
          >
            <div className="w-full md:w-[238px] h-auto md:h-[48px] rounded-lg bg-white p-2 sm:p-[10px] flex justify-center items-center">
              <p className="text-[#292760] text-sm sm:text-base font-medium text-center">
                Upholstery and carpet cleaning
              </p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="text-xs sm:text-sm font-normal text-[#0A0A1F] mb-1">
                Temp access cod : 22333 at 12:00
              </p>
              <p className="text-xs sm:text-sm text-[#0A0A1F] font-normal">
                smart lock code : 22333 at 12:00
              </p>
              <div className="flex items-center gap-[2px] text-xs font-normal text-[#4F617D]">
                <Image
                  src="/images/clean-Calendar.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <span>05 / 03 / 2025</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
