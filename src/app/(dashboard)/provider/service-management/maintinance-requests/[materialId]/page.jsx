"use client";
import LoadingSkeleton from "@/components/loadingSkeleton";
import { handleChangeStatusMaintenanceService, handleProviderAddMaintenanceServiceAfter, handleProviderAddMaintenanceServiceBefore, handleProviderMaintenanceServiceView } from "@/features/provider/maintainenance-sevice";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


export default function page() {
  // Task state management
  const params = useParams();
  const id = params.materialId;
  const dispatch = useDispatch();
  const {provider_maintenance_service_view_data , provider_maintenance_service_view_loading} = useSelector(state => state.providermaintainenaceService);
  const [allData , setAllData] = useState([]);

  const [beforeImages, setBeforeImages] = useState([]);
  const [afterImages, setAfterImages] = useState([]);
  

   
   useEffect(() =>{
    const formData = new FormData();
    formData.append("id", id);
    dispatch(handleProviderMaintenanceServiceView(
      {accesstoken : JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt" ,
      id 
      }))
    .unwrap()
    .then(res => {
      console.log(res)
      if(res?.status == 1) {
        console.log(res?.data[0])
        setAllData(res?.data[0])
      }else {
        toast.error(res?.data[0]?.message)
      }
    }).catch(err => {
      toast.error(err?.data[0]?.message)
    })
   } ,[])

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
      
      dispatch(handleProviderAddMaintenanceServiceBefore({
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
      
      dispatch(handleProviderAddMaintenanceServiceAfter({
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

  // Show loading skeleton when data is being fetched
  if (provider_maintenance_service_view_loading) {
    return <LoadingSkeleton />;
  }

  const handleChangeStatus = () => {
    dispatch(handleChangeStatusMaintenanceService({ accesstoken: localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken"))?.accessToken : "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt",  data: { comment:"comment", service_id:id } }))
    .unwrap()
    .then(res => {
      console.log(res);
      toast.success(res?.data[0]?.message || "Status changed successfully");
    })
    .catch(err => {
      toast.error(err?.data[0]?.message || "Failed to change status");
    });
  }
  
  return (
    <div className="flex flex-col gap-4 px-2 sm:px-4">
      <div className="bg-[#F4F4F4] rounded-xl p-2 sm:p-3 flex flex-col sm:flex-row gap-[16px]">
        <Image
          src={allData?.property_id?.image || "/images/Rectangle 34624654.svg"} 
          alt={allData?.property_id?.name || "Property"}
          width={100}
          height={100}
          className="mx-auto sm:mx-0"
        />
        <div className="flex flex-col !w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-base font-normal text-[var(--main-dark-color)]">
              {allData?.property_id?.name}
            </p>
            <button className="bg-[#FFD9C2] flex justify-center items-center h-[35px] rounded-[36px] p-3 text-base font-normal text-[#4F617D] mt-2 sm:mt-0">
              {allData?.property_id?.property_type_id?.name}
            </button>
          </div>

          <div className="flex items-center mt-2 sm:mt-0">
            <Image
              src="/images/Pin_duotone.svg"
              alt="map point"
              width={24}
              height={24}
            />
            <p className="text-sm sm:text-base font-normal text-[var(--main-light-color)]">
              {allData?.property_id?.address}
            </p>
          </div>

          <div className="flex flex-wrap mt-2 gap-2 sm:gap-4 items-center">
            <div className="flex gap-1 items-center">
              <Image
                src="/images/dash/property/Hotel, Building.svg"
                alt="Hotel , Building"
                width={16}
                height={16}
                className="flex-shrink-0"
              />
              <p className="text-xs flex items-center gap-1 font-normal text-[var(--main-light-color)]">
                <span>{allData?.property_id?.floor}</span> <span>Floors</span>
              </p>
            </div>

            <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
              <Image
                src="/images/dash/property/Room, Service, Clean.svg"
                alt="Hotel , Building"
                width={16}
                height={16}
                className="flex-shrink-0"
              />
              <p className="text-xs flex items-center gap-1 font-normal text-[var(--main-light-color)]">
                <span>{allData?.property_id?.number_room}</span> <span>Rooms</span>
              </p>
            </div>

            <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
              <Image
                src="/images/dash/property/column-resize-square.svg"
                alt="Hotel , Building"
                width={16}
                height={16}
                className="flex-shrink-0"
              />
              <p className="text-xs flex items-center gap-1 font-normal text-[var(--main-light-color)]">
                <span>{allData?.property_id?.area}</span> <span>m</span>
              </p>
            </div>

            <div className="flex gap-1 items-center pl-2 border-l border-l-black/10">
              <Image
                src="/images/dash/property/Bath, Bathroom.svg"
                alt="Hotel , Building"
                width={16}
                height={16}
                className="flex-shrink-0"
              />
              <p className="text-xs flex items-center gap-1 font-normal text-[var(--main-light-color)]">
                <span>{allData?.property_id?.number_bathroom}</span> <span>bathrooms</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium text-[#0A0A1F]">
          Maintenance details
        </h4>
        <div className="flex flex-col sm:flex-row items-start bg-[#F9F9F9] rounded-lg p-3 gap-4">
          <Image
            src={allData?.property_id?.image || "/images/Rectangle 34624654.svg"}
            alt={allData?.property_id?.name || "Property"}
            width={85}
            height={85}
            className="rounded-lg mx-auto sm:mx-0"
          />
          <div className="flex flex-col w-full gap-3">
            <div className="flex gap-3 items-center border-b border-[#E0E4EB] pb-2">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-xl font-medium text-[var(--main-dark-color)]">
                  {allData?.property_id?.city_id?.name}
                </h3>
                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/Map Point.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-[var(--main-light-color)]">
                    {allData?.property_id?.address}
                  </span>
                </p>

                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/dollar-circle.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-[var(--main-light-color)]">
                    250 SAR
                  </span>
                </p>

                <div className="flex bg-[#FEF4EA] rounded-[36px] p-3 gap-[6px] w-fit items-center">
                  <Image
                    src="/images/recycle.svg"
                    alt="phone"
                    width={14}
                    height={14}
                  />
                  <span className="text-xs font-normal text-[var(--main-orange-color)]">
                    airbnb
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full pb-2 gap-2 justify-between">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="text-xl font-medium text-[var(--main-dark-color)]">
                  {allData?.property_id?.name}
                </p>
                <button className="w-[48px] h-[32px] bg-[#E2EDFF] rounded-[6px] p-[10px] text-[#007AFF] text-xs font-medium flex justify-center items-center mt-2 sm:mt-0">
                  {allData?.status?.name}
                </button>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/clean-Calendar.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-[var(--main-light-color)]">
                  {allData?.date}
                </span>
              </div>

              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/Clock Circle.svg"
                  alt="clock"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-[var(--main-light-color)]">
                 {allData?.time_from} - {allData?.time_to}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Room pictures before and after
          </h4>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex flex-col rounded-lg w-full sm:w-fit bg-[#F9F9F9] p-[12px_8px] gap-3">
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium text-[#0A0A1F] leading-[141%]">
                  Before cleaning
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
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

            <div className="flex flex-col w-full sm:w-fit rounded-lg bg-[#F9F9F9] p-[12px_8px] gap-3 mt-3 sm:mt-0">
              <div className="flex flex-col gap-3">
                <p className="text-base font-medium text-[#0A0A1F] leading-[141%]">
                  After cleaning
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
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
          <h4 className="text-lg font-medium text-[#0A0A1F]">employee</h4>

          <div className="flex gap-2 items-center">
              <Image
                src={allData?.provider?.avatar || "/images/Rectangle 34624648.svg"}
              alt="employee"
              width={48}
              className="rounded-full"
              height={48}
            />
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-[#0A0A1F]">
                {allData?.provider?.name}
              </h4>
              {/* <p className="text-base font-normal text-[#76767b]">
                Operations Manager
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Problem description
          </h4>
         <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex w-full sm:w-[40%] flex-col gap-2">
            <div className="flex w-full items-center gap-[6px]">
                <Image
                  src="/images/clean-Calendar.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-[var(--main-light-color)]">
                  {allData?.date}
                </span>
              </div>

              <div className="flex w-full items-center gap-[6px]">
                <Image
                  src="/images/Clock Circle.svg"
                  alt="clock"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-[var(--main-light-color)]">
                  {allData?.time_from} - {allData?.time_to}
                </span>
              </div>

              <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/dollar-circle.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm font-normal text-[var(--main-light-color)]">
                    250 SAR
                  </span>
                </p>
          </div>
         <p className="bg-[#F9F9F9] rounded-lg p-3 text-sm font-normal flex items-center justify-center text-[#233B37] leading-6">
            {allData?.property_id?.specail_note}
          </p>
         </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex gap-3 items-center w-full sm:w-auto">
            <Link href="/provider/service-management/maintinance-requests/additional-services" className="bg-[#292760] !text-white rounded-lg p-[10px_16px] h-[40px] flex gap-[10px] justify-center items-center w-full sm:w-auto">
             <Image src="/images/white-people.svg" alt="white people" width={16} height={16}/>
             <span>resellect</span>
            </Link>

            <button className="bg-[var(--main-orange-color)] text-white rounded-lg p-[10px_16px] h-[40px] gap-2 flex justify-center items-center w-full sm:w-auto mt-2 sm:mt-0" onClick={handleChangeStatus}>Submit</button>
          </div>

          <button className="bg-[var(--main-orange-color)] text-white rounded-lg p-[10px_16px] h-[40px] gap-2 flex justify-center items-center w-full sm:w-auto mt-2 sm:mt-0">
            <Image
              src="/images/Property 38.svg"
              alt="key image"
              width={16}
              height={16}
            />
            <span>Smart Key</span>
          </button>
        </div>
      </div>
    </div>
  );
}
