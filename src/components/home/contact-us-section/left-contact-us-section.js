import Image from 'next/image';
import React from 'react'

function LeftContactUsSection() {
    const contcts = [
        {
            id: 1,
            name: "Email",
            image: "/Message.svg",
            alt: "Email",
            link: "info@EDUTIME.com"
        },
        {
            id: 2,
            name: "Phone",
            image: "/Call.svg",
            alt: "Phone",
            link: "0656382722"
        },
        {
            id: 3,
            name: "Address",
            image: "/Location.svg",
            alt: "Address",
            link: "Algiers"
        },
    ]
  return (
    <div className= 'flex flex-col w-full h-fit md:w-[339.29364013671875px] md:h-[456.8670349121094px] p-[23.95px_39.92px] bg-[#F7F8F9] border-[1px] border-[#EAECF0] gap-[27px] rounded-[15.97px]'>
     <Image src="/logo.svg" alt="contact-us-section" width={76} height={108.57} />
     <div className='flex flex-col gap-[27px] '>
        {contcts.map((contact) => (
            <div key={contact.id} className='flex items-center gap-[7.98px]'>
                <Image src={contact.image} alt={contact.alt} width={24} height={24} />
                <p className='text-[16px] font-medium text-[#101828]'>{contact.link}</p>
            </div>
        ))}
     </div>
    </div>
  )
}

export default LeftContactUsSection;
