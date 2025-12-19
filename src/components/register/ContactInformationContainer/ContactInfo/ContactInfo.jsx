"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PhoneInput = dynamic(
  () => import("react-international-phone").then((mod) => mod.PhoneInput),
  { ssr: false }
);

// import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const phoneInputStyles = `
   .phone-input-container .react-international-phone-input-container {
     gap:8px !important;
   }

  .phone-input-container .react-international-phone-input {
    height: 48px !important;
    border-radius: 8px;
  }
  .phone-input-container .react-international-phone-country-selector-button {
    border-color: #76767B;
    background-color: white;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 10px;
  }
  .phone-input-container .react-international-phone-input-container {
    height: 48px !important;
  }
  .phone-input-container .react-international-phone-input {
    height: 48px !important;
  }
  .phone-input-container .react-international-phone-country-selector-dropdown {
    border-radius: 8px;
  }
`;

export default function ContactInfo({
  userData,
  setUserData,
  currentStep,
  setCurrentStep,
}) {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <style jsx global>
        {phoneInputStyles}
      </style>
      <div className="flex items-center gap-[32px]">
        <div className="w-[546px] h-[730px]">
          <Image
            src="/images/login/Frame 617061.svg"
            alt="contact-info"
            width={546}
            className="!h-full !w-full object-cover rounded-2xl"
            height={730}
          />
        </div>
        <div className="w-[643px] flex flex-col gap-[32px] h-[730px] justify-center bg-white rounded-2xl !p-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-xl font-medium text-(--main-dark-color)">
              Wat is uw contactinformatie?
            </h3>
            <p className="text-base font-medium text-[#76767B]">
              Welcome back! Please log in to continue
            </p>
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              first name
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter name"
              value={userData.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              last name
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter name"
              value={userData.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Email
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Phone
            </label>
            <div className="phone-input-container w-full">
              <PhoneInput
                defaultCountry="nl"
                value={userData.phone}
                onChange={(phone) => setUserData({ ...userData, phone: phone })}
                placeholder="023 723623"
                inputStyle={{
                  height: "48px",
                  width: "100%",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #76767B",
                  color: "#76767B",
                  padding: "10px",
                }}
                countrySelectorStyleProps={{
                  buttonStyle: {
                    border: "1px solid #76767B",
                    borderRight: "none",
                  },
                }}
              />
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            className="bg-(--main-orange-color) flex justify-center items-center !ms-auto text-white h-[48px] w-[96px] rounded-xl p-[10px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
