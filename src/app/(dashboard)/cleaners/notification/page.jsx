"use client";
import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '@/features/notificationSlice';
import axios from 'axios';

const options = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "New",
    value: "new",
  },
  {
    label: "Read",
    value: "read",
  },
] 

const notifications = [
  {
    id: 1,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "1 hour ago",
    status: "new",
    message: "Send you a cleaning service request"
  },
  {
    id: 2,
    image: "/images/dash/notification/user-2.svg",
    title: "Omar Alrajihi",
    time: "1 hour ago",
    status: "read",
    message: "Send you a cleaning service request"      
  },
  {
    id: 3,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "Yesterday",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 4,
    image: "/images/dash/notification/user-2.svg",
    title: "Omar Alrajihi",
    time: "Yesterday",
    status: "new",
    message: "Send you a cleaning service request"
  },
  {
    id: 5,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "4/23/24",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 6,
    image: "/images/dash/notification/user-2.svg",
    title: "Omar Alrajihi",
    time: "3/27/24",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 7,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "2/17/24",
    status: "new",
    message: "Send you a cleaning service request"
  },
  {
    id: 8,
    image: "/images/dash/notification/user-2.svg",
    title: "Omar Alrajihi",
    time: "7/18/23",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 9,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "5/18/24",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 10,
    image: "/images/dash/notification/user-2.svg",
    title: "Omar Alrajihi",
    time: "3/6/24",
    status: "new",
    message: "Send you a cleaning service request"
  },
  {
    id: 11,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "6/19/24",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 12,
    image: "/images/dash/notification/user-2.svg",
    title: "Omar Alrajihi",
    time: "3/19/23",
    status: "read",
    message: "Send you a cleaning service request"
  },
  {
    id: 13,
    image: "/images/dash/notification/user-1.svg",
    title: "Omar Alrajihi",
    time: "8/16/23",
    status: "new",
    message: "Send you a cleaning service request"
  }
]

export default function Page() {
  const dispatch = useDispatch();
  const [currentPage , setCurrentPage] = useState(1);
  const {data , loading} = useSelector(state => state.notification);
  const [allData , setAllData] = useState([]);

  useEffect(() => {
    dispatch(fetchNotifications({accesstoken : JSON.parse(localStorage.getItem("accessToken"))?.accessToken || "xfd0Hf0PeFAaAEphlPS6dLLhv_c9lLnt"}))
    .unwrap()
    .then(res => {
      if(res?.status == 1) {
        setAllData(res?.data[0])
      }
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  } , [dispatch])

  useEffect(() => {
    setCurrentPage(allData?._meta?.current_page)
  } , [currentPage])

  return (
    <div className='flex flex-col gap-4 md:gap-6 p-2 sm:p-4 md:p-0'>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <h3 className='text-lg sm:text-xl font-medium text-[#292760]'>Notifications {allData?._meta?.total_count}</h3>
        <Select
          className='!bg-[#F5F5F5] !rounded-lg h-[40px] sm:h-[48px] w-full sm:w-[120px]'
          defaultValue="new"
          placeholder="New"
          options={options}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-lg 
              ${notification.status === "new" ? "bg-[#F9F9F9]" : ""}`}
          >
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${notification.status === "new" ? "bg-[#292760]" : "bg-[#E4E4E4]"}`}></div>
                <Image
                  src={notification.image}
                  alt={notification.title}
                  width={42}
                  height={42}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-1">
                <div className="flex items-center">
                  <p className="text-sm font-bold text-[#292760]">{notification.title}</p>
                </div>
                <p className="text-sm font-medium text-[#292760]">{notification.message}</p>
              </div>
            </div>
            <div className="ml-8 sm:ml-0 mt-1 sm:mt-0">
              <p className='text-xs font-normal text-[#292760]'>{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
