import React from 'react';
import ContactForm from './contact-form';

function RightContactUsSection() {
  return (
    <div className="max-w-[645.6558227539062px]">
      <div className="flex flex-col gap-[10px] pr-[36px]">
        <h2 className="md:text-[42px] text-[24px] font-[700]  !text-[#030F0F] leading-[150%]">
          Contact Us
        </h2>
        <p className="text-[18px] font-[400] leading-[185%] text-[#404F65]">
          {" "}
          Do you have questions? Feel free to reach out to us for support or
          more information about on next stay. Our team is ready to answer all
          your queries.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default RightContactUsSection;
