"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [userData, setUserData] = useState({
    name: "Mohamed Alrajihi",
    email: "Omaralrajihi@gmail.com",
    phone: "+966 555 555 555",
    address: "Riyadh, Al Narjis Neighborhood",
  });
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/Ellipse 3.svg"
            alt="profile"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Mohamed Alrajihi</h1>
            <div className="flex items-center gap-[6px]">
              <Image
                src="/images/Profile 1.svg"
                alt="profile"
                width={16}
                height={16}
              />
              <span className="text-base text-(--main-light-color) font-normal">
                New worker
              </span>
            </div>

            <div className="flex  items-center gap-[6px]">
              <Image
                src="/images/Location.svg"
                alt="LOCATION"
                width={16}
                height={16}
              />
              <span className="text-base text-(--main-light-color) font-normal">
                {" "}
                Riyadh, Al Narjis Neighborhood
              </span>
            </div>
          </div>
        </div>
        <button className="bg-(--main-dark-color) text-white w-[170px] h-[40px] px-3 rounded-lg flex justify-center items-center gap-2">
          <Image
            src="/images/ic24-edit.svg"
            alt="edit"
            width={18}
            height={18}
          />
          <span className="text-base font-medium">Edit</span>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[#4F617D] text-lg font-bold">About</h3>
        <p className="text-base text-[#4F617D] font-normal">
          I am looking for reliable and professional cleaning services to keep
          my condominium unit clean. I make sure to choose services that suit my
          needs whether it's deep cleaning, daily, or after construction. I care
          about quality, punctuality, and the use of safe materials to ensure a
          healthy and comfortable environment.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[#4F617D] text-lg font-bold">
          Personal information
        </h3>
        <div className="flex flex-col w-full gap-[8px]">
          <label className="text-base font-medium text-(--main-dark-color)">
            Full Name
          </label>
          <input
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="border border-[#76767B] focus:outline-none outline-none text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
            value={userData.name}
          />
        </div>

        <div className="flex justify-between gap-4 items-center">
          <div className="flex flex-col w-full gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Email
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="border border-[#76767B] focus:outline-none outline-none text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              value={userData.email}
            />
          </div>

          <div className="flex flex-col w-full gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Phone Number
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              className="border border-[#76767B] focus:outline-none outline-none text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              value={userData.phone}
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-[8px]">
          <label className="text-base font-medium text-(--main-dark-color)">
            Address
          </label>
          <input
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
            className="border border-[#76767B] focus:outline-none outline-none text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
            value={userData.address}
          />
        </div>
      </div>
    </div>
  );
}
