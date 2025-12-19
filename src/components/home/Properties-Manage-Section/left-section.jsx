import PropertiesManageCard from '@/components/ui/Properties-Manage-Card';
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
function LeftPropertiesManageSection() {
  const services = [
    {
      title: "Smart Dashboard",
      description:
        "Easily manage all your properties with our user-friendly interface."
    },
    {
      title: "Service Ordering",
      description: "Book cleaning, maintenance, and more with just a few clicks"
    },
    {
      title: "Instant Updates",
      description:
        "Receive real-time notifications about your bookings and service requests."
    },
    {
      title: "Sync with Top Platforms",
      description: "Seamlessly connect with Airbnb, Booking.com, and more."
    }
  ];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-[100%] flex flex-col md:!min-w-[45%]  !max-w-[583px]"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        className= "text-[#030F0F] mb-[16px] text-[36px] font-[700] leading-[48px] max-w-[499px]" 
      >
        Manage Your Properties with Ease
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-[12px]" 
      >
        {services.map((service, index) => (
          <PropertiesManageCard
            key={index}
            icon={"/images/service-section/tick-circle.svg"}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F59331] text-white text-[16px] font-[400] leading-[24px] !p-[12px]  rounded-[8px] w-fit mt-[24px] cursor-pointer"
      >
        Get Started 
      </motion.button>
    </motion.div>
  );
}

export default LeftPropertiesManageSection;
