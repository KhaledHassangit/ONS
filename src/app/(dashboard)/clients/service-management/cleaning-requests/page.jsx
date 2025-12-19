"use client";
import CanceledOrders from '@/components/dashboard/clients/serviceManagment/CleaningRequest/CanceledOrders/CanceledOrders';
import CleaningRequests from '@/components/dashboard/clients/serviceManagment/CleaningRequest/CleaningRequests';
import FinishedOrders from '@/components/dashboard/clients/serviceManagment/CleaningRequest/FinishedOrders/FinishedOrders';
import ProgressOrder from '@/components/dashboard/clients/serviceManagment/CleaningRequest/ProgressOrder/ProgressOrder';
import SearchInput from '@/components/searchInput/SearchInput'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

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
      <div className="flex flex-col gap-4">
        <div className="w-full flex gap-2">
          <SearchInput
            setValue={setSearch}
            value={search}
            placeholder={"Find a request"}
          />
          <button onClick={()=>router.push("/clients/service-management/cleaning-requests/add")} className='bg-(--main-orange-color) text-white px-4 py-2 text-base rounded-lg  whitespace-nowrap'  >
          Cleaning request
          </button>
        </div>

        <div className='w-full bg-[#F1F4F6] rounded-lg flex flex-wrap items-center gap-2 p-2 overflow-x-auto'>
          {tabs?.map(tab => (
            <button 
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`h-[40px] p-2 flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:w-[267px] rounded-lg flex items-center  text-xs font-normal transition-colors ${activeTab === tab?.id ? "bg-(--main-orange-color) text-white" : "text-black"}`}
            >
              {tab?.title}
            </button>
          ))}
        </div>
      </div>
          
      <div >
        {activeTab === 1 && <CleaningRequests />}
        {activeTab === 2 && <ProgressOrder />}
        {activeTab === 3 && <FinishedOrders />}
        {activeTab === 4 && <CanceledOrders />}
      </div>
    </div>
  )
}
