import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="On Next Stay Logo" width={36} height={51.42857360839844} />
    </Link>
  );
}

export default Logo;
