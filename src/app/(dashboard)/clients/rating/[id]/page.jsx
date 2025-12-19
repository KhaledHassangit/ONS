"use client";

import { Rate, Select } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { _get, _post, getAccessToken } from "../../../../../api/apiInstance";
import { useParams, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function page() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [serviceDetails, setServiceDetails] = useState(null);
  const type = useSearchParams().get("type");

  const getServiceDetails = async () => {
    const response = await _get(
      `clean-service-view?access-token=${getAccessToken()}&id=${id}`
    );

    console.log(response.data.data[0]);
    setServiceDetails(response.data.data[0]);
    return response;
  };

  useEffect(() => {
    getServiceDetails();
  }, []);

  const handlePostRating = async () => {
    const response = await _post(
      `rate-service?access-token=${getAccessToken()}`,
      {
        service_id: id,
        type: type === "cleaning" ? "1" : "2",
        rate: rating,
        comment: feedback,
      }
    );

    console.log(
      "response",
      response.data.data[0].message == "Service Rate successfully"
    );
    if (response.data.data[0].message == "Service Rate successfully") {
      toast.success("Service Rate successfully");
    } else {
      toast.error("Service Rate failed");
    }
  };

  const [rating, setRating] = useState(5);

  // clients/rating/92?type=cleaning

  return (
    <div className="flex add-employee-page flex-col gap-4 w-full  mx-auto px-4 sm:px-6">
      <p className="text-base font-normal text-[#4F617D]">My Ratings</p>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-lg font-bold text-[#4F617D]">Service</p>
        {/* Commented section removed for brevity */}

        <div className="flex flex-col sm:flex-row items-start bg-[#F9F9F9] rounded-lg p-3 gap-4">
          <Image
            src={serviceDetails?.property_id?.image}
            alt={"Upholstery and carpet cleaning"}
            width={85}
            height={85}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col border-b border-[#E0E4EB] w-full pb-2 gap-2 justify-between">
              <div className="flex justify-between items-center">
                <p className="text-lg sm:text-xl font-medium text-(--main-dark-color) break-words">
                  {serviceDetails?.property_id?.name}
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/clean-Calendar.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-(--main-light-color)">
                  {serviceDetails?.date}
                </span>
              </div>

              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/Clock Circle.svg"
                  alt="clock"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-(--main-light-color)">
                  {serviceDetails?.time_from} - {serviceDetails?.time_to}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <div className="flex pb-2 flex-col gap-2 w-full">
                <h3 className="text-lg sm:text-xl font-medium text-(--main-dark-color)">
                  Nakheel Neighborhood Hotel
                </h3>
                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/Map Point.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-(--main-light-color)">
                    {serviceDetails?.property_id?.address}
                  </span>
                </p>

                <p className="flex gap-[6px] items-center">
                  <Image
                    src="/images/dollar-circle.svg"
                    alt="map point"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs font-normal text-(--main-light-color)">
                    {serviceDetails?.price} SAR
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="items-center rounded-lg p-3 flex flex-wrap gap-3">
          <p className="text-lg font-bold text-[#4F617D]">Provider</p>
          <div className="flex items-center gap-3">
            <Image
              src="/images/dash/Avatar.svg"
              alt="provider"
              width={45}
              height={45}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">
                {serviceDetails?.property_id?.name}
              </h3>
              <span className="text-base font-normal text-[#344054]">
                {serviceDetails?.created_at}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[84px] w-full max-w-[348px] bg-[#F4F4F4] rounded-xl !gap-3 p-3 flex items-center overflow-x-auto">
        <Rate
          starColor="#F8C519"
          className="flex"
          style={{ fontSize: "clamp(24px, 5vw, 40px)" }}
          defaultValue={5}
          onChange={(value) => setRating(value)}
        />
      </div>

      <div className="rounded-lg p-3 flex flex-col gap-3 w-full">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-[#0A0A1F]">Service quality</p>
            <Select
              options={[
                {
                  label: "Excellent cleaning",
                  value: "excellent_cleaning",
                },
                {
                  label: "Good cleaning",
                  value: "good_cleaning",
                },
                {
                  label: "Average cleaning",
                  value: "average_cleaning",
                },
                {
                  label: "Poor cleaning",
                  value: "poor_cleaning",
                },
              ]}
              placeholder="Excellent cleaning"
              className="w-full"
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm font-bold text-[#0A0A1F]">Feedback</p>
          <textarea
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
            className="w-full p-[10px] text-base font-normal placeholder:text-[#344054] border border-[#76767B] rounded-lg bg-white min-h-[115px]"
            placeholder="Enter your feedback"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
          <button
            onClick={handlePostRating}
            className="flex-1 h-[48px] py-2 bg-[#DCE9FA] text-[#2B7FFF] rounded-lg"
          >
            Rating
          </button>
          <button className="flex-1 h-[48px] py-2 bg-[#FFE4E2] text-[#FF3B30] rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
