"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Rate } from 'antd';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    title: "Deep cleaning",
    desc: "Great and fast service! Booking was easy and the team is very professional. I will definitely order the service again!",
    name: "Habib meddour",
    date: "2024/09/28",
    image: "/images/service-section/Image-2.svg"
  },
  {
    id: 2,
    title: "Deep cleaning",
    desc: "Great and fast service! Booking was easy and the team is very professional. I will definitely order the service again!",
    name: "Habib meddour",
    date: "2024/09/28",
    image: "/images/service-section/Image-2.svg"
  },
  {
    id: 3,
    title: "Deep cleaning",
    desc: "Great and fast service! Booking was easy and the team is very professional. I will definitely order the service again!",
    name: "Habib meddour",
    date: "2024/09/28",
    image: "/images/service-section/Image-2.svg"
  },
  {
    id: 4,
    title: "Deep cleaning",
    desc: "Great and fast service! Booking was easy and the team is very professional. I will definitely order the service again!",
    name: "Habib meddour",
    date: "2024/09/28",
    image: "/images/service-section/Image-2.svg"
  },
  {
    id: 5,
    title: "Deep cleaning",
    desc: "Great and fast service! Booking was easy and the team is very professional. I will definitely order the service again!",
    name: "Habib meddour",
    date: "2024/09/28",
    image: "/images/service-section/Image-2.svg"
  },
  {
    id: 6,
    title: "Deep cleaning",
    desc: "Great and fast service! Booking was easy and the team is very professional. I will definitely order the service again!",
    name: "Habib meddour",
    date: "2024/09/28",
    image: "/images/service-section/Image-2.svg"
  }
];

export default function ServiceTestimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const updateNavButtons = () => {
    if (!swiperInstance) return;
    prevRef.current.classList.remove('!border-[#C1C9D7]', 'text-[#C1C9D7]');
    prevRef.current.classList.add('bg-(--main-orange-color)', 'text-white');
    nextRef.current.classList.remove('!border-[#C1C9D7]', 'text-[#C1C9D7]');
    nextRef.current.classList.add('bg-(--main-orange-color)', 'text-white');
  };

  useEffect(() => {
    if (swiperInstance) {
      updateNavButtons();
      swiperInstance.on('slideChangeTransitionEnd', () => {
        handleSlideChange(swiperInstance.realIndex);
      });
      return () => {
        swiperInstance.off('slideChangeTransitionEnd', handleSlideChange);
      };
    }
  }, [swiperInstance]);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleSlideChange = (activeIndex) => {
    console.log('Active index:', activeIndex);
    const activeSlideData = data[activeIndex % data.length];
    console.log('Active slide data:', activeSlideData);
    // Add any additional logic here (e.g., analytics, updating state, etc.)
  };

  return (
    <div className='px-[120px] overflow-hidden py-[80px] flex flex-col gap-[38px] bg-(--main-bg-color)'>
      <div className='flex justify-between items-center'>
        <h3 className='text-[36px] font-bold text-(--main-dark-color)'>Reviews of our customers</h3>
        <div className='flex gap-[16px] items-center'>
          <div
            ref={prevRef}
            onClick={handlePrev}
            className='w-[27px] cursor-pointer border-(--main-orange-color) bg-(--main-orange-color) text-white h-[27px] rounded-md flex justify-center items-center'
          >
            <ChevronLeft className='w-[16px] h-[16px]' />
          </div>

          <div
            ref={nextRef}
            onClick={handleNext}
            className='w-[27px] cursor-pointer border-(--main-orange-color) bg-(--main-orange-color) text-white h-[27px] rounded-md flex justify-center items-center'
          >
            <ChevronRight className='w-[16px] h-[16px]' />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={27}
        slidesPerView={3}
        className='!overflow-hidden flex items-center'
        onSlideChange={(swiper) => {
          setSwiperInstance(swiper);
          handleSlideChange(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          updateNavButtons();
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 27,
          },
        }}
      >
        {data?.map(item => (
          <SwiperSlide className='!w-[390px] h-[248px]' key={item?.id}>
            <div className='bg-white !w-[390px] h-[248px] rounded-lg py-[16px] px-3 flex flex-col gap-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <Image src={item.image} width={48} height={48} alt='user profile' />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-medium text-black'>{item?.name}</h5>
                    <p className='text-base font-normal text-[#344054]'>{item?.date}</p>
                  </div>
                </div>
                <Image src="/images/service-section/quote.svg" className='me-7' width={60} height={40} alt='quote' />
              </div>
              <div className='flex items-center gap-3'>
                <Rate starColor="#F8C519" disabled defaultValue={5} />
                <span className='text-base font-normal text-black'>(5.0)</span>
              </div>
              <div>
                <p className='text-[20px] font-medium text-[#292760]'>{item?.title}</p>
                <p className='text-[#344054] font-normal text-base leading-8'>"{item?.desc}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
