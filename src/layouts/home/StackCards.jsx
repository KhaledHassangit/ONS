"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardsData = [
  {
    id: 1,
    title: "Knight Forks:",
    desc: "Knights are unique in their movement pattern, capable of hopping over other pieces in a way that bishops and rooks cannot. This ability makes them particularly effective at executing fork tactics.",
    counter: "6/6",
  },
  {
    id: 2,
    title: "Zwischenzug (Intermezzo):",
    desc: "It refers to unexpected intermediate moves that disrupt the natural flow of a position. These surprising intermezzos can change the evaluation of a position dramatically.",
    counter: "5/6",
  },
  {
    id: 3,
    title: "Pinning and Unpinning:",
    desc: "Pins occur when a piece is immobilized due to the threat of a more valuable piece behind it. Mastering the art of pinning and unpinning involves using pieces like bishops and rooks.",
    counter: "4/6",
  },
  {
    id: 4,
    title: "Pawn Structures and Pawn Chains:",
    desc: "Pawn structures play a crucial role in determining the strategic nature of a position. Pawn chains, where pawns support each other in a diagonal line, can control key squares.",
    counter: "3/6",
  },
  {
    id: 5,
    title: "Underpromotion:",
    desc: "It occurs when a pawn reaches the eighth rank and is promoted to a piece other than a queen, typically a knight, bishop, or rook.",
    counter: "2/6",
  },
  {
    id: 6,
    title: "Overloading:",
    desc: "Overloading refers to the tactic of placing excessive pressure on a defending piece, forcing it to perform multiple defensive tasks simultaneously.",
    counter: "1/6",
  },
];

const StackCards = () => {
  const containerRef = useRef(null);
  const [activeCards, setActiveCards] = useState(new Set());
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = window.scrollY;
      const scrollDown = scrollPosition > lastScrollTop.current;
      lastScrollTop.current = scrollPosition <= 0 ? 0 : scrollPosition;

      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through the container
      const progress =
        Math.max(
          0,
          (scrollPosition - containerRect.top + windowHeight) /
            (windowHeight * 2)
        ) * cardsData.length;

      const newActiveCards = new Set();

      cardsData.forEach((_, index) => {
        const cardIndex = cardsData.length - 1 - index;

        if (cardIndex === 0) {
          // First card (last in DOM) slides faster
          if (scrollPosition > containerRect.top - windowHeight * 0.2) {
            newActiveCards.add(cardIndex);
          }
        } else {
          if (scrollDown) {
            if (cardIndex < progress && cardIndex !== 0) {
              newActiveCards.add(cardIndex);
            }
          } else {
            if (cardIndex <= progress - 1 && cardIndex !== 0) {
              newActiveCards.add(cardIndex);
            }
          }
        }
      });

      setActiveCards(newActiveCards);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer before */}
      <div className="h-[50vh]" />

      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative h-[930vh] md:h-[930vh] sm:h-[700vh]"
      >
        {/* Animated SVG Rays Background */}
        <div className="fixed top-0 left-0 right-0 mx-auto h-full w-[350px] pointer-events-none">
          <div className="absolute w-full h-full opacity-100 transform -skew-x-12">
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10 overflow-hidden pointer-events-none"
              width="395px"
              height="3118px"
            >
              <g>
                <motion.path
                  stroke="#00F8F1"
                  strokeWidth="1.3px"
                  strokeLinecap="round"
                  d="M 1,0 L 1,51 M 1,175 L 1,199 M 1,237 L 1,252 M 1,298 L 1,325 M 1,382 L 1,406 M 1,507 L 1,530 M 1,607 L 1,655 M 1,770 L 1,776 M 1,869 L 1,920 M 1,1042 L 1,1075 M 1,1278 L 1,1285 M 1,1316 L 1,1360 M 1,1459 L 1,1501 M 1,1606 L 1,1615 M 1,1647 L 1,1657 M 1,1685 L 1,1736 M 1,1889 L 1,1897 M 1,2105 L 1,2120 M 1,2266 L 1,2280 M 1,2420 L 1,2452 M 1,2645 L 1,2659 M 1,2705 L 1,2729 M 1,2940 L 1,2943 M 1,3112 L 1,3118"
                  animate={{ y: [0, "-100%"] }}
                  transition={{
                    duration: 85,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.path
                  stroke="#FFBD1E"
                  strokeWidth="1.3px"
                  strokeLinecap="round"
                  d="M 16,0 L 16,34 M 16,95 L 16,127 M 16,355 L 16,361 M 16,390 L 16,433 M 16,521 L 16,526 M 16,679 L 16,697 M 16,909 L 16,919 M 16,1020 L 16,1025 M 16,1052 L 16,1077 M 16,1309 L 16,1353 M 16,1432 L 16,1468 M 16,1655 L 16,1690 M 16,1783 L 16,1821 M 16,2015 L 16,2030 M 16,2109 L 16,2159 M 16,2298 L 16,2333 M 16,2410 L 16,2460 M 16,2624 L 16,2663 M 16,2821 L 16,2830 M 16,3050 L 16,3094"
                  animate={{ y: [0, "-100%"] }}
                  transition={{
                    duration: 64,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.path
                  stroke="#FE848F"
                  strokeWidth="1.3px"
                  strokeLinecap="round"
                  d="M 31,0 L 31,32 M 31,198 L 31,248 M 31,470 L 31,475 M 31,701 L 31,722 M 31,835 L 31,877 M 31,919 L 31,953 M 31,1008 L 31,1023 M 31,1181 L 31,1192 M 31,1403 L 31,1427 M 31,1615 L 31,1631 M 31,1734 L 31,1748 M 31,1893 L 31,1930 M 31,2075 L 31,2127 M 31,2226 L 31,2265 M 31,2451 L 31,2504 M 31,2671 L 31,2718 M 31,2753 L 31,2767 M 31,2952 L 31,2958"
                  animate={{ y: [0, "-100%"] }}
                  transition={{
                    duration: 58,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Sticky Cards Container */}
        <div className="sticky top-1/2 -translate-y-1/2 h-0 w-full">
          {cardsData.map((card, index) => {
            const isSlideUp = activeCards.has(index);

            return (
              <div
                key={card.id}
                className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[350px] h-[250px] p-5
                  transition-all duration-[1300ms]
                  ${
                    isSlideUp
                      ? "translate-y-[-260%] opacity-0"
                      : "translate-y-[-50%] opacity-100"
                  }
                `}
                style={{
                  zIndex: cardsData.length - index,
                  transitionTimingFunction: isSlideUp
                    ? "cubic-bezier(0.9, -0.2, 0.1, 1.2)"
                    : "cubic-bezier(1, 0, 0, 1)",
                }}
              >
                {/* Shadow */}
                <div className="absolute top-2 left-2 w-full h-full bg-[#08333c] border border-[#252525] rounded-3xl z-[1]" />

                {/* Card Inner */}
                <div className="relative z-[2] p-[10%] w-full h-full bg-[#0B4550] border border-black rounded-3xl shadow-[0_6px_12px_rgba(0,0,0,0.32)]">
                  <h3 className="text-white font-medium text-lg mt-0 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white font-light text-sm leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Counter */}
                  <div className="absolute right-0 bottom-0 flex items-center justify-center w-[50px] h-[50px] text-[#4cede1] text-xs tracking-widest text-center">
                    {card.counter}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacer after */}
      <div className="h-[30vh]" />
    </>
  );
};

export default StackCards;
