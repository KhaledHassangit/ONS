"use client";
import { handleSendContactData } from "@/features/contactSlice";
import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function ContactUsPage() {
  const [contactData, setContactData] = useState({
    name: "",
    mobile: "",
    email: "",
    body: "",
  });
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const { is_loading } = useSelector((state) => state?.contact);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("access_token")) {
      setUserData(JSON.parse(localStorage.getItem("access_token"))?.data);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setContactData((prev) => ({
        ...prev,
        name: userData.name || "",
        mobile: userData.mobile || "",
      }));
    }
  }, [userData]);

  function handleSubmit() {
    try {
      const formData = new FormData();
      formData.append("name", userData?.name);
      formData.append("mobile", userData?.mobile);
      formData.append("email", contactData.email);
      formData.append("body", contactData.body);

      dispatch(handleSendContactData(formData))
        .unwrap()
        .then((res) => {
          console.log(res)
          if (res?.data[0]?.status == 1) {
            toast.success(res?.data[0]?.message);
            setContactData({
              name: userData?.name || "",
              email: "",
              body: "",
              mobile: userData?.mobile || "",
            });
          } else {
            toast.error(res?.data[0]?.message);
          }
        })
        .catch((e) => console.log(e));
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-base font-normal text-[#4F617D]">Contact us</p>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
            <p className="font-bold text-[18px] text-[var(--main-light-color)]">
              Welcome to Customer Service
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={userData?.avatar || "/images/service-section/Image-2.svg"}
                width={48}
                height={48}
                alt="user image"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-black text-[18px] font-medium">
                  {userData?.name}
                </p>
                <p className="font-normal leading-snug text-base text-[#344054]">
                  {userData?.created_at}
                </p>
              </div>
            </div>
          </div>
          <p className="max-w-[609px] text-[var(--main-dark-color)] text-base font-normal leading-relaxed">
            Do you have questions? Feel free to reach out to us for support or
            more information about on next stay. Our team is ready to answer all
            your queries.
          </p>

          <input
            value={contactData?.email}
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
            placeholder="Email address*"
            className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[48px]"
          />
          <textarea
            value={contactData.body}
            onChange={(e) =>
              setContactData({ ...contactData, body: e.target.value })
            }
            placeholder="Share your issues or queries here"
            className="border-[1.5px] focus:outline-none placeholder:text-[#030F0F] !text-[#030F0F] text-[12px] font-normal border-[#D5DAE1] rounded-lg p-[12px] h-[245px]"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="text-white h-[48px] rounded-md flex justify-center items-center bg-[var(--main-orange-color)]"
          >
            {is_loading ? "Loading..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
