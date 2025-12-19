"use client";
import LoginHeader from "@/components/Login/LoginHeader/LoginHeader";
import Header from "@/layouts/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div>
      {/* <LoginHeader  /> */}
      <div className="px-[30px] sm:px-[80px] md:px-[120px]">
        <div className="bg-white mx-auto min-h-[265px] max-w-full md:max-w-[486px] items-center border-[rgba(0,0,0,8%)] shadow-[0_4px_4px_0px_rgba(0,0,0,0.08)] my-6 rounded-2xl p-[24px] border flex flex-col gap-[32px]">
          <div className="flex flex-col items-center gap-[16px] pb-5 border-b-[0.6] border-dashed border-[#D3D3D3]">
            <Image
              src="/images/login/Frame 2121458503.svg"
              width={40}
              height={40}
              alt="success image"
            />
            <p className="text-base font-bold text-(--main-dark-color)">
              You are logged in
            </p>
            <p className="text-base font-medium text-[#4F617D]">
              temp code: #3293820
            </p>
          </div>

          <p className="text-[14px] font-normal text-center leading-normal text-[#4F617D]">
            Our team wishes you a pleasant stay
          </p>
          <button
            onClick={() => router.push("/join-provider-service")}
            className="bg-(--main-orange-color) w-full text-white h-[48px] rounded-xl flex justify-center items-center p-[10px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
