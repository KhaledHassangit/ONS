"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function WelcomePage() {
    const router = useRouter();
  return (
    <div className='px-[30px] sm:px-[80px] md:px-[120px] my-[32px]'>
      <div className='relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)] h-[730px] px-[30px] sm:px-[80px] md:px-[120px] rounded-2xl p-[24px_48px] flex flex-col items-center gap-[32px]' style={{background: "url('/images/login/d1076afdbcae339571a2a061afc46eddb487efed.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* White overlay with 0.07 opacity */}
        <div className='absolute !inset-0 !w-full !h-full !bg-[rgba(255, 255, 255, 72%)] rounded-2xl' style={{backgroundColor:"rgba(255,255,255,72%)"}}></div>
        
        {/* Content - moved to relative position to appear above the overlay */}
        <div className='relative z-10 flex flex-col items-center gap-[32px]'>
          <Image src="/logo.svg" alt="On Next Stay Logo" width={117} height={167} />
          <div className='flex flex-col gap-4 items-center'>
          <h3 className='text-[32px] font-bold text-(--main-dark-color)'>Welcome to our cleaning staff recruitment form</h3>
          <p className='font-medium text-xl text-center text-[#4F617D] max-w-[587px]'>Welcome to our cleaners recruitment form! Please fill out the required information to join our team that specializes in providing quality and professional cleaning services.</p>
          <button onClick={() => router.push("/contact-info")} className='bg-(--main-orange-color) h-[48px] w-[120px] text-white px-[32px] py-[10px] rounded-xl'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}
