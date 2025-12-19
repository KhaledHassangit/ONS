import { Select } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react"; // Make sure to import Check icon
import { useDispatch, useSelector } from "react-redux";
import { handleFetchList } from "@/features/listSlice";
import { handleCreateProperty } from "@/features/clients/propertiesSlice";
import { toast } from "react-toastify";
import { getAccessToken } from "@/api/apiInstance";

export default function ContactInformation({
  setCurrentStep,
  propertyData,
  setPropertyData,
}) {
  const [isCoHostAdded, setIsCoHostAdded] = useState(false);
  const dispatch = useDispatch();
  const { list_data_loading, list_data } = useSelector((state) => state?.lists);
  const [platforms, setPlatforms] = useState(null);
  const { create_property_loading } = useSelector((state) => state?.properties);

  useEffect(() => {
    const token =
      localStorage.getItem("access_token") &&
      JSON.parse(localStorage.getItem("access_token"))?.access_token;
    dispatch(handleFetchList(token));
  }, [dispatch]);

  useEffect(() => {
    setPlatforms(list_data?.data[0]?.Platform);
  }, [list_data]);

  const toggleCoHostTask = () => {
    setIsCoHostAdded(!isCoHostAdded);
  };

  function handleSubmit(e) {
    const formData = new FormData();
    formData.append("name", propertyData?.name);
    formData.append("property_type_id", propertyData?.property_type_id);
    formData.append("area", propertyData?.area);
    formData.append("floor", propertyData?.floor);
    formData.append("number_room", propertyData?.number_room);
    formData.append("number_bathroom", propertyData?.number_bathroom);
    formData.append("address", propertyData?.address);
    formData.append("city_id", propertyData.city_id);
    formData.append("postal_code", propertyData?.postal_code);
    formData.append("lat", propertyData?.lat);
    formData.append("lang", propertyData?.lng);
    formData.append("image", propertyData?.image);
    formData.append("specail_note", propertyData.specail_note);
    formData.append("co_host_name", propertyData.co_host_name);
    formData.append("co_host_mobile", propertyData.co_host_mobile);
    formData.append("platform_id", propertyData.platform_id);
    formData.append("platform_link", propertyData.platform_link);

    const token =
      localStorage.getItem("access_token") &&
      JSON.parse(localStorage.getItem("access_token"))?.access_token;

    dispatch(
      handleCreateProperty({
        access_token: getAccessToken(),
        data: formData,
      })
    )
      .unwrap()
      .then((res) => {
        if ( res?.data[0]?.status == 1) {
          toast.success(res?.data[0]?.message);
          setPropertyData({
            name: "",
            property_type_id: null,
            area: "",
            floor: "",
            number_room: "",
            number_bathroom: "",
            address: "",
            city_id: "",
            postal_code: "",
            lat: "",
            lng: "",
            image: "",
            specail_note: "",
            co_host_name: "",
            co_host_mobile: "",
            platform_id: "",
            platform_link: "",
          });
          setCurrentStep(1);
        } else {
          toast.error(res?.data[0]?.message);
        }
      })
      .catch((e) => console.log(e));
  }

  const isFormComplete = () => {
    return (
      propertyData?.co_host_name &&
      propertyData?.co_host_mobile &&
      propertyData?.platform_id &&
      propertyData?.platform_link
    );
  };

  return (
    <div className="flex add-employee-page flex-col gap-3 w-full">
      <div className="flex items-center gap-[10px]">
        <button
          onClick={toggleCoHostTask}
          className={`w-[18px] rounded-[6px] h-[18px] border-[1.13px] flex items-center justify-center transition-all ${
            isCoHostAdded
              ? "bg-(--main-orange-color) text-white"
              : "border-[#DDDFDF] bg-white"
          }`}
        >
          {isCoHostAdded && <Check size={12} strokeWidth={3} />}
        </button>
        <p className="text-sm sm:text-base font-medium text-[#0A0A1F]">
          Add Co-Host for this Property
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Full Name
          </label>
          <input
            type="text"
            value={propertyData?.co_host_name}
            onChange={(e) =>
              setPropertyData({ ...propertyData, co_host_name: e.target.value })
            }
            className="h-[44px] rounded-lg border border-[#76767B] p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="Enter full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
            Phone Number
          </label>
          <input
            type="text"
            value={propertyData?.co_host_mobile}
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                co_host_mobile: e.target.value,
              })
            }
            className="h-[44px] rounded-lg border border-[#76767B] p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <label className="text-sm sm:text-base font-medium text-[#0A0A1F]">
        Platforms list
      </label>
      <div className="grid items-center grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3">
        <div className="flex flex-col gap-2">
          <Select
          
            options={
              platforms?.length &&
              platforms?.map((item) => ({ label: item?.name, value: item?.id }))
            }
            placeholder="Select Platform"
            value={propertyData?.platform_id}
            onChange={(e) =>
              setPropertyData({ ...propertyData, platform_id: e })
            }
            className="h-[44px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={propertyData?.platform_link}
            onChange={(e) =>
              setPropertyData({
                ...propertyData,
                platform_link: e.target.value,
              })
            }
            className="h-[44px] rounded-lg border border-[#76767B] p-3 bg-white placeholder:text-sm font-normal text-[#233B37]"
            placeholder="Enter Link"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full sm:ms-auto sm:w-auto gap-4 mt-4">
        <button
          onClick={() => setCurrentStep(3)}
          className="h-[48px] rounded-2xl p-[10px] bg-[#F5F5F5] w-full sm:w-[167px] text-[#4F617D] flex justify-center items-center"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isFormComplete()}
          className="h-[48px] rounded-2xl p-[10px] bg-(--main-orange-color) w-full sm:w-[167px] text-white flex justify-center items-center"
        >
          {create_property_loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
