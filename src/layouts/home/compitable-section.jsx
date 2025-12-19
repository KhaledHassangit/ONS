"use client";
import SectionImages from '@/components/home/compitable-section/section-images';
import SectionTitle from '@/components/home/compitable-section/section-title';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

function CompitableSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col gap-[38px] !min-w-[100%]  p-[16px] md:!pl-[120px] md:!pr-[120px] md:!pt-[80px] md:!pb-[80px] bg-[#FBFBFB]"
    >
      <motion.div variants={itemVariants}>
        <SectionTitle />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row !justify-between gap-[16px] items-center"
      >
        <SectionImages />
      </motion.div>
    </motion.div>
  );
}

export default CompitableSection;
