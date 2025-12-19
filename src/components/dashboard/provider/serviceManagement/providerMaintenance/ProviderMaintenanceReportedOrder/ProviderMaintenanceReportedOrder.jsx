"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleProviderRejectMaintenanceService } from "@/features/provider/maintainenance-sevice";
import { toast } from "react-toastify";
import ProviderMaintenanceModal from "../ProviderMaintenanceModal/ProviderMaintenanceModal";


export default function ProviderMaintenanceReportedOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowData , setRowData] = useState({});
  const [open , setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {provider_reported_maintenance_service_data , provider_reported_maintenance_service_loading} = useSelector(state => state.providermaintainenaceService);
  const [allData , setAllData] = useState([]);

  useEffect(() => {
    dispatch(handleProviderRejectMaintenanceService({accesstoken : JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
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
            className="flex flex-col bg-[#F9F9F9] rounded-lg p-3 gap-3"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Image
                src={item?.property_id?.image}
                alt={item?.property_id?.name}
                width={85}
                height={85}
                className="rounded-lg w-full sm:w-auto max-h-[85px] object-cover"
              />
              <div className="flex flex-col w-full gap-3">
                <div className="flex flex-col w-full pb-2 gap-2 justify-between">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <p className="text-lg sm:text-xl font-medium text-(--main-dark-color) break-words">
                      {item?.property_id?.name}
                    </p>
                    <button className="h-[32px] bg-[#FFE4E2] rounded-[6px] px-3 py-[10px] text-[#FF2D55] text-xs font-medium flex justify-center items-center whitespace-nowrap shrink-0">
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
                      {item?.date   }
                    </span>
                  </div>}

                  {item?.time_from && 
                  <div className="flex items-center gap-[6px]">
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
              </div>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation()
                setOpen(true)
                setRowData(item)
              }}
              className="bg-white h-10 w-fit border border-[#FF3B30] text-[#FF3B30] flex justify-center items-center rounded-lg p-[10px_16px] text-xs sm:text-sm">
              report problem
            </button>

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
