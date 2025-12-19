import { Select } from "antd";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex add-employee-page flex-col gap-4 w-full mx-auto px-4 sm:px-6">
      <h3 className="font-bold text-xl sm:text-2xl text-[#0A0A1F]">Add an employee</h3>
      <p className="text-base sm:text-lg font-bold text-(--main-light-color)">
        Basic information
      </p>
      <div className="bg-[#F9F9F9] shadow-[0px_4px_24px_0px_#0000000F] rounded-xl p-4 sm:p-[24px_18px] flex flex-col sm:flex-row gap-4 items-center">
        <Image
          alt="avatar image"
          src="/images/Avatar.svg"
          width={116}
          height={116}
          className="rounded-3xl w-24 h-24 sm:w-[116px] sm:h-[116px]"
        />
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <label
              id="file"
              className="bg-(--main-orange-color) text-white h-[44px] rounded-lg flex justify-center items-center p-[6px_16px] text-sm sm:text-base cursor-pointer"
            >
              <span>add new photo</span>
              <input htmlFor="file" hidden type="file" />
            </label>
            <div className="h-[44px] w-[44px] rounded-lg bg-[#FFF1F1] items-center flex justify-center cursor-pointer">
              <Trash size={24} color="#C41919" />
            </div>
          </div>
          <p className="text-xs font-medium text-[#556987] text-center sm:text-left">
            Allowed jbg, gif or png, maximum size 800 kB
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-[16px] items-center">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">
            first name
          </label>
          <input
            placeholder=""
            className="border border-[#76767B] rounded-lg h-[48px] p-[10px] outline-none w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">
            last name
          </label>
          <input
            placeholder=""
            className="border border-[#76767B] rounded-lg h-[48px] p-[10px] outline-none w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">email</label>
        <div className="border border-[#76767B] gap-[10px] rounded-lg h-[48px] p-[10px] outline-none flex items-center">
          <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
          <input placeholder="" className="outline-none border-none w-full" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">
          number phone
        </label>
        <div className="border border-[#76767B] gap-[10px] rounded-lg h-[48px] p-[10px] outline-none flex items-center">
          <Image src="/images/call.svg" alt="sms" width={20} height={20} />
          <input placeholder="" className="outline-none border-none w-full" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">address</label>
        <div className="border border-[#76767B] gap-[10px] rounded-lg h-[48px] p-[10px] outline-none flex items-center">
          <Image src="/images/Location.svg" alt="sms" width={20} height={20} />
          <input placeholder="" className="outline-none border-none w-full" />
        </div>
      </div>

      <p className="text-base sm:text-lg font-bold text-(--main-light-color) mt-2">
        المعلومات الوظيفية
      </p>

      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">job title</label>
        <Select placeholder="Upholstery cleaning" options={[]} className="w-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">Contract type</label>
          <Select placeholder="Full time" options={[]} className="w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-bold text-[#0A0A1F]">Employment history</label>
          <input type="date" placeholder="Enter employment history" className="border border-[#76767B] rounded-lg h-[48px] p-[10px] outline-none w-full" />
        </div>
      </div>

      <button className="bg-(--main-orange-color) w-full sm:w-fit text-white h-[48px] rounded-lg flex justify-center items-center p-[6px_16px] mt-4">أضافه موظف جديد</button>
    </div>
  );
}
