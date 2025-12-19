"use client";
import Header from "@/layouts/header";
import { Select, DatePicker } from "antd";
import { CalendarDays } from "lucide-react";
import React, { useState, useRef } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenChange = (open) => {
    setOpen(open);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="px-[30px] sm:px-[80px] md:px-[120px] flex gap-4 flex-col  py-[24px_48px]">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
          <p className="text-base font-normal text-[#4F617D]">
            Report a problem
          </p>

          <div className="relative">
            <DatePicker
              open={open}
              onOpenChange={handleOpenChange}
              onChange={handleDateChange}
              value={selectedDate}
              inputRender={() => null}
              style={{ position: "absolute", width: 0, height: 0, opacity: 0 }}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
              styles={{
                popup: {
                  root: {
                    zIndex: 9999,
                    marginTop: 5, // ✅ replaces popupStyle
                  },
                },
              }}
            />

            <button
              className="bg-[var(--main-light-color)] text-white w-[126px] h-[40px] flex items-center rounded-lg px-[16px] py-[10px] gap-[8px] cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <CalendarDays className="w-[20px] h-[20px]" />
              <span className="text-base font-semibold text-center">
                Calendar
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col  gap-[24px]">
          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-semibold text-(--main-dark-color)">
              temp code
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter code"
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-semibold text-(--main-dark-color)">
              Type of service
            </label>
            <Select
              defaultValue="Electricity"
              placeholder="Electricity"
              classNames={{
                popup: {
                  root: "my-dropdown", // dropdown container
                },
              }}
              className="!border custom-select !shadow-none focus:!outline-none !outline-none !border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] !h-[48px] rounded-lg px-[10px]"
              options={[
                { value: "Electricity", label: "Electricity" },
                { value: "Water", label: "Water" },
                { value: "Internet", label: "Internet" },
              ]}
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-semibold text-(--main-dark-color)">
              Problem details
            </label>
            <textarea
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[151px] rounded-lg p-[10px]"
              placeholder="What's the issue ..."
            ></textarea>
            <div className="w-full mt-3 gap-4 flex justify-between items-center">
              <button className="bg-(--main-orange-color)  w-full text-white h-[48px] rounded-xl flex justify-center items-center p-[10px]">
                Send a request
              </button>
              <button className="bg-[#FFE4E2] w-full text-[#FF3B30] h-[48px] rounded-xl flex justify-center items-center p-[10px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
