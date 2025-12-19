import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Links() {
  const pathname = usePathname();
  const links = [
    { href: '/services', text: 'Services' },
    { href: '/who-we-are', text: 'How we work' },
    { href: '/contact-us', text: 'Contact us' }
  ];

  return (
    <div className="flex items-center gap-[40px] p-[12px_20px] md:flex-nowrap md:flex-row flex-col md:m-0 m-[20px] flex-wrap">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`hover:text-[#F59331] transition-all duration-300 ${pathname=="/who-we-are" ?"text-white" :"text-[#4F617D]"}  ${
            pathname === link.href ? '!text-[#F59331]' : ''
          }`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default Links;
