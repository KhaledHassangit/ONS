"use client";
import React, { useEffect, useState } from "react";
import {
  AreaIcon,
  BathroomIcon,
  CalenderIcon,
  LocationIcon,
  PropertyIcon,
  RoomTecket,
} from "../../../../../public/icons/icons";
import Calendar from "@/components/dashboard/calendar/Calendar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import { _get, _post, getAccessToken } from "@/api/apiInstance";
import Pagination from "../../../../components/pagination/Pagination";
import ThirdStep from "./../service-management/cleaning-requests/add/_components/thirdStep";
import FourthStep from "./../service-management/cleaning-requests/add/_components/fourthStep";
export default function page() {
  const [selectedView, setSelectedView] = useState("Week");
  const router = useRouter();
  const data = [
    {
      id: 1,
      image: "/images/Rectangle 34624624 (1).svg",
      type: "Villa",
      location: "Riyadh, Saudi Arabia,",
    },
    {
      id: 2,
      image: "/images/Rectangle 34624624 (1).svg",
      type: "Villa",
      location: "Riyadh, Saudi Arabia,",
    },
    {
      id: 3,
      image: "/images/Rectangle 34624624 (1).svg",
      type: "Villa",
      location: "Riyadh, Saudi Arabia,",
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(0);

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "13:00 AM",
    "14:00 AM",
    "15:00 AM",
    "16:00 AM",
  ];

  const weekDays = [
    { day: "Sunday", date: "07/10", reservations: 0 },
    { day: "Monday", date: "07/11", reservations: 0 },
    { day: "Tuesday", date: "07/12", reservations: 0 },
    { day: "Wednesday", date: "07/13", reservations: 0 },
    { day: "Thursday", date: "07/14", reservations: 0 },
    { day: "Friday", date: "07/15", reservations: 0 },
    { day: "Saturday", date: "07/16", reservations: 0 },
  ];

  const appointments = [
    {
      id: 3,
      property_id: 1,
      date: "2025-06-19",
      time_from: "17:20:53",
      time_to: "20:20:53",
    },
    {
      id: 2,
      property_id: 1,
      date: "2025-06-18",
      time_from: "17:20:53",
      time_to: "20:20:53",
    },
    {
      id: 1,
      property_id: 1,
      date: "2025-06-17",
      time_from: "17:20:53",
      time_to: "20:20:53",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState(null);
  const [propertyCalender, setPropertyCalender] = useState([]);

  const [properties, setProperties] = useState([]);
  const getProperties = async (page = 1) => {
    const response = await _get(
      "property?access-token=" + getAccessToken() + `&page=${page}`
    );
    setProperties(response.data.data[0].items);
    setMeta(response.data.data[0]._meta);
    getProbertyCalender(response.data.data[0].items[0].id);
    setSelectedProperty(response.data.data[0].items[0].id);
    console.log("my_properties", response.data.data[0]._meta);
  };

  useEffect(() => {
    getProperties(1);
  }, []);

  useEffect(() => {
    getProperties(currentPage);
  }, [currentPage]);

  const getProbertyCalender = async (property_id) => {
    const response = await _post(
      "property-calender?access-token=" + getAccessToken(),
      {
        property_id: 1 || property_id,
      }
    );
    setPropertyCalender(response.data.data[0]);

    console.log("property_calender", response.data.data[0]);
  };

  const steps = [
    {
      id: 1,
      title: "Property and Pakage",
      icon: "https://res.cloudinary.com/dkc5klynm/image/upload/v1750804454/buliding_qaw7wg.png",
    },
    {
      id: 2,
      title: "Service date",
      icon: "https://res.cloudinary.com/dkc5klynm/image/upload/v1750804554/calendar_osa63g.png",
    },
    {
      id: 3,
      title: "Add-on Servicess",
      icon: "https://res.cloudinary.com/dkc5klynm/image/upload/v1750804496/add-circle_bt1hia.png",
    },
    {
      id: 4,
      title: "Payment",
      icon: "https://res.cloudinary.com/dkc5klynm/image/upload/v1750804532/wallet-check_mclrfj.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}

      {/* <Calendar timeSlots={timeSlots} appointments={appointments} weekDays={weekDays}/> */}

      {currentStep === 1 && (
        <>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-normal text-[#4F617D]">Calendar</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-(--main-blue-color) mb-4">
                  Determine the property
                </h2>
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={meta?.NumberOfPage}
                  pages={Array.from(
                    { length: meta?.NumberOfPage },
                    (_, index) => index + 1
                  )}
                />
              </div>

              {/* Villa Cards */}

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
                        selectedProperty === property.id
                          ? "border-(--main-orange-color) bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedProperty(property.id);
                        getProbertyCalender(property.id);
                      }}
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
          </div>
          <Calendar
            onTypeOfServiceClick={() => {
              setCurrentStep(3);
            }}
            apiData={propertyCalender}
          />
        </>
      )}

      {/* Steps */}
      {currentStep !== 1 && (
        <div className="flex items-center justify-between w-full mb-[20px]">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-[60px] h-[60px] rounded-full ${
                  step.id < currentStep
                    ? "bg-white border-[3px] border-[#292760] text-[#292760]"
                    : step.id == currentStep
                    ? "bg-white border-[3px] border-[#292760] text-[#292760]"
                    : "bg-[#EAEAEA] border-2 border-[#EAEAEA]"
                }`}
              >
                {step.id < currentStep ? (
                  <div className="flex justify-center items-center bg-[#292760] rounded-full w-[50px] h-[50px]">
                    <Image
                      src={step.icon}
                      width={24}
                      height={24}
                      alt={step.title}
                      className="text-white"
                    />
                  </div>
                ) : step.id === currentStep ? (
                  <div className="flex justify-center items-center bg-[#292760] rounded-full  w-[50px] h-[50px]">
                    <Image
                      src={step.icon}
                      width={24}
                      height={24}
                      alt={step.title}
                      className="text-white"
                    />
                  </div>
                ) : (
                  <Image
                    src={step.icon}
                    width={24}
                    height={24}
                    alt={step.title}
                  />
                )}
              </div>

              {/* Step title */}
              <p
                className={`mt-2 text-sm font-medium ${
                  step.id === currentStep
                    ? "text-[#292760] font-semibold"
                    : step.id < currentStep
                    ? "text-[#292760]"
                    : "text-[#BDBDBD]"
                } capitalize`}
              >
                {step.title}
              </p>
            </div>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] ${
                  index < currentStep - 1 ? "bg-[#292760]" : "bg-[#EAEAEA]"
                }`}
              ></div>
            )}
          </React.Fragment>
          ))}
        </div>
      )}

      {currentStep === 3 && <ThirdStep />}

      {currentStep === 4 && <FourthStep />}

      {currentStep !== 1 && (
        <div className="flex justify-end items-center gap-[16px]">
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(prev => prev == 3 ? 1 : prev  == 4 ? 3 : null)}
            className="bg-[#F5F5F5] hover:bg-[#F5F5F5]/80 cursor-pointer w-[167px] min-h-[48px] text-[#4F617D] p-[10px]  rounded-[10px] font-[500] transition-all duration-300"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="bg-[#F59331] hover:bg-[#F59331]/80 cursor-pointer w-[167px] min-h-[48px] text-white p-[10px]  rounded-[10px] font-[500] transition-all duration-300"
        >
          Next
          </button>
        </div>
      )}
    </div>
  );
}
