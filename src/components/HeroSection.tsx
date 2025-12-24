"use client";

import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMostTop, setIsMostTop] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsMostTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Role tag */}
        <div
          className={`inline-block mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Fullstack Javascript Developer
          </span>
        </div>

        {/* Main headline - Large editorial style */}
        <h1
          className={`text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-[-0.02em] mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="italic text-black font-normal">
            {"Concept > Code"}
          </span>
        </h1>

        {/* Scroll indicator */}
        <div
          className={`mt-20 transition-all duration-700 ${
            isVisible && isMostTop ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${isMostTop ? "600ms" : "100ms"}` }}
        >
          <div className="w-px h-20 bg-border mx-auto mb-3" />
          <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};
