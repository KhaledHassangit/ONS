"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const initialTasks = [
  { id: 1, text: "Changing bed linens", completed: true },
  { id: 2, text: "Clean the bathrooms", completed: true },
  { id: 3, text: "Q flooring", completed: false },
  { id: 4, text: "Damage inspection", completed: true },
];

export default function page() {
  // Task state management
  const [tasks, setTasks] = useState(initialTasks);

  // Timer state management
  const [isExecuting, setIsExecuting] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0); // in seconds
  const [timerDisplay, setTimerDisplay] = useState({ minutes: 9, seconds: 10 });
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(30);
  const intervalRef = useRef(null);

  // Status tracking
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Images state
  const [beforeImages, setBeforeImages] = useState([]);
  const [afterImages, setAfterImages] = useState([]);

  // Check if all required tasks are completed
  const allTasksCompleted = tasks.every((task) => task.completed);

  // Timer functionality
  useEffect(() => {
    if (isExecuting && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed((prevTime) => {
          const newTime = prevTime + 1;
          updateTimerDisplay(newTime);
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isExecuting, isPaused]);

  // Update timer display
  const updateTimerDisplay = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    setTimerDisplay({ minutes, seconds });
  };

  // Toggle task completion
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle pause/resume button click
  const handlePauseResume = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  // Handle finish button click
  const handleFinish = () => {
    if (!allTasksCompleted) {
      alert("You need to complete all tasks before finishing");
      return;
    }

    // Stop the timer
    setIsExecuting(false);
    clearInterval(intervalRef.current);

    // Show success message or navigate
    setIsTaskCompleted(true);
    setShowSuccess(true);
  };

  // Handle time adjustments
  const incrementHours = () => {
    setHours((prev) => prev + 1);
  };

  const incrementMinutes = () => {
    if (minutes + 30 >= 60) {
      setHours((prev) => prev + 1);
      setMinutes((prev) => (prev + 30) % 60);
    } else {
      setMinutes((prev) => prev + 30);
    }
  };

  // Handle image uploads
  const handleBeforeImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBeforeImages((prev) => [...prev, imageUrl]);
    }
  };

  const handleAfterImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAfterImages((prev) => [...prev, imageUrl]);
    }
  };

  // Calculate progress percentage for the timer
  const progressPercentage = Math.min(
    100,
    (timeElapsed / (hours * 3600 + minutes * 60)) * 100
  );
  const conicGradient = `conic-gradient(#FF7E00 0%, #FF7E00 ${progressPercentage}%, #FFE7CF ${progressPercentage}%, #FFE7CF 100%)`;

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#F4F4F4] rounded-xl p-3 flex gap-[16px]">
        <Image
          src="/images/Rectangle 34624624.svg"
          alt="dollar-circle"
          width={100}
          height={100}
        />
        <div className="flex flex-col !w-full">
          <div className="flex justify-between items-center">
            <p className="text-base font-normal text-(--main-dark-color)">
              Guest House Riyadh
            </p>
            <button className="bg-[#FFD9C2] flex justify-center items-center h-[35px] rounded-[36px] p-3 text-base font-normal text-[#4F617D]">
              Villa
            </button>
          </div>

          <div className="flex items-center">
            <Image
              src="/images/Pin_duotone.svg"
              alt="map point"
              width={24}
              height={24}
            />
            <p className="text-base font-normal text-(--main-light-color)">
              Riyadh, Saudi Arabia, Al Nakheel Street
            </p>
          </div>

          <div className="flex mt-2  gap-4 items-center">
            <div className="flex gap-1 items-center">
              <Image
                src="/images/dash/property/Hotel, Building.svg"
                alt="Hotel , Building"
                width={16}
                height={16}
                className="flex-shrink-0"
              />
              <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                <span>3</span> <span>Floors</span>
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
              <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                <span>7</span> <span>Rooms</span>
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
              <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                <span>300</span> <span>m</span>
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
              <p className="text-xs flex items-center gap-1 font-normal text-(--main-light-color)">
                <span>4</span> <span>bathrooms</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium text-[#0A0A1F]">
          Maintenance details
        </h4>
        <div className="flex items-start  bg-[#F9F9F9] rounded-lg p-3  gap-4">
          <Image
            src={"/images/new-order.svg"}
            alt={"Upholstery and carpet cleaning"}
            width={85}
            height={85}
            className="rounded-lg"
          />
          <div className="flex flex-col w-full gap-3">
            <div className="flex gap-3 items-center border-b border-[#E0E4EB]">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium text-(--main-dark-color)">
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
                    Riyadh, Al Narjis Neighborhood
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
                    250 SAR
                  </span>
                </p>

                <div className="flex bg-[#FEF4EA] rounded-[36px] p-3 gap-[6px]  w-fit items-center">
                  <Image
                    src="/images/recycle.svg"
                    alt="phone"
                    width={14}
                    height={14}
                  />
                  <span className="text-xs  font-normal text-(--main-orange-color)">
                    airbnb
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            <div className="flex flex-col w-full pb-2 gap-2  justify-between">
              <div className="flex justify-between  items-center">
                <p className="text-xl font-medium text-(--main-dark-color)">
                  Upholstery and carpet cleaning
                </p>
                <button className="w-[48px] h-[32px] bg-[#E2EDFF] rounded-[6px] p-[10px] text-[#007AFF] text-xs font-medium flex justify-center items-center">
                  New
                </button>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/images/clean-Calendar.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-normal text-(--main-light-color)">
                  June 12, 2026
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
                  8:00 pm - 10:00 pm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Room pictures before and after
          </h4>

          <div className="flex items-center gap-3">
            <div className="flex flex-col rounded-lg w-fit bg-[#F9F9F9] p-[12px_8px]  gap-3">
              <div className="flex  flex-col gap-3  ">
                <p className="text-base font-medium text-[#0A0A1F] leading-[141%]">
                  Before cleaning
                </p>
              </div>
              <div className="flex gap-2 items-center">
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
                      <div className="w-[100px] h-[100px] rounded-lg py-4  flex flex-col gap-2 items-center justify-center">
                        <Image
                          src="/images/Rectangle 34624654.svg"
                          alt="before cleaning"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-[100px] h-[100px] rounded-lg py-4  flex flex-col gap-2 items-center justify-center">
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

            <div className="flex flex-col w-fit rounded-lg bg-[#F9F9F9] p-[12px_8px]  gap-3">
              <div className="flex  flex-col gap-3 ">
                <p className="text-base font-medium text-[#0A0A1F] leading-[141%]">
                  After cleaning
                </p>
              </div>
              <div className="flex gap-2 items-center">
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
                      <div className="w-[100px] h-[100px] rounded-lg py-4  flex flex-col gap-2 items-center justify-center">
                        <Image
                          src="/images/Rectangle 34624654.svg"
                          alt="after cleaning"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-[100px] h-[100px] rounded-lg py-4  flex flex-col gap-2 items-center justify-center">
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
              src="/images/Rectangle 34624648.svg"
              alt="employee"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-[#0A0A1F]">
                Leslie Alexander
              </h4>
              <p className="text-base font-normal text-[#76767b]">
                Operations Manager
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="text-lg font-medium text-[#0A0A1F]">
            Problem description
          </h4>
          <p className="bg-[#F9F9F9] rounded-lg p-3 text-sm font-normal flex items-center justify-center text-[#233B37] leading-6">
            Poor cooling has been reported in the air conditioner located in
            Office 204 on the second floor. The user noted that the air
            conditioner was not cooling sufficiently and that water was leaking
            from the indoor unit. Please check the filters and gas, and ensure
            that the pipes and connections are in good condition. A full test is
            recommended after maintenance to ensure efficient operation.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link href="/cleaners/service-management/maintinance-requests/additional-services" className="bg-(--main-orange-color) !text-white  rounded-lg p-[10px_16px] h-[40px] flex justify-center items-center">
             Submit the  Order
            </Link>
            <button className=" border border-[#FF3B30] text-[#FF3B30]  rounded-lg p-[10px_16px] h-[40px] flex justify-center items-center">
              Reject Order
            </button>
          </div>

          <button className=" bg-(--main-orange-color) text-white  rounded-lg p-[10px_16px] h-[40px] gap-2 flex justify-center items-center">
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
