import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function WhyChooseUsHomeCard({ icon, title, description }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className= {`flex flex-col gap-[12px] shadow-[0px_4px_5.9px_0px_#0000000A] border-[1px] border-[#E0E4EB] rounded-[8px] w-full md:w-[30%] justify-center items-center text-center pt-[16px] pb-[16px]`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={icon} alt="icon" width={42} height={42} className="w-[42px] h-[42px]" />
      </motion.div>
      <motion.h1 
        whileHover={{ scale: 1.02 }}
        className="text-[#000000] text-[18px] font-[500] leading-[24px]"
      >
        {title}
      </motion.h1>
      <motion.p 
        whileHover={{ scale: 1.02 }}
        className="text-[#3C495D] text-[16px] font-[700] leading-[22px]"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default WhyChooseUsHomeCard;
