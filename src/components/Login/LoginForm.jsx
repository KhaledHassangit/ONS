"use client";
import { handleLoginProvider } from "@/features/provider/login";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email : "",
    password : ""
  })
  const  {loginProviderLoading} = useSelector(state => state.loginProvider)
  const dispatch = useDispatch();

  function handleSubmit() {
    const formData = new FormData();
    formData.append("email", loginData.email);
    formData.append("password", loginData.password);
    dispatch(handleLoginProvider(formData))
    .unwrap()
    .then(res => {
      console.log(res);
      if(res?.data[0]?.status == 1 || res?.status == 1 || res?.status === 200 || res?.status === 201){
        console.log(res);
        toast.success(res?.data[0]?.message);
        router.push("/activation-code")
      }
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div className="px-[30px] sm:px-[80px] md:px-[120px]">
      <div className="bg-white  mx-auto max-w-full md:max-w-[538px] items-center border-[rgba(0,0,0,8%)] shadow-[0_4px_4px_0px_rgba(0,0,0,0.08)] my-6 rounded-2xl p-[24px] border flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px] items-center">
          <Image
            src="/logo.svg"
            alt="On Next Stay Logo"
            width={62}
            height={89}
          />
          <h4 className="text-[20px] font-medium text-(--main-dark-color)">
            Get your smart lock code
          </h4>
          <p className="text-base font-medium text-[#76767B]">Welcome back!</p>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              Email
            </label>
            <input
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col w-full  gap-[8px]">
            <label className="text-base font-medium text-(--main-dark-color)">
              temp code
            </label>
            <input
              className="border border-[#76767B] text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter code"
            />
          </div>
        </div>

        <button
          onClick={() => handleSubmit()}
          className="bg-(--main-orange-color) w-full text-white h-[48px] rounded-xl flex justify-center items-center p-[10px]"
        >
          {loginProviderLoading ? "Loading...." : "Sign in"}
        </button>
      </div>
    </div>
  );
}
