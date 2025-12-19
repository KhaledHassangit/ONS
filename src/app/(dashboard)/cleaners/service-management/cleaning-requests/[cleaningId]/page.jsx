"use client";
import { Check } from "lucide-react";
import Image from "next/image";
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
  const allTasksCompleted = tasks.every(task => task.completed);

  // Timer functionality
  useEffect(() => {
    if (isExecuting && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(prevTime => {
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
    setIsPaused(prevPaused => !prevPaused);
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
    setHours(prev => prev + 1);
  };

  const incrementMinutes = () => {
    if (minutes + 30 >= 60) {
      setHours(prev => prev + 1);
      setMinutes(prev => (prev + 30) % 60);
    } else {
      setMinutes(prev => prev + 30);
    }
  };

  // Handle image uploads
  const handleBeforeImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBeforeImages(prev => [...prev, imageUrl]);
    }
  };

  const handleAfterImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAfterImages(prev => [...prev, imageUrl]);
    }
  };

  // Calculate progress percentage for the timer
  const progressPercentage = Math.min(100, (timeElapsed / (hours * 3600 + minutes * 60)) * 100);
  const conicGradient = `conic-gradient(#FF7E00 0%, #FF7E00 ${progressPercentage}%, #FFE7CF ${progressPercentage}%, #FFE7CF 100%)`;

  return (
    <div className="flex flex-col gap-4">
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
            <div className="flex flex-col w-full pb-2 gap-2 border-b border-[#E0E4EB] justify-between">
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

            <div className="flex gap-3 items-center">
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
                  <div key={`before-${idx}`} className="flex gap-3 items-center">
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

        <div className="flex gap-4 items-center">
          <div className="bg-[#F6F6F6] min-h-[313px] min-w-[643px] rounded-xl p-4 flex flex-col justify-between !gap-4">
            <h4 className="text-lg font-medium  text-black">
              The task cannot be finalized until all menu steps have been
              completed.
            </h4>
            <div className="flex flex-col gap-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex !items-center min-w-[260px] gap-[10px] p-[10px] w-fit h-[48px] rounded-lg border ${
                    task.completed
                      ? "bg-[#FFECDA] border-(--main-orange-color)"
                      : "text-[#76767B] border-[#76767B]"
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-[18px] rounded-[6px] h-[18px] border-[1.13px] flex items-center justify-center transition-all ${
                      task.completed
                        ? "bg-(--main-orange-color) text-white"
                        : "border-[#DDDFDF] bg-white"
                    }`}
                  >
                    {task.completed && <Check size={12} strokeWidth={3} />}
                  </button>
                  <span
                    className={`text-sm flex justify-center items-center ${
                      task.completed ? "text-gray-600" : "text-gray-800"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
            
            {isTaskCompleted && (
              <div className="mt-4 p-3 bg-[#E6F4EA] rounded-lg text-[#34A853] font-medium">
                Task completed successfully! All items have been checked.
              </div>
            )}
          </div>

          <div className="bg-[#F6F6F6] min-h-[313px] min-w-[462px] rounded-xl flex p-4 gap-[26px]">
            <div className="flex flex-col justify-between gap-[41px]">
                <div className="flex gap-[10px] items-center">
                    <div className="w-4 h-4 rounded-full bg-[#FF7E00]"></div>
                    <span className="text-base font-medium text-(--main-orange-color)">
                      {isPaused ? "Paused" : "Executing the task"}
                    </span>
                </div>

                <div className="w-[220px] h-[220px] rounded-full bg-[#F5933114] relative flex items-center justify-center">
                    <div className="w-[220px] rounded-full h-[220px] absolute" 
                         style={{background: isExecuting ? conicGradient : "radial-gradient(100% 100% at 142.5% 13.75%, rgba(255, 255, 255, 0) 0%, #F59331 100%)"}}></div>
                    <div className="w-[200px] h-[200px] rounded-full bg-[#F6F6F6] absolute flex items-center justify-center">
                        <p className="text-(--main-orange-color) text-[40px] font-medium">
                            {String(timerDisplay.minutes).padStart(2, '0')}:
                            <span className="text-(--main-orange-color)">
                              {String(timerDisplay.seconds).padStart(2, '0')}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-10 h-fit !mt-auto justify-between">
                <div className="flex gap-4 items-center mt-8">
                    <div className="flex justify-between border border-[#E3E3E3] items-center h-[40px] gap-[10px] rounded-[38px] p-[8px_12px]">
                        <p className="text-[15px] text-(--main-orange-color) font-normal">{String(hours).padStart(2, '0')} h</p>
                        <button 
                          onClick={incrementHours}
                          className="text-(--main-orange-color) w-[14px] h-[14px] flex justify-center items-center p-1 rounded-sm">
                            +
                        </button>
                    </div>
                    
                    <div className="flex justify-between border border-[#E3E3E3] items-center h-[40px] gap-[10px] rounded-[38px] p-[8px_12px]">
                        <p className="text-[15px] text-(--main-orange-color) font-normal">{String(minutes).padStart(2, '0')} min</p>
                        <button 
                          onClick={incrementMinutes}
                          className="text-(--main-orange-color) w-[14px] h-[14px] flex justify-center items-center p-1 rounded-sm">
                            +
                        </button>
                    </div>
                </div>

                <div className="flex gap-6 items-center justify-center">
                    <div className="flex flex-col items-center">
                        <button 
                          onClick={handleFinish}
                          disabled={!allTasksCompleted}
                          className={`w-[60px] h-[60px] rounded-full ${allTasksCompleted ? 'bg-(--main-orange-color)' : 'bg-gray-300'} flex items-center justify-center`}
                        >
                            <Image src="/images/square.svg" alt="finish" width={24} height={24} />
                        </button>
                        <span className={`text-lg ${allTasksCompleted ? 'text-(--main-orange-color)' : 'text-gray-400'} font-medium mt-2`}>Finish</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <button 
                          onClick={handlePauseResume}
                          className="w-[60px] h-[60px] rounded-full bg-(--main-orange-color) flex items-center justify-center"
                        >
                            {isPaused ? (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 4L18 12L6 20V4Z" fill="white"/>
                              </svg>
                            ) : (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="5" width="4" height="14" rx="1" fill="white"/>
                                <rect x="14" y="5" width="4" height="14" rx="1" fill="white"/>
                              </svg>
                            )}
                        </button>
                        <span className="text-lg text-(--main-orange-color) font-medium mt-2">
                          {isPaused ? "Resume" : "Pause"}
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-[#0A0A1F] mb-4">Task Completed Successfully</h2>
            <p className="text-gray-600 mb-6">You have successfully completed all tasks for this cleaning request.</p>
            <div className="flex justify-end">
              <button 
                onClick={() => setShowSuccess(false)}
                className="px-4 py-2 bg-(--main-orange-color) text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
