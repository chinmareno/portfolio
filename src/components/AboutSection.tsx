"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="w-full flex items-center py-24 md:py-32  -6 lg:px-12 bg-[#F8F6F1]"
    >
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24
        transition-all duration-700 ease-[cubic-bezier(0.4,0,1,1)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Left */}
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            About Me
          </h2>

          <h3 className="text-3xl text-black md:text-4xl font-bold mb-8 leading-tight">
            I’m a developer who believes fundamental still not overrated
          </h3>

          <p className="text-lg text-black leading-relaxed mb-4">
            Hello! I’m Chin Mareno, a Full-stack Developer who tries to
            understand the concept before writing code.
          </p>

          <p className="text-lg text-black leading-relaxed mb-4">
            Over the past 3 years, I’ve built applications using{" "}
            <strong>Next.js</strong>, <strong>Remix</strong>,{" "}
            <strong>React</strong>, <strong>Express</strong>, and{" "}
            <strong>NestJS</strong>.
          </p>

          <p className="text-lg text-black leading-relaxed mb-4">
            Fluent <strong>Indonesian</strong> & <strong>English</strong>,
            conversational <strong>Mandarin</strong>, learning Japanese.
          </p>
        </div>

        {/* Right */}
        <div className="flex rounded-sm border-4 border-black place-self-center">
          <Image
            src="/profile.jpg"
            width={350}
            height={350}
            alt="Profile"
            className="border-black border-4 m-3 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
