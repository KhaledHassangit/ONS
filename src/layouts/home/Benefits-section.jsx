"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Save time, from front desk to back office",
    desc: "Manage everything from one intuitive interface — from check-in to reporting — so your team spends less time juggling tools and more time helping guests.",
    image:
      "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002360/DA0PCASzGKNYGSD6TZKHtQyQAlM_hzc3zm.avif",
    button: "Save more time",
    flotingCardType: "check-in",
    flotingCard: [
      {
        image:
          "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002360/DA0PCASzGKNYGSD6TZKHtQyQAlM_hzc3zm.avif",
        name: "Anna Richards",
        button: "Check-in",
      },
    ],
  },
  {
    title: "Boost direct bookings, save on OTAs",
    desc: "Drive more commission-free bookings via your website. Our integrated booking engine and CRM help you keep the revenue that used to go to agencies.",
    image:
      "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002406/UFJpA0YxefggkhS3isf4Uo3fVEc_i33fde.avif",
    button: "Grow direct bookings",
    flotingCardType: "Hotel",
    flotingCard: [
      {
        image:
          "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002360/DA0PCASzGKNYGSD6TZKHtQyQAlM_hzc3zm.avif",
        name: "Hotel",
        button: "Hotel",
      },
      {
        image:
          "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002360/DA0PCASzGKNYGSD6TZKHtQyQAlM_hzc3zm.avif",
        name: "Hotel",
        button: "Hotel",
      },
    ],
  },
  {
    title: "Grow your revenue, not your workload",
    desc: "Automate pricing, upsells, and email campaigns — so you grow income while reducing manual tasks and freeing up your staff.",
    image:
      "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002440/4MjdcvwtitVohp12OjQRBQf8A_cewqcl.avif",
    button: "See revenue tools",
    flotingCardType: "payment",
  },
  {
    title: "Happier guests, without the extra work",
    desc: "Delight guests with quick check-ins, easy communication, and consistent service — all without adding stress to your day.",
    image:
      "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762002475/UCTwmwVzRBXoYzxXuiAXEdCkMQ_wcxcnv.avif",
    button: "Improve guest experience",
  },
];

// Individual Benefit Card Component
function BenefitCard({ benefit, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isEven ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? 30 : -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="!min-h-[100%] w-full mt-[50px] flex justify-center"
    >
      <div
        className={`!w-[70%] !m-auto flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10 justify-between`}
      >
        {/* Text Section */}
        <motion.div variants={textVariants} className="w-full md:w-[60%]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-[#F59331] font-semibold mb-2"
          >
            Benefit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
          >
            {benefit.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            {benefit.desc}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#F59331] font-medium border border-[#F59331] px-5 py-2 rounded-lg hover:bg-[#F59331]/20 transition"
          >
            {benefit.button}
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="w-full md:w-[30%] relative"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={benefit.image}
            alt={benefit.title}
            className="rounded-xl shadow-md w-full md:w-[400px] h-[400px] object-cover"
          />

          {/* Check-in Floating Card */}
          {benefit?.flotingCardType === "check-in" &&
            Array.isArray(benefit.flotingCard) && (
              <motion.div
                variants={floatingCardVariants}
                animate={
                  inView
                    ? {
                        y: [0, -10, 0],
                        transition: {
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        },
                      }
                    : {}
                }
                className="w-[300px] bg-white p-4 rounded-lg shadow-xl absolute -left-10 bottom-10"
              >
                {benefit.flotingCard.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center flex flex-col gap-3"
                  >
                    <img
                      src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1750756144/6e1f744afb76a9e104887043296183a0554f752f_epfjwg.png"
                      className="w-[70px] h-[70px] border-[3px] border-[#F59331] m-auto rounded-full"
                      alt=""
                    />
                    <b className="text-gray-800">{item.name}</b>
                    <hr className="border-gray-200" />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full p-2 rounded-md text-white bg-[#F59331] font-medium"
                    >
                      {item.button}
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}

          {/* Hotel Floating Card */}
          {benefit?.flotingCardType === "Hotel" && (
            <motion.div
              variants={floatingCardVariants}
              animate={
                inView
                  ? {
                      y: [0, -15, 0],
                      transition: {
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      },
                    }
                  : {}
              }
              className="w-[250px] bg-white rounded-lg shadow-xl absolute -left-10 top-5 overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762004799/nW2wCWmK1eY5vFbjNbAw74Beca4_jfj9ee.avif"
                alt=""
                className="rounded-lg w-full"
              />
            </motion.div>
          )}

          {/* Payment Floating Card */}
          {benefit?.flotingCardType === "payment" && (
            <motion.div
              variants={floatingCardVariants}
              animate={
                inView
                  ? {
                      y: [0, -12, 0],
                      transition: {
                        y: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      },
                    }
                  : {}
              }
              className="w-[250px] bg-white rounded-lg shadow-xl absolute -left-10 bottom-5 overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1762004902/cKR5mxtivjRm57rSMkV9gbxdCkc_zgbxog.avif"
                alt=""
                className="rounded-lg w-full"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-[60px] w-full pb-20 pt-18">
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} benefit={benefit} index={index} />
      ))}
    </div>
  );
}
