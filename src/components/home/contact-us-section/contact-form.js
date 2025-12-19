import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col gap-[15.97px] mt-[15.98px] ">
      <div className="flex flex-col md:flex-row justify-between min-w-[100%] gap-[10.98px]">
        <Input placeholder="Full name*" />
        <Input placeholder="Mobile Number*" />
      </div>
      <Input placeholder="Email address*" />
      <TextArea placeholder="Share your issues or queries here"  className="!min-h-[108px]"/>
      <button className="bg-[#F59331] text-[#FFFFFF] font-[500] text-[16px] leading-[100%] rounded-[7.98px] p-[12px] cursor-pointer">Send</button>
    </div>
  );
}

export default ContactForm;
