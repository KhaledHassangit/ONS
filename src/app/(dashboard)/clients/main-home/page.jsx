"use client";
import Statistics from '@/components/dashboard/MainHome/DashHome/Statistics'
import FunctionalitiesChart from '@/components/dashboard/MainHome/Statistics/FunctionalitiesChart';
import JobsChart from '@/components/dashboard/MainHome/Statistics/JobsChart';
import { CalendarDays, Ellipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: false,
  datasets: [
    {
      data: [26, 16, 6], // Finished, Canceled, In progress
      backgroundColor: [
        '#1C365B', // Dark blue - Finished
        '#F9BD39', // Orange - Canceled
        '#7D939F', // Gray - In progress
      ],
      borderWidth: 0,
      cutout: '70%',
    },
  ],
};

export default function page({isOpen, setIsOpen}) {
    console.log(isOpen , setIsOpen)
  return (
    <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
            <p className='text-base font-normal text-[#4F617D]'>Home</p>
            <button className='bg-(--main-orange-color) h-[40px] flex justify-center items-center w-[151px] text-white px-[16px] py-[10px] rounded-lg'>Cleaning request</button>
        </div>

        <Statistics />
        <div className='grid grid-cols-2 gap-4'>
        <div className="bg-white  shadow-[0px_4px_24px_0px_#0000000F] p-4 rounded-2xl flex flex-col gap-2 h-[329px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dash/clock.svg"
              alt="clock"
              width={24}
              height={24}
            />
            <p className="text-xl font-medium text-(--main-orange-color)">
              Check in / Check out
            </p>
          </div>

          <div className="flex items-center py-[8px] justify-between">
            <div className="flex gap-2 flex-col">
              <p className="ttext-[14px] font-normal text-(--main-light-color)">
                Checkin with access code 22333 at 12:00
              </p>
              <p className="text-[14px] font-medium flex gap-1 items-center">
                <span className="text-[14px] font-normal text-[#34C759]">
                  Checked-in : Today, 02:30 PM
                </span>
                <span className="text-[14px] gap-1 flex items-center font-normal text-[#76767B]">
                  <CalendarDays className="w-[16px] h-[16px]" />
                  <span className="text-[14px] my-auto flex justify-center items-center">
                    05 / 03 / 2025
                  </span>
                </span>
              </p>
            </div>

            <button className="px-[10px] h-[40px] rounded-lg flex justify-center items-center border border-black/15 text-[12px] font-medium text-[#76767B]">
              View Details
            </button>
          </div>

          <div className="flex items-center py-[8px] justify-between">
            <div className="flex gap-2 flex-col">
              <p className="ttext-[14px] font-normal text-(--main-light-color)">
                Checkin with access code 22333 at 12:00
              </p>
              <p className="text-[14px] font-medium flex gap-1 items-center">
                <span className="text-[14px] font-normal text-[#34C759]">
                  Checked-in : Today, 02:30 PM
                </span>
                <span className="text-[14px] gap-1 flex items-center font-normal text-[#76767B]">
                  <CalendarDays className="w-[16px] h-[16px]" />
                  <span className="text-[14px] flex justify-center items-center my-auto">
                    05 / 03 / 2025
                  </span>
                </span>
              </p>
            </div>

            <button className="px-[10px] h-[40px] rounded-lg flex justify-center items-center border border-black/15 text-[12px] font-medium text-[#76767B]">
              Manage
            </button>
          </div>

          <div className="flex items-center  py-[8px]  justify-between">
            <div className="flex gap-2 flex-col">
              <p className="ttext-[14px] font-normal text-(--main-light-color)">
                Checkin with access code 22333 at 12:00
              </p>
              <p className="text-[14px] font-medium flex gap-1 items-center">
                <span className="text-[14px] font-normal text-[#34C759]">
                  Checked-in : Today, 02:30 PM
                </span>
                <span className="text-[14px] gap-1 flex items-center font-normal text-[#76767B]">
                  <CalendarDays className="w-[16px] h-[16px]" />
                  <span className="text-[14px] flex justify-center items-center my-auto">
                    05 / 03 / 2025
                  </span>
                </span>
              </p>
            </div>

            <button className="px-[10px] h-[40px] rounded-lg flex justify-center items-center  text-[12px] bg-[#F53D6B] font-medium text-white">
              Follow Up
            </button>
          </div>
        </div>

        <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-4 rounded-2xl flex flex-col gap-2 h-[329px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dash/key-square.svg"
              alt="clock"
              width={24}
              height={24}
            />
            <p className="text-xl font-medium text-(--main-orange-color)">
              Smart Locks Overview
            </p>
          </div>

          <div className="flex items-center px-2 justify-between p-2">
            <p className="text-base font-bold text-(--main-light-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[10px] h-[40px] rounded-lg flex  text-sm  justify-center items-center border bg-[#FFD6D6] font-medium text-[#FF2D55]">
              Locked
            </button>
          </div>
          <div className="flex items-center px-2 justify-between p-2">
            <p className="text-base font-bold text-(--main-light-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[10px] h-[40px] rounded-lg flex  text-sm  justify-center items-center border bg-[#DBFFE6] font-medium text-[#34C759]">
              Open
            </button>
          </div>

          <div className="flex items-center px-2 justify-between p-2">
            <p className="text-base font-bold text-(--main-light-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[10px] h-[40px] rounded-lg flex  text-sm  justify-center items-center border bg-[#FFD6D6] font-medium text-[#FF2D55]">
              Locked
            </button>
          </div>

          <div className="flex items-center px-2 justify-between p-2">
            <p className="text-base font-bold text-(--main-light-color)">
              Sunny illa Main Door
            </p>
            <button className="px-[10px] h-[40px] rounded-lg flex  text-sm  justify-center items-center border bg-[#FFD6D6] font-medium text-[#FF2D55]">
              Locked
            </button>
          </div>
        </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <div className="bg-white shadow-[0px_4px_24px_0px_#0000000F] p-4 rounded-2xl flex flex-col gap-4 h-[329px]">
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-semibold text-(--main-light-color)'>Functionalities</h3>
                    <Ellipsis />
                </div>
                <FunctionalitiesChart />
            </div>
            <JobsChart />
        </div>
    </div>
  )
}
