"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from 'framer-motion';

const data = [
  {
    id: 1,
    img: "/images/service-section/image 1660.svg",
    title: "Upholstery and carpet cleaning",
  },
  {
    id: 2,
    img: "/images/service-section/image 1659.svg",
    title: "For normal cleaning",
  },
  {
    id: 3,
    img: "/images/service-section/image 1661.svg",
    title: "Window and glass cleaning",
  },
  {
    id: 4,
    img: "/images/service-section/image 1662.svg",
    title: "Cleaning kitchens and bathrooms",
  },
  {
    id: 5,
    img: "/images/service-section/image 1663.svg",
    title: "Deep cleaning",
  },
  {
    id: 6,
    img: "/images/service-section/image 1663.svg",
    title: "Cleaning before and after moving",
  },
  {
    id: 7,
    img: "/images/service-section/image 1663.svg",
    title: "Deep cleaning",
  },
  {
    id: 8,
    img: "/images/service-section/image 1663.svg",
    title: "Cleaning and sanitizing bedding",
  },
];

function CustomSelect({ text, img , className }) {
  return (
    <div className={`!bg-white  cursor-pointer w-[316px] h-[44px] p-[8px] rounded-[6px] flex justify-between items-center ${className}`}>
      <div className="flex gap-[8px] items-center">
        <Image src={img} width={24} height={24} alt="service-offer" />
        <p className="text-base font-medium text-[--main-dark-color]">{text}</p>
      </div>

      <Image
        src="/images/service-section/arrow-down.svg"
        width={16}
        height={16}
        alt="arrow down"
        priority
      />
    </div>
  );
}

export default function ServiceOffer() {
    const ref =useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();

      sr.reveal(".reveal-left", {
        origin: "left",
        distance: "60px",
        duration: 1000,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        delay: 200,
        reset: true,
        viewFactor: 0.3,
      });

      sr.reveal(".reveal-right", {
        origin: "right",
        distance: "60px",
        duration: 1000,
        delay: 200,
        reset: true,
        viewFactor: 0.3,
      });

      sr.reveal(".reveal-bottom", {
        origin: "bottom",
        distance: "60px",
        duration: 1000,
        delay: 300,
        viewFactor: 0.3,
        reset:true
      });
    });
  }, []);

  return (
    <div className="px-[120px] py-[80px] justify-between bg-(--main-bg-color) flex gap-[80px] lg:gap-[60px] 2xl:gap-[160px]">
      <div className="max-w-[647px]  reveal-left flex gap-[36px] flex-col">
        <div className="flex flex-col gap-[12px]">
          <motion.h3 
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-[36px] font-bold text-[--main-dark-color]">
            Services we offer
          </motion.h3>
          <motion.p 
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-base w-[640px] font-normal text-[--main-light-color]">
            We provide you with a wide range of services, all with the highest
            standards of quality and professionalism. Book your service now and
            enjoy the convenience! 🚀
          </motion.p>
        </div>

        <div className="grid grid-cols-2 w-[640px] gap-[15px]">
          {data?.map((service) => (
            <CustomSelect
            className={"reveal-bottom"}
              key={service.id}
              text={service.title}
              img={service.img}
            />
          ))}
        </div>
      </div>

      <div className="min-w-[392px] reveal-right flex justify-center items-center">
        <Image
          src="/images/service-section/Image.svg"
          width={392}
          height={346}
          alt="main-service-offer"
          priority
          className="rounded-[16px] h-full  w-full object-cover"
        />
      </div>
    </div>
  );
}
