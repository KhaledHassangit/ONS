"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const MotionImage = motion(Image);

const steps = [
  {
    number: "01",
    title: "We set up your entire system",
    desc: "Rooms, rates, channels, payments, we handle it all, so you don't have to lift a finger.",
    image: "/images/RestHome/j0NMu4XIoZnMR1d0rgbF4Exsec.png",
  },
  {
    number: "02",
    title: "We move your bookings into Noovy",
    desc: "Every upcoming reservation is imported and ready to go. No double entry. No downtime.",
    image: "/images/RestHome/j25ARwlELfr8HnstjPtxmR1Yg0.png",
  },
  {
    number: "03",
    title: "We train your team, hands-on",
    desc: "Live sessions, clear guides, and simple tools, your staff feels confident from day one.",
    image: "/images/RestHome/SjwYtpyBj8OlN1FA6m7IcuYTFj4.png",
  },
  {
    number: "04",
    title: "We're your support team—24/7",
    desc: "Real people. Real hospitality experience. Available 24/7 on chat, phone, or WhatsApp.",
    image: "/images/RestHome/AAF032IVmRa4gidI6GcA9dhynk.png",
  },
];

function StepCard({ step, index }) {
  const isEven = index % 2 === 0;

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textAnim = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageAnim = {
    hidden: { opacity: 0, x: isEven ? 50 : -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch 
                 rounded-xl bg-[var(--main-dark-color)] overflow-visible shadow-lg
                 min-h-[280px] p-0"
    >
      {/* Text */}
      <motion.div
        variants={textAnim}
        className="flex flex-col justify-start p-6 lg:max-w-md z-10"
      >
        <h3 className="text-[var(--main-light-color)] text-5xl font-bold mb-2">
          {step.number}
        </h3>
        <h4 className="text-white font-bold text-2xl mb-3">{step.title}</h4>
        <p className="text-gray-400">{step.desc}</p>
      </motion.div>

      {/* Image Wrapper */}
      <motion.div variants={imageAnim} className="relative">
        <MotionImage
          src={step.image}
          alt={step.title}
          width={200}
          height={180}
          className="absolute top-1/2 -translate-y-1/2 
                     right-[-50px] lg:right-[10px]
                     rounded-xl shadow-xl object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default function StepsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] my-20 gap-10">
      {/* Left text */}
      <div className="space-y-5 max-w-md sticky top-20 self-start">
        <p className="bg-[var(--main-light-color)] rounded-full text-[var(--main-dark-color)] px-4 py-1 w-fit">
          Done-for-you Migration
        </p>
        <h2 className="text-4xl font-bold leading-tight text-[var(--main-dark-color)]">
          Switching to <br />
          Noovy is a breeze
        </h2>
        <p className="text-gray-400 my-7">
          Switching systems can feel overwhelming. That's why we handle the
          setup, migration, and training for you, step by step, side by side.
        </p>
        <button className="bg-[var(--main-orange-color)] hover:bg-[#f59331e2] hover:scale-105 transition-all rounded-md cursor-pointer text-white px-6 py-3.5 text-base font-medium flex gap-2 justify-center items-center">
          Book a demo <ArrowRight size={18} />
        </button>
      </div>

      {/* Right steps - Swiper */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="steps-swiper"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <StepCard step={step} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
}
