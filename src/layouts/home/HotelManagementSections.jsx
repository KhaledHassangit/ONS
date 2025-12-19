import React from "react";
import swiperImg1 from "../../../public/images/RestHome/images/7oG0JxvkNTX6puYMYPiOtVenDg (1).png";
import swiperImg2 from "../../../public/images/RestHome/images/swiperImag2.png";
import swiperImg3 from "../../../public/images/RestHome/images/swiperImg3.png";
import swiperImg4 from "../../../public/images/RestHome/images/swiperImg4.png";
import { Check, ArrowRight } from "lucide-react";

export default function HotelManagementSections() {
  return (
    <div className="min-h-screen">
      <div className="h-[400vh] relative">
        {/* Section 1: Operations & Automation */}
        <div className="bg-[var(--main-color)] sticky top-0 min-h-screen lg:h-[500px] shadow rounded-xl mt-20 mb-2 px-4 sm:px-6 md:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-indigo-700/30 py-6 lg:py-8">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-tight text-white">
              Operations & Automation
            </h2>
            <p className="text-gray-300 text-base sm:text-lg my-4">
              Simplify daily tasks, automate admin, <br /> and manage your hotel
              from anywhere
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Property Management
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Payment Collection
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Mobile App
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Task Management
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Scanners
              </li>
            </ul>

            <p className="flex items-center gap-2 text-[var(--bg-color)] font-medium text-sm sm:text-base">
              Explore Operations & Automation{" "}
              <span>
                <ArrowRight size={18} />
              </span>
            </p>
          </div>

          <div className="flex justify-end items-center relative">
            <img
              src={swiperImg1}
              alt="Operations"
              className="w-[70%] md:w-[60%] lg:w-[100%] absolute -right-10 md:-right-16 lg:-right-40 rounded-xl"
            />
          </div>
        </div>

        {/* Section 2: Booking & Distribution */}
        <div className="bg-[var(--main-color)] sticky top-0 h-screen lg:h-[500px] shadow rounded-xl mt-2 px-4 sm:px-6 md:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-indigo-700/30 py-6 lg:py-8">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-tight text-white">
              Booking & Distribution
            </h2>
            <p className="text-gray-300 text-base sm:text-lg my-4">
              Capture more direct bookings and stay <br /> synced with every OTA
              — all in one place
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Booking Engine
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Metasearch
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Price Comparison Widget
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Channel Management
              </li>
            </ul>

            <p className="flex items-center gap-2 text-[var(--bg-color)] font-medium text-sm sm:text-base">
              Explore Bookings & Distribution{" "}
              <span>
                <ArrowRight size={18} />
              </span>
            </p>
          </div>

          <div className="flex justify-end items-center relative">
            <img
              src={swiperImg2}
              alt="Booking"
              className="w-[70%] md:w-[60%] lg:w-[100%] absolute -right-10 md:-right-16 lg:-right-40 rounded-xl"
            />
          </div>
        </div>

        {/* Section 3: Revenue & Insights */}
        <div className="bg-[var(--main-color)] sticky top-0 h-screen lg:h-[500px] shadow rounded-xl mt-2 px-4 sm:px-6 md:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-indigo-700/30 py-6 lg:py-8">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-tight text-white">
              Revenue & Insights
            </h2>
            <p className="text-gray-300 text-base sm:text-lg my-4">
              Track performance, adjust pricing, <br />
              and grow revenue with real-time data
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Revenue Management
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Upselling
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Reports & Insights
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Marketplace integration
              </li>
            </ul>

            <p className="flex items-center gap-2 text-[var(--bg-color)] font-medium text-sm sm:text-base">
              Explore Revenue & Insights{" "}
              <span>
                <ArrowRight size={18} />
              </span>
            </p>
          </div>

          <div className="flex justify-end items-center relative">
            <img
              src={swiperImg3}
              alt="Revenue"
              className="w-[70%] md:w-[60%] lg:w-[100%] absolute -right-10 md:-right-16 lg:-right-40 rounded-xl"
            />
          </div>
        </div>

        {/* Section 4: Guest Experience */}
        <div className="bg-[var(--main-color)] sticky top-0 h-screen lg:h-[500px] shadow rounded-xl mt-2 px-4 sm:px-6 md:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-indigo-700/30 py-6 lg:py-8">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-tight text-white">
              Guest Experience
            </h2>
            <p className="text-gray-300 text-base sm:text-lg my-4">
              Deliver faster check-ins, smarter messaging, <br />
              and seamless stays guest remember.
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Online Check-in
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Self-service Kiosk
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                AI Guest Messaging
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Guest Management
              </li>
              <li className="flex gap-2 items-center text-gray-300 font-medium text-sm sm:text-base">
                <Check
                  size={18}
                  className="text-[var(--bg-color)] flex-shrink-0"
                />{" "}
                Door Locks
              </li>
            </ul>

            <p className="flex items-center gap-2 text-[var(--bg-color)] font-medium text-sm sm:text-base">
              Explore Guest Experience{" "}
              <span>
                <ArrowRight size={18} />
              </span>
            </p>
          </div>

          <div className="flex justify-end items-center relative">
            <img
              src={swiperImg4}
              alt="Guest Experience"
              className="w-[70%] md:w-[60%] lg:w-[100%] absolute -right-10 md:-right-16 lg:-right-40 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
