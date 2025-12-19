"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../../../../../postcss.config.mjs";
import { configs } from "@/configs";
import { toast } from "react-toastify";
import LoadingSkeleton from "@/components/loadingSkeleton";

export default function page() {
  const [allData , setAllData] = useState(null);
  const [isLoading , setIsLoading ] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(configs.baseURL +"work-agreement")
    .then(res => {
      console.log(res)
      if(res?.data?.status == 1) {
        console.log(res)
        setAllData(res?.data?.data[0])
      }else {
        toast.error(res?.data[0]?.message)
      }
    }).catch(e => console.log(e))
    .finally(() => setIsLoading(false))
  } , [])
 

  if(isLoading) {
    return <LoadingSkeleton />
  }


  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="legal-linear-gradient !w-full flex flex-col gap-3 py-8">
        <h3 className="text-[42px] text-center font-medium text-[#0D0D0D] leading-normal">
          {allData?.title}
        </h3>
        <p className="text-lg max-w-[684px] mx-auto text-center font-normal text-[#4B5563]">
          Key information about work agreements, company policies, and how to
          report issues or request materials through the platform.
        </p>
      </div>
       <div className="md:!max-w-[797px] text-base font-medium text-[#292760] !text-center mx-auto !bg-[#F6F6F6] p-4 rounded-xl">
      <div dangerouslySetInnerHTML={{__html : allData?.content}}></div>
      </div>
    </div>
  );
}
