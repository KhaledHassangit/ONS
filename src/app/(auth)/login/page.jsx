"use client";
import { handleLogin } from "@/features/auth/loginSlice";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function LoginPage() {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const login = () => {
      setError("");
      setIsLoading(true);
      console.log(loginData);
      const formData = new FormData();
      formData.append("email", loginData.email);
   
      dispatch(handleLogin(formData)).unwrap()
        .then((res) => {
          console.log(res);
          if (res?.data?.data[0]?.status == 1 || res.status === 200 || res.status === 201) {
            toast.success(res?.data?.data[0]?.message);
            localStorage.setItem("activation_code" , res?.data?.data[0]?.activation_code);
            router.push("/activation-code"); // Redirect to dashboard after successful login
          } else {
            setError(res?.data?.data[0]?.message || "Login failed. Please try again.");
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err?.message || "Login failed. Please check your email and try again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1200px] px-4 py-8 sm:px-6 md:px-8 lg:px-10 my-4 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Image - Hidden on small screens */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5">
          <img
            src="/images/login/Frame 61706.svg"
            className="rounded-2xl w-full h-full object-cover"
            alt="login-image"
          />
        </div>
        
        {/* Right Form */}
        <div className="bg-white p-5 sm:p-6 md:p-8 border flex items-center flex-col gap-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border-[rgba(0,0,0,0.08)] rounded-2xl w-full md:w-1/2 lg:w-2/5">
          <Image
            src="/logo.svg"
            alt="On Next Stay Logo"
            width={68}
            height={97}
            className="mt-2"
          />
          <div className="flex flex-col items-center text-center gap-2 sm:gap-4">
            <h3 className="text-xl font-medium text-(--main-dark-color)">
              Login with ONS
            </h3>
            <p className="text-base font-medium text-[#76767B]">
              Welcome back! Please log in to continue
            </p>
          </div>

          <div className="flex flex-col w-full gap-[8px] mt-2">
            <label className="text-base font-medium text-(--main-dark-color)">
              Email
            </label>
            <input
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              className="border border-[#76767B] focus:outline-none outline-none text-[14px] text-[#76767B] placeholder:text-[#76767B] h-[48px] rounded-lg p-[10px]"
              placeholder="Enter email"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm w-full">
              {error}
            </div>
          )}

          <button
            onClick={() => login()}
            disabled={isLoading || !loginData.email}
            className={`bg-(--main-orange-color) w-full text-white h-[48px] rounded-xl flex justify-center items-center p-[10px] ${
              isLoading || !loginData.email ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>

          <p className="text-center flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-base font-medium">
            <span className="text-[#0A0A1F]">Don't have an account?</span>
            <Link href="/register" className="text-(--main-orange-color)">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
