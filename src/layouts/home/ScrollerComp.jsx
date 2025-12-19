"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, ArrowRight } from "lucide-react";

import swiperImg1 from "../../../public/images/RestHome/7oG0JxvkNTX6puYMYPiOtVenDg (1).png";
import swiperImg2 from "../../../public/images/RestHome/swiperImag2.png";
import swiperImg3 from "../../../public/images/RestHome/swiperImg3.png";
import swiperImg4 from "../../../public/images/RestHome/swiperImg4.png";
import floatingImage1 from '../../../public/images/RestHome/djmTE79TWfXlmaF1Xi3yUxnUL1w.png';
import floatingImage2 from '../../../public/images/RestHome/img2.png';
import floatingImage3 from '../../../public/images/RestHome/img3.png';
import floatingImage4 from '../../../public/images/RestHome/img4.png';
import Image from "next/image";
const MotionImage = motion(Image);
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// =======================
// DATA
// =======================
const sections = [
  {
    title: "Operations & Automation",
    desc: "Simplify daily tasks, automate admin, and manage your hotel from anywhere.",
    points: [
      "Property Management",
      "Payment Collection",
      "Mobile App",
      "Task Management",
      "Scanners",
    ],
    image: swiperImg1,
    floatingImage:floatingImage1,
       link: "Explore Operations & Automation",
  },
  {
    title: "Booking & Distribution",
    desc: "Capture more direct bookings and stay synced with every OTA.",
    points: [
      "Booking Engine",
      "Metasearch",
      "Price Comparison Widget",
      "Channel Management",
    ],
    image: swiperImg2,
    floatingImage:
     floatingImage2,
       link: "Explore Booking & Distribution",
  },
  {
    title: "Revenue & Insights",
    desc: "Track performance and grow revenue with real-time data.",
    points: [
      "Revenue Management",
      "Upselling",
      "Reports & Insights",
      "Marketplace integration",
    ],
    image: swiperImg3,
    floatingImage:
     floatingImage3,
      link: "Explore Revenue & Insights",
  },
  {
    title: "Guest Experience",
    desc: "Deliver faster check-ins and seamless guest stays.",
    points: [
      "Online Check-in",
      "Self-service Kiosk",
      "AI Guest Messaging",
      "Guest Management",
      "Door Locks",
    ],
    image: swiperImg4,
    floatingImage:
      floatingImage4,
       link: "Explore Guest Experience",
  },
];

// =======================
// CARD COMPONENT
// =======================
function HotelCard({ data, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  const container = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const textAnim = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageAnim = {
    hidden: { opacity: 0, x: isEven ? 50 : -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
  };

  const floatAnim = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 },
  },
};


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className="min-h-[600px] !max-w-full rounded-3xl shadow-lg flex justify-center items-center bg-[var(--main-dark-color)]"
    >
      <div
        className={`w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch ${
    !isEven && "lg:flex-row-reverse"
  }`}
      >
        {/* Text */}
        <motion.div variants={textAnim} className="z-10 flex flex-col justify-between">
          <div>
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-tight !text-white">
            {data.title}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg my-4">
            {data.desc}
          </p>

          <ul className="space-y-3 my-6">
            {data.points.map((item, i) => (
              <li
                key={i}
               className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base"
              >
                <Check className="text-[var(--bg-color)] flex-shrink-0" size={18} />
                {item}
              </li>
            ))}
          </ul>
          </div>

          <p className="flex items-center gap-2 text-gray-300 font-medium text-sm sm:text-base">
            {data.link}
            <ArrowRight size={18} />
          </p>
        </motion.div>

        {/* Image */}
 <motion.div
  variants={imageAnim}
  className="relative flex justify-end items-center overflow-visible"
>
  <div className="relative w-full h-[420px] lg:h-[520px]">
    <Image
      src={data.image}
      alt={data.title}
      fill
      className="object-cover rounded-2xl shadow-xl"
      priority
    />
  </div>

  <MotionImage
    src={data.floatingImage}
    className="absolute -left-6 bottom-6 rounded-xl shadow-xl z-20"
    width={200}
    height={140}
    variants={floatAnim}
    animate={
      inView
        ? {
            y: [0, -12, 0],
            transition: {
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            },
          }
        : {}
    }
  />
</motion.div>



      </div>
    </motion.div>
  );
}

// =======================
// MAIN COMPONENT
// =======================
export default function HotelManagementSections() {
  return (
      <div className="py-20 !w-[100%]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="hotel-swiper !w-[100%] !h-auto"
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index} className="!h-auto max-w-[100%] ">
            <HotelCard data={section} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>    

   
  );
}
