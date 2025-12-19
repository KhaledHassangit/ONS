import SectionTitle from '@/components/home/why-choose-us-section/section-title';
import WhyChooseCards from '@/components/home/why-choose-us-section/why-choose-cards';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

function WhyChooseUsSection() {
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
      className="flex flex-col gap-[38px] !min-w-[100%] p-[16px] md:!pl-[120px] md:!pr-[120px] md:!pt-[80px] md:!pb-[80px] "
    >
      <motion.div variants={itemVariants}>
        <SectionTitle />
      </motion.div>
      <motion.div variants={itemVariants}>
        <WhyChooseCards />
      </motion.div>
    </motion.div>
  );
}

export default WhyChooseUsSection;
