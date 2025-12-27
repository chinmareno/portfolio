"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const HeroSection = () => {
  const [isMostTop, setIsMostTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roleRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const symbolRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      gsap.to(symbolRef.current, {
        scaleX: -1,
        duration: 1,
        delay: 1.1,
        ease: "power2.out",
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      setIsMostTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-[100vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 transition-all duration-[1500ms] 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Role tag */}
        <div ref={roleRef} className="inline-block mb-8">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Fullstack Javascript Developer
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={titleRef}
          className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-[-0.02em] mb-8"
        >
          <span className="italic text-black font-normal">
            Concept
            <span ref={symbolRef} className="inline-block mx-1">
              &lt;
            </span>
            Code
          </span>
        </h1>

        {/* Scroll indicator */}
        <div
          className={`mt-20 transition-opacity duration-500 ${
            isMostTop ? "opacity-100" : "opacity-0"
          }`}
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
