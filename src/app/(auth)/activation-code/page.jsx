"use client";
import { handleActivateCode } from "@/features/auth/loginSlice";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function page() {
    const [otp, setOtp] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    
    function handleSubmit() {
      const formData  = new FormData();
      formData.append("activation_code", otp)
      dispatch(handleActivateCode(formData))
      .unwrap()
      .then(res =>{
        if(res?.data?.data[0]?.status == 1 || res?.status === 200 || res?.status === 201){
          toast.success(res?.data?.data[0]?.message);
          localStorage.setItem("access_token",JSON.stringify(res?.data?.data[0]));
          router.push("/dash-home")
        }else  {
          toast.error(res?.data?.data[0]?.message || "Activation code is incorrect");
        }
      }).catch(err => {
        toast.error(err?.data?.data[0]?.message || "Activation code is incorrect");
      })
    }
  return (
    <div>
      <div className="bg-white mx-auto my-[32px] p-[24px_48px] border flex items-center justify-center flex-col gap-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border-[rgba(0,0,0,0.08)] rounded-2xl w-[490px] h-[730px]">
        <Image
          src="/logo.svg"
          alt="On Next Stay Logo"
          width={68}
          height={97}
          className="mt-4"
        />
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="text-xl font-medium text-(--main-dark-color)">
            Enter the activation code{" "}
          </h3>
          <p className="text-base font-medium text-[#76767B]">
            Please enter the 4-character code sent To your email{" "}
          </p>
        </div>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="w-2"></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex gap-2 justify-center"
          inputStyle={{
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            border: '1px solid #76767B',
            fontSize: '18px',
            fontWeight: '500',
            outline: 'none',
            padding: '8px',
          }}
          focusStyle={{
            border: '1px solid var(--main-orange-color)',
            outline: 'none'
          }}
        />

        <button
            onClick={() => handleSubmit()}
          className="bg-(--main-orange-color) w-full text-white h-[48px] rounded-xl flex justify-center items-center p-[10px]"
        >
          Confirm
        </button>

        <p className="text-center flex items-center gap-1  text-base  font-medium">
          <span className="text-[#0A0A1F]">Resend the code through</span>
          <span className="text-(--main-orange-color)"> 58 s</span>
        </p>
      </div>
    </div>
  );
}
