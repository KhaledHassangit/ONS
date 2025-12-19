"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
});
import React from "react";

export default function ContactAddress({ userData , setUserData , setCurrentStep, currentStep }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="flex flex-col gap-[32px] h-[730px] justify-center bg-white rounded-2xl !p-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-xl font-medium text-(--main-dark-color)">
              Wat is uw adres?{" "}
            </h3>
            <p className="text-base font-medium text-[#76767B]">
              Welcome back! Please log in to continue{" "}
            </p>
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Address
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter address"
              value={userData.address}
              onChange={(e) => setUserData({...userData, address:e.target.value})}
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Postcode
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="2390"
              value={userData.postcode}
              onChange={(e) => setUserData({...userData, postcode:e.target.value})}
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Company
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Company"
              value={userData.company}
              onChange={(e) => setUserData({...userData, company:e.target.value})}
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Stad
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="stad"
              value={userData.city_id}
              onChange={(e) => setUserData({...userData, city_id:e.target.value})}
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Provinicie
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="stad"
              value={userData.region}
              onChange={(e) => setUserData({...userData, region:e.target.value})}
            />
          </div>

          <button
            onClick={() => setCurrentStep(3)}
            className="bg-(--main-orange-color) flex justify-center items-center  text-white h-[48px] w-[96px] rounded-xl p-[10px]"
          >
            Next
          </button>
        </div>

        <div className="h-[730px]">
            <Map userData={userData} height={700} setUserData={setUserData} onLocationChange={(position) => setUserData({...userData, lat: position.lat, lang: position.lng})}   />
        </div>
      </div>
    </div>
  );
}
