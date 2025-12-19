"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useInView } from 'framer-motion';


const service_chooseus_data = [
    {
        id:1,
        title:"For professionalism and reliability",
        desc:"Customers prefer to deal with a reliable entity that offers guaranteed quality services",
        icon:"/images/service-section/Hand Heart.svg"
    },
    {
        id:2,
        title:"Expansion and continuity",
        desc:"Having a company means being able to offer services on a larger scale while ensuring continuity of support.",
        icon:"/images/service-section/Hand Heart-2.svg"
    },
    {
        id:3,
        title:"Warranty and quality",
        desc:"Companies adhere to clear quality standards, giving customers peace of mind",
        icon:"/images/service-section/Hand Heart-3.svg"
    },
    {
        id:4,
        title:"Fully equipped",
        desc:"We bring whatever it takes to get the job done.",
        icon:"/images/service-section/Hand Heart-4.svg"
    },
]

export default function ServiceChooseUs() {
    const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    if (typeof window === "undefined") return;

    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();

      sr.reveal(".reveal-left", {
        origin: "left",
        distance: "60px",
        duration: 1000,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        delay: 200,
        reset: false,
        viewFactor: 0.3,
        reset:true
      });

      sr.reveal(".reveal-right", {
        origin: "right",
        distance: "60px",
        duration: 1000,
        delay: 200,
        reset: false,
        viewFactor: 0.3,
        reset:true
      });

      sr.reveal(".reveal-bottom", {
        origin: "bottom",
        distance: "60px",
        duration: 1000,
        delay: 300,
        reset: false,
        viewFactor: 0.3,
        reset:true
      });
    });
  }, []);
  
  return (
    <div className='flex px-[30px]  sm:px-[80px] md:px-[120px] justify-between py-[80px]  gap-[40px]'>
        <div className='relative reveal-left w-full md:w-[50%] h-[464px] rounded-md'>
            <Image src="/images/service-section/medium-shot-people-cleaning-building.svg" className='rounded-md !w-full' alt="service image" priority width={551} height={490}/>
            <Image src="/logo.svg" alt="On Next Stay Logo" className='absolute top-[22px] left-[19px]' width={62} height={88} />
            <div className='flex absolute top-[50%] left-[50%] translate-x-[-50%] justify-center items-center w-[210px] py-[10px] px-[12px] gap-[10px] border border-white bg-white/30 h-[48px]  backdrop-blur-[12.5px] rounded-[127px]' alt="main choose">
                <span className='text-white text-[24px] font-medium'>Watch a video</span>
                <Image src="/images/service-section/video-circle.svg" width={32} height={32} priority alt='video circle'/>
            </div>
        </div>

        <div className='flex reveal-right w-full md:w-[50%]   h-[474px] flex-col gap-[20px]'>
            <div className='flex flex-col gap-[3px]'> 
            <motion.h3 
             ref={ref}
             initial={{ filter: 'blur(20px)', opacity: 0 }}
             animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
             transition={{ duration: 1.2 }}
            className='text-[36px] font-bold text-(--main-dark-color)'>Why Choose OneNextStay</motion.h3>
            <motion.p 
             ref={ref}
             initial={{ filter: 'blur(20px)', opacity: 0 }}
             animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
             transition={{ duration: 1.2 }}
            className='text-base font-normal text-[#4F617D]'>We provide professionalism, reliability, and sustainability! With a specialized team, high quality standards, and continuous customer service, we ensure a seamless experience and home services with the highest level of efficiency and convenience. 💼✨</motion.p>
            </div>

            <ul className='flex flex-col gap-[20px]'>
                {service_chooseus_data?.map(service => <li className='flex reveal-bottom items-center gap-[12px]' key={service?.id}>
                    <Image src={service?.icon} width={44} height={44} priority alt={`service icon -${service?.title}`}/>
                    <div className='flex flex-col'>
                        <h3 className='text-black text-xl font-medium'>{service?.title}</h3>
                        <p className='text-base font-normal text-(--main-light-color)'>{service?.desc}</p>
                    </div>
                </li>)}
            </ul>
        </div>
    </div>
  )
}
