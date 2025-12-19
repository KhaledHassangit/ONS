import Statistics from "@/components/dashboard/MainHome/Statistics/Statistics";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React from "react";

const statisitc_data = [];

export default function DashHome() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 p-2 sm:p-4">
      <div className="flex flex-col">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-(--main-orange-color)">
          Welcome to Turnivo Dashboard !
        </h3>
        <p className="text-[14px] sm:text-[16px] font-normal text-[#4F617D]">
          Manage your short-term rental operations seamlessly.
        </p>
      </div>

      <Statistics />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-3 sm:p-4 rounded-2xl flex flex-col gap-2 min-h-[260px] sm:min-h-[295px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dash/clock.svg"
              alt="clock"
              width={24}
              height={24}
            />
            <p className="text-lg sm:text-xl font-medium text-(--main-orange-color)">
              Check in / Check out
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center py-[8px] justify-between">
            <div className="flex flex-col w-full sm:w-auto">
              <p className="text-[13px] lg:text-[14px] font-normal text-(--main-dark-color)">
                Checkin with access code 22333 at 12:00
              </p>
              <p className="text-[12px] 2xl:text-[14px] font-medium flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                <span className="text-[12px] 3xl:text-[14px] font-normal text-[#34C759]">
                  Checked-in : Today, 02:30 PM
                </span>
                <span className="text-[12px] 3xl:text-[14px] flex items-center font-normal text-[#76767B]">
                  <CalendarDays className="w-[16px] h-[16px] mr-1" />
                  <span className="text-[12px] 3xl:text-[14px]">
                    05 / 03 / 2025
                  </span>
                </span>
              </p>
            </div>

            <button className="px-[10px] mt-2 sm:mt-0 h-[36px] sm:h-[40px] rounded-lg flex justify-center items-center border border-black/15 text-[12px] font-medium text-[#76767B]">
              View Details
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center py-[8px] justify-between">
            <div className="flex flex-col w-full sm:w-auto">
              <p className="text-[13px] lg:text-[14px] font-normal text-(--main-dark-color)">
                Checkin with access code 22333 at 12:00
              </p>
              <p className="text-[12px] 2xl:text-[14px] font-medium flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                <span className="text-[12px] 3xl:text-[14px] font-normal text-[#34C759]">
                  Checked-in : Today, 02:30 PM
                </span>
                <span className="text-[12px] 3xl:text-[14px] flex items-center font-normal text-[#76767B]">
                  <CalendarDays className="w-[16px] h-[16px] mr-1" />
                  <span className="text-[12px] 3xl:text-[14px]">
                    05 / 03 / 2025
                  </span>
                </span>
              </p>
            </div>

            <button className="px-[10px] mt-2 sm:mt-0 h-[36px] sm:h-[40px] rounded-lg flex justify-center items-center border border-black/15 text-[12px] font-medium text-[#76767B]">
              Manage
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center py-[8px] justify-between">
            <div className="flex flex-col w-full sm:w-auto">
              <p className="text-[13px] lg:text-[14px] font-normal text-(--main-dark-color)">
                Checkin with access code 22333 at 12:00
              </p>
              <p className="text-[12px] 2xl:text-[14px] font-medium flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                <span className="text-[12px] 3xl:text-[14px] font-normal text-[#34C759]">
                  Checked-in : Today, 02:30 PM
                </span>
                <span className="text-[12px] 3xl:text-[14px] flex items-center font-normal text-[#76767B]">
                  <CalendarDays className="w-[16px] h-[16px] mr-1" />
                  <span className="text-[12px] 3xl:text-[14px]">
                    05 / 03 / 2025
                  </span>
                </span>
              </p>
            </div>

            <button className="px-[10px] mt-2 sm:mt-0 h-[36px] sm:h-[40px] rounded-lg flex justify-center items-center text-[12px] bg-[#F53D6B] font-medium text-white">
              Follow Up
            </button>
          </div>
        </div>

        <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-3 sm:p-4 rounded-2xl flex flex-col gap-2 min-h-[260px] sm:min-h-[295px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dash/key-square.svg"
              alt="clock"
              width={24}
              height={24}
            />
            <p className="text-lg sm:text-xl font-medium text-(--main-orange-color)">
              Smart Locks Overview
            </p>
          </div>

          <div className="flex items-center px-1 sm:px-2 justify-between py-2">
            <p className="text-sm sm:text-base font-bold text-(--main-dark-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[8px] sm:px-[10px] h-[36px] sm:h-[40px] rounded-lg flex text-xs sm:text-sm justify-center items-center border bg-[#FFD6D6] font-medium text-[#FF2D55]">
              Locked
            </button>
          </div>
          <div className="flex items-center px-1 sm:px-2 justify-between py-2">
            <p className="text-sm sm:text-base font-bold text-(--main-dark-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[8px] sm:px-[10px] h-[36px] sm:h-[40px] rounded-lg flex text-xs sm:text-sm justify-center items-center border bg-[#DBFFE6] font-medium text-[#34C759]">
              Open
            </button>
          </div>

          <div className="flex items-center px-1 sm:px-2 justify-between py-2">
            <p className="text-sm sm:text-base font-bold text-(--main-dark-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[8px] sm:px-[10px] h-[36px] sm:h-[40px] rounded-lg flex text-xs sm:text-sm justify-center items-center border bg-[#FFD6D6] font-medium text-[#FF2D55]">
              Locked
            </button>
          </div>

          <a className="text-sm sm:text-base font-bold underline p-2 text-(--main-orange-color)">
            View All Locks
          </a>
        </div>

        <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-3 sm:p-4 rounded-2xl flex flex-col justify-between gap-2 min-h-[260px] sm:min-h-[295px] sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/dash/crown.svg"
                alt="clock"
                width={24}
                height={24}
              />
              <p className="text-lg sm:text-xl font-medium text-(--main-orange-color)">
                Packages Overview
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#292760]">
                Deep cleaning
              </h2>
              <p className="flex items-center">
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#05A84B]">
                  50$
                </span>
                <span className="text-xs font-medium text-[#4B5563]">
                  /monthly
                </span>
              </p>
              <p className="text-xs font-medium text-[#6B7280]">
                Get 7 free days
              </p>
            </div>
          </div>

          <a className="text-sm sm:text-base font-bold underline p-2 text-(--main-orange-color)">
            View All Packages
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-3 sm:p-4 rounded-2xl flex flex-col gap-2 min-h-[350px] sm:min-h-[393px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dash/task-2.svg"
              alt="clock"
              width={24}
              height={24}
            />
            <p className="text-lg sm:text-xl font-medium text-(--main-orange-color)">
              Task Management
            </p>
          </div>

          <div className="p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Image
                src="/images/dash/task-3.svg"
                alt="edit"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  Clean Property Alpha (Sky higt Apartments)
                </p>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <p className="text-xs sm:text-sm font-normal text-[#FF3B30]">
                    High Priority - Status : in progress
                  </p>
                  <p className="text-xs font-normal text-[#4F617D]">
                    Assigned to : Jane D .
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-center w-full sm:w-[70px] h-[36px] sm:h-[40px] justify-center gap-2 text-[#292760] font-medium text-sm rounded-lg border border-[#00000029]">
              <Image
                src="/images/dash/edit-2.svg"
                alt="edit"
                width={18}
                height={18}
              />
              <span>Edit</span>
            </button>
          </div>

          <div className="p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Image
                src="/images/dash/setting.svg"
                alt="edit"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  Fix Leaky Faucet (Ocean View Villa)
                </p>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <p className="text-xs sm:text-sm font-normal text-[#FF3B30]">
                    Medium Priority - Status : Pending
                  </p>
                  <p className="text-xs font-normal text-[#4F617D]">
                    Assigned to : Jane D .
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-center w-full sm:w-[70px] h-[36px] sm:h-[40px] justify-center gap-2 text-[#292760] font-medium text-sm rounded-lg border border-[#00000029]">
              <Image
                src="/images/dash/edit-2.svg"
                alt="edit"
                width={18}
                height={18}
              />
              <span>Edit</span>
            </button>
          </div>

          <div className="p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Image
                src="/images/dash/profile-add.svg"
                alt="edit"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  Gust welcome Prep (Downtown Studio )
                </p>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <p className="text-xs sm:text-sm font-normal text-[#FF3B30]">
                    High Priority - Status : in Todo
                  </p>
                  <p className="text-xs font-normal text-[#4F617D]">
                    Assigned to : Jane D .
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-center w-full sm:w-[70px] h-[36px] sm:h-[40px] justify-center gap-2 text-[#292760] font-medium text-sm rounded-lg border border-[#00000029]">
              <Image
                src="/images/dash/edit-2.svg"
                alt="edit"
                width={18}
                height={18}
              />
              <span>Edit</span>
            </button>
          </div>

          <button className="w-full mt-auto bg-(--main-orange-color) text-white flex justify-center items-center h-[40px] sm:h-[48px] rounded-xl p-[10px]">
            View All tasks
          </button>
        </div>

        <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-3 sm:p-4 rounded-2xl flex justify-between flex-col gap-2 min-h-[350px] sm:min-h-[393px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dash/profile-2user.svg"
              alt="clock"
              width={24}
              height={24}
            />
            <p className="text-lg sm:text-xl font-medium text-(--main-orange-color)">
              Recent Activity
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-2 flex items-start sm:items-center gap-2">
              <Image
                src="/images/dash/login-2.svg"
                alt="login"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  <span className="font-normal text-sm text-(--main-dark-color)">
                    Guest Alice Checked-in at
                  </span>
                  <span className="font-bold text-sm text-(--main-orange-color)">
                    {" "}
                    Sunny Villa
                  </span>
                </p>
                <p className="text-xs font-normal text-[#4F617D]">10 min ago</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-2 flex items-start sm:items-center gap-2">
              <Image
                src="/images/dash/tick-circle.svg"
                alt="login"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  <span className="font-normal text-sm text-(--main-dark-color)">
                    Cleaner Bob Completed cleaning at
                  </span>
                  <span className="font-bold text-sm text-(--main-orange-color)">
                    {" "}
                    Beach House
                  </span>
                </p>
                <p className="text-xs font-normal text-[#4F617D]">2 h ago</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-2 flex items-start sm:items-center gap-2">
              <Image
                src="/images/dash/setting-3.svg"
                alt="login"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  <span className="font-normal text-sm text-(--main-dark-color)">
                    Maintenance C . Fixed tap at
                  </span>
                  <span className="font-bold text-sm text-(--main-orange-color)">
                    City Loft
                  </span>
                </p>
                <p className="text-xs font-normal text-[#4F617D]">3 h ago</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-2 flex items-start sm:items-center gap-2">
              <Image
                src="/images/dash/logout-2.svg"
                alt="login"
                width={24}
                height={24}
                className="mt-1 sm:mt-0"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm font-normal text-[#292760]">
                  <span className="font-normal text-sm text-(--main-dark-color)">
                    Guest David Checked-out at{" "}
                  </span>
                  <span className="font-bold text-sm text-(--main-orange-color)">
                    Mountain Cabin
                  </span>
                </p>
                <p className="text-xs font-normal text-[#4F617D]">5 h ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
