import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function ServiceHomeCard({ leftIcon, title, description = [], active, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className= { `flex items-start mb-4 md:mb-[16px] flex-col w-full relative pl-[12px] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] after:content-[''] after:absolute after:left-0 after:top-0 after:h-[27.6px] after:w-[5px] ${active === index ? " after:bg-[#F59331]" : " after:bg-[#F7F8F9]"} before:bg-[#F7F8F9] before:rounded-[24px] after:rounded-[24px]`}
    >
      <div className="flex items-start gap-2 md:gap-[8px] ">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 md:w-[42px] md:h-[42px] flex items-start justify-center"
        >
          <Image
            src={leftIcon}
            alt="service-home-card-left-icon"
            width={24}
            height={24}
            className="w-6 h-6 md:w-[24px] md:h-[24px]"
          />
        </motion.div>
        <div className="flex flex-col gap-2 md:gap-[8px]">
          <motion.h1 
            whileHover={{ scale: 1.02 }}
            className= "text-[#030F0F] text-sm md:text-[18px] font-[500] leading-6 md:leading-[24px]  "
          >
            {title}
          </motion.h1>
          <div className="flex flex-col gap-2 md:gap-[8px]">
            {description?.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 }}
                className="text-[#3C495D] text-xs md:text-[16px] font-[400] leading-5 md:leading-[22px] flex items-start gap-1 md:gap-[4px]"
              >
                <Image
                  src={"/images/service-section/tick-circle.svg"}
                  alt="service-home-card-description-icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 md:w-[16px] md:h-[16px]"
                />
                <span className= "text-[#4F617D] text-xs md:text-[16px] font-[400] leading-5 md:leading-[22px]">
                  {item}
                </span>
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceHomeCard;
