import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="p-[32px_120px] max-w-[929px] mx-auto flex flex-col gap-3">
      <Image
        src="/images/dash/cleaners/Rectangle 318.svg"
        width={929}
        height={314}
        alt="cleaner"
        className="object-cover rounded-lg"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-[3px_2px] rounded-lg flex justify-center items-center h-[32px] w-[32px] bg-[#F9F9F9]">
          <Image
            src="/images/dash/cleaners/Dislike.svg"
            alt="Like"
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
            alt="Like"
            width={32}
            height={32}
          />
          </div>
          <div className="p-[3px_2px] rounded-lg flex justify-center items-center h-[32px] w-[32px] bg-[#F9F9F9]">
          <Image
            src="/images/dash/cleaners/Bookmark 2.svg"
            alt="Like"
            width={32}
            height={32}
          />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium text-black">
          Develop an organized cleaning plan
        </h3>
        <p className="text-base font-normal text-[#76767B]">
          Cleaning your home is an essential task for maintaining a clean and
          healthy environment, but it can be overwhelming if not organized
          properly.{" "}
        </p>
      </div>

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
            For effective cleaning, make sure you have the following supplies:
          </li>
          <li className="text-base ms-5 font-normal text-[#76767B]">
            For effective cleaning, make sure you have the following supplies:
          </li>
          <li className="text-base ms-5 font-normal text-[#76767B]">
            For effective cleaning, make sure you have the following supplies:
          </li>
        </ul>
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
          Don’t postpone small tasks to prevent them from piling up.
        </p>
      </div>
    </div>
  );
}
