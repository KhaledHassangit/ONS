import Header from "@/layouts/header";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="mt-[80px]">
      <div className="px-[30px] sm:px-[80px] md:px-[120px] flex flex-col gap-4  py-[24px_48px]">
        <p className="text-base font-normal text-[#4F617D]">Contact us</p>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <p className="font-bold text-[18px] text-(--main-light-color)">
            Welcome to Customer Service
          </p>
          <div className="flex gap-3 items-center">
            <Image
              src="/images/service-section/Image-2.svg"
              width={48}
              height={48}
              alt="user image"
            />
            <div className="flex flex-col">
              <p className="text-black text-[18px] font-medium">
                Omar Alrajihi
              </p>
              <p className="font-normal leading-snug text-base text-[#344054]">
                2024/09/28
              </p>
            </div>
          </div>
        </div>
        <p className="max-w-[609px] text-(--main-dark-color) text-base font-normal leading-relaxed">
          Do you have questions? Feel free to reach out to us for support or
          more information about on next stay. Our team is ready to answer all
          your queries.
        </p>

        <input
          placeholder="Email address*"
          className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[48px]"
        />
        <textarea
          placeholder="Share your issues or queries here"
          className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[245px]"
        ></textarea>
        <button className="text-white h-[48px] rounded-md flex justify-center items-center bg-(--main-orange-color)">
          Send
        </button>
      </div>
    </div>
  );
}
