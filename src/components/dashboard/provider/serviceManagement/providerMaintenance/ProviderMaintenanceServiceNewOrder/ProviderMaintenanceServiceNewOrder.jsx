"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import React from 'react'
import Pagination from '@/components/pagination/Pagination';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { handleProviderNewMaintenanceService } from '@/features/provider/maintainenance-sevice';
import { toast } from 'react-toastify';
import ProviderMaintenanceModal from '../ProviderMaintenanceModal/ProviderMaintenanceModal';

  

export default function ProviderMaintenanceServiceNewOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const  [rowData , setRowData] = useState({});
  const [openModal , setOpenModal] = useState(false);
  const {provider_new_maintenance_service_data , provider_new_maintenance_service_loading} = useSelector(state => state.providermaintainenaceService);
  const [allData , setAllData] = useState([]);

  useEffect(() => {
    dispatch(handleProviderNewMaintenanceService({accesstoken : JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
    .unwrap()
    .then(res => {
      if(res?.status == 1) {
        setAllData(res?.data[0])
      }else {
        toast.error(res?.data[0]?.message)
      }
    }).catch(err => {
      toast.error(err?.data[0]?.message)
    })
  } , [])

  useEffect(() => {
    setCurrentPage(allData?._meta?.currentPage || 1)
  } , [allData])
      return (
    <div className=''>
      <div className='flex flex-col gap-4'>
        {allData?.items?.map(item=> 
            <div 
            onClick={()=> router.push(`/provider/service-management/maintinance-requests/${item?.id}`)}
            key={item?.id} className='flex flex-col sm:flex-row items-start bg-[#F9F9F9] rounded-lg p-3 gap-4'>
                  <Image src={item?.property_id?.image} alt={item?.property_id?.name} width={85} height={85} className='rounded-lg w-full sm:w-auto max-h-[85px] object-cover' />
                <div className='flex flex-col w-full gap-3'>
                    <div className='flex flex-col w-full pb-2 gap-2 border-b border-[#E0E4EB] justify-between'>
                   <div className='flex flex-wrap justify-between items-center gap-2'>
                   <p className='text-lg sm:text-xl font-medium text-(--main-dark-color) break-words'>{item?.property_id?.name}</p>
                   <button className='w-[48px] h-[32px] bg-[#E2EDFF] rounded-[6px] p-[10px] text-[#007AFF] text-xs font-medium flex justify-center items-center shrink-0'>New</button>
                   </div>
                   {item?.date &&  <div className='flex items-center gap-[6px]'>
                        <Image src="/images/clean-Calendar.svg" alt="calendar" width={16} height={16}/>
                        <span className='text-sm font-normal text-(--main-light-color)'>{item?.date}</span>
                    </div>  }

                    {item?.time_from &&  <div className='flex items-center gap-[6px]'>
                        <Image src="/images/Clock Circle.svg" alt="clock" width={16} height={16}/>
                        <span className='text-sm font-normal text-(--main-light-color)'>{item?.time_from} - {item?.time_to}</span>
                    </div>}
                    </div>

                    <div className='flex justify-between items-center'>
                    <div className='flex flex-wrap gap-2 sm:gap-3 items-center'>
                      <button onClick={(event) => {
                        event.stopPropagation();
                        // Add handler for accepting order here
                      }} className='bg-(--main-orange-color) text-white rounded-lg p-[10px_16px] h-[40px] flex justify-center items-center text-xs sm:text-sm'>Accept Order</button>
                      <button  onClick={(event) => {
                        event.stopPropagation();
                        setOpenModal(true)
                        setRowData(item)
                      }} className='border border-[#FF3B30] text-[#FF3B30] rounded-lg p-[10px_16px] h-[40px] flex justify-center items-center text-xs sm:text-sm'>Reject Order</button>
                    </div>
                    </div>
                </div>
            </div>
        )}
      </div>


      <ProviderMaintenanceModal open={openModal} setOpen={setOpenModal} rowData={rowData} />
      

      {allData?.items?.length > 0 && (
                <Pagination currentPage={currentPage} pages={Array.from({ length: allData?._meta?.NumberOfPage || 1 }, (_, i) => i + 1)} setCurrentPage={setCurrentPage} totalPages={allData?._meta?.NumberOfPage || 1} />
      )}
    </div>
  )
}
