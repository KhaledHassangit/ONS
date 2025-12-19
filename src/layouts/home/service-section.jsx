import React from "react";
import SectionTitle from "@/components/home/services-section/section-title";
import LeftServiceSection from "@/components/home/services-section/left-service-section";
import RightServiceSection from "@/components/home/services-section/right-service-section";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RightHeroSection from "../../components/home/hero-section/right-hero-section";
import { Image } from "antd";

function ServiceSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="!min-h-[100%] w-full mt-[50px] flex justify-center "
      >
        <Image
          src="/images/hero-section/hero-image.svg"
          alt="hero-image"
          className="!w-[800px] block m-auto rounded-2xl shadow-2xl shadow-gray-300"
          preview={false}
        />
      </motion.div>
      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col gap-[38px] !min-w-[100%] p-[16px] md:!pl-[120px] md:!pr-[120px] md:!pt-[80px] md:!pb-[80px] bg-[#FBFBFB]"
      >
        <motion.div variants={itemVariants}>
          <SectionTitle />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row !justify-between gap-[16px] items-center"
        >
          <motion.div variants={itemVariants}>
            <LeftServiceSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <RightServiceSection />
          </motion.div>
        </motion.div>
      </motion.div> */}
    </>
  );
}

export default ServiceSection;
