"use client";
import FinishedOrder from '@/components/dashboard/cleaners/ServiceManagment/FinishedOrder/FinishedOrder';
import InProgressOrder from '@/components/dashboard/cleaners/ServiceManagment/inProgressOrder/InProgressOrder';
import NewCleaningsOrder from '@/components/dashboard/cleaners/ServiceManagment/NewCleaningsOrder/NewCleaningsOrder';
import ReportOrder from '@/components/dashboard/cleaners/ServiceManagment/ReportOrder/ReportOrder';
import SearchInput from '@/components/searchInput/SearchInput'
import React, { useState } from 'react'

const tabs = [
  {
    id:1,
    title:"New orders"
  },
  {
    id:2,
    title:"In progress orders"
  },
  {
    id:3,
    title:"Finished orders"
  },
  {
    id:4,
    title:"reported"
  }
]

export default function page() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <div className="h-[48px] flex flex-col gap-4">
        
        <SearchInput
          setValue={setSearch}
          value={search}
          placeholder={"Find a request"}
        />

        <div className='w-full h-[56px] bg-[#F1F4F6] rounded-lg flex items-center gap-3 p-2'>
          {tabs?.map(tab => <button key={tab?.id}
          onClick={() => setActiveTab(tab?.id)}
          className={`h-[40px] p-2 w-[267px] rounded-lg flex items-center text-xs font-normal ${activeTab === tab?.id ? "bg-(--main-orange-color) text-white" : " text-black"}`}>{tab?.title}</button>)}
        </div>
      </div>
          
          <div className='mt-[65px]'>

      {activeTab === 1 && <NewCleaningsOrder />}
      {activeTab === 2 && <InProgressOrder />}
      {activeTab === 3 && <FinishedOrder />}
      {activeTab === 4 && <ReportOrder />}
          </div>
      </div>
  )
}
