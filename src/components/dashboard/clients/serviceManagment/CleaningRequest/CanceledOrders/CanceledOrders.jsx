"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchCancelledCleaningService, handleFetchCompletedCleaningService } from "@/features/clients/servicesSlice";
import { toast } from "react-toastify";
import LoadingSkeleton from "@/components/loadingSkeleton";

const data = [
  {
    id: 1,
    title: "Upholstery and carpet cleaning",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
    image: "/images/new-order.svg",
  },
  {
    id: 2,
    title: "Upholstery and carpet cleaning",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
    image: "/images/new-order.svg",
  },
  {
    id: 3,
    title: "Upholstery and carpet cleaning",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
    image: "/images/new-order.svg",
  },
  {
    id: 4,
    title: "Upholstery and carpet cleaning",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
    image: "/images/new-order.svg",
  },
  {
    id: 5,
    title: "Upholstery and carpet cleaning",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
    image: "/images/new-order.svg",
  },
  {
    id: 6,
    title: "Upholstery and carpet cleaning",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
    image: "/images/new-order.svg",
  },
];

export default function CanceledOrders() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const {cancelled_cleaning_service_loading} = useSelector(state => state?.clientServiceManagement);
  const [allData , setAllData] = useState(null);
 
  useEffect(() => {
    const token = localStorage.getItem("access_token") && JSON.parse(localStorage.getItem("access_token"))?.access_token

    dispatch(handleFetchCancelledCleaningService(token))
    .unwrap()
    .then(res => {
      if(res?.status == 1) {
        setAllData(res?.data[0]);
      }else {
        toast.error(res?.data[0]?.message)
      }
    }).catch(e => console.log(e))
  }, [dispatch])


  if(cancelled_cleaning_service_loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {allData?.items?.map((item) => (
          <div
      
            key={item?.id}
            className="flex items-start  bg-[#F9F9F9] rounded-lg p-3  gap-4"
          >
            <Image
              src={item?.property_id?.image}
              alt={item?.property_id?.name}
              width={85}
              height={85}
              className="rounded-lg"
            />
            <div className="flex flex-col w-full gap-3">
              <div className="flex flex-col w-full pb-2 gap-2 border-b border-[#E0E4EB] justify-between">
                <div className="flex justify-between  items-center">
                  <p className="text-xl font-medium text-(--main-dark-color)">
                    {item?.property_id?.name}
                  </p>
                  <button className=" h-[32px] bg-[#FFE4E2] rounded-[6px] p-[10px] text-[#FF2D55] text-xs font-medium flex justify-center items-center">
                    {item?.status?.name}
                  </button>
                </div>
                <div className="flex items-center gap-[6px]">
                  <Image
                    src="/images/clean-Calendar.svg"
                    alt="calendar"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm font-normal text-(--main-light-color)">
                    {item?.date}
                  </span>
                </div>

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
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium text-(--main-dark-color)">
                  {item?.property_id?.city_id?.name}
                </h3>
                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/Map Point.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-(--main-light-color)">
                    {item?.property_id?.address}
                  </span>
                </p>

                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/dollar-circle.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-(--main-light-color)">
                    {item?.price} SAR
                  </span>
                </p>

                <div className="flex justify-between items-end">
                <div className="flex bg-[#FEF4EA] rounded-[36px] p-3 gap-[6px]  w-fit items-center">
                  <Image
                    src="/images/recycle.svg"
                    alt="phone"
                    width={14}
                    height={14}
                  />
                  <span className="text-xs  font-normal text-(--main-orange-color)">
                    airbnb
                  </span>
                </div>

                <div className="flex gap-2 items-center">
                <button className="h-10  bg-[#DCE9FA] rounded-lg text-[#2B7FFF] p-[10px_16px] text-sm font-normal">Ratings</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allData?._meta?.NumberOfPage > 1 && (
        <Pagination
          currentPage={currentPage}
          pages={Array.from(
            { length: allData?._meta?.NumberOfPage },
            (_, i) => i + 1
          )}
          setCurrentPage={setCurrentPage}
          totalPages={allData?._meta?.NumberOfPage}
        />
      )}
    </div>
  );
}
