"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeleton from "@/components/loadingSkeleton";
import { handleGetCleaningService, handleGetProviderProgressCleaningService } from "@/features/provider/cleaning-service";
import { handleFetchProgressCleaningService } from "@/features/clients/servicesSlice";



export default function ProgressOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [allData, setAllData] = useState(null);
  const dispatch = useDispatch();
  const { progress_cleaning_service_data , progress_cleaning_service_loading } = useSelector(
    (state) => state?.clientServiceManagement
  );
  const perPage = allData?._meta?.perPage || 4;
  const paginatedItems = allData?.items?.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  useEffect(() => {
    const token = localStorage.getItem("access_token") && JSON.parse(localStorage.getItem("access_token"))?.access_token

    dispatch(
      handleFetchProgressCleaningService(token)
    )
      .unwrap()
      .then((res) => {
        console.log(res);
        console.log(res?.data[0]?.items);
        setAllData(res?.data[0]);
        setCurrentPage(res?.data[0]?._meta?.currentPage);
      });
  }, [dispatch]);

  useEffect(() => {
    console.log(allData);
  }, [allData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (progress_cleaning_service_loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {!paginatedItems || paginatedItems.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No cleaning requests found.
          </div>
        ) : (
          paginatedItems?.map((item) => (
            <div
              onClick={() =>
                router.push(
                  `/clients/service-management/cleaning-requests/${item?.id}`
                )
              }
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
                    <button className=" h-[32px] bg-[#F9E9D9] rounded-[6px] p-[10px] text-[#F59331] text-xs font-medium flex justify-center items-center">
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

                  <div className="flex justify-between items-center">
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

                  <button className="text-[#FF3B30] text-sm font-normal border border-[#FF3B30] h-10 rounded-md p-[10px_16px]">Cancel Order</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
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
