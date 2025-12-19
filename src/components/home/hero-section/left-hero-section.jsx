import HeaderButton from "@/components/header/header-button";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LeftHeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="flex flex-col  gap-[16px] pt-[40px] md:gap-[32px] max-w-[672px] px-4 md:px-0"
    >
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#FFFAF4] text-center w-fit m-auto p-[6px_12px] rounded-[8px] flex items-center gap-[10px] max-w-[fit-content]"
      >
        <Image
          src="/images/hero-section/badge.svg"
          alt="badge"
          className="rounded-[30px]"
          width={20}
          height={20}
        />
        <span className="text-[#0A0A1F] text-[12px] md:text-[14px] font-[500]">
          MODERN PROPERTY MANAGEMENT
        </span>
      </motion.div>
      <div className="flex flex-col gap-[16px] md:gap-[32px]">
        <div className="flex flex-col gap-[16px] md:gap-[4px]">
          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#0A0A1F] text-[28px] md:text-[40px] font-[500] leading-[36px] md:leading-[58px]"
          >
            Manage Your Property with Ease – Smart, Remote, and Hassle-Free!{" "}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#4F617D] text-[16px] md:text-[18px] font-[400] leading-[22px] md:leading-[24px]"
          >
            Managing your property has never been this easy. From smart
            check-ins to cleaning and maintenance services – we handle
            everything for you.{" "}
          </motion.p>
        </div>
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col w-fit m-auto sm:flex-row items-center gap-[12px]"
        >
          <HeaderButton
            bgColor="#F59331"
            color="#FFFFFF"
            cursor="pointer"
            padding="12px 27px"
            rounded="8px"
            fontSize="16px"
            fontWeight="500"
            className="w-full sm:w-auto"
          >
            Get started for free{" "}
          </HeaderButton>
          <HeaderButton
            bgColor="transparent"
            color="#0A0A1F"
            cursor="pointer"
            padding="12px 55px"
            rounded="8px"
            fontSize="16px"
            fontWeight="500"
            border="1px solid #E0E4EB"
            className="w-full sm:w-auto"
          >
            learn more
          </HeaderButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col w-fit m-auto sm:flex-row items-center gap-[16px] md:gap-[32px]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-[8px] flex items-center gap-[2px] max-w-[fit-content]"
          >
            <Image
              src="/images/hero-section/like-shapes.svg"
              alt="badge"
              className="rounded-[30px]"
              width={20}
              height={20}
            />
            <span className="text-[#000000] text-[14px] md:text-[16px] font-[500]">
              all task in one apps
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-[6px_12px] rounded-[8px] flex items-center gap-[2px] max-w-[fit-content]"
          >
            <Image
              src="/images/hero-section/cup.svg"
              alt="badge"
              className="rounded-[30px]"
              width={20}
              height={20}
            />
            <span className="text-[#000000] text-[14px] md:text-[16px] font-[500]">
              professional teams
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LeftHeroSection;
