"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function ServiceContact() {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();

      sr.reveal(".reveal-left", {
        origin: "left",
        distance: "60px",
        duration: 1000,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        delay: 200,
        reset: false,
        viewFactor: 0.3,
        reset:true
      });

      sr.reveal(".reveal-right", {
        origin: "right",
        distance: "60px",
        duration: 1000,
        delay: 200,
        reset: false,
        viewFactor: 0.3,
        reset:true
      });
    });
  }, []);
  return (
    <div className="px-[120px]  mx-auto justify-center py-[72px] gap-[48px] flex">
      <div className="w-[340px] reveal-left h-[476px] bg-(--main-bg-color) rounded-2xl py-[24px] px-[40px] flex flex-col gap-[27px]">
        <Image
          src="/logo.svg"
          alt="On Next Stay Logo"
          width={76}
          height={109}
        />
        <div className="flex items-center gap-[8px]">
          <Image
            src="/images/service-section/Message 35.svg"
            width={24}
            height={24}
            alt="contact icon"
          />
          <a
            href="mailto:info@EDUTIME.com"
            className="text-lg font-bol text-(--main-dark-color)"
          >
            info@EDUTIME.com
          </a>
        </div>
        <div className="flex items-center gap-[8px]">
          <Image
            src="/images/service-section/Call.svg"
            width={24}
            height={24}
            alt="contact icon"
          />
          <a
            href="tel:0656382722"
            className="text-lg font-bol text-(--main-dark-color)"
          >
            0656382722
          </a>
        </div>
        <div className="flex items-center gap-[8px]">
          <Image
            src="/images/service-section/Location.svg"
            width={24}
            height={24}
            alt="contact icon"
          />
          <p className="text-lg font-bol text-(--main-dark-color)">Algiers</p>
        </div>

        <Image
          src="/images/service-section/undraw_contact-us_kcoa 1.svg"
          width={236}
          height={119}
          alt="contact icon"
        />
      </div>

      <div className="flex flex-col justify-between  reveal-right w-[646px] !gap-[16px]">
        <h3 className="text-[42px] mt-5 font-bold text-(--main-dark-color)">
          Contact us
        </h3>
        <p className="text-lg font-normal">
          Do you have questions? Feel free to reach out to us for support or
          more information about on next stay. Our team is ready to answer all
          your queries.
        </p>

        <div className="grid grid-cols-2 gap-[11px] items-center">
          <input
            placeholder="Full name*"
            className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[48px]"
          />
          <input
            placeholder="Mobile number*"
            className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[48px]"
          />
        </div>
        <input
          placeholder="Email address*"
          className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[48px]"
        />
        <textarea
          placeholder="Share your issues or queries here"
          className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[108px]"
        ></textarea>
        <button className="text-white h-[48px] rounded-md flex justify-center items-center bg-(--main-orange-color)">
          Send
        </button>
      </div>
    </div>
  );
}
