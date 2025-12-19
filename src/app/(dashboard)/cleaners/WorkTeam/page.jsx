"use client";
import SearchInput from '@/components/searchInput/SearchInput'
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

export default function Page() {
  const [search, setSearch] = useState("");
  const [chooseData, setChoosedData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const router = useRouter();
  
  const handleItemClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className='flex flex-col gap-5 p-2 sm:p-0'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0'>
        <div className='w-full sm:w-auto'>
          <SearchInput setValue={setSearch} value={search} placeholder={"Search for a worker"}/>
        </div>
        <div className='flex gap-2 items-center w-full sm:w-auto justify-center md:justify-end'>
          <button
          onClick={() => router.push(`/cleaners/WorkTeam/team-request`)}
          className='bg-[#292760] text-white h-[40px] gap-[10px] rounded-lg p-[10px_16px] flex justify-center items-center text-xs sm:text-sm whitespace-nowrap'>
            <span>Team request</span>
            <span className='w-5 h-5 rounded-full bg-[#F53D6B] text-white flex justify-center items-center'>
              5
            </span>
          </button>
          <button
          onClick={() => router.push(`/cleaners/WorkTeam/add-employee`)}
          className='bg-[var(--main-orange-color)] text-white h-[40px] rounded-lg p-[10px_16px] flex justify-center items-center text-xs sm:text-sm whitespace-nowrap'>Add an employee</button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {data.map(item => (
          <div 
            key={item.id} 
            className={`min-h-[200px] rounded-xl p-2 flex flex-col gap-3 cursor-pointer transition-all ${selectedId === item.id ? 'border-2 border-(--main-orange-color) bg-[#FFF4E8]' : 'bg-[#F9F9F9]'}`}
            onClick={() => handleItemClick(item.id)}
          >
             <div className="w-full relative aspect-[16/9]">
               <Image 
                 src={item.image} 
                 alt={item.title} 
                 fill 
                 className='rounded-[6px] object-cover' 
               />
             </div>
             <div className='flex flex-col gap-2'>
              <h3 className='text-lg sm:text-xl font-bold text-[#0A0A1F]'>{item.title}</h3>
              <p className='flex items-center gap-[4px]'>
                <Image src="/images/flag-2.svg" alt="flag" width={16} height={16}/>
                <span className='text-sm sm:text-base font-normal text-[#76767B]'>{item.role}</span>
              </p>
              <div className='flex  items-center gap-2 sm:gap-3'>
                <button 
                  className='h-[38px] bg-[#292760] text-white rounded-lg flex gap-[6px] sm:gap-[10px] justify-center items-center p-[8px] sm:p-[10px] text-xs sm:text-sm'
                  onClick={(e) =>{
                    e.stopPropagation()
                  }}
                >
                  <Image src="/images/frame.svg" alt="frame" width={18} height={18}/>
                  <span className='font-normal'>Profile</span>
                </button>
                <button 
                  className='h-[38px] bg-[#292760] justify-center text-white rounded-lg flex gap-[6px] sm:gap-[10px] items-center p-[8px] sm:p-[10px] text-xs sm:text-sm'
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src="/images/calendar-tick.svg" alt="frame" width={18} height={18}/>
                  <span className='font-normal'>Availability</span>
                </button>
              </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}
