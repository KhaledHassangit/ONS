"use client";
import SearchInput from '@/components/searchInput/SearchInput'
import Image from 'next/image';
import React, { useState } from 'react'

const data  =[ 
    {
        id:1,
        image:"/images/Rectangle 34624648 (1).svg",
        title:"Smart lock",
        date:"June 12, 2026",
        time:"8:00 pm - 10:00 pm"
    },
    {
        id:2,
        image:"/images/Rectangle 34624648 (1).svg",
        title:"Smart lock",
        date:"June 12, 2026",
        time:"8:00 pm - 10:00 pm"
    },
    {
        id:3,
        image:"/images/Rectangle 34624648 (1).svg",
        title:"Smart lock",
        date:"June 12, 2026",
        time:"8:00 pm - 10:00 pm"
    },
    {
        id:4,
        image:"/images/Rectangle 34624648 (1).svg",
        title:"Smart lock",
        date:"June 12, 2026",
        time:"8:00 pm - 10:00 pm"
    },
    {
        id:5,
        image:"/images/Rectangle 34624648 (1).svg",
        title:"Smart lock",
        date:"June 12, 2026",
        time:"8:00 pm - 10:00 pm"
    },
]

export default function page() {
    const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col gap-4">
        <SearchInput placeholder="Search for a worker" />

        {data?.map(item => <div key={item?.id} className="bg-[#F9F9F9] h-[186px] rounded-lg p-3 flex gap-3">
            <Image src={item?.image} alt="image" className='rounded-lg' width={162} height={162} />
            <div className='flex flex-col  w-full justify-between'>
                <div className='flex !w-full flex-col justify-between'>
                    <div className='flex !w-full  justify-between items-center'>
                        <p className='text-xl font-medium text-[#0A0A1F]'>Smart lock</p>
                        <button className='w-[73px] h-[32px] bg-[#D5ECDC] font-medium text-[#3D9456] text-sm  rounded-[6px] p-[10px] flex justify-center items-center'>finished</button>
                    </div>
                    <p className='text-sm flex items-center gap-1 font-normal text-[#4F617D]'>
                        <Image src="/images/clean-Calendar.svg" alt="calendar" width={16} height={16} />
                        <span>{item?.date}</span>
                    </p>

                    <p className='text-sm flex items-center gap-1 font-normal text-[#4F617D]'>
                        <Image src="/images/Clock Circle.svg" alt="calendar" width={16} height={16} />
                        <span>{item?.time}</span>
                    </p>
                </div>
                <button className='w-[127px] bg-(--main-orange-color) text-whiet justify-center  h-[40px] rounded-lg p-[10px_16px] flex gap-2 items-center'>
                    <Image src="/images/Key.svg" alt="edit" width={18} height={18} />
                    <span className='text-white text-sm font-normal'>smart key</span>
                </button>
            </div>
        </div>)}
    </div>
  )
}
