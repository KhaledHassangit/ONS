"use client";
import LoadingSkeleton from "@/components/loadingSkeleton";
import { handleFetchPropertyDetail } from "@/features/clients/propertiesSlice";
import { CalendarDays, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import QRCode from "react-qr-code";
const MyMap = dynamic(() => import("@/components/map/Map"), {
  ssr: false, // React Leaflet doesn't support SSR
});

export default function page() {
  const { propertyId } = useParams();
  const dispatch = useDispatch();
  const { property_details_loading, property_details } = useSelector(
    (state) => state?.properties
  );

  useEffect(() => {
    const token =
      localStorage.getItem("access_token") &&
      JSON.parse(localStorage.getItem("access_token"))?.access_token;
    dispatch(
      handleFetchPropertyDetail({
        access_token: token,
        id: propertyId,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    console.log(property_details);
  }, [property_details]);

  if (property_details_loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
        <div className="flex items-center gap-[2px]">
          <Link
            className="text-sm md:text-base font-normal !text-(--main-orange-color)"
            href={"/clients/property-management"}
          >
            {" "}
            property management
          </Link>
          <ChevronRight size={12} />
          <p className="text-xs md:text-sm font-normal text-(--main-light-color)">
            {property_details?.data[0]?.name}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
          <label
            id="calendar"
            className="h-[40px] gap-[10px] rounded-lg p-[10px_16px] flex justify-center items-center bg-[#4F617D] text-white text-sm w-full sm:w-auto"
          >
            <CalendarDays size={20} />
            <span>Calendar</span>

            <input type="date" htmlFor="calendar" className="hidden" />
          </label>
          <button className="h-[40px] rounded-lg p-[10px_16px] flex justify-center items-center bg-[#292760] text-white text-sm w-full sm:w-auto">
            Request maintenance service
          </button>
          <button className="h-[40px] rounded-lg p-[10px_16px] bg-(--main-orange-color) flex justify-center items-center text-white text-sm w-full sm:w-auto">
            Request cleaning service{" "}
          </button>
        </div>
      </div>

      <div className="bg-[#F4F4F4] rounded-2xl flex flex-col gap-3 p-3">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-[#0A0A1F]">
            {property_details?.data[0]?.name}
          </p>

          <div className="min-w-[104px] h-[35px] rounded-[36px] bg-[#FFD9C2] text-[#4F617D] flex justify-center items-center text-base font-normal">
            {property_details?.data[0]?.property_type_id?.name}
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          {property_details?.data[0]?.image && (
            <Image
              src={property_details?.data[0]?.image}
              alt="property"
              width={143}
              height={143}
              className="rounded-lg w-full object-contain sm:w-[143px] h-auto sm:h-[143px]"
            />
          )}

          <div className="flex justify-between items-center gap-3 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-[2px]">
                <Image
                  src="/images/Pin_duotone.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                <p className="text-sm md:text-base font-normal text-[#4F617D]">
                  {property_details?.data[0]?.address}
                </p>
              </div>

              <div className="flex items-center !gap-[10px]">
                <Image
                  src="/images/sms-tracking.svg"
                  alt="location"
                  width={16}
                  height={24}
                />
                <p className="text-sm md:text-base justify-center text-[#4F617D] flex items-center">
                  <span className="text-sm md:text-base !font-medium">
                    Postal code :
                  </span>{" "}
                  <span className="text-sm md:text-base font-normal">
                    {property_details?.data[0]?.postal_code}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="text-sm font-bold text-[#0A0A1F]">QR Code</p>
              <QRCode
                size={50}
                style={{ maxWidth: "63px", width: "63px", height: "63px" }}
                value={""}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap bg-white rounded-[4px] p-2 gap-2 md:gap-4 items-center">
          <div className="flex gap-1 items-center">
            <Image
              src="/images/dash/property/Hotel, Building.svg"
              alt="Hotel , Building"
              width={16}
              height={16}
              className="flex-shrink-0"
            />
            <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
              <span>{property_details?.data[0]?.floor}</span>{" "}
              <span>Floors</span>
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
              <span>{property_details?.data[0]?.number_room}</span>{" "}
              <span>Rooms</span>
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
              <span>{property_details?.data[0]?.area}</span> <span>m</span>
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
              <span>{property_details?.data[0]?.number_bathroom}</span>{" "}
              <span>bathrooms</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-base font-medium text-[#0A0A1F]">Address on map</p>
          <MyMap
            height={"h-[190px]"}
            lat={property_details?.data[0]?.lat}
            lang={property_details?.data[0]?.lang}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-base font-medium text-[#0A0A1F]">Special notes</p>
          <input
            disabled
            value={property_details?.data[0]?.specail_note}
            className="h-[44px] rounded-lg p-3 bg-white placeholder:text-sm md:placeholder:text-base font-normal text-[#233B37] w-full"
            placeholder="Entrance from the back"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base font-medium text-[#0A0A1F]">
            Co-Host information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-[#0A0A1F]">Full Name</p>
              <input
                disabled
                value={property_details?.data[0]?.co_host_name}
                className="h-[44px] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37] w-full"
                placeholder="Entrance from the back"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-[#0A0A1F]">
                Phone Number
              </p>
              <input
                disabled
                value={property_details?.data[0]?.co_host_mobile}
                className="h-[44px] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37] w-full"
                placeholder="+213673232510"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-2">
              <p className="text-base flex items-center gap-2 font-medium text-[#0A0A1F]">
                <Image
                  src="/images/bookingcom-1 3.svg"
                  alt="booking image"
                  width={18}
                  height={18}
                />
                <span>Booking Link</span>
              </p>
              <input
                disabled
                value={property_details?.data[0]?.platform_link}
                className="h-[44px] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37] w-full"
                placeholder="Enter Link"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base flex items-center gap-2 font-medium text-[#0A0A1F]">
                <Image
                  src="/images/1EXLZLb4_400x400 1.svg"
                  alt="airbnb image"
                  width={18}
                  height={18}
                />
                <span>AirBnB Link</span>
              </p>
              <input
                disabled
                className="h-[44px] rounded-lg p-3 bg-white placeholder:text-sm font-normal text-[#233B37] w-full"
                placeholder="Enter link"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <button className="flex items-center justify-center gap-[10px] rounded-2xl h-[48px] p-[10px] bg-[#DCDBFF] text-[#292760] text-base font-medium w-full">
              <Image
                src="/images/Edit 2.svg"
                alt="edit"
                width={24}
                height={24}
              />
              <span>Edit</span>
            </button>

            <button className="flex items-center justify-center gap-[10px] rounded-2xl h-[48px] p-[10px] bg-[#FFE4E2] text-[#FF3B30] text-base font-medium w-full">
              <Image
                src="/images/Delete 2.svg"
                alt="edit"
                width={24}
                height={24}
              />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
