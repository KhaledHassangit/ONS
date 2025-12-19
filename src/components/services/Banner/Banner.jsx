"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion , useInView } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const service_list = [
  {
    id: 1,
    title: "Live tracking through the app",
  },
  {
    id: 2,
    title: "On-demand or monthly subscription service",
  },
  {
    id: 3,
    title: "Professional cleaning at competitive prices",
  },
];

export default function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

   useEffect(() => {
  import("scrollreveal").then(ScrollReveal => {
    const sr = ScrollReveal.default();

    const commonConfig = {
      delay: 300, 
      distance: "40px",
      duration: 800,
      easing: "ease-in-out",
      reset:true
    };

    sr.reveal(".reveal-top", {
      ...commonConfig,
      origin: "top",
    });

    sr.reveal(".reveal-left", {
      ...commonConfig,
      origin: "left",
    });

    sr.reveal(".reveal-right", {
      ...commonConfig,
      origin: "right",
    });

    sr.reveal(".reveal-bottom", {
      ...commonConfig,
      origin: "bottom",
    });

    sr.reveal(".reveal-list-item", {
      ...commonConfig,
      origin: "bottom",
      interval: 0, 
    });

    sr.reveal(".reveal-float", {
      ...commonConfig,
      origin: "bottom",
    });

    sr.reveal(".reveal-testimonial", {
      ...commonConfig,
      origin: "bottom",
    });
  });
}, []);


  // useEffect(() => {
  //   import("scrollreveal").then(ScrollReveal => {
  //   const sr = ScrollReveal.default();

  //   // Reveal elements with different configurations
  //   sr.reveal(".reveal-top", {
  //     origin: "top",
  //     delay: 400,
  //     distance: "40px",
  //   });

  //   sr.reveal(".reveal-left", {
  //     origin: "left",
  //     delay: 400,
  //     distance: "60px",
  //   });

  //   sr.reveal(".reveal-right", {
  //     origin: "right",
  //     delay: 400,
  //     distance: "60px",
  //   });

  //   sr.reveal(".reveal-bottom", {
  //     origin: "bottom",
  //     delay: 400,
  //     distance: "40px",
  //   });

  //   sr.reveal(".reveal-list-item", {
  //     origin: "bottom",
  //     delay: 600,
  //     interval: 150,
  //     distance: "30px",
  //   });

  //   // Special animations for floating elements
  //   sr.reveal(".reveal-float", {
  //     origin: "bottom",
  //     delay: 400,
  //     distance: "20px",
  //     duration: 800,
  //   });

  //   // Special animation for the testimonial card
  //   sr.reveal(".reveal-testimonial", {
  //     origin: "bottom",
  //     delay: 600,
  //     distance: "30px",
  //     duration: 1000,
  //   });
  // })
  // }, []);

  return (
    <motion.div
initial={"hidden"}
animate={"visible"}
className="bg-[#F7F8F9]  justify-between flex py-[30px] px-[120px]">
      <div
      className="w-[608px] reveal-left flex flex-col gap-[16px]">
        <div className=" bg-white w-[225px] h-[32px] py-[6px] px-[12px] justify-center items-center backdrop-blur-[4px] rounded-[30px] flex gap-[5px]">
          <Image
            src="/images/service-section/Stars Line.svg"
            width={20}
            height={20}
            alt="service stars line"
            priority
          />
          <p className="text-[14px] font-[400]">Household Cleaning Services</p>
        </div>

        <h1 className="text-[48px] flex flex-col !font-bold text-(--main-dark-color)">
          <div className="relative">
            <AnimatedText
              text="Luxury home services..."
              className="!font-bold"
              delay={0}
            />
            <Image
              src="/images/service-section/Vector 1.svg"
              width={341}
              height={11}
              alt="servive vector"
              className="absolute right-30 bottom-0"
              priority
            />
          </div>
          <div className="">
            <AnimatedText
              text="With complete comfort! ✨"
              className="!font-bold"
              delay={0.2}
            />
          </div>
        </h1>

        <div className="">
          <motion.p 
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="!text-base max-w-[550px] font-normal text-(--main-light-color)">
          Make your home clean and organized without the hassle! We offer  professional cleaning and maintenance services, tailored to meet your needs with ease. Book your favorite service on our platform in minutes
          </motion.p>
          
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="reveal-bottom w-[199px] h-[48px] py-[8px] px-[16px] rounded-lg flex items-center justify-center gap-[10px] bg-(--main-orange-color) text-white"
        >
          <span className="text-white text-sm font-medium">
            Book your service now!
          </span>
          <Image
            src="/images/service-section/arrow-right.svg"
            width={14}
            height={14}
            alt="arrow right"
            priority
          />
        </motion.button>

        <ul className="flex w-[690px] gap-[8px] items-center">
          {service_list?.map((service) => (
            <li
              className="reveal-list-item flex gap-[8px] justify-center items-center"
              key={service?.id}
            >
              <Image
                src="/images/service-section/Tick.svg"
                width={16}
                height={16}
                alt="Service Tick"
                priority
              />
              <span className="text-[12px] font-normal">
                {service?.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div 
      className="w-[513px] relative flex gap-[20px]">
        <div className="relative w-[234px] h-[364px] reveal-top rounded-[1000px] border-[2px] border-dashed border-[#292760]">
          <Image
            className="absolute -left-2 -top-0"
            src="/images/service-section/cleaning-windows-woman-apron-cleaning-windows-looking-involved.svg"
            width={245}
            height={364}
            alt="Service First img"
            priority
            loading="eager"
          />

          <div className="reveal-float bottom-11 left-[50%] translate-x-[-50%] absolute bg-white !w-[174px] h-[32px] py-[6px] px-[12px] justify-center items-center backdrop-blur-[4px] rounded-[30px] flex gap-[5px]">
            <Image
              src="/images/service-section/Hand Stars.svg"
              width={18}
              height={18}
              alt="service stars line"
              priority
            />
            <p className="!text-[14px] font-[400]">Customized services</p>
          </div>
        </div>

        <div className="relative mt-[120px] w-[234px] h-[348px] reveal-bottom rounded-[1000px] border-[2px] border-dashed border-[#292760]">
          <Image
            className="absolute -left-2 top-0"
            src="/images/service-section/view-professional-cleaning-service-person-holding-supplies.svg"
            width={246}
            height={357}
            alt="Service First img"
            priority
            loading="eager"
          />

          <div className="reveal-float bottom-12 left-[50%] translate-x-[-50%] absolute bg-white !w-[168px] h-[32px] py-[6px] px-[12px] justify-center items-center backdrop-blur-[4px] rounded-[30px] flex gap-[5px]">
            <Image
              src="/images/service-section/Vector.svg"
              width={20}
              height={20}
              alt="service stars line"
              priority
            />
            <p className="!text-[14px] font-[400]">Hygiene and quality</p>
          </div>
        </div>

        <div className="reveal-float top-[40%] left-[50%] translate-x-[-50%] absolute bg-white !w-[180px] h-[32px] py-[6px] px-[12px] justify-center items-center backdrop-blur-[4px] rounded-[30px] flex gap-[5px]">
          <Image
            src="/images/service-section/Stars Line.svg"
            width={11}
            height={12}
            alt="service stars line"
            priority
          />
          <p className="!text-[14px] font-[400]">Professional cleaning</p>
        </div>

        <div className="reveal-testimonial absolute bottom-5 bg-white left-[65px] w-[217px] h-[106px] rounded-[12px] p-[8px] flex flex-col gap-[8px]">
          <Image 
            src="/images/service-section/Frame 1597884198.svg" 
            width={85} 
            height={31} 
            alt="Service teams" 
            priority
          />
          <p className="text-[#1D2939] text-[14px] font-normal">More than 1000 customers trust us... Try the service today</p>
        </div>
      </div>
    </motion.div>
  );
}
