import LeftContactUsSection from '@/components/home/contact-us-section/left-contact-us-section';
import RightContactUsSection from '@/components/home/contact-us-section/right-contact-us-section';
import React from 'react';

function ContactUsSection() {
  return (
    <div className='flex flex-col md:flex-row w-[100%] p-[16px] md:p-[80px_120px] gap-[28px] md:gap-[47.9px] justify-center items-end'>
      <LeftContactUsSection />
      <RightContactUsSection />
    </div>
  );
}

export default ContactUsSection;
