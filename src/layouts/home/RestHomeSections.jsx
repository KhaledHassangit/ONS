import React from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import cardImg1 from "../../../public/images/RestHome/jcw1EAEmpYzKR2G9Pb10SMSvDag.jpg";
import cardImg2 from "../../../public/images/RestHome/card2.jpg";
import img5 from "../../../public/images/RestHome/j0NMu4XIoZnMR1d0rgbF4Exsec.png";

import FAQComponent from "./FAQComponent";
import MarqueeComponent from "./MarqueeComponent";
import ScrollerComp from "./ScrollerComp";
import StepsSection from "./StepsSection";
export default function RestHomeSections() {
  return (
    <div className="container lg:w-[80%] w-[95%] mx-auto lg:px-0 px-10 flex flex-col justify-center items-center min-h-screen bg-[var(--background)]">
      <div className="flex flex-col relative bg-[var(--main-dark-color)] py-5  lg:h-[550px] border  shadow overflow-hidden my-5 rounded-xl space-y-6 w-full p-8 lg:p-16 text-center justify-center items-center">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Let's make running your <br /> hotel feel easier—every day
        </h3>
        <p className="text-gray-300 text-sm md:text-lg lg:text-[1.2rem] leading-relaxed px-4 max-w-2xl lg:max-w-3xl">
          Bookings to check-outs, Noovy handles it.
          <br />
          Setup done. Support included. Tasks simplified.
        </p>
        <div className="flex mt-3 mb-8 gap-2 lg:w-48 w-full justify-center">
          <button className="bg-[var(--main-orange-color)] hover:scale-105 w-full transition-all rounded-md cursor-pointer text-white px-6 py-3.5 text-base font-medium flex gap-2 justify-center items-center">
            Book a demo <ArrowRight size={18} />
          </button>
        </div>
        <div className="lg:absolute relative lg:bottom-0 -bottom-10 md:left-0 lg:left-0 -left-10 rotate-12 bg-[var(--main-light-color)] border border-dotted border-[var(--second-main-color)] w-[250px] h-[250px] rounded-xl">
          <img
            className="lg:absolute relative  left-0 rotate-12 hover:-rotate-12 transition-all rounded-xl"
            src="/images/RestHome/jcw1EAEmpYzKR2G9Pb10SMSvDag.jpg"
            alt=""
          />
        </div>
        <div className="absolute hidden lg:block bottom-0 right-0 -rotate-12 bg-[var(--main-light-color)] border border-dotted border-[var(--second-main-color)] w-[250px] h-[250px] rounded-xl">
          <img
            className="absolute -bottom-12 left-0 -rotate-12 hover:rotate-12 transition-all rounded-xl"
            src="/images/RestHome/card2.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <ScrollerComp />
      </div>

     <div>
      <StepsSection/>
     </div>

      <div className="my-10 ">
        <div className="title flex flex-col items-center justify-center mt-4 mb-10 max-w-xl mx-auto ">
          <h2 className="text-5xl font-bold my-3 text-[var(--main-dark-color)]">
            “We switched to Noovy, and we’d do it again.”
          </h2>
          <p className="text-gray-500 text-lg my-5">
            You're in good company. Independent hotels all over the world have
            already switched and they feel the difference every day.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-[var(--main-dark-color)] p-5 space-y-5 rounded-xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[var(--main-orange-color)] fill-current"
                />
              ))}
            </div>
            <h3 className="text-lg font-medium text-white">
              “Finally found software my staff actually wants to use”
            </h3>
            <p className="text-gray-400 text-lg">
              We switched to Noovy last month, and it's been smooth sailing. Our
              front desk team figured it out in minutes without me having to
              explain everything. They just started using it!
            </p>
            <div>
              <h5 className="text-lg font-medium text-white">Baha Mansour</h5>
              <p className="text-gray-400 text-lg">Quentin XL hotel</p>
            </div>
          </div>
          <div className="bg-[var(--main-dark-color)] p-5 space-y-5 rounded-xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[var(--main-orange-color)] fill-current"
                />
              ))}
            </div>
            <h3 className="text-lg font-medium text-white">
              “Everything in one place for a price that makes sense”
            </h3>
            <p className="text-gray-400 text-lg">
              We've been using Noovy for a few years and I love that there are
              no surprise fees every month like our old system. Everything runs
              from one dashboard. So, no more switching between sites!
            </p>
            <div>
              <h5 className="text-lg font-medium text-white">Davy Aenspeck</h5>
              <p className="text-gray-400 text-lg">Domaine de Biamont</p>
            </div>
          </div>
          <div className="bg-[var(--main-dark-color)] p-5 space-y-5 rounded-xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[var(--main-orange-color)] fill-current"
                />
              ))}
            </div>
            <h3 className="text-lg font-medium text-white">
              “We save so much time on daily operations”
            </h3>
            <p className="text-gray-400 text-lg">
              Noovy automates a lot of our routine tasks so my team spends less
              time on paperwork. The best part is I can see room status and get
              reports without bouncing between different systems.
            </p>
            <div>
              <h5 className="text-lg font-medium text-white">
                Hatem al-Fattal
              </h5>
              <p className="text-gray-400 text-lg">Blossoms Hotel</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button className="bg-[var(--main-orange-color)] hover:bg-[#f59331e2] hover:scale-105 transition-all rounded-md cursor-pointer text-white px-6 py-3.5 text-base font-medium flex gap-2 justify-center items-center">
            Explore all customer reviews <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="my-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* ====== Title Section ====== */}
        <div className="title flex flex-col items-center justify-center mt-4 mb-10 max-w-md mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl md:text-5xl font-bold my-3 text-[var(--main-dark-color)] leading-snug">
            We connect with all your tools—guaranteed
          </h2>
          <p className="text-gray-500 text-base sm:text-lg my-5 px-2">
            Noovy already connects with more than 500 tools. If yours is
            missing, we'll build it for free—just ask.
          </p>
        </div>

        {/* ====== Marquee Section ====== */}
        <MarqueeComponent />

        {/* ====== Button Section ====== */}
        <div className="flex justify-center my-8 sm:my-10">
          <button className="bg-[var(--main-orange-color)] hover:bg-[#f59331e2] hover:scale-105 transition-all rounded-md cursor-pointer text-white px-5 sm:px-6 py-3 text-sm sm:text-base font-medium flex gap-2 justify-center items-center shadow-md">
            Let's talk integration <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="title flex flex-col items-center justify-center mt-4 mb-10 max-w-xl mx-auto ">
          <h2 className="text-5xl font-bold my-3 text-[var(--main-dark-color)]">
            Got questions? Let's clear things up.
          </h2>
          <p className="text-gray-500 text-lg my-5">
            Browse our most frequently asked questions below, or reach out to
            our team if you need additional support.
          </p>
        </div>

        <div>
          <FAQComponent />
        </div>
      </div>
      {/* Last Section */}
      <div className="flex flex-col relative bg-[var(--main-dark-color)] py-5  lg:h-[550px] border border-[#F3F2FF] shadow overflow-hidden my-5 rounded-xl space-y-6 w-full p-8 lg:p-16 text-center justify-center items-center">
        <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-tight text-white">
          {" "}
          Let’s make running <br /> your hotel feel effortless
        </h3>
        <p className="text-gray-400 text-lg md:text-xl lg:text-[1.2rem] leading-relaxed max-w-3xl">
          Everything in one place. Nothing slipping through the cracks. Just{" "}
          <br /> smooth, simple control. Let us walk you through how it all
          works.
        </p>
        <div className="flex mt-3 mb-8 gap-2 lg:w-48 w-full justify-center">
          <button className="bg-[var(--main-orange-color)] hover:bg-[#f59331e2] hover:scale-105 w-full transition-all rounded-md cursor-pointer text-white px-6 py-3.5 text-base font-medium flex gap-2 justify-center items-center">
            Book a demo <ArrowRight size={18} />
          </button>
        </div>
        <div className="lg:absolute relative lg:bottom-0 -bottom-10 lg:left-0 -left-10 rotate-12 bg-[var(--main-light-color)] border border-dotted border-[var(--second-main-color)] w-[250px] h-[250px] rounded-xl">
          <img
            className="lg:absolute relative  left-0 rotate-12 hover:-rotate-12 transition-all rounded-xl"
            src="/images/RestHome/jcw1EAEmpYzKR2G9Pb10SMSvDag.jpg"
            alt=""
          />
        </div>
        <div className="absolute hidden lg:block bottom-0 right-0 -rotate-12 bg-[var(--main-light-color)] border border-dotted border-[var(--second-main-color)] w-[250px] h-[250px] rounded-xl">
          <img
            className="absolute -bottom-12 left-0 -rotate-12 hover:rotate-12 transition-all rounded-xl"
            src="/images/RestHome/7mdfowpPgSKXi2Wdafns2XlbZqw.png"
            alt=""
          />
        </div>
      </div>
    </div>

  );
}
