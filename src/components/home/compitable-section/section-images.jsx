import Image from 'next/image';
import React from 'react';

function SectionImages() {
  return (
    <div className="flex flex-col gap-[16px] md:flex-row md:justify-between md:gap-[70px] md:mt-[38.03px] mx-auto">
      <Image
        src="/images/combitable/booking.svg"
        alt="compitable-image-1"
        width={249}
        height={140.0625}
      />
      <Image
        src="/images/combitable/airbnb.svg"
        alt="compitable-image-2"
        width={249}
        height={140.0625}
      />
    </div>
  );
}

export default SectionImages;
