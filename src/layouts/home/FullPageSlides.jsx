import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Zap, Rocket, Star, Sparkles } from "lucide-react";

const StickySlides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const slides = [
    {
      id: 0,
      title: "Welcome to the Future",
      subtitle: "Experience seamless scrolling",
      icon: Sparkles,
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      pattern: "opacity-10",
    },
    {
      id: 1,
      title: "Lightning Fast",
      subtitle: "Built for performance",
      icon: Zap,
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      pattern: "opacity-10",
    },
    {
      id: 2,
      title: "Ready to Launch",
      subtitle: "Take your project to new heights",
      icon: Rocket,
      gradient: "from-orange-500 via-red-600 to-pink-600",
      pattern: "opacity-10",
    },
    {
      id: 3,
      title: "Stand Out",
      subtitle: "Make an unforgettable impression",
      icon: Star,
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      pattern: "opacity-10",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSlide = Math.min(
        Math.floor(scrollPosition / windowHeight),
        slides.length - 1
      );

      if (newSlide !== activeSlide) {
        setActiveSlide(newSlide);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSlide, slides.length]);

  const scrollToSlide = (index) => {
    isScrolling.current = true;
    const targetPosition = index * window.innerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {slides.map((slide, index) => {
        const Icon = slide.icon;
        const isActive = activeSlide === index;

        return (
          <div
            key={slide.id}
            className={`sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-br ${slide.gradient}`}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                  animation: "float 20s infinite linear",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6 text-white">
              <div
                className={`transform transition-all duration-1000 ${
                  isActive
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
              >
                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse" />
                  <Icon
                    className="w-24 h-24 mx-auto relative"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center tracking-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-3xl text-center text-white/90 font-light tracking-wide">
                  {slide.subtitle}
                </p>

                {/* Decorative line */}
                <div className="mt-12 w-32 h-1 bg-white/50 rounded-full mx-auto" />
              </div>

              {/* Scroll indicator - only on first slide */}
              {index === 0 && (
                <div
                  className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-sm uppercase tracking-widest text-white/70">
                      Scroll
                    </span>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              )}

              {/* Slide counter */}
              <div
                className={`absolute bottom-12 right-12 transition-all duration-700 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white/50 text-sm font-mono">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/20 pointer-events-none" />
          </div>
        );
      })}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }
      `}</style>
    </div>
  );
};

export default StickySlides;
