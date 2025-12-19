"use client";
import React, { useState } from "react";
import Image from "next/image";

const packages = [
  {
    id: 1,
    name: "Next guest ready",
    price: "25$",
    color: "#F59331",
    textColor: "#F59331",
    bgColor: "#FFF4E8",
    buttonBg: "#F59331",
    buttonText: "white",
    features: [
      "Quick cleaning of rooms and common areas",
      "Change sheets and towels",
      "50 Rearrange furniture as needed",
      "Checking the basics from home",
    ],
  },
  {
    id: 2,
    name: "Deep cleaning",
    price: "50$",
    color: "#0DA678",
    textColor: "#05A84B",
    bgColor: "#F4FFFA",
    buttonBg: "#F4F4F4",
    buttonText: "#4F617D",
    features: [
      "Complete cleaning of floors, walls and surfaces",
      "Deep clean your appliances and kitchen",
      "Sanitize bathrooms and remove accumulated dirt",
      "Comprehensive rearrangement and resetting of furniture as needed",
    ],
  },
  {
    id: 3,
    name: "Always Ready",
    price: "100$",
    color: "#1363DF",
    textColor: "#1363DF",
    bgColor: "#F5FAFF",
    buttonBg: "#F4F4F4",
    buttonText: "#4F617D",
    features: [
      "Automatically schedule cleaning without the need for guest intervention",
      "Deduct the visit from the package balance",
      "Send the logo to a host with a confirmation of the number of visits received from the package",
      "30 free orders",
    ],
  },
];
export default function FirstStep({ properties }) {
  const [active, setActive] = useState(1);
  const [activePackage, setActivePackage] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="flex flex-col gap-[2px] mb-[16px]">
        <span className="text-[18px] md:text-[20px] font-[700] text-[#0A0A1F]">
          Service request for property
        </span>
      </div>

      <div className="flex flex-col gap-[16px] mb-[12px]">
        <span className="text-[16px] md:text-[18px] font-[700] text-[#4F617D]">
          Determine the property
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {properties.map((property) => (
            <div
              onClick={() => setActive(property.id)}
              key={property.id}
              className={`bg-[#F4F4F4] border ${
                active === property.id
                  ? "border-[#F59331] bg-[#FFF4E8]"
                  : "border-[#F4F4F4]"
              } overflow-hidden cursor-pointer hover:shadow-md transition-shadow rounded-[16px]`}
            >
              <div className="p-[12px]">
                <div className="mb-4 flex  flex-row justify-start items-start sm:items-center gap-[8px]">
                  <img
                    src={property.image}
                    alt="Property"
                    className="w-[62px] h-auto sm:h-[62px] object-contain rounded-[8px]"
                  />
                  <div className="flex flex-col justify-start items-start gap-[8px] w-fit">
                    <div className="bg-[#FFD9C2] text-[14px] md:text-[16px] text-[#4F617D] px-3 md:px-4 py-1 md:py-2 rounded-full font-[400] w-auto text-center sm:text-left">
                      {property.type}
                    </div>

                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/dash/property/Pin_duotone.svg"
                        alt="location"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] md:text-[16px] font-[400] text-[#4F617D]">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <div className="pr-2 lg:pr-4 flex items-center gap-1 border-r border-[#0000000F]">
                      <Image
                        src="/images/dash/property/Hotel, Building.svg"
                        alt="Floors"
                        width={16}
                        height={16}
                      />
                      <p className="text-[10px] sm:text-xs text-[#4F617D]">
                        {property.floors} floors
                      </p>
                    </div>

                    <div className="pr-2 lg:pr-4 flex items-center gap-1 border-r border-[#0000000F]">
                      <Image
                        src="/images/dash/property/Room, Service, Clean.svg"
                        alt="Rooms"
                        width={16}
                        height={16}
                      />
                      <p className="text-[10px] sm:text-xs text-[#4F617D]">
                        {property.rooms} rooms
                      </p>
                    </div>

                    <div className="pr-2 lg:pr-4 flex items-center gap-1 border-r border-[#0000000F]">
                      <Image
                        src="/images/dash/property/column-resize-square.svg"
                        alt="Size"
                        width={16}
                        height={16}
                      />
                      <p className="text-[10px] sm:text-xs text-[#4F617D]">
                        {property.square} m
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/dash/property/Bath, Bathroom.svg"
                        alt="Bathrooms"
                        width={16}
                        height={16}
                      />
                      <p className="text-[10px] sm:text-xs text-[#4F617D]">
                        {property.bath} bathrooms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[16px] mb-[32px]">
        <span className="text-[16px] md:text-[18px] font-[700] text-[#4F617D]">
          Package
        </span>

        {/* Package type tabs */}
        <div className="flex flex-col sm:flex-row bg-[#EEF1F4] rounded-[8px] p-[8px] gap-[8px]">
          <div className="flex-1 text-center py-[8px] bg-[#F59331] text-white font-medium rounded-[8px]">
            package
          </div>
          <div className="flex-1 text-center py-[8px] text-[#0A0A1F] font-[400] rounded-[8px]">
            one time
          </div>
          <div className="flex-1 text-center py-[8px] text-[#0A0A1F] font-[400] rounded-[8px]">
            Additional Services
          </div>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setActivePackage(pkg.id)}
              className={`border border-[#D1D5DB] group rounded-[16px] py-[12px] px-[16px] md:px-[26px] cursor-pointer hover:shadow-[0_1px_14px_0_rgba(0,0,0,0.05)] transition-shadow `}
            >
              <div className="border-b flex flex-col border-dashed border-[#D1D5DB]">
                <h3 className="text-[24px] md:text-[32px] font-[500] text-[#292760] mb-[4px]">
                  {pkg.name}
                </h3>

                <div className="flex items-center mb-[4px]">
                  <span
                    className={`text-[24px] md:text-[32px] font-[700]`}
                    style={{ color: pkg?.textColor }}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-[10px] md:text-[12px] text-[#4B5563] font-[500] ml-[6px]">
                    /monthly
                  </span>
                </div>

                <div className="text-[12px] md:text-[14px] text-[#6B7280] font-[500] mb-[4px]">
                  Get 7 free days
                </div>
              </div>

              <div className="border-b min-h-[180px] md:min-h-[220px] border-dashed border-[#E6E8EC] py-[16px]">
                <ul className="space-y-[12px] md:space-y-[16px]">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start md:items-center line-clamp-2 gap-[8px]"
                    >
                      <div
                        className={`min-w-[20px] md:min-w-[24px] h-[20px] md:h-[24px] mt-1 md:mt-0 rounded-full flex items-center justify-center`}
                        style={{ backgroundColor: pkg.bgColor }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.4 6.4L7.6 10.2C7.4 10.4 7.2 10.5 7 10.5C6.8 10.5 6.6 10.4 6.4 10.2L4.6 8.4C4.2 8 4.2 7.4 4.6 7C5 6.6 5.6 6.6 6 7L7 8L10 5C10.4 4.6 11 4.6 11.4 5C11.8 5.4 11.8 6 11.4 6.4Z"
                            fill={pkg.color}
                          />
                        </svg>
                      </div>
                      <span className="text-[12px] md:text-[14px] text-[#344054] font-[500]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <button
                  className={`py-[8px] md:py-[9px] bg-[#F4F4F4] min-h-[40px] md:min-h-[48px] w-full sm:w-[150px] md:w-[186px] px-[10px] group-hover:bg-[#F59331] group-hover:text-white text-center rounded-full mt-[7px] text-[14px] md:text-[16px] font-[500] transition-colors`}
                >
                  Choose package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
