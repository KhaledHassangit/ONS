"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchList } from "@/features/listSlice";
import { Select } from "antd";

const MyMap = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
});

export default function PropertyLocation({ propertyData, setPropertyData, setCurrentStep }) {
  const dispatch = useDispatch();
  const { list_data_loading, list_data } = useSelector((state) => state?.lists);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const token =
      localStorage.getItem("access_token") &&
      JSON.parse(localStorage.getItem("access_token"))?.access_token;
    dispatch(handleFetchList(token));
  }, [dispatch]);

  useEffect(() => {
    setCities(list_data?.data[0]?.city);
  }, [list_data]);

  const isFormComplete = () => {
    return (
      propertyData?.address &&
      propertyData?.city_id &&
      propertyData?.postal_code &&
      propertyData?.lat &&
      propertyData?.lng
    );
  };
  return (
    <div className="flex add-employee-page flex-col gap-4 w-full">
      {/* Address Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
          Address of Property
        </label>
        <input
          value={propertyData?.address || ""}
          onChange={(e) => setPropertyData({ ...propertyData, address: e.target.value })}
          className="h-[44px] rounded-lg border border-[#76767B] p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
          placeholder="Riyadh, Saudi Arabia, Al Nakheel Street"
        />
      </div>

      {/* City & Postal Code */}
      <div className="grid gap-4 items-center grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">City</label>
          <Select
          placeholder="Choose City"
          value={propertyData?.city_id}
          onChange={(e) => setPropertyData({...propertyData,city_id :e})}
          options={cities ? cities.map(city =>({value:city?.id , label:city?.name})) : []}></Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">Postal Code</label>
          <input
            value={propertyData?.postal_code || ""}
            onChange={(e) => setPropertyData({ ...propertyData, postal_code: e.target.value })}
            className="h-[44px] border border-[#76767B] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="605555"
          />
        </div>
      </div>

      {/* Map Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
          Address on Map
        </label>
        <MyMap
          width="w-full"
          height="h-[201px]"
          lat={propertyData?.lat}
          lng={propertyData?.lng}
          onLocationSelect={({ lat, lng }) =>
            setPropertyData({ ...propertyData, lat, lng })
          }
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center sm:ms-auto sm:w-auto gap-4 mt-4">
        <button
          onClick={() => setCurrentStep(1)}
          className="h-[48px] rounded-2xl p-[10px] bg-[#F5F5F5] w-full sm:w-[167px] text-[#4F617D] flex justify-center items-center"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          disabled={!isFormComplete()}
          className="h-[48px] rounded-2xl p-[10px] bg-[var(--main-orange-color)] w-full sm:w-[167px] text-white flex justify-center items-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}
