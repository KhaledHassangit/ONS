"use client";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import CompitableSection from "@/layouts/home/compitable-section";
import ContactUsSection from "@/layouts/home/contact-us-section";
import HeroSection from "@/layouts/home/hero-section";
import PropertiesManageSection from "@/layouts/home/Properties-Manage-section";
import PropertiesManageSection2 from "@/layouts/home/Properties-Manage-section-2";
import ServiceSection from "@/layouts/home/service-section";
import WhyChooseUsSection from "@/layouts/home/why-choose-us-section";
import BenefitsSection from "../../layouts/home/Benefits-section";
import StickySlides from "../../layouts/home/FullPageSlides";
import RestHomeSections from "@/layouts/home/RestHomeSections";

export default function Home() {
  return (
    <div className="overflow-x-hidden mt-[80px]">
      <div className="container !m-auto flex flex-col lg:!pr-[0px] justify-between items-center  !min-w-[100%] !pb-0">
        {/* <HeroSection />
        <ServiceSection />

        <BenefitsSection /> */}
        <RestHomeSections />
        {/* <StickySlides />
        <WhyChooseUsSection />
        <CompitableSection />
        <PropertiesManageSection />
        <PropertiesManageSection2 />
        <ContactUsSection /> */}
      </div>
    </div>
  );
}
