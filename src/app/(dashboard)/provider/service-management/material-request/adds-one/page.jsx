"use client";
import AddsOneModal from "@/components/dashboard/cleaners/ServiceManagment/addsOneModal/AddsOneModal";
import Pagination from "@/components/pagination/Pagination";
import SearchInput from "@/components/searchInput/SearchInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: "/images/Rectangle 3462464938.svg",
    title: "Liquid soap",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
  },
  {
    id: 2,
    image: "/images/Rectangle 346246471.svg",
    title: "Soap",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
  },
  {
    id: 3,
    image: "/images/Rectangle 34624647 (2).svg",
    title: "Towel",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
  },
  {
    id: 4,
    image: "/images/soap-1.svg",
    title: "Soap",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
  },
  {
    id: 5,
    image: "/images/soap(1).svg",
    title: "Towel",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
  },
  {
    id: 6,
    image: "/images/soap(2).svg",
    title: "Liquid soap",
    date: "June 12, 2026",
    time: "8:00 pm - 10:00 pm",
  },
];

export default function page() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, 4];
  const [rowData, setRowData] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);

  useEffect(() => {
    console.log(rowData);
  }, [rowData]);

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[48px] flex items-center gap-4">
        <p className="text-base font-normal text-[#4F617D]">
          materials request
        </p>
        <SearchInput
          setValue={setSearch}
          value={search}
          placeholder={"Search"}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-base font-medium text-(--main-dark-color)">
          materials
        </h4>

        {data?.map((item) => (
          <div
            key={item?.id}
            className="bg-[#F9F9F9] flex items-center gap-3 rounded-lg p-3 min-h-[109px]"
          >
            <Image alt="soap" width={85} height={85} src={item?.image} />
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-medium text-[#0A0A1F]">
                  {item?.title}
                </h4>
                <p className="text-sm font-normal flex gap-[6px] items-center text-[#4F617D]">
                  <Image
                    src="/images/clean-Calendar.svg"
                    alt="date"
                    width={16}
                    height={16}
                  />
                  <span>{item?.date}</span>
                </p>
                <p className="text-sm font-normal flex gap-[6px] items-center text-[#4F617D]">
                  <Image
                    src="/images/Clock Circle.svg"
                    alt="date"
                    width={16}
                    height={16}
                  />
                  <span> {item?.time}</span>
                </p>
              </div>

              <button
                onClick={() => {
                  setOpenAddModal(true);
                  setRowData(item);
                }}
                className="w-[48px] h-[48px] rounded-lg flex justify-center items-center bg-[#FFD9C2] "
              >
                <Image
                  alt="add image"
                  src="/images/Add_round_duotone.svg"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />

      <AddsOneModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        data={rowData}
      />
    </div>
  );
}
