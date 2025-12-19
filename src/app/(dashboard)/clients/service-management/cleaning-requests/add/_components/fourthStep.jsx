"use client";

import React, { useState } from "react";
import Image from "next/image";

const FourthStep = () => {
  const [activeMethod, setActiveMethod] = useState(0);

  const paymentMethods = [
    {
      id: 0,
      name: "Visa",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1750772440/image_18_1_g96wgj.png",
    },
    {
      id: 1,
      name: "Mastercard",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1750772504/image_13_1_dfrqdo.png",
    },
    {
      id: 2,
      name: "PayPal",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1750772179/d01e1a78217cf3b97411156ba391bad4e85ed43b_qcqurz.png",
    },
    {
      id: 3,
      name: "Cash",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1750772177/f2ff2c97fa5c26d988e793e98b1f9d3eb5351127_fnw3tx.png",
    },
  ];

  return (
    <div className="bg-white rounded-lg">
      <h1 className="text-[18px] md:text-[20px] text-[#0A0A1F] font-bold mb-4 md:mb-6">
        Service request for property
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] mb-4">
        {/* Left Column - Cost Breakdown */}
        <div>
          <h2 className="font-medium text-[16px] md:text-lg mb-2 md:mb-3">
            Total cost
          </h2>
          <div className="flex w-full md:w-fit gap-[20px] md:gap-[41px] bg-[#F4F4F4] items-center py-[8px] md:py-[10px] px-[12px] md:px-[17px] mb-[8px] border border-[#76767B] rounded-[12px] overflow-hidden">
            <div className="flex-1">
              <span className="text-[20px] md:text-[24px] font-bold text-[#4F617D]">
                4 hours
              </span>
            </div>
            <div className="bg-[#4F617D] py-[4px] px-[8px] rounded-[8px] text-white text-[14px] md:text-[16px]">
              <span>$50 / hour</span>
            </div>
          </div>

          <div className="bg-[#F7F8F9] p-[10px] md:p-[12px] rounded-lg">
            <div className="flex justify-between items-center mb-[12px] md:mb-[15px]">
              <span className="text-[#4F617D] text-[16px] md:text-[18px] font-[700]">
                Deep cleaning
              </span>
              <span className="text-[#F59331] text-[18px] md:text-[20px] font-[700]">
                200 $
              </span>
            </div>

            <div className="mb-[4px]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#4F617D] text-[16px] md:text-[18px] font-[700]">
                  Add-on services
                </span>
                <span className="text-[#F59331] text-[18px] md:text-[20px] font-[700]">
                  100 $
                </span>
              </div>

              <div className="pl-2 md:pl-4 border-l-2 border-gray-200 ml-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#4F617D] text-[14px] md:text-[16px]">
                    Cleaning the garden
                  </span>
                  <span className="text-[#292760] text-[16px] md:text-[20px]">
                    50 $
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#4F617D] text-[14px] md:text-[16px]">
                    Cleaning the garage
                  </span>
                  <span className="text-[#292760] text-[16px] md:text-[20px]">
                    50 $
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 md:pt-3">
              <span className="text-[#4F617D] text-[16px] md:text-[18px] font-bold">
                Total
              </span>
              <span className="text-[#F59331] text-[24px] md:text-[32px] font-bold">
                300 $
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Payment Form */}
        <div>
          <h2 className="font-medium text-[16px] md:text-lg mb-2 md:mb-3">
            Payment method
          </h2>
          <div className="flex flex-wrap items-center gap-[8px] md:gap-[12px] mb-[8px]">
            {paymentMethods.map((method, index) => (
              <div
                key={method.id}
                className={`border cursor-pointer transition-all duration-300 rounded-lg flex-1 lg:flex-none w-full sm:w-[100px] min-h-[50px] sm:min-h-[58px] p-2 sm:p-3 flex items-center justify-center ${
                  activeMethod === index
                    ? "border-[#F59331] bg-[#FFF4E8]"
                    : "border-[#EFEFF5] bg-[#EFEFF5]"
                } hover:border-[#F59331] hover:bg-[#FFF4E8]`}
                onClick={() => setActiveMethod(index)}
              >
                <img
                  className="w-[40px] sm:w-[50px] h-[16px] sm:h-[18px] object-contain"
                  src={method.image}
                  alt={method.name}
                />
              </div>
            ))}
          </div>

          <div className="bg-[#F9F9F9] p-[12px] md:p-[16px] rounded-[8px]">
            <div className="">
              <label className="block text-[#000000] text-[16px] md:text-[18px] font-[500] mb-2">
                Card number
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 md:p-4 pl-8 md:pl-9 border border-[#C1C9D7] rounded-lg focus:outline-none bg-white text-[14px] md:text-[16px]"
                  placeholder="1234 5678 4321 5678"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <img
                    className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]"
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1750775326/card_riweqr.png"
                    alt="Card"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[16px] md:mt-[22px]">
              <div>
                <label className="block text-[#000000] text-[16px] md:text-[18px] font-[500] mb-2">
                  Completion date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 md:p-4 pl-8 md:pl-9 border border-gray-200 rounded-lg focus:outline-none bg-white text-[14px] md:text-[16px]"
                    placeholder="12/28"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1750775467/calendar_dtmj4b.png"
                      alt="Calendar"
                      width={16}
                      height={16}
                      className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#000000] text-[16px] md:text-[18px] font-[500] mb-2">
                  Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 md:p-4 pl-8 md:pl-9 border border-gray-200 rounded-lg focus:outline-none bg-white text-[14px] md:text-[16px]"
                    placeholder="CVV"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1750775424/lock_bsnbqu.png"
                      alt="Security"
                      width={16}
                      height={16}
                      className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
