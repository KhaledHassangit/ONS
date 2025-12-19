"use client";
import ContactInformation from '@/components/dashboard/clients/PropertyManagement/ContactInformation/ContactInformation';
import InfoProperty from '@/components/dashboard/clients/PropertyManagement/InfoProperty/InfoProperty';
import PropertyLocation from '@/components/dashboard/clients/PropertyManagement/PropertyLocation/PropertyLocation';
import PropertyPhotos from '@/components/dashboard/clients/PropertyManagement/PropertyPhotos/PropertyPhotos';
import { ChevronRight } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const steps = [
    {
      id: 1,
      title: "Information Property",
      icon: "/images/Home 4.svg"
    },
    {
      id: 2,
      title: "Property location",
      icon: "/images/Location-22.svg" 
    },
    {
      id: 3,
      title: "property photos",
      icon: "/images/Document  Add 1.svg" 
    },
    {
      id: 4,
      title: "Contact information",
      icon: "/images/Calli.svg" 
    },
  ]

export default function page() {
    const [currentStep, setCurrentStep] = useState(1);
    const [propertyData , setPropertyData] = useState({
      name:"",
      property_type_id:null,
      area:"",
      floor:"",
      number_room:"",
      number_bathroom:"",
      address:"",
      city_id:"",
      postal_code:"",
      lat:"",
      lng:"",
      image:"",
      specail_note:"",
      co_host_name:"",
      co_host_mobile:"",
      platform_id:"",
      platform_link:""
    })

    
    useEffect(() => {
      console.log(propertyData)
    } ,[propertyData])

  return (
    <div className='flex flex-col gap-4 px-2 sm:px-4'>
        <div className="flex items-center gap-[2px] flex-wrap">
          <Link
            className="text-sm sm:text-base font-normal !text-(--main-orange-color)"
            href={"/clients/property-management"}
          >
            {" "}
            property management
          </Link>
          <ChevronRight size={12} />
          <p className="text-xs sm:text-sm font-normal text-(--main-light-color)">
            Create Property
          </p>
        </div>
        
        <div className="flex items-center justify-between w-full mb-8 overflow-x-auto pb-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>

            <div className="flex flex-col items-center flex-shrink-0">

              <div className={`flex items-center justify-center w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-full ${
                step.id < currentStep ? 'bg-white border-[3px] border-[#292760] text-[#292760]' : 
                step.id == currentStep ? 'bg-white border-[3px] border-[#292760] text-[#292760]' : 
                'bg-[#EAEAEA] border-2 border-[#EAEAEA]'
              }`}>
                {step.id < currentStep ? (
                  <div className='flex justify-center items-center bg-[#292760] w-[30px] h-[30px] rounded-full sm:w-[50px] sm:h-[50px]'>
                  <Image
                    src={step.icon} 
                    width={24} 
                    height={24} 
                    alt={step.title}
                    className="text-white"
                  />
                </div>
                ) : step.id === currentStep ? (
                  <div className='flex justify-center items-center bg-[#292760] rounded-full w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]'>
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
              <p className={`mt-2 text-xs sm:text-sm font-medium ${
                step.id === currentStep ? 'text-[#292760] font-semibold' : 
                step.id < currentStep ? 'text-[#292760]' : 'text-[#BDBDBD]'
              } capitalize whitespace-nowrap`}>
                {step.title}
              </p>
            </div>
            
            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div className={`flex-1 h-[2px] min-w-[20px] ${
                index < currentStep - 1 ? 'bg-[#292760]' : 'bg-[#EAEAEA]'
              }`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="w-full">
        {currentStep == 1 && <InfoProperty propertyData={propertyData} setPropertyData={setPropertyData} setCurrentStep={setCurrentStep}/>}
        {currentStep == 2 && <PropertyLocation propertyData={propertyData} setPropertyData={setPropertyData} setCurrentStep={setCurrentStep}/>}
        {currentStep == 3 && <PropertyPhotos propertyData={propertyData} setPropertyData={setPropertyData} setCurrentStep={setCurrentStep}/>}
        {currentStep == 4 && <ContactInformation propertyData={propertyData} setPropertyData={setPropertyData} setCurrentStep={setCurrentStep}/>}
      </div>
    </div>
  )
}
