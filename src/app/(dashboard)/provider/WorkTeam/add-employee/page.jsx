"use client";
import { Select } from "antd";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const dispatch = useDispatch();
  const {isLoading , team} = useSelector((state) => state.joinTeam);
  const [employeeData , setEmployeeData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    address:"",
    postcode:"",
    city_id:"",
    region:"",
    experience:"",
    company:"",
    start_date:"",
  })
  
  function handleAddEmployee() {
    const formData = new FormData();
    formData.append("first_name", employeeData.first_name);
    formData.append("last_name", employeeData.last_name);
    formData.append("email", employeeData.email);
    formData.append("phone", employeeData.phone);
    formData.append("address", employeeData.address);
    formData.append("postcode", "");
    formData.append("city_id","");
    formData.append("region","");
    formData.append("experience", "");
    formData.append("company", "");
    formData.append("start_date", "");
    // formData.append("photo", employeeData.photo);
    // dispatch(handleJoinTeam(formData))
    // .unwrap()
    // .then(res => console.log(res))
  }


  return (
    <div className="flex add-employee-page flex-col gap-3 md:gap-4 w-full">
      <h3 className="font-bold text-xl md:text-2xl text-[#0A0A1F]">Add an employee</h3>
      <p className="text-base md:text-lg font-bold text-(--main-light-color)">
        Basic information
      </p>
      <div className="bg-[#F9F9F9] shadow-[0px_4px_24px_0px_#0000000F] rounded-xl p-3 md:p-[24px_18px] flex flex-col sm:flex-row gap-4 items-center">
        <Image
          alt="avatar image"
          src="/images/Avatar.svg"
          width={100}
          height={100}
          className="rounded-3xl w-[90px] h-[90px] sm:w-[116px] sm:h-[116px]"
        />
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <label
              id="file"
              className="bg-(--main-orange-color) text-white h-[40px] md:h-[44px] rounded-lg flex justify-center items-center p-[6px_12px] md:p-[6px_16px] text-sm md:text-base"
            >
              <span>add new photo</span>
              <input htmlFor="file" hidden type="file" />
            </label>
            <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-lg bg-[#FFF1F1] items-center flex justify-center">
              <Trash size={20} color="#C41919" />
            </div>
          </div>
          <p className="text-xs font-medium text-[#556987] text-center sm:text-left">
            Allowed jbg, gif or png, maximum size 800 kB
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3 md:gap-[16px] items-center">
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base font-bold text-[#0A0A1F]">
            first name
          </label>
          <input
          value={employeeData.first_name}
          onChange={(e) => setEmployeeData({...employeeData, first_name:e.target.value})}
            placeholder=""
            className="border border-[#76767B] rounded-lg h-[40px] md:h-[48px] p-[10px] outline-none w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base font-bold text-[#0A0A1F]">
            last name
          </label>
          <input
          value={employeeData.last_name}
          onChange={(e) => setEmployeeData({...employeeData, last_name:e.target.value})}
            placeholder=""
            className="border border-[#76767B] rounded-lg h-[40px] md:h-[48px] p-[10px] outline-none w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm md:text-base font-bold text-[#0A0A1F]">email</label>
        <div className="border border-[#76767B] gap-[10px] rounded-lg h-[40px] md:h-[48px] p-[10px] outline-none flex items-center w-full">
          <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
          <input value={employeeData.email} onChange={(e) => setEmployeeData({...employeeData, email:e.target.value})} placeholder="" className="outline-none border-none w-full text-sm md:text-base" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm md:text-base font-bold text-[#0A0A1F]">
          number phone
        </label>
        <div className="border border-[#76767B] gap-[10px] rounded-lg h-[40px] md:h-[48px] p-[10px] outline-none flex items-center w-full">
          <Image src="/images/call.svg" alt="sms" width={20} height={20} />
          <input value={employeeData.phone} onChange={(e) => setEmployeeData({...employeeData, phone:e.target.value})} placeholder="" className="outline-none border-none w-full text-sm md:text-base" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm md:text-base font-bold text-[#0A0A1F]">address</label>
        <div className="border border-[#76767B] gap-[10px] rounded-lg h-[40px] md:h-[48px] p-[10px] outline-none flex items-center w-full">
          <Image src="/images/Location.svg" alt="sms" width={20} height={20} />
          <input value={employeeData.address} onChange={(e) => setEmployeeData({...employeeData, address:e.target.value})} placeholder="" className="outline-none border-none w-full text-sm md:text-base" />
        </div>
      </div>

      <p className="text-base md:text-lg font-bold text-(--main-light-color) mt-1">
        المعلومات الوظيفية
      </p>

      <div className="flex flex-col gap-2">
        <label className="text-sm md:text-base font-bold text-[#0A0A1F]">job title</label>
        <Select 
         placeholder="Upholstery cleaning" options={[]} className="w-full" style={{ height: 'auto' }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base font-bold text-[#0A0A1F]">Contract type</label>
          <Select  placeholder="Full time" options={[]} className="w-full" style={{ height: 'auto' }} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base font-bold text-[#0A0A1F]">Employment history</label>
          <input 
            type="date" 
            value={employeeData.start_date}
            onChange={(e) => setEmployeeData({...employeeData, start_date:e.target.value})}
            placeholder="Enter employment history" 
            className="border border-[#76767B] rounded-lg h-[40px] md:h-[48px] p-[10px] outline-none w-full text-sm md:text-base"
          />
        </div>
      </div>

      <button onClick={handleAddEmployee} className="bg-(--main-orange-color) w-full sm:w-fit mt-2 text-white h-[40px] md:h-[48px] rounded-lg flex justify-center items-center p-[6px_16px] text-sm md:text-base">أضافه موظف جديد</button>
    </div>
  );
}
