"use client";
import LoadingSkeleton from "@/components/loadingSkeleton";
import SearchInput from "@/components/searchInput/SearchInput";
import { handleProviderMaterialService } from "@/features/provider/material-service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const {provider_material_service_data , provider_material_service_loading} = useSelector(state => state.providerMaterialService);
  const [allData , setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    dispatch(handleProviderMaterialService({accesstoken : JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
    .unwrap()
    .then(res => {
      if(res?.status == 1){
        console.log(res);
        setAllData(res?.data[0])
        setFilteredData(res?.data[0])
      }else {
        toast.error(res?.data[0]?.message);
      }
    })
    .catch(err => {
      console.log(err);
    })
  } , [])
  
  // Handle search filtering
  useEffect(() => {
    if (allData?.items) {
      if (search.trim() === "") {
        // If search is empty, show all data
        setFilteredData(allData);
      } else {
        // Filter items based on search value
        const filtered = {
          ...allData,
          items: allData.items.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        };
        setFilteredData(filtered);
      }
    }
  }, [search, allData])
  
  if(provider_material_service_loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="flex flex-col gap-4  py-4 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <p className="text-base md:text-lg font-normal text-[#4F617D] whitespace-nowrap">
          Materials Request
        </p>
        <div className="w-full sm:w-auto sm:min-w-[250px] md:min-w-[300px]">
          <SearchInput
            setValue={setSearch}
            value={search}
            placeholder={"Search materials..."}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h4 className="text-base md:text-lg font-medium text-(--main-dark-color) capitalize">
          Materials
        </h4>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {filteredData?.items?.length > 0 ? (
            filteredData?.items?.map((item) => (
              <div
                className={`
                  bg-[#F4F4F4] border border-[#F4F4F4] hover:border-gray-300
                rounded-lg p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 transition-all duration-200 h-full`}
                key={item.id}
              >
                <div className="relative w-full pt-[56.25%]">
                                  <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="rounded-lg cursor-pointer object-cover absolute top-0 left-0"
                />
              </div>
              <div className="flex justify-between items-center gap-2 sm:gap-3 mt-auto">
                <p className="text-xs sm:text-sm font-normal text-(--main-light-color) cursor-pointer truncate">
                  {item.name}
                  </p>
                  <p
                    className={`text-xs sm:text-sm rounded-lg py-1 px-2 min-w-[43px] font-normal cursor-pointer bg-[#4F617D] text-white flex justify-center items-center flex-shrink-0`}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center p-8">
              <p className="text-base font-normal text-gray-500">No materials found matching your search</p>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-6">
          <Link 
            href="/provider/service-management/material-request/adds-one" 
            className="bg-[#FF9900] !text-white px-4 py-3 flex justify-center items-center w-full sm:w-auto sm:min-w-[167px] rounded-xl text-sm md:text-base font-medium transition-all hover:bg-[#e68a00]"
          >
            Send a request
          </Link>
        </div>
      </div>
    </div>
  );
}
