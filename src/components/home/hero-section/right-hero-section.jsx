import Image from "next/image";
import React from "react";

function RightHeroSection() {
  return (
    <Image
      src="/images/hero-section/hero-image.svg"
      alt="hero-image"
      className="!min-h-[100%] !w-[initial]"
      height={500}
      width={500}
    />
  );
}

export default RightHeroSection;
