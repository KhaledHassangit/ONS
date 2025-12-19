import Image from 'next/image';
import React from 'react';

function PropertiesManageCard({icon, title, description}) {
  return (
    <div className='flex items-start gap-[8px] w-full '>
      <Image src={icon} alt="icon" width={24} height={24} />
      <div className='flex flex-col gap-[4px]'>
        <h3 className='text-[#030F0F] text-[16px] font-[500] leading-[24px]'>{title}</h3>
        <p className='text-[#76767B] text-[16px] font-[400] leading-[24px]'>{description}</p>
      </div>
    </div>
  );
}

export default PropertiesManageCard;
