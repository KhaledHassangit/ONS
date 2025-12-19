"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FirstStep from "./_components/firstStep";
import SecondStep from "./_components/secondStep";
import ThirdStep from "./_components/thirdStep";
import FourthStep from "./_components/fourthStep";

const properties = [
  {
    id: 1,
    type: "Villa",
    location: "Riyadh, Saudi Arabia,",
    floors: 3,
    rooms: 7,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
  {
    id: 2,
    type: "Villa",
    location: "Riyadh, Saudi Arabia,",
    floors: 3,
    rooms: 7,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
  {
    id: 3,
    type: "Villa",
    location: "Riyadh, Saudi Arabia,",
    floors: 3,
    rooms: 7,
    square: 300,
    bath: 4,
    image: "/images/dash/property/Rectangle 34624624.svg",
  },
];

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
export default function page() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      return;
    }
  }, []);

  return (
    <div className="">
      <div className="text-[#4F617D] mb-[10px] text-[16px] font-[400]">
        Cleaning Request
      </div>

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

      {/* Package section */}
      {currentStep === 1 && <FirstStep properties={properties} />}

      {currentStep === 2 && <SecondStep properties={properties} />}

      {currentStep === 3 && <ThirdStep />}

      {currentStep === 4 && <FourthStep />}

      <div className="flex justify-end items-center gap-[16px]">
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
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
    </div>
  );
}
