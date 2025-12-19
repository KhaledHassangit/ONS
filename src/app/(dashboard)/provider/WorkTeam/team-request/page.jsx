"use client";
import LoadingSkeleton from '@/components/loadingSkeleton';
import SearchInput from '@/components/searchInput/SearchInput';
import { handleGetAllPendingTeam } from '@/features/provider/join-team';
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

export default function page() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    const { all_pending_teams , pending_team_loading} = useSelector(state => state?.joinTeam);

    useEffect(() => {
      const token  = localStorage?.getItem("access_token") ? JSON.parse(localStorage.getItem("access_token"))?.access_token : null
      dispatch(handleGetAllPendingTeam("q3mdPlSMfSBKo4QrUSXEezb3WU59BLcT"))
      .unwrap()
      .then(res => console.log(res))
    } , [dispatch])

   useEffect(() => {
    console.log(all_pending_teams)
   } ,[all_pending_teams])

   if(pending_team_loading) {
    return <LoadingSkeleton/>
   }
   

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <div className='w-full sm:w-auto'>
                <SearchInput setValue={setSearch} value={search} placeholder={"Search for a worker"}/>
            </div>
            <button
            onClick={() => router.push(`/provider/WorkTeam/add-employee`)}
            className='bg-[var(--main-orange-color)] text-white h-[40px] w-full sm:w-auto gap-[10px] rounded-lg p-[10px_16px] flex justify-center items-center'>Add an employee</button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {all_pending_teams?.data[0]?.items?.length && all_pending_teams?.data[0]?.items?.map(item => <div key={item?.id} className='bg-[#F9F9F9] rounded-xl p-2 flex flex-col sm:flex-row gap-3'>
                <div className='flex justify-center sm:justify-start'>
                    <Image src={item?.user?.avatar} alt={item?.user?.name} className='rounded-[6px] object-cover w-full sm:w-[134px] h-[130px]' width={134} height={130} />
                </div>
                <div className='flex flex-col gap-2 justify-between'>
                    <h4 className='text-xl font-bold text-[#0A0A1F] text-center sm:text-left'>{item?.user?.name}</h4>
                    {item?.user?.role && <p className='flex items-center gap-[4px] justify-center sm:justify-start'>
                        <Image src="/images/flag-2.svg" alt="flag" width={16} height={16}/>
                        <span className='text-base font-normal text-[#76767B]'>{item?.role}</span>
                    </p>}
                    <p className='text-base font-normal text-[#292760] text-center sm:text-left'>Asks to join your timeline</p>

                    <div className='flex gap-3 items-center justify-center sm:justify-start flex-wrap'>
                        <button className='bg-[var(--main-orange-color)] h-[40px] text-white rounded-lg flex gap-[10px] justify-center items-center p-[10px_16px] w-full sm:w-auto'>acceptance</button>
                        <button className='border-[#FF3B30] border h-[40px] text-[#FF3B30] rounded-lg flex gap-[10px] justify-center items-center p-[10px_16px] w-full sm:w-auto'>reject</button>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}
