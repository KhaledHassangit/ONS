"use client";
import FunctionalitiesChart from '@/components/dashboard/MainHome/Statistics/FunctionalitiesChart'
import JobsChart from '@/components/dashboard/MainHome/Statistics/JobsChart'
import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const data = [
  {
    id:1,
    title:"Number of cleaners by post code",
    number:"1200 $",
    image:"/images/buliding.svg"
  },
  {
    id:2,
    title:"new requests",
    number:"08",
    image:"/images/buliding-2.svg"
  },
  {
    id:3,
    title:"Number of Tims",
    number:"24",
    image:"/images/buliding-3.svg"
  },
]


export default function page() {
  return (
    <div className='flex flex-col gap-4 p-2 sm:p-4'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0'>
            <p className='text-[#4F617D] text-base font-medium'>Home</p>
            <button className='bg-(--main-orange-color) h-[40px] w-full sm:w-auto text-white flex justify-center items-center rounded-lg p-[10px_16px]'>Add an employee</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
          {data.map((item)=>(
            <div key={item.id} className={`flex first-of-type:bg-(--main-orange-color) first-of-type:!text-white items-start bg-white shadow-[0px_4px_24px_0px_#0000000F] rounded-2xl p-3 min-h-[120px] sm:min-h-[163px] gap-4`}>
              <Image src={item.image} alt={item.title} width={42} height={42}/>
             <div className='flex gap-2 sm:gap-4 flex-col'>
             <p className={`text-[#030F0F] text-lg sm:text-xl font-bold ${item?.id == 1 && "text-white"}`}>{item.title}</p>
             <p className={`text-[#030F0F] text-lg sm:text-xl font-bold ${item?.id == 1 && "text-white"}`}>{item.number}</p>
             </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-3 sm:p-4 rounded-2xl flex flex-col gap-4 h-auto lg:h-[329px]">
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg sm:text-xl font-semibold text-(--main-light-color)'>Functionalities</h3>
                    <Ellipsis className="cursor-pointer" />
                </div>
                <FunctionalitiesChart />
            </div>
            <div className="h-auto lg:h-[329px]">
                <JobsChart/>
            </div>
        </div>
    </div>
  )
}
