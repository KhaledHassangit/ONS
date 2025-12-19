"use client";
import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Develop an organized cleaning plan",
    desc: "Cleaning your home is an essential task for maintaining a clean and healthy environment, but it can be overwhelming if not organized properly. ",
    image: "/images/dash/cleaners/Rectangle 318.svg",
  },
  {
    id: 2,
    title: "Develop an organized cleaning plan",
    desc: "Cleaning your home is an essential task for maintaining a clean and healthy environment, but it can be overwhelming if not organized properly. ",
    image: "/images/dash/cleaners/Rectangle 318.svg",
  },
  {
    id: 3,
    title: "Develop an organized cleaning plan",
    desc: "Cleaning your home is an essential task for maintaining a clean and healthy environment, but it can be overwhelming if not organized properly. ",
    image: "/images/dash/cleaners/Rectangle 318.svg",
  },
  {
    id: 4,
    title: "Develop an organized cleaning plan",
    desc: "Cleaning your home is an essential task for maintaining a clean and healthy environment, but it can be overwhelming if not organized properly. ",
    image: "/images/dash/cleaners/Rectangle 318.svg",
  },
];

export default function TraningsCards({trainingData}) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(trainingData?._meta?.currentPage || 1);
  console.log(trainingData);
  
  // Generate an array of page numbers for pagination
  const generatePageNumbers = () => {
    if (!trainingData?._meta?.totalPages) return [];
    return Array.from({ length: trainingData._meta.totalPages }, (_, i) => i + 1);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-[15px]">
      {trainingData?.items?.map((item) => (
        <div
          onClick={() => router.push(`/provider/training/${item?.id}`)}
          key={item?.id}
          className=""
        >
          <Image
            src={item?.image}
            alt="training"
            width={553}
            height={214}
            className="rounded-tr-xl !w-full object-cover rounded-tl-xl"
          />
          <div className="flex flex-col cursor-pointer p-[8px_12px] gap-[10px] rounded-br-xl rounded-bl-xl bg-[#F9F9F9]">
            <h3 className="text-xl md:text-2xl font-medium text-black">
              {item?.title}
            </h3>
            <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{__html : item?.content}} ></div>
            {/* <p className="text-sm md:text-base font-normal">
              {item?.desc}
            </p> */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/dash/cleaners/Dislike.svg"
                  alt="Like"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <Image
                  src="/images/dash/cleaners/Like.svg"
                  alt="Like"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/dash/cleaners/Import_duotone_line.svg"
                  alt="Like"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <Image
                  src="/images/dash/cleaners/Bookmark 2.svg"
                  alt="Like"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
}
