"use client";
import { handleGetTrainingById } from "@/features/provider/trainingSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page({ params }) {
  const dispatch = useDispatch();
  const resolvedParams = React.use(params);
const id = resolvedParams.trainingId;
  const { get_training_by_id_loading } = useSelector(state => state.training);
  const [trainingData, setTrainingData] = useState(null);

  useEffect(() => {
    dispatch(handleGetTrainingById({ id: id, accesstoken: "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt" }))
      .unwrap()
      .then(res => {
        if (res?.data?.status) {
          console.log(res?.data?.data[0]);
          setTrainingData(res?.data?.data[0]);
        }
      })
      .catch(err => {
        console.error("Error fetching training data:", err);
      });
        }, [dispatch, id]);
  
  if (get_training_by_id_loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!trainingData) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-lg text-gray-600">No training data found</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-[32px] max-w-[929px] mx-auto flex flex-col gap-3">
      <Image
        src={trainingData.image || "/images/dash/cleaners/Rectangle 318.svg"}
        width={929}
        height={314}
        alt={trainingData.title || "Training image"}
        className="object-cover rounded-lg w-full h-auto"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-[3px_2px] rounded-lg flex justify-center items-center h-[32px] w-[32px] bg-[#F9F9F9]">
            <Image
              src="/images/dash/cleaners/Dislike.svg"
              alt="Dislike"
              width={32}
              height={32}
            />
          </div>
          <div className="p-[3px_2px] rounded-lg flex justify-center items-center h-[32px] w-[32px] bg-[#F9F9F9]">
            <Image
              src="/images/dash/cleaners/Like.svg"
              alt="Like"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-[3px_2px] rounded-lg flex justify-center items-center h-[32px] w-[32px] bg-[#F9F9F9]">
            <Image
              src="/images/dash/cleaners/Import_duotone_line.svg"
              alt="Share"
              width={32}
              height={32}
            />
          </div>
          <div className="p-[3px_2px] rounded-lg flex justify-center items-center h-[32px] w-[32px] bg-[#F9F9F9]">
            <Image
              src="/images/dash/cleaners/Bookmark 2.svg"
              alt="Bookmark"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium text-black">
          {trainingData.title || "Training Title"}
        </h3>
        {/* <p className="text-base font-normal text-[#76767B]">
          {trainingData.description || "No description available"}
        </p> */}
      </div>

      <div dangerouslySetInnerHTML={{ __html: trainingData?.content }}></div>


      {/* Display the content safely using dangerouslySetInnerHTML if content is HTML formatted */}
      {/* {trainingData?.content ? (
        <div className="training-content" dangerouslySetInnerHTML={{ __html: trainingData?.content }}></div>
      ) : (
        // Fallback content if no content is provided from API
        <>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-black">
              1. Creating an Organized Cleaning Plan
            </h3>
            <p className="text-base font-normal text-[#76767B]">
              Before you start, identify the tasks that need to be completed. You
              can divide them by room or by type of work (such as floor cleaning,
              dusting, and organizing). This will help you save time and effort.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-black">
              2. Using the Right Tools
            </h3>
            <p className="text-base font-normal text-[#76767B]">
              For effective cleaning, make sure you have the following supplies:
            </p>
            <ul className="flex flex-col list-disc">
              <li className="text-base ms-5 font-normal text-[#76767B]">
                All-purpose cleaner for multiple surfaces
              </li>
              <li className="text-base ms-5 font-normal text-[#76767B]">
                Microfiber cloths for dusting and cleaning
              </li>
              <li className="text-base ms-5 font-normal text-[#76767B]">
                Vacuum cleaner for floors and carpets
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-black">
              3. Efficient Cleaning Techniques
            </h3>
            <p className="text-base font-normal text-[#76767B]">
              Clean from top to bottom to prevent having to clean the same area twice.
              Start with dusting ceiling fans and light fixtures before moving to lower surfaces.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-black">
              4. Regular Cleaning to Keep Your Home Tidy
            </h3>
            <p className="text-base font-normal text-[#76767B]">
              Schedule daily cleaning for simple tasks like organizing items and
              wiping surfaces.
            </p>
            <p className="text-base font-normal text-[#76767B]">
              Dedicate one day a week for deep cleaning each room.
            </p>
            <p className="text-base font-normal text-[#76767B]">
              Don't postpone small tasks to prevent them from piling up.
            </p>
          </div>
        </>
      )} */}
    </div>
  );
}
