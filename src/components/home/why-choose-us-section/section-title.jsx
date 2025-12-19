"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SectionTitle() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-[12px] items-center justify-center"
    >
      <motion.h1
        variants={itemVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#030F0F] text-[28px] md:text-[36px] font-[400] leading-[36px] md:leading-[48px]"
      >
        Why Choose Us?
      </motion.h1>
      <motion.p
        variants={itemVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-[#4F617D] text-[14px] md:text-[16px] font-[400] max-w-[410px] text-center"
      >
        Simple property management so you can focus on growing your business.
      </motion.p>
    </motion.div>
  );
}

export default SectionTitle;
