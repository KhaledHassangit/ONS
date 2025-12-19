"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Pagination from "@/components/pagination/Pagination";

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

export default function ReportOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pages = [4, 3, 2, 1];
  return (
    <div>
      <div className="flex flex-col gap-4">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="flex  flex-col bg-[#F9F9F9] rounded-lg p-3  gap-3"
          >
            <div className="flex gap-4">
              <Image
                src={item?.image}
                alt={item?.title}
                width={85}
                height={85}
                className="rounded-lg"
              />
              <div className="flex flex-col w-full gap-3">
                <div className="flex flex-col w-full pb-2 gap-2  justify-between">
                  <div className="flex justify-between  items-center">
                    <p className="text-xl font-medium text-(--main-dark-color)">
                      {item?.title}
                    </p>
                    <button className=" h-[32px] bg-[#FFE4E2] rounded-[6px] p-[10px] text-[#FF2D55] text-xs font-medium flex justify-center items-center">
                      Reported
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
                      {item?.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Rating</h3>
              <div className="bg-[#E5EBF4] flex items-center h-[52px] rounded-lg p-3">
                <p className="text-base font-normal text-(--main-light-color)">
                  “Great and fast service! Booking was easy and the team is very
                  professional. I will definitely order the service again!”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
