import Image from 'next/image';
import React from 'react';

function RightPropertiesManageSection({src}) {
  return (
    <Image
      src={src}
      alt="right-service-section"
      className= "w-full h-full md:!min-w-[50%] md:!max-w-[50%]"
      width={50}
      height={50}
    />
  );
}

export default RightPropertiesManageSection;