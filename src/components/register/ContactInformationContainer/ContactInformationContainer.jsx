"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ContactInfo from './ContactInfo/ContactInfo';
import ContactAddress from './ContactAddress/ContactAddress';
import ContactEvaring from './ContactEvaring/ContactEvaring';
import ContactStart from './ContactStart/ContactStart';

const steps = [
  {
    id: 1,
    title: "contactinformatie",
    icon: "/images/login/user-octagon.svg"
  },
  {
    id: 2,
    title: "Address",
    icon: "/images/login/route-square.svg" 
  },
  {
    id: 3,
    title: "Ervaring",
    icon: "/images/login/briefcase.svg" 
  },
  {
    id: 4,
    title: "Possibility to start",
    icon: "/images/login/calendar-tick.svg" 
  },
]

export default function ContactInformation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData , setUserData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    address:"",
    postcode:"",
    city_id:"",
    region:"",
    experience:"",
    company:"",
    start_date:"",
    lat:"",
    lang:"",
  })


  useEffect(() => {
    console.log(userData)
  } , [userData])

  return (
    <div className='px-[30px] sm:px-[80px] md:px-[120px] my-[32px]'>
      <div className="flex items-center justify-between w-full mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>

            <div className="flex flex-col items-center">

              <div className={`flex items-center justify-center w-[60px] h-[60px] rounded-full ${
                step.id < currentStep ? 'bg-white border-[3px] border-[#292760] text-[#292760]' : 
                step.id == currentStep ? 'bg-white border-[3px] border-[#292760] text-[#292760]' : 
                'bg-[#EAEAEA] border-2 border-[#EAEAEA]'
              }`}>
                {step.id < currentStep ? (
                  <div className='flex justify-center items-center bg-[#292760] rounded-full w-[50px] h-[50px]'>
                  <Image 
                    src={step.icon} 
                    width={24} 
                    height={24} 
                    alt={step.title}
                    className="text-white"
                  />
                </div>
                ) : step.id === currentStep ? (
                  <div className='flex justify-center items-center bg-[#292760] rounded-full  w-[50px] h-[50px]'>
                    <Image 
                      src={step.icon} 
                      width={24} 
                      height={24} 
                      alt={step.title}
                      className="text-white"
                    />
                  </div>
                ) : (
                  <Image 
                    src={step.icon} 
                    width={24} 
                    height={24} 
                    alt={step.title} 
                  />
                )}
              </div>
              
              {/* Step title */}
              <p className={`mt-2 text-sm font-medium ${
                step.id === currentStep ? 'text-[#292760] font-semibold' : 
                step.id < currentStep ? 'text-[#292760]' : 'text-[#BDBDBD]'
              } capitalize`}>
                {step.title}
              </p>
            </div>
            
            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div className={`flex-1 h-[2px] ${
                index < currentStep - 1 ? 'bg-[#292760]' : 'bg-[#EAEAEA]'
              }`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {currentStep == 1 && <ContactInfo userData={userData} setUserData={setUserData} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
      {currentStep == 2 && <ContactAddress userData={userData} setUserData={setUserData} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
      {currentStep == 3 && <ContactEvaring userData={userData} setUserData={setUserData} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
      {currentStep == 4 && <ContactStart userData={userData} setUserData={setUserData} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
    </div>
  )
}
