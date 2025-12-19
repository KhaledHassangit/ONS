"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Select, DatePicker, Empty } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchAllProperties } from "@/features/clients/propertiesSlice";
import LoadingSkeleton from "@/components/loadingSkeleton";


const properties = [
  {
    id: 1,
    title: "Guest House Riyadh",
    location: "Riyadh, Saudi Arabia, Al Nakheel Street",
    type: "Villa",
    floors: 3,
    rooms: 10,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
  {
    id: 2,
    title: "Guest House Riyadh",
    location: "Riyadh, Saudi Arabia, Al Nakheel Street",
    type: "Villa",
    floors: 3,
    rooms: 10,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
  {
    id: 3,
    title: "Guest House Riyadh",
    location: "Riyadh, Saudi Arabia, Al Nakheel Street",
    type: "Villa",
    floors: 3,
    rooms: 10,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
  {
    id: 4,
    title: "Guest House Riyadh",
    location: "Riyadh, Saudi Arabia, Al Nakheel Street",
    type: "Villa",
    floors: 3,
    rooms: 10,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
];

export default function PropertiesCards({all_properites_loading ,allData}) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
 
  const handleOpenChange = (open) => {
    setOpen(open);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  

   useEffect(() => {
    console.log(allData)
   } , [allData])

   if(all_properites_loading) {
    return <LoadingSkeleton />
   }
  return (
    <div className="flex flex-col gap-4 mt-[32px]">
      {allData?.length ?  allData?.map((property) => (
        <div
          key={property?.id}
          className="bg-[#F4F4F4] rounded-lg p-3 flex flex-col md:flex-row gap-4 min-h-[166px] h-auto md:h-[166px]"
        >
          <Image
            src={property?.image}
            alt={property?.name}
            width={142}
            height={142}
            className="rounded-lg w-full md:w-[142px] h-auto object-contain md:h-[142px] max-h-[200px]"
          />
          <div className="flex w-full flex-col justify-between gap-2 md:gap-0">
            <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <p className="text-(--main-dark-color) text-base font-medium">
                {property?.name}
              </p>
              <div className=" h-[35px] rounded-[36px] p-3 bg-[#FFD9C2] text-base flex justify-center items-center font-normal text-[#4F617D]">
                {property?.property_type_id?.name}
              </div>
            </div>

            <div className="flex items-center gap-1 flex-wrap">
              <Image
                src="/images/dash/property/Pin_duotone.svg"
                alt="location"
                width={24}
                height={24}
              />
              <p className="text-base font-normal text-(--main-light-color)">
                {property?.address}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-1 items-center">
                <Image
                  src="/images/dash/property/Hotel, Building.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                  <span>{property?.floor}</span> <span>Floors</span>
                </p>
              </div>

              <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
                <Image
                  src="/images/dash/property/Room, Service, Clean.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                  <span>{property?.number_room}</span> <span>Rooms</span>
                </p>
              </div>

              <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
                <Image
                  src="/images/dash/property/column-resize-square.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                  <span>{property?.area}</span> <span>m</span>
                </p>
              </div>

              <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
                <Image
                  src="/images/dash/property/Bath, Bathroom.svg"
                  alt="Hotel , Building"
                  width={16}
                  height={16}
                  className="flex-shrink-0"
                />
                <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                  <span>{property?.number_bathroom}</span> <span>bathrooms</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-2 sm:mt-0">
              <div className="relative">
                <DatePicker
                  open={open}
                  onOpenChange={handleOpenChange}
                  onChange={handleDateChange}
                  value={selectedDate}
                  inputRender={() => null}
                  style={{
                    position: "absolute",
                    width: 0,
                    height: 0,
                    opacity: 0,
                  }}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  styles={{
                    popup: {
                      root: {
                        zIndex: 9999,
                        marginTop: 5,
                      },
                    },
                  }}
                />

                <button
                  className="bg-[var(--main-light-color)] text-white w-[126px] h-[40px] flex items-center rounded-lg px-[16px] py-[10px] gap-[8px] cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <CalendarDays className="w-[20px] h-[20px]" />
                  <span className="text-base font-semibold text-center">
                    Calendar
                  </span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => router.push(`/clients/property-management/${property?.id}`)} 
                  className="h-[40px] border border-(--main-orange-color) text-(--main-orange-color) rounded-lg text-base font-medium p-[10px_16px] w-full sm:w-auto"
                >
                  Details
                </button>
                <button className="h-[40px] border border-(--main-orange-color) text-white text-base font-medium bg-(--main-orange-color) rounded-lg p-[10px_16px] w-full sm:w-auto">
                  Request cleaning service
                </button>
                <button className="h-[40px] border border-(--main-light-color) text-white text-base font-medium bg-(--main-light-color) rounded-lg p-[10px_16px] w-full sm:w-auto">
                  Request maintenance service
                </button>
              </div>
            </div>
          </div>
        </div>
      )) : <div className="min-h-screen flex justify-center items-center">
        <Empty /></div>}
    </div>
  );
}
