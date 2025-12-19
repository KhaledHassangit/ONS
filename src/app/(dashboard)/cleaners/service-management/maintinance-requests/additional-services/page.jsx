"use client";
import SearchInput from "@/components/searchInput/SearchInput";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: false,
  },
  {
    id: 2,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: false,
  },
  {
    id: 3,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: false,
  },
  {
    id: 4,
    image: "/images/Rectangle 34624650 (1).svg",
    price: "50$",
    title: "Oven",
    selected: true,
  },
  {
    id: 5,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: false,
  },
  {
    id: 6,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: false,
  },
  {
    id: 7,
    image: "/images/Rectangle 34624650 (2).svg",
    price: "50$",
    title: "Cleaning the pool",
    selected: false,
  },
  {
    id: 8,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: false,
  },
  {
    id: 9,
    image: "/images/Rectangle 34624650 (2).svg",
    price: "50$",
    title: "Cleaning the pool",
    selected: true,
  },
  {
    id: 10,
    image: "/images/Rectangle 34624650 (3).svg",
    price: "50$",
    title: "Oven",
    selected: false,
  },
  {
    id: 11,
    image: "/images/Rectangle 34624650.svg",
    price: "50$",
    title: "air conditioner",
    selected: true,
  },
  {
    id: 12,
    image: "/images/Rectangle 34624650 (3).svg",
    price: "50$",
    title: "Oven",
    selected: false,
  },
  {
    id: 13,
    image: "/images/Rectangle 34624650 (1).svg",
    price: "50$",
    title: "Oven",
    selected: false,
  },
  {
    id: 14,
    image: "/images/Rectangle 34624650 (2).svg",
    price: "50$",
    title: "Cleaning the pool",
    selected: false,
  },
  {
    id: 15,
    image: "/images/Rectangle 34624650 (1).svg",
    price: "50$",
    title: "Oven",
    selected: true,
  },
];

export default function page() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col gap-4">
       
      <div className="flex flex-col gap-4">
        <h4 className="text-base font-medium text-(--main-dark-color)">
        Additional Services
        </h4>

        <div className="grid grid-cols-5 gap-4 items-center">
          {data?.map((item) => (
            <div
              className={`${
                item?.selected
                  ? "bg-[#FFF4E8] cursor-pointer border border-(--main-orange-color)"
                  : "bg-[#F4F4F4] border border-[#F4F4F4]"
              } rounded-lg p-4 min-h-[81px] flex flex-col gap-3`}
              key={item?.id}
            >
              <Image
                src={item?.image}
                alt={item?.title}
                width={179}
                height={82}
                className="rounded-lg cursor-pointer w-full object-cover"
              />
              <div className="flex justify-between gap-3">
                <p className="text-base font-normal text-(--main-light-color) cursor-pointer">
                  {item?.title}
                </p>
                <p
                  className={`text-sm rounded-lg h-[28px] w-[43px] font-normal cursor-pointer ${
                    item?.selected ? "bg-[#FF9900]" : "bg-[#4F617D]"
                  } text-white flex justify-center items-center`}
                >
                  {item?.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button href="/cleaners/service-management/material-request/adds-one" className="bg-[#FF9900] !text-white p-[10px] flex justify-center items-center ms-auto w-[167px] h-[48px] rounded-xl ">Send a request</button>
      </div>
    </div>
  );
}
