"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Xiao ERP – Simple & Efficient ERP for Small Businesses",
    technologies: [
      "React",
      "Remix",
      "tRPC",
      "Tailwind",
      "Shadcn",
      "i18next",
      "React Table",
      "BetterAuth",
      "PostgreSQL",
    ],
    description:
      "Xiao ERP was designed for companies needing a simple, practical, bilingual system.",
    image: "/xiao-erp.png",
    liveUrl: "https://xiao-erp-landing.vercel.app",
  },
  {
    title: "LESSEGOS – Streetwear E-commerce",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "NestJS",
      "Zustand",
      "Shadcn UI",
      "MongoDB",
    ],
    description:
      "LESSEGOS is a fast-growing Indonesian streetwear brand that lacked a proper online presence.",
    image: "/lessegos.jpg",
    liveUrl: "https://lessegos.vercel.app",
  },
];

export const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-16 md:py-32 px-4 sm:px-6 lg:px-12 mx-auto flex bg-[#F8F6F1]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-12 md:mb-24">
          <h2
            className={`text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Selected Work
          </h2>
          <p
            className={`text-3xl md:text-4xl font-bold text-black max-w-2xl leading-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Projects I’ve worked on
          </p>
        </div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative hidden sm:block group rounded-sm col-span-12 md:col-span-3 overflow-hidden border-2 border-black shadow-lg p-2 md:p-20">
                <div className="aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`${index % 2 === 1 ? "md:order-1" : ""} col-span-9`}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-2 py-1 text-xs bg-transparent text-black border-2 border-black"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight text-black">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                  {project.description}
                </p>

                <Button
                  variant="default"
                  size="sm"
                  className="bg-black hover:opacity-80 hover:bg-black transition-all duration-300"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
