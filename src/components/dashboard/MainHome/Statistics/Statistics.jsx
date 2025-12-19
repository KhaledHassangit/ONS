import Image from "next/image";
import React from "react";

export default function Statistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-3 gap-4 items-center">
      <div className="border shadow-[0px_4px_24px_0px_#0000000F] border-(--main-orange-color) h-[120px] p-3 rounded-2xl bg-white flex flex-col gap-2 justify-between">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-(--main-orange-color)">
            Active Booking
          </p>
          <Image
            src={"/images/dash/home-2.svg"}
            alt="booking"
            width={24}
            height={24}
          />
        </div>

        <p className="text-[24px] font-bold text-(--main-dark-color)">08</p>
        <p className="text-sm font-medium text-[#2DCA72]">+ 2 from yesterday</p>
      </div>

      <div className="h-[120px] shadow-[0px_4px_24px_0px_#0000000F] p-3 rounded-2xl bg-white flex flex-col gap-2 justify-between">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-[#2DCA72]">
            Pending Check-ins
          </p>
          <Image
            src={"/images/dash/login.svg"}
            alt="check in"
            width={24}
            height={24}
          />
        </div>

        <p className="text-[24px] font-bold text-(--main-dark-color)">03</p>
        <p className="text-sm font-medium text-[#76767B]">Next 24 h</p>
      </div>

      <div className="h-[120px] shadow-[0px_4px_24px_0px_#0000000F] p-3 rounded-2xl bg-white flex flex-col gap-2 justify-between">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-[#F8C519]">Open Tasks</p>
          <Image
            src={"/images/dash/task.svg"}
            alt="task"
            width={24}
            height={24}
          />
        </div>

        <p className="text-[24px] font-bold text-(--main-dark-color)">07</p>
        <p className="text-sm font-medium text-[#76767B]">Requires attention</p>
      </div>

      <div className="h-[120px] shadow-[0px_4px_24px_0px_#0000000F] p-3 rounded-2xl bg-white flex flex-col gap-2 justify-between">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-[#FF3B30]">System Alerts</p>
          <Image
            src={"/images/dash/danger.svg"}
            alt="danger"
            width={24}
            height={24}
          />
        </div>

        <p className="text-[24px] font-bold text-(--main-dark-color)">01</p>
        <p className="text-sm font-medium text-[#76767B]">Critical issue</p>
      </div>
    </div>
  );
}
