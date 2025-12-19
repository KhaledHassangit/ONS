"use client";

import React, { useState } from "react";

const ThirdStep = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { id: 1, name: "Cleaning the garage", price: 50 },
    { id: 2, name: "Cleaning the pool", price: 50 },
    { id: 3, name: "Cleaning the pool", price: 50 },
    { id: 4, name: "Cleaning the pool", price: 50 },
    { id: 5, name: "Cleaning the surface", price: 50 },
    { id: 6, name: "Cleaning the garden", price: 50 },
    { id: 7, name: "Cleaning the garage", price: 50 },
    { id: 8, name: "Cleaning the pool", price: 50 },
    { id: 9, name: "Cleaning the surface", price: 50 },
    { id: 10, name: "Cleaning the pool", price: 50 },
    { id: 11, name: "Cleaning the garage", price: 50 },
    { id: 12, name: "Cleaning the garden", price: 50 },
    { id: 13, name: "Cleaning the pool", price: 50 },
    { id: 14, name: "Cleaning the pool", price: 50 },
    { id: 15, name: "Cleaning the surface", price: 50 },
  ];

  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-[16px]">
        <span className="text-[18px] md:text-[20px] font-[700] text-[#0A0A1F]">
          Service request for property
        </span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="text-[14px] md:text-[16px] font-[500] text-[#0A0A1F]">
          Add-on Services
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[16px] items-center mb-[16px]">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${
                selectedServices.includes(service.id)
                  ? "bg-[#FFF4E9] border "
                  : "bg-[#F4F4F4]"
              } group rounded-[8px] cursor-pointer hover:shadow-md border-[#F59331] hover:bg-[#FFF4E9] transition-all duration-200`}
              onClick={() => toggleService(service.id)}
            >
              <div className="p-[12px] md:p-[16px] flex flex-col items-center gap-[8px] md:gap-[12px]">
                <img
                  className="rounded-[8px] w-full h-[60px] sm:h-[70px] md:h-[80px] object-cover"
                  src="https://res.cloudinary.com/dkc5klynm/image/upload/v1750768767/a79f047ff74cb1d911e43df0b5535a9c3369ad10_mdraax.jpg"
                  alt="add-on-service"
                />

                <div className="flex items-center justify-between w-full">
                  <div className="text-[14px] md:text-[16px] font-[400] text-[#4F617D] line-clamp-2">
                    {service.name}
                  </div>

                  <div
                    className={`${
                      selectedServices.includes(service.id)
                        ? "bg-[#F59331]"
                        : "bg-[#4F617D]"
                    } rounded-[8px] px-[6px] md:px-[8px] py-[2px] md:py-[4px] transition-all duration-200 group-hover:bg-[#F59331] ml-1`}
                  >
                    <div className="text-[14px] md:text-[16px] font-[500] text-[#FFFFFF]">
                      ${service.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
