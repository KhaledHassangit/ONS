"use client";
import Pagination from '@/components/pagination/Pagination';
import { Rate } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

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

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 4;
  const pages = [4, 3, 2, 1];


  return (
    <div className='flex flex-col gap-4'>
        <div className='bg-[#F9F9F9] p-[16px_12px] rounded-lg flex gap-4 items-center'>
            <Image src="/images/Rectangle 34624647.svg" width={71} height={71} className='rounded-lg' alt='like' />
           <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-bold text-[#292760] leading-snug'>General assessment</h3>
            <div className='flex gap-3 items-center'>
                <Rate starColor="#F8C519" disabled defaultValue={5} />
                <span className='text-base font-normal text-black'>(5.0)</span>
            </div>
           </div>
        </div>
       <div className='flex flex-col gap-[17px]'>
        <p className='text-base font-normal text-[#4F617D]'>Rating of guests</p>
       {currentItems?.map(item => (
          <div className='!w-full' key={item?.id}>
            <div className='bg-white border border-[#E0E4EB] !w-full rounded-lg py-[16px] px-3 flex flex-col gap-3'>
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
          </div>
        ))}

       <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} totalPages={totalPages} />

         </div>
    </div>
  )
}
