"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Home, Users, Bath, Maximize } from "lucide-react";
import {
  AreaIcon,
  BathroomIcon,
  CalenderIcon,
  LocationIcon,
  PropertyIcon,
  RoomTecket,
} from "../../../../../../public/icons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import { _get, getAccessToken } from "@/api/apiInstance";
import Pagination from "../../../../../components/pagination/Pagination";

export default function MaintenanceRequestForm() {
  const [selectedProperty, setSelectedProperty] = useState(0);
  const [serviceType, setServiceType] = useState("Electricity");
  const [serviceDescription, setServiceDescription] = useState(
    "Malfunction in the general lighting of the apartment"
  );
  const [urgency, setUrgency] = useState("1");

  // const properties = [
  //   {
  //     id: 1,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     id: 2,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     id: 3,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     id: 3,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     id: 3,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     id: 3,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  //   {
  //     id: 3,
  //     type: "Villa",
  //     location: "Riyadh, Saudi Arabia",
  //     floors: 3,
  //     rooms: 7,
  //     area: "300 m",
  //     bathrooms: 4,
  //     image: "/api/placeholder/80/60",
  //   },
  // ];

  const serviceTypes = [
    "Electricity",
    "Plumbing",
    "Air Conditioning",
    "General Repairs",
    "Cleaning",
    "Security",
    "Other",
  ];

  const urgencyOptions = [
    {
      value: "1",
      label: "Urgent request",
      color:
        urgency === "urgent"
          ? "bg-[#FFE9D4] text-(--main-orange-color)  border-(--main-orange-color)"
          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
    },
    {
      value: "2",
      label: "Request an inspection during the cleaning visit",
      color:
        urgency === "inspection"
          ? "bg-[#FFE9D4] text-(--main-orange-color)  border-(--main-orange-color)"
          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
    },
    {
      value: "3",
      label: "Visiting guest times",
      color:
        urgency === "guest"
          ? "bg-[#FFE9D4] text-(--main-orange-color)  border-(--main-orange-color)"
          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
    },
  ];

  const handleSubmit = () => {
    console.log("Maintenance request submitted:", {
      property: properties[selectedProperty],
      serviceType,
      serviceDescription,
      urgency,
    });
  };

  const [properties, setProperties] = useState([]);

  const [currentPage , setCurrentPage] = useState(1)
  const [meta , setMeta] = useState(null)
  const [maintainanceServiceType , setMaintainanceServiceType] = useState([])

  const getProperties = async (page = 1) => {
    const response = await _get("property?access-token=" + getAccessToken() + `&page=${page}`);
    setProperties(response.data.data[0].items);
    setMeta(response.data.data[0]._meta);
    console.log("my_properties", response.data.data[0]._meta);
  };


  const MaintainanceServiceType = async () => {
    const response = await _get("lists?access-token=" + getAccessToken());
    setMaintainanceServiceType(response.data?.data[0]?.MaintenanceServiceType);
    console.log("maintainance_service_type", response.data.data);
  }

  useEffect(() => {
    getProperties(1);
    MaintainanceServiceType();
  }, []);
  

  
  useEffect(()=>{
    getProperties(currentPage)
  },[currentPage])


  return (
    <div className=" mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-base text-(--main-blue-color)   ">
            Maintenance Request
          </p>
        </div>

        <button className="flex items-center w-[126px] h-[40px] px-[16px]   justify-center gap-2  py-2 bg-(--main-blue-color) text-white rounded-lg hover:bg-gray-700 transition-colors">
          <CalenderIcon className="" />
          Calendar
        </button>
      </div>

      {/* Property Selection */}
      <div className="mb-[28px]">
        <h1 className=" text-xl consy  font-bold mb-[16px]  ">
          Request a maintenance service for property
        </h1>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-(--main-blue-color) mb-4">
            Determine the property
          </h2>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={meta?.NumberOfPage} pages={Array.from({length: meta?.NumberOfPage}, (_, index) => index + 1)} />
        </div>
        <Swiper
          modules={[FreeMode]}
          slidesPerView={3}
          spaceBetween={15}
          freeMode={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={property.id} className="w-full min-w-sm">
              <div
                key={property.id}
                className={`border rounded-lg p-[12px] cursor-pointer transition-all ${
                  selectedProperty === index
                    ? "border-(--main-orange-color) bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedProperty(index)}
              >
                <div className="flex items-start gap-3">
                  <div className="  bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src={property.image}
                      className=" min-w-[62px] min-h-[62px] max-w-[62px] max-h-[62px] object-cover "
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center e gap-2 mb-1 bg-[#FFD9C2]  rounded-[36px] w-fit p-[12px]">
                      <span className="text-base !line-clamp-1 capitalize whitespace-nowrap font-medium text-gray-900 leading-none">
                        {property?.property_type_id?.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 flex items-center ">
                      <LocationIcon />
                      <span className="text-base font-[400] line-clamp-1 ">
                        {property.address}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-nowrap items-center gap-4 text-xs text-gray-500 w-full ">
                  <span className="flex whitespace-nowrap items-center gap-1">
                    <PropertyIcon />
                    {property.floor} floors
                  </span>
                  <span className="flex whitespace-nowrap items-center gap-1">
                    <RoomTecket className="" />
                    {property.number_room} rooms
                  </span>
                  <span className="flex whitespace-nowrap items-center gap-1">
                    <AreaIcon className="w-3 h-3" />
                    {property.area} m
                  </span>
                  <span className="flex whitespace-nowrap   items-center gap-1">
                    <BathroomIcon className="" />
                    {property.number_bathroom} bathrooms
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Service Details */}
      <div className="mb-8">
        <h2 className="text-lg  text-(--main-blue-color) font-bold mb-6">
          Service details
        </h2>

        {/* Service Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of service
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-3 py-3 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            {maintainanceServiceType?.map((type) => (
              <option className="capitalize" key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Service Description */}
        <div className="mb-4">
          <label className="block text-base font-medium mb-2">
            Service description
          </label>
          <textarea
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            rows={6}
            className="w-full px-3 text-base text-(--main-blue-color) py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Describe the maintenance issue..."
          />
        </div>

        {/* Importance of Ordering */}
        <div className="mb-[8px]">
          <label className="block text-base font-medium text-[#0A0A1F] mb-3">
            Importance of ordering
          </label>
          <div className="flex flex-wrap gap-3">
            {urgencyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setUrgency(option.value)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  urgency == option.value
                    ? option.color
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          className="flex-1 py-3 bg-(--main-orange-color) text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
        >
          Send a request
        </button>
        <button className="flex-1 py-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
