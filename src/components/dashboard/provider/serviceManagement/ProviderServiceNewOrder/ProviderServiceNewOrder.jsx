"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import { useRouter } from "next/navigation";
import { handleGetCleaningService } from "@/features/provider/cleaning-service";
import { useDispatch } from "react-redux";

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

export default function ProviderServiceNewOrder() {
  const [allData , setAllData] = useState([]);
  const dispatch = useDispatch();
  const itemsPerPage = 3;
  const router = useRouter();
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(allData?._meta?.currentPage || 1);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pages = [4, 3, 2, 1];

  useEffect(() => {
    dispatch(handleGetCleaningService({accesstoken : JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
    .unwrap()
    .then(res => {
      console.log(res?.data[0]?.items);
      setAllData(res?.data[0]?.items);
    })
  } , [dispatch])

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {allData?.map((item) => (
          <div
            onClick={() =>
              router.push(
                `/provider/service-management/cleaning-requests/${item?.id}`
              )
            }
            key={item?.id}
            className="flex flex-col sm:flex-row items-start bg-[#F9F9F9] rounded-lg p-3 gap-4"
          >
            <Image
              src={item?.property_id?.image}
              alt={item?.property_id?.title || "property name"}
              width={85}
              height={85}
              className="rounded-lg w-full sm:w-auto h-auto object-cover max-h-[85px] sm:max-w-[85px]"
            />
            <div className="flex flex-col border-b border-[#E0E4EB] w-full gap-3">
              <div className="flex flex-col w-full pb-2 gap-2 justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <p className="text-base sm:text-lg md:text-xl font-medium text-(--main-dark-color)">
                    {item?.property_id?.name}
                  </p>
                  <button className="w-[48px] h-[32px] bg-[#E2EDFF] rounded-[6px] p-[10px] text-[#007AFF] text-xs font-medium flex justify-center items-center">
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

                <h3 className="text-lg font-medium text-[#0A0A1F] leading-snug">
                  employee
                </h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={item?.provider?.avatar || "/images/Avatar.svg"}
                      alt="calendar"
                      width={48}
                      height={48}
                      className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
                    />
                    <div className="flex flex-col gap-[6px]">
                      <p className="text-sm sm:text-base font-bold text-[#0A0A1F]">
                       {item?.provider?.name}
                      </p>
                      {/* <p className="text-xs sm:text-sm font-normal text-[#76767B]">
                        Operations Manager
                      </p> */}
                    </div>
                  </div>

                  <button className="flex text-white gap-[10px] rounded-lg justify-center items-center h-[40px] p-[10px_16px] bg-[#292760] w-full sm:w-auto">
                    <Image
                      src="/images/white-people.svg"
                      alt="people"
                      width={16}
                      height={16}
                    />
                    <span className="text-sm font-normal text-white">
                      resellect
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <Pagination
       totalPages={allData?._meta?.NumberOfPage} 
       currentPage={currentPage} 
       pages={generatePageNumbers()} 
       setCurrentPage={setCurrentPage} 
      /> */}
    </div>
  );
}
