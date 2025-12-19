"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ContactStart({ userData , setUserData , currentStep, setCurrentStep }) {
    const router = useRouter();
    return (
    <div>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="flex flex-col gap-[32px] h-[730px] justify-center bg-white rounded-2xl !p-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-xl font-medium text-(--main-dark-color)">
              When can you start?{" "}
            </h3>
            <p className="text-base font-medium text-[#76767B]">
              Let us know the date you are available to start.
            </p>
          </div>

          <div className="flex gap-[8px] items-center">
             <input value={userData.start_date} onChange={(e) => setUserData({...userData, start_date:e.target.value})} placeholder="DD" className="w-[42px] h-[48px] flex justify-center items-center text-center rounded-lg p-2 border border-[#76767B] text-[#76767B] font-normal text-[14px]" />
             <input value={userData.start_date} onChange={(e) => setUserData({...userData, start_date:e.target.value})} placeholder="MM" className="w-[42px] h-[48px] flex justify-center items-center text-center rounded-lg p-2 border border-[#76767B] text-[#76767B] font-normal text-[14px]" />
             <input value={userData.start_date} onChange={(e) => setUserData({...userData, start_date:e.target.value})} placeholder="YYYY" className="w-[123px] h-[48px] flex justify-center items-center text-center rounded-lg p-2 border border-[#76767B] text-[#76767B] font-normal text-[14px]" />
          </div>
          <button
            onClick={() => router.push("/FinalContactInfo")}
            className="bg-(--main-orange-color) !ms-auto flex justify-center items-center  text-white h-[48px] w-[96px] rounded-xl p-[10px]"
          >
            Next
          </button>
        </div>

        <div className="h-[730px] rounded-2xl">
          <Image
            src="/images/login/Rectangle 34624624.svg"
            alt="contact evaring"
            width={643}
            height={730}
            className="w-full h-full rounded-2xl  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
