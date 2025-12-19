"use client";
import { handleFetchList } from "@/features/listSlice";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InfoProperty({
  propertyData,
  setPropertyData,
  setCurrentStep,
}) {
  const dispatch = useDispatch();
  const { list_data_loading, list_data } = useSelector((state) => state?.lists);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const token =
      localStorage.getItem("access_token") &&
      JSON.parse(localStorage.getItem("access_token"))?.access_token;
    dispatch(handleFetchList(token));
  }, [dispatch]);

  useEffect(() => {
    setProperty(list_data?.data[0]?.PropertyType);
  }, [list_data]);

  const isFormComplete = () => {
    return (
      propertyData?.name &&
      propertyData?.property_type_id &&
      propertyData?.area &&
      propertyData?.floor &&
      propertyData?.number_room &&
      propertyData?.number_bathroom
    );
  };

  return (
    <div className="flex add-employee-page flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
          Name of Property
        </label>
        <input
          onChange={(e) =>
            setPropertyData({ ...propertyData, name: e.target.value })
          }
          value={propertyData?.name}
          className="h-[44px] rounded-lg border border-[#76767B] p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
          placeholder="Enter Name of Property"
        />
      </div>

      <div className="grid gap-4 items-center grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Property type
          </label>
          <Select
            value={propertyData?.property_type_id}
            onChange={(e) =>
              setPropertyData({ ...propertyData, property_type_id: e })
            }
            placeholder="property"
            options={
              property?.length &&
              property?.map((item) => ({ label: item?.name, value: item?.id }))
            }
          ></Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Area in square meters
          </label>
          <input
            value={propertyData?.area}
            onChange={(e) =>
              setPropertyData({ ...propertyData, area: e.target.value })
            }
            className="h-[44px] border border-[#76767B] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="300 m"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Floors
          </label>
          <input
            value={propertyData?.floor}
            onChange={(e) =>
              setPropertyData({ ...propertyData, floor: e.target.value })
            }
            className="h-[44px] border border-[#76767B] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Number of rooms
          </label>
          <input
            value={propertyData?.number_room}
            onChange={(e) =>
              setPropertyData({ ...propertyData, number_room: e.target.value })
            }
            className="h-[44px] border border-[#76767B] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="7"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Number of bathrooms
          </label>
          <input
            value={propertyData?.number_bathroom}
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                number_bathroom: e.target.value,
              })
            }
            className="h-[44px] border border-[#76767B] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="10"
          />
        </div>
      </div>

      <button
        onClick={() => setCurrentStep(2)}
        disabled={!isFormComplete()}
        className={`h-[48px] rounded-2xl p-[10px] bg-(--main-orange-color) w-full sm:w-[167px] ms-auto text-white flex justify-center items-center mt-4 ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </div>
  );
}
