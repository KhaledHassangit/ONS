"use client";
import HeroSection from "@/components/whoweare/heroSection/heroSection";
import CompitableSection from "@/layouts/home/compitable-section";
import ContactUsSection from "@/layouts/home/contact-us-section";
import PropertiesManageSection from "@/layouts/home/Properties-Manage-section";
import PropertiesManageSection2 from "@/layouts/home/Properties-Manage-section-2";
import ServiceSection from "@/layouts/home/service-section";
import WhyChooseUsSection from "@/layouts/home/why-choose-us-section";

export default function WhoWeAre() {
  return (
    <div className="overflow-x-hidden">
      <div className= "container  pt-[-20px] flex flex-col lg:!pr-[0px] justify-between items-center !min-w-[100%]">
        <HeroSection />
        <ServiceSection />
        <WhyChooseUsSection />
        <CompitableSection />
        <PropertiesManageSection />
        <PropertiesManageSection2 />
        <ContactUsSection />
      </div>
    </div>
  );
}
