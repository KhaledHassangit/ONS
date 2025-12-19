import {
  Facebook,
  Instagram,
  Locate,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopFooter() {
  const contacts = [
    {
      icon: <Phone />,
      value: "06272167182",
    },
    {
      icon: <Mail />,
      value: "onnext@gmail.com",
    },
    {
      icon: <MapPin />,
      value: "4517 Washington Ave",
    },
  ];
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact us",
      href: "/contact-us",
    },
    {
      label: "Privacy Policy",
      href: "/",
    },
    {
      label: "Terms and conditions",
      href: "/",
    },
  ];
  return (
    <div className="p-[48px_30px] sm:p-[48px_80px] md:p-[48px_100px]">
      <div className="flex flex-col md:flex-row justify-between md:gap-[60.97px] 2xl:gap-[90px] gap-[48px]">
        {/* --------------- About --------------- */}
        <div className="max-w-[336px] flex flex-col gap-[24px]">
          <Image
            src="/logo.svg"
            alt="logo"
            width={47}
            height={67.14286041259766}
          />
          <p className="text-[#FFFFFF] text-[16px] font-[500] leading-[27px]">
            Reliable home services with high quality! Contact us anytime. 📞 ✨
          </p>
          <div className="flex gap-[12px]">
            <Image
              src="/images/footer/طريقة الدفع.svg"
              alt="paypal"
              width={100}
              height={50}
            />
            <Image
              src="/images/footer/طريقة الدفع@2x.png"
              alt="master-card"
              width={100}
              height={50}
            />
            <Image
              src="/images/footer/visa.png"
              alt="visa"
              width={100}
              height={50}
            />
          </div>
        </div>
        {/* --------------- Footer Links --------------- */}
        <div className="flex flex-col justify-between !gap-[24px]">
          <h3 className="text-[#FFFFFF] text-[16px] font-[700] leading-[100%]">
            Basic links
          </h3>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-[#FFFFFF] text-[14px] font-[400] leading-[100%]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* --------------- Footer Contacts --------------- */}
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[#FFFFFF] text-[16px] font-[500] leading-[100%]">
            Contact us
          </h3>
          <div className="flex flex-col gap-[16px]">
            {contacts.map((contact) => (
              <span
                className="flex items-center gap-[8px] text-[16px] font-[400] leading-[100%] text-[#FFFFFF]"
                key={contact.value}
              >
                <span className="text-[#F59331] text-[20px]">
                  {" "}
                  {contact.icon}
                </span>
                <span className="text-[#F7F8F9] text-[16px] font-[400] leading-[100%] poppins-font ">
                  {" "}
                  {contact.value}
                </span>
              </span>
            ))}
          </div>
        </div>
        {/* --------------- Footer Subscribe --------------- */}
        <div className="flex flex-col gap-[24px]">
          {/* --------------- Subscribe Form  --------------- */}
          <form action="#" className="w-[301px] flex flex-col gap-[16px]">
            <h3 className="text-[#FFFFFF] text-[16px] font-[500] leading-[100%]">
              Subscribe
            </h3>
            <div className="input-field bg-[#FFFFFF] rounded-[8px] flex items-center gap-[8px] p-[16px_4px] w-[100%]">
              <Mail color="#A6A6A6" />
              <input
                type="text"
                placeholder="Enter your email"
                className="placeholder:text-[#A6A6A6] placeholder:text-[12px] placeholder:font-[400] placeholder:leading-[100%] w-[100%] outline-none"
              />
            </div>
          </form>
          {/* --------------- Follow Us  --------------- */}
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[#FFFFFF] text-[16px] font-[500] leading-[100%]">
              Follow Us:
            </h3>
            <div className="flex gap-[15.97px] text-[white]">
              <Link href="#">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={32}
                  height={33}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/whats.svg"
                  alt="instagram"
                  width={32}
                  height={33}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/linkedin.svg"
                  alt="twitter"
                  width={32}
                  height={33}
                />
              </Link>
              <Link href="#">
                <Image src="/insta.svg" alt="twitter" width={32} height={33} />
              </Link>
              <Link href="#">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={32}
                  height={33}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
