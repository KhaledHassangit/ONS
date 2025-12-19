import Image from 'next/image';
import React from 'react';

function RightServiceSection() {
  return (
    <Image
      src="/images/service-section/service-home-image.svg"
      alt="right-service-section"
      className= "!min-h-[500px] !w-full md:!min-w-[100%] md:!max-w-[100%]  md:!min-h-[491px] md:!max-h-[491px]  "
      height={500}
      width={500}
    />
  );
}

export default RightServiceSection;
