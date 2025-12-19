"use client";
import LoadingSkeleton from '@/components/loadingSkeleton';
import SearchInput from '@/components/searchInput/SearchInput'
import { handleGetAllTeams } from '@/features/provider/join-team';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const {teams , isLoading} = useSelector(state => state?.joinTeam)
  const [chooseData, setChoosedData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const router = useRouter();
  
  const handleItemClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };


  useEffect(() => {
    const token  = localStorage?.getItem("access_token") ? JSON.parse(localStorage.getItem("access_token"))?.access_token : null
    dispatch(handleGetAllTeams("q3mdPlSMfSBKo4QrUSXEezb3WU59BLcT"))
    .unwrap()
    .then(res => console.log(res))
  } ,[dispatch])

  useEffect(() =>{
    console.log(teams)
  }, [teams])

  if(isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <div className='flex flex-col gap-3 md:gap-5'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0'>
        <div className='w-full md:w-auto'>
          <SearchInput setValue={setSearch} value={search} placeholder={"Search for a worker"}/>
        </div>
        <div className='flex gap-2 items-center w-full md:w-auto'>
          <button
          onClick={() => router.push(`/provider/WorkTeam/team-request`)}
          className='flex-1 md:flex-auto bg-[#292760] text-white h-[40px] gap-[10px] rounded-lg p-[10px_16px] flex justify-center items-center text-sm md:text-base'>
            <span>Team request</span>
            <span className='w-5 h-5 rounded-full bg-[#F53D6B] text-white flex justify-center items-center'>
              5
            </span>
          </button>
          <button
          onClick={() => router.push(`/provider/WorkTeam/add-employee`)}
          className='flex-1 md:flex-auto bg-[var(--main-orange-color)] text-white h-[40px] rounded-lg p-[10px_16px] flex justify-center items-center text-sm md:text-base'>Add an employee</button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {teams?.data[0]?.items?.length &&  teams?.data[0]?.items?.map(item => (
          <div 
            key={item.id} 
            className={`min-h-[290px] rounded-xl p-2 flex flex-col gap-3 cursor-pointer transition-all ${selectedId === item.id ? 'border-2 border-(--main-orange-color) bg-[#FFF4E8]' : 'bg-[#F9F9F9]'}`}
            onClick={() => handleItemClick(item.id)}
          >
             <Image src={item?.user?.avatar} alt={item?.user?.name} width={257} height={181} className='w-full rounded-[6px]' />
             <div className='flex flex-col gap-2'>
              <h3 className='text-xl font-bold text-[#0A0A1F]'>{item?.user?.name}</h3>
            
            {item?.role&& <p className='flex items-center gap-[4px]'>
                <Image src="/images/flag-2.svg" alt="flag" width={16} height={16}/>
                <span className='text-base font-normal text-[#76767B]'>{item.role}</span>
              </p> }
              <div className='flex flex-wrap items-center gap-2'>
                <button 
                  className='flex-1 min-w-[100px] h-[38px] bg-[#292760] text-white rounded-lg flex gap-[6px] justify-center items-center p-[8px]'
                  onClick={(e) =>{
                    e.stopPropagation()
                    router.push(`/provider/WorkTeam/${item?.id}`)
                  }}
                >
                  <Image src="/images/frame.svg" alt="frame" width={16} height={16}/>
                  <span className='text-xs sm:text-sm font-normal'>Profile</span>
                </button>
                <button 
                  className='flex-1 min-w-[100px] h-[38px] bg-[#292760] justify-center text-white rounded-lg flex gap-[6px] items-center p-[8px]'
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src="/images/calendar-tick.svg" alt="frame" width={16} height={16}/>
                  <span className='text-xs sm:text-sm font-normal'>Availability</span>
                </button>
              </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}
