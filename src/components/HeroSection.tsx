"use client";

import { Section } from "@/components/ui/section";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (!isScrolledDown && 0 < scrollPosition) setIsScrolledDown(true);
      else setIsScrolledDown(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isShowAvatar = process.env.SHOW_AVATAR === "true";
  console.log(isShowAvatar);
  return (
    <Section
      id="home"
      className="min-h-screen bg-blue-800/10 flex items-center justify-center relative"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter">
          <span className="bg-primary bg-clip-text text-transparent">
            Chin Mareno
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
          Full-Stack Web Developer
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Currently building apps with Next.js, Remix, and React.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          <span className="font-semibold">Trilingual:</span> Indonesian,
          English, and Chinese.
        </p>

        {!isScrolledDown && (
          <ArrowDown className="animate-bounce w-6 h-6 text-muted-foreground mx-auto" />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </Section>
  );
};
