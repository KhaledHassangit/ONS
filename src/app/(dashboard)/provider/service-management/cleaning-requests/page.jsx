"use client";
import FinishedOrder from '@/components/dashboard/cleaners/ServiceManagment/FinishedOrder/FinishedOrder';
import InProgressOrder from '@/components/dashboard/cleaners/ServiceManagment/inProgressOrder/InProgressOrder';
import NewCleaningsOrder from '@/components/dashboard/cleaners/ServiceManagment/NewCleaningsOrder/NewCleaningsOrder';
import ReportOrder from '@/components/dashboard/cleaners/ServiceManagment/ReportOrder/ReportOrder';
import ProviderFinishedOrder from '@/components/dashboard/provider/serviceManagement/ProviderFinishedOrder/ProviderFinishedOrder';
import ProviderInProgressOrder from '@/components/dashboard/provider/serviceManagement/ProviderInProgressOrder/ProviderInProgressOrder';
import ProviderReportedOrder from '@/components/dashboard/provider/serviceManagement/ProviderReportedOrder/ProviderReportedOrder';
import ProviderServiceNewOrder from '@/components/dashboard/provider/serviceManagement/ProviderServiceNewOrder/ProviderServiceNewOrder';
import SearchInput from '@/components/searchInput/SearchInput'
import { handleGetCleaningService } from '@/features/provider/cleaning-service';
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
        <div className="w-full">
          <SearchInput
            setValue={setSearch}
            value={search}
            placeholder={"Find a request"}
          />
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
        {activeTab === 1 && <ProviderServiceNewOrder />}
        {activeTab === 2 && <ProviderInProgressOrder />}
        {activeTab === 3 && <ProviderFinishedOrder />}
        {activeTab === 4 && <ProviderReportedOrder />}
      </div>
    </div>
  )
}
