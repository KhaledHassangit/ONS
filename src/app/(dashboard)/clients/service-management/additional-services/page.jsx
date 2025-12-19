"use client";
import AddsOneModal from "@/components/dashboard/cleaners/ServiceManagment/addsOneModal/AddsOneModal";
import Pagination from "@/components/pagination/Pagination";
import SearchInput from "@/components/searchInput/SearchInput";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { _get, getAccessToken } from "../../../../../api/apiInstance";

export default function Page() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowData, setRowData] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);

  const [additionalServices, setAdditionalServices] = useState([]);

  const itemsPerPage = 10;

  // Function to fetch additional services
  const AdditionalServices = async () => {
    const response = await _get("lists?access-token=" + getAccessToken());
    setAdditionalServices(response.data?.data[0]?.AdditionService);
    console.log("additional_services", response.data?.data[0]?.AdditionService);
  };

  useEffect(() => {
    AdditionalServices();
  }, []);

  // Dynamically calculate the paginated data and total pages
  const totalPages = Math.ceil(additionalServices.length / itemsPerPage);
  console.log("totalPages", totalPages); 

  const paginatedData = useMemo(() => additionalServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ), [currentPage, additionalServices]);
  console.log("paginatedData", paginatedData);

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[48px] flex items-center gap-4">
        <p className="text-base font-normal text-[#4F617D]">
          Additional Services
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-base font-semibold text-(--main-dark-color)">
          materials
        </h4>

        {paginatedData && paginatedData?.map((item) => (
          <div
            key={item?.id}
            className="bg-[#F9F9F9] flex items-center gap-3 rounded-lg p-3 min-h-[109px]"
          >
            <Image alt="soap" width={85} height={85} src={item?.image} />
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-medium text-[#0A0A1F]">
                  {item?.name}
                </h4>
                {item?.date && (
                  <p className="text-sm font-normal flex gap-[6px] items-center text-[#4F617D]">
                    <Image
                      src="/images/clean-Calendar.svg"
                      alt="date"
                      width={16}
                      height={16}
                    />
                    <span>{item?.date}</span>
                  </p>
                )}
                {item?.time && (
                  <p className="text-sm font-normal flex gap-[6px] items-center text-[#4F617D]">
                    <Image
                      src="/images/Clock Circle.svg"
                      alt="date"
                      width={16}
                      height={16}
                    />
                    <span> {item?.time}</span>
                  </p>
                )}
              </div>

              <div className="h-[28px] bg-(--main-blue-color) px-[8px] py-[2px] text-white text-base rounded-lg flex items-center justify-center">
                {item?.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={Array.from({ length: totalPages }, (_, index) => index + 1)}
      />

      <AddsOneModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        data={rowData}
      />
    </div>
  );
}
