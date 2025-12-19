"use client";
import SearchInput from '@/components/searchInput/SearchInput';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const data = [
    {
      id:1,
      image:"/images/Rectangle 346246482.svg",
      title:"Leslie Alexander",
      role:"Operations Manager",
    },
    {
      id:2,
      image:"/images/Rectangle 346246482.svg",
      title:"Leslie Alexander",
      role:"Operations Manager",
    },
    {
      id:3,
      image:"/images/Rectangle 346246482.svg",
      title:"Leslie Alexander",
      role:"Operations Manager",
    },
    {
      id:4,
      image:"/images/Rectangle 346246482.svg",
      title:"Leslie Alexander",
      role:"Operations Manager",
    },
  ]

export default function page() {
    const [search, setSearch] = useState("");
    const router = useRouter();
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <div className='w-full sm:w-auto'>
              <SearchInput setValue={setSearch} value={search} placeholder={"Search for a worker"}/>
            </div>
            <button
            onClick={() => router.push(`/provider/WorkTeam/add-employee`)}
            className='w-full sm:w-auto bg-[var(--main-orange-color)] text-white h-[40px] gap-[10px] rounded-lg p-[10px_16px] flex justify-center items-center'>Add an employee</button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {data?.map(item => <div key={item?.id} className='bg-[#F9F9F9] rounded-xl p-2 flex flex-col sm:flex-row gap-3'>
                <Image src={item?.image} alt={item?.title} className='rounded-[6px] object-cover w-full sm:w-auto h-[180px] sm:h-[130px]' width={134} height={130} />
                <div className='flex flex-col gap-2 justify-between'>
                    <h4 className='text-xl font-bold text-[#0A0A1F]'>{item?.title}</h4>
                    <p className='flex items-center gap-[4px]'>
                <Image src="/images/flag-2.svg" alt="flag" width={16} height={16}/>
                <span className='text-base font-normal text-[#76767B]'>{item?.role}</span>
              </p>
              <p className='text-base font-normal text-[#292760]'>Asks to join your timeline</p>

              <div className='flex gap-3 items-center'>
                <button className='bg-[var(--main-orange-color)] h-[40px] text-white rounded-lg flex gap-[10px] justify-center items-center p-[10px_16px]'>acceptance</button>
                <button className='border-[#FF3B30] border h-[40px] text-[#FF3B30] rounded-lg flex gap-[10px] justify-center items-center p-[10px_16px]'>reject</button>
              </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}
