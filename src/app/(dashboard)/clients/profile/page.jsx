"use client";

import { MapPin, User, Edit3 } from "lucide-react";
import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import {configs} from '../../../../configs'
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("@/components/map/Map"), { ssr: false });

const Page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("access_token"));
      setAccessToken(userData?.access_token || "");

      if (userData?.access_token) {
        axios
          .post(configs.baseURL + `profile?access-token=${userData.access_token}`)
          .then((response) => {
            if (response.data.status === 1) {
              setuserInfo(response.data.data);
            } else {
              console.log(
                "Login failed:",
                response.data.message || "Unexpected error"
              );
            }
          })
          .catch((error) => {
            console.log("API error:", error);
          });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    if (accessToken) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", userInfo?.name || "");
      formDataToSend.append("last_name", userInfo?.last_name || "");
      formDataToSend.append("mobile", userInfo?.mobile || "");
      formDataToSend.append("description", userInfo?.description || "");
      formDataToSend.append("city_id", userInfo?.city_id || "");
      formDataToSend.append("category_id", userInfo?.category_id || "");
      formDataToSend.append("lat", userInfo?.lat || "");
      formDataToSend.append("lng", userInfo?.lng || "");

      axios
        .post(
          configs.baseURL + `profile?access-token=${accessToken}`,
          formDataToSend
        )
        .then((response) => {
          if (response?.status == 1 || response?.data[0]?.status ||response.data.status === 1) {
            setuserInfo(response.data.data);
            toast.success(response.data[0]?.message || response.data[0]?.message);
          } else {
            console.log(
              "Login failed:",
              response.data[0]?.message || "Unexpected error"
            );
          }
        })
        .catch((error) => {
          console.log("API error:", error);
        })
        .finally(() => {
          setIsEditing(false);
        });
    } else {
      alert("Access token is not available. Please log in again.");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50">
        <div className="w-full">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className=" flex flex-col gap-[12px] ">
                <div className="w-[80px] h-[80px] bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src={userInfo?.avatar}
                    alt="Omar Alrajihi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between w-full space-x-4 responsive-class-info ">
                  <div className="flex flex-col gap-[16px] ">
                    <h2 className="text-[18px] font-[700] font-semibold text-gray-900">
                      {userInfo?.name} {userInfo?.last_name}
                    </h2>
                    <div className="flex items-center text-[16px] text-[#4F617D] font-[400] pb-[1px] ">
                      <User className="w-4 h-4 mr-1" />
                      New user
                    </div>
{isEditing ? (
  <div className="flex items-center text-[16px] text-[#4F617D] font-[400] pb-[1px] ">
                     <MyMap lat={userInfo?.lat} lng={userInfo?.lng} />
                    </div>
) : (
  <div className="flex items-center text-[16px] text-[#4F617D] font-[400] pb-[1px] ">
                      <MapPin className="w-4 h-4 mr-1" />
                      {userInfo?.address || "please insert your address in the profile Request"}
                    </div>
) }
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-[#292760] hover:bg-indigo-700 text-white px-[12px] min-w-[177px] min-h-[40px] py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <h3 className="text-[18px] font-[700] text-[#4F617D]">About</h3>
              {isEditing ? (
                <textarea
                  name="description"
                  value={userInfo?.description || ""}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="4"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-[16px] font-[400] text-[#4F617D] leading-[32px]">
                  {userInfo?.description ||
                    "Please add a description about yourself in the profile request."}
                </p>
              )}
            </div>

            <div className="p-6 flex flex-col gap-[16px]">
              <h3 className="text-[18px] font-[700] text-[#4F617D]">
                Personal information
              </h3>
              <div className="flex flex-col gap-[16px] ">
                <div className=" flex flex-col gap-[8px] ">
                  <label className="block text-[16px] font-[400] text-black ">
                    Phone number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="mobile"
                      value={userInfo?.mobile || ""}
                      onChange={handleInputChange}
                      className="w-full min-h-[48px]  p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+299 876 434 999"
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 border min-h-[48px]  border-black rounded-[8px] text-gray-900">
                      {userInfo?.mobile}
                    </div>
                  )}
                </div>

                <div className=" flex flex-col gap-[8px] ">
                  {isEditing ? (
                    <>
                      <label className="block text-[16px] font-[400] text-black">
                        first name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={userInfo?.name || ""}
                        onChange={handleInputChange}
                        className="w-full p-3 border min-h-[48px]  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Omar Alrajihi"
                      />
                      <label className="block text-[16px] font-[400] text-black">
                        last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={userInfo?.last_name || ""}
                        onChange={handleInputChange}
                        className="w-full p-3 border min-h-[48px]  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Omar Alrajihi"
                      />
                    </>
                  ) : (
                    <>
                      <label className="block text-[16px] font-[400] text-black">
                        Full name
                      </label>
                      <div className="p-3 bg-gray-50 min-h-[48px]  border border-black rounded-[8px] text-gray-900">
                        {userInfo?.name} {userInfo?.last_name}
                      </div>
                    </>
                  )}
                </div>

                <div className=" flex flex-col gap-[8px] ">
                  <label className="block text-[16px] font-[400] text-black">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={userInfo?.email || ""}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 cursor-not-allowed focus:ring-blue-500 focus:border-transparent"
                      placeholder="Omaralrajihi@gmail.com"
                      disabled
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 min-h-[48px] border border-black rounded-[8px] text-gray-900">
                      {userInfo?.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Save Button */}
              {isEditing && (
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
