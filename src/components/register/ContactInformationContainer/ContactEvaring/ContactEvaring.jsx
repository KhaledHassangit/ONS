"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function ContactEvaring({userData , setUserData , currentStep, setCurrentStep}) {
  return (
    <div>
          <div className="grid grid-cols-2 gap-[32px]">
        <div className="flex flex-col gap-[32px] h-[730px] justify-center bg-white rounded-2xl !p-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-xl font-medium text-(--main-dark-color)">
            Do you have previous cleaning experience?{" "}
            </h3>
            <p className="text-base font-medium text-[#76767B]">
            Your experience can help you in the selection process.            </p>
          </div>

           <div className='flex items-center gap-[32px]'>
            <button onClick={() => setUserData({...userData, experience:1})} className='w-[120px] h-[48px] rounded-lg flex justify-center items-center text-white bg-[#292760] p-[8px_20px]'>YES</button>
            <button onClick={() => setUserData({...userData, experience:0})} className='w-[120px] h-[48px] rounded-lg flex justify-center items-center text-white  bg-[#292760] p-[8px_20px]'>NO</button>
           </div>
          <button
            onClick={() => setCurrentStep(4)}
            className="bg-(--main-orange-color) !ms-auto flex justify-center items-center  text-white h-[48px] w-[96px] rounded-xl p-[10px]"
          >
            Next
          </button>
        </div>

        <div className="h-[730px] rounded-2xl">
           <Image src="/images/login/Rectangle 34624624.svg" alt="contact evaring" width={643}
           height={730} 
           className='w-full h-full rounded-2xl  object-cover' />
        </div>
      </div>
    </div>
  )
}
