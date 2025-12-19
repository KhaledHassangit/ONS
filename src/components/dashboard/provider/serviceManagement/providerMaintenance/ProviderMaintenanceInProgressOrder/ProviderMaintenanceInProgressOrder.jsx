"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import ProviderReportProblemModal from "../../ProviderServiceNewOrder/ProviderReportProblemModal/ProviderReportProblemModal";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleProviderProgressMaintenanceService } from "@/features/provider/maintainenance-sevice";
import { toast } from "react-toastify";
import ProviderMaintenanceModal from "../ProviderMaintenanceModal/ProviderMaintenanceModal";



export default function ProviderMaintenanceInProgressOrder() {
    const [open , setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const {provider_progress_maintenance_service_data , provider_progress_maintenance_service_loading} = useSelector(state => state.providermaintainenaceService);
  const [allData , setAllData] = useState([]);
  const [rowData , setRowData] = useState({});
  const [openModal , setOpenModal] = useState(false);


  useEffect(() => {
    dispatch(handleProviderProgressMaintenanceService({accesstoken : JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
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
    <div>
      <div className="flex flex-col gap-4">
        {allData?.items?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col sm:flex-row items-start bg-[#F9F9F9] rounded-lg p-3 gap-4"
          >
            <Image
              src={item?.property_id?.image}
              alt={item?.property_id?.name}
              width={85}
              height={85}
              className="rounded-lg w-full sm:w-auto max-h-[85px] object-cover"
            />
            <div className="flex flex-col w-full gap-3">
              <div className="flex flex-col w-full pb-2 gap-2 border-b border-[#E0E4EB] justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <p className="text-lg sm:text-xl font-medium text-(--main-dark-color) break-words">
                        {item?.property_id?.name}
                  </p>
                  <button className="h-[32px] bg-[#F9E9D9] rounded-[6px] px-3 py-[10px] text-(--main-orange-color) text-xs font-medium flex justify-center items-center whitespace-nowrap shrink-0">
                   {item?.status?.name}
                  </button>
                </div>
                {item?.date && <div className="flex items-center gap-[6px]">
                  <Image
                    src="/images/clean-Calendar.svg"
                    alt="calendar"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm font-normal text-(--main-light-color)">
                    {item?.date}
                  </span>
                </div>}

               {item?.time_from && <div className="flex items-center gap-[6px]">
                  <Image
                    src="/images/Clock Circle.svg"
                    alt="clock"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm font-normal text-(--main-light-color)">
                    {item?.time_from} - {item?.time_to}
                  </span>
                </div>}
                </div>

              <div className="flex gap-3 items-center">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                    setRowData(item)
                  }} 
                  className="bg-white border border-[#FF3B30] text-[#FF3B30] rounded-lg p-[10px_16px] h-[40px] flex justify-center items-center text-xs sm:text-sm"
                >
                  cancel order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allData?.items?.length > 0 && (
    <Pagination
        currentPage={currentPage}
        pages={Array.from({ length: allData?._meta?.NumberOfPage || 1 }, (_, i) => i + 1)}
        setCurrentPage={setCurrentPage}
        totalPages={allData?._meta?.NumberOfPage || 1}
      />
  )}
      <ProviderMaintenanceModal open={open} setOpen={setOpen} rowData={rowData} />
    </div>
  );
}
