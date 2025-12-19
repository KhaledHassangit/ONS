"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();

      sr.reveal(".reveal-bottom", {
        origin: "bottom",
        distance: "100px",
        duration: 1000,
        delay: 200,
        easing: "ease-in-out",
        reset: true,
      });
    });
  }, []);
  return (
    <div
      className="min-h-[735px] relative w-full"
      style={{
        backgroundImage:
          "url('/images/who-we-are/296279b2a06ec7c1786a83b11085c6671c7b57e4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full absolute inset-0 w-full bg-black/20">
        <div className="mx-auto reveal-bottom flex flex-col items-center justify-center max-w-[718px] gap-[32px] h-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className=" bg-white w-[237px] h-[32px] py-[6px] px-[12px] justify-center items-center backdrop-blur-[4px] rounded-[30px] flex gap-[5px]">
              <Image
                src="/images/service-section/Stars Line.svg"
                width={20}
                height={20}
                alt="service stars line"
                priority
              />
              <p className="text-[12px] font-medium lowercase">
                MODERN PROPERTY MANAGEMENT
              </p>
            </div>

            <h1 className="text-white text-center text-[48px] font-bold">
              Manage Your Property with Ease – Smart, Remote, and Hassle-Free!
            </h1>
            <p className="text-center text-lg text-[#F3F3F3] font-medium">
              Managing your property has never been this easy. From smart
              check-ins to cleaning and maintenance services – we handle
              everything for you.
            </p>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <button className="min-w-[187px] text-base font-normal leading-6 p-[8px_12px] rounded-md text-white flex justify-center items-center bg-(--main-orange-color) h-[48px]">
              Get started for free
            </button>
            <button className="w-[187px] text-base font-normal p-[8px_12px] rounded-md bg-white flex justify-center items-center text-(--main-dark-color) h-[48px]">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
