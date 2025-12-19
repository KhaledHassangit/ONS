import LeftHeroSection from "@/components/home/hero-section/left-hero-section";
import RightHeroSection from "@/components/home/hero-section/right-hero-section";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HeroSection() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="p-[16px] lg:!pb-[0] lg:!pr-[0] lg:!pt-[0] flex flex-col lg:flex-row items-center justify-between gap-[21px] w-fit text-center h-[100%] "
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <LeftHeroSection />
      </motion.div>
      {/* <motion.div
        variants={rightVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="!min-h-[100%]"
      >
        <RightHeroSection />
      </motion.div> */}
    </motion.div>
  );
}

export default HeroSection;
