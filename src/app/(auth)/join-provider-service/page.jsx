"use client";
import Header from "@/layouts/header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/navigation";
import LoginHeader from "@/components/Login/LoginHeader/LoginHeader";

const data = [
  {
    id: 1,
    image: "/images/login/whatsapp.svg",
    title: "Check in",
  },
  {
    id: 2,
    image: "/images/login/whatsapp-2.svg",
    title: "Check out",
  },
  {
    id: 3,
    image: "/images/login/whatsapp-3.svg",
    title: "Report a problem",
    route: "/report-problem",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <AnimatePresence>
      <div className="bg-(--main-bg-color) min-h-screen">
        <div className="px-[30px] sm:px-[80px] md:px-[100px] lg:px-[120px] grid grid-cols-1 md:grid-cols-3 gap-[32px] items-center py-[50px]">
          {data?.map((item) => (
            <Tilt
              tiltAngleXInitial={0}
              tiltAngleYInitial={0}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={1000}
              key={item?.id}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                exit={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => item.route && router.push(item.route)}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: item?.id * 0.2,
                }}
                className="h-[235px] border-l-[5px] border-l-(--main-orange-color) bg-white flex rounded-lg p-[16px_24px] justify-center flex-col  gap-[12px]"
                key={item?.id}
              >
                <Image
                  width={40}
                  height={40}
                  alt="login service icon"
                  src={item?.image}
                />
                <div className="flex justify-between items-center">
                  <p className="cursor-pointer">{item?.title}</p>
                  <ArrowRight />
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}
