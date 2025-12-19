"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleAddCleanServiceBefore, handleAddCleanServiceAfter, handleChangeStatusCleanService, handleGetCleaningService } from "@/features/provider/cleaning-service";
import Link from "next/link";
import { toast } from "react-toastify";

export default function CleaningDetailsPage() {
  const params = useParams();
  const id = params.cleaningId;
  
  // Images state
  const [beforeImages, setBeforeImages] = useState([]);
  const [afterImages, setAfterImages] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    const token = JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt";
    
    dispatch(handleGetCleaningService({ accesstoken: token }))
      .unwrap()
      .then(res => {
        const serviceData = res?.data?.[0]?.items?.find(item => item?.id == id);
        setFilteredData(serviceData);
        setIsLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch cleaning service data");
        setIsLoading(false);
        toast.error("Error loading cleaning details");
      });
  }, [id, dispatch]);

  // Handle image uploads
  const handleBeforeImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("service_id", id);
      
      const newImages = [];

      files.forEach(file => {
        const imageUrl = URL.createObjectURL(file);
        newImages.push(imageUrl);
        formData.append("image[]", file);
      });
      
      const token = JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt";
      
      dispatch(handleAddCleanServiceBefore({
        accesstoken: token,
        data: formData
      }))
      .unwrap()
      .then(res => {
        toast.success(res?.data[0]?.message || "Images uploaded successfully");
      }).catch(err => {
        toast.error(err?.data[0]?.message || "Failed to upload images");
      });
      
      setBeforeImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleAfterImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("service_id", id);
      
      const newImages = [];
      files.forEach(file => {
        const imageUrl = URL.createObjectURL(file);
        newImages.push(imageUrl);
        formData.append("image[]", file);
      });
      
      const token = JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt";
      
      dispatch(handleAddCleanServiceAfter({
        accesstoken: token,
        data: formData
      }))
      .unwrap()
      .then(res => {
        toast.success(res?.data[0]?.message || "Images uploaded successfully");
      }).catch(err => {
        toast.error(err?.data[0]?.message || "Failed to upload images");
      });
      
      setAfterImages((prev) => [...prev, ...newImages]);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-64">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full border-t-blue-500 animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Loading cleaning details...</p>
      </div>
    );
  }

  // Show error state
  if (error || !filteredData) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-64">
        <div className="text-red-500 text-xl">
          {error || "Could not find cleaning service details"}
        </div>
        <Link href="/dash-home" className="mt-4 text-blue-500 hover:underline">
          Return to dashboard
        </Link>
      </div>
    );
  }

  const handleChangeStatus = () => {
    dispatch(handleChangeStatusCleanService({ accesstoken: localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt",  data: { comment:"comment", service_id:id } }))
    .unwrap()
    .then(res => {
      console.log(res);
      toast.success(res?.data[0]?.message || "Status changed successfully");
    })
    .catch(err => {
      toast.error(err?.data[0]?.message || "Failed to change status");
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full px-2 sm:px-4">
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium text-[#0A0A1F]">
          Maintenance details
        </h4>
        <div className="flex flex-col sm:flex-row items-start bg-[#F9F9F9] rounded-lg p-3 gap-4">
          {filteredData.property_id?.image ? (
            <Image
              src={filteredData.property_id.image}
              alt={"Property image"}
              width={85}
              height={85}
              className="rounded-lg mx-auto sm:mx-0"
            />
          ) : (
            <div className="w-[85px] h-[85px] bg-gray-200 rounded-lg mx-auto sm:mx-0"></div>
          )}
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col w-full pb-2 gap-2 border-b border-[#E0E4EB] justify-between">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <p className="text-xl font-medium text-[#0A0A1F]">
                  {filteredData.property_id?.name || "Property name unavailable"}
                </p>
                <button className="w-[48px] h-[32px] bg-[#E2EDFF] rounded-[6px] p-[10px] text-[#007AFF] text-xs font-medium flex justify-center items-center">
                    {filteredData.status?.name || "N/A"}
                </button>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/clean-Calendar.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-[#4F617D]">
                  {filteredData.date || "Date not provided"}
                </span>
              </div>

              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/Clock Circle.svg"
                  alt="clock"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-[#4F617D]">
                  {filteredData.time_from && filteredData.time_to 
                    ? `${filteredData.time_from} - ${filteredData.time_to}` 
                    : "Time not specified"}
                </span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium text-[#0A0A1F]">
                  {filteredData.property_id?.city_id?.name || "City not specified"}
                </h3>
                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/Map Point.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-[#4F617D]">
                    {filteredData.property_id?.address || "Address not provided"}
                  </span>
                </p>
                {filteredData.property_id?.platform_link && (
                  <Link href={filteredData.property_id.platform_link} className="flex bg-[#FEF4EA] rounded-[36px] p-3 gap-[6px] w-fit items-center">
                    <img
                      src="/images/recycle.svg"
                      alt="platform icon"
                      width={14}
                      height={14}
                    />
                    <span className="text-xs font-normal text-[#FF8A00]">
                      {filteredData.property_id?.platform_id?.name || "Platform"}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Room pictures before and after
          </h4>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-3">
            <div className="flex flex-col rounded-lg w-full md:w-fit bg-[#F9F9F9] p-[12px_8px] gap-3">
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium text-[#0A0A1F] leading-[141%]">
                  Before cleaning
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
                <div className="flex gap-3 items-center">
                  <label
                    htmlFor="beforeFile"
                    className="w-[100px] h-[100px] border border-[#4F617D] rounded-lg py-4 flex flex-col gap-2 items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/gallery-add.svg"
                      alt="before cleaning"
                      width={24}
                      height={24}
                    />
                    <p className="text-xs font-normal">Add room photos</p>
                    <input
                      id="beforeFile"
                      type="file"
                      multiple
                      className="hidden"
                      accept="image/*"
                      onChange={handleBeforeImageUpload}
                    />
                  </label>
                </div>
                {beforeImages.map((img, idx) => (
                  <div
                    key={`before-${idx}`}
                    className="flex gap-3 items-center"
                  >
                    <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt="before cleaning"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                ))}
                {beforeImages.length === 0 && (
                  <>
                    <div className="flex gap-3 items-center">
                      <div className="w-[100px] h-[100px] rounded-lg py-4 flex flex-col gap-2 items-center justify-center">
                        <Image
                          src="/images/Rectangle 34624654.svg"
                          alt="before cleaning"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-[100px] h-[100px] rounded-lg py-4 flex flex-col gap-2 items-center justify-center">
                        <Image
                          src="/images/Rectangle 34624654.svg"
                          alt="before cleaning"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full md:w-fit rounded-lg bg-[#F9F9F9] p-[12px_8px] gap-3">
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium text-[#0A0A1F] leading-[141%]">
                  After cleaning
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
                <div className="flex gap-3 items-center">
                  <label
                    htmlFor="afterFile"
                    className="w-[100px] h-[100px] border border-[#4F617D] rounded-lg py-4 flex flex-col gap-2 items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/gallery-add.svg"
                      alt="after cleaning"
                      width={24}
                      height={24}
                    />
                    <p className="text-xs font-normal">Add room photos</p>
                    <input
                      id="afterFile"
                      type="file"
                      multiple
                      className="hidden"
                      accept="image/*"
                      onChange={handleAfterImageUpload}
                    />
                  </label>
                </div>
                {afterImages.map((img, idx) => (
                  <div key={`after-${idx}`} className="flex gap-3 items-center">
                    <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt="after cleaning"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                ))}
                {afterImages.length === 0 && (
                  <>
                    <div className="flex gap-3 items-center">
                      <div className="w-[100px] h-[100px] rounded-lg py-4 flex flex-col gap-2 items-center justify-center">
                        <Image
                          src="/images/Rectangle 34624654.svg"
                          alt="after cleaning"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-[100px] h-[100px] rounded-lg py-4 flex flex-col gap-2 items-center justify-center">
                        <Image
                          src="/images/Rectangle 34624654.svg"
                          alt="after cleaning"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">Employee</h4>

          <div className="flex gap-2 items-center">
            {filteredData.provider?.avatar ? (
              <Image
                src={filteredData.provider.avatar}
                alt="employee"
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div className="w-[48px] h-[48px] bg-gray-200 rounded-full"></div>
            )}
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-[#0A0A1F]">
                {filteredData.provider?.name || "Employee name not available"}
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Additional Services
          </h4>

          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            {filteredData.addition_service?.length > 0 ? (
              filteredData.addition_service.map(item => (
                <div className="w-full sm:w-[206px] flex-col flex justify-between bg-[#FFF4E9] border border-[#FF8A00] h-[153px] rounded-lg p-4" key={item?.addition_service?.id || Math.random()}>
                  {item?.addition_service?.image ? (
                    <Image 
                      src={item.addition_service.image} 
                      width={175} 
                      height={81} 
                      alt="additional service"
                      className="w-full h-auto object-cover" 
                    />
                  ) : (
                    <div className="w-full h-[81px] bg-gray-200"></div>
                  )}
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-sm sm:text-base font-normal text-[#4F617D]">{item?.addition_service?.name || "Unnamed service"}</p>
                    <button className="rounded-lg bg-[#FF8A00] p-2 min-w-[43px] h-[28px] flex justify-center items-center text-white text-base font-normal">
                      ${item?.addition_service?.price || 0}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-4 text-gray-500">
                No additional services found
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Problem description
          </h4>
          <p className="bg-[#F9F9F9] rounded-lg p-3 text-sm font-normal text-[#233B37] leading-6">
            {filteredData.property_id?.specail_note || "No notes provided"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 mt-4">
          <div className="flex gap-3">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white bg-[#292760] rounded-lg p-[10px_16px]">
            <Image
              width={16}
              height={16}
              src="/images/white-people.svg"
              alt="white people"
              className="w-[24px] h-[24px]"
            />
            <span className="text-base font-medium text-white">Reselect</span>
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white bg-(--main-orange-color) rounded-lg p-[10px_16px]" onClick={handleChangeStatus}>Submit</button>
          </div>

          <button className="w-full sm:w-auto flex bg-[#FF8A00] rounded-lg p-[10px_16px] items-center justify-center gap-2">
            <Image
              width={16}
              height={16}
              src="/images/key.svg"
              alt="key icon"
              className="w-[16px] h-[16px]"
            />
            <span className="text-base font-medium text-white">Smart Key</span>
          </button>
        </div>
      </div>
    </div>
  );
}
