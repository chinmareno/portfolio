"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Settings, Database } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiRemix,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiZod,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiReactquery,
  SiRedux,
  SiRadixui,
} from "@icons-pack/react-simple-icons";
import { useEffect, useRef, useState } from "react";

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
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

  const skillCategories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        {
          title: "React",
          icon: <SiReact size={20} color="#61DAFB" />,
        },
        { title: "Next.js", icon: <SiNextdotjs size={20} color="#000000" /> },
        { title: "Remix", icon: <SiRemix size={20} color="#000000" /> },
        {
          title: "TypeScript",
          icon: <SiTypescript size={20} color="#3178C6" />,
        },
        {
          title: "JavaScript",
          icon: <SiJavascript size={20} className="bg-black" color="#F7DF1E" />,
        },
        {
          title: "Tailwind CSS",
          icon: <SiTailwindcss size={20} color="#38BDF8" />,
        },
        { title: "Zod", icon: <SiZod size={20} color="#3E67B1" /> },
        {
          title: "TanStack Query",
          icon: <SiReactquery size={20} color="#FF4154" />,
        },
        {
          title: "Zustand",
          icon: <SiRedux size={20} color="#764ABC" />,
        },
        {
          title: "shadcn/ui",
          icon: <SiRadixui size={20} color="#000000" />,
        },
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        { title: "Node.js", icon: <SiNodedotjs size={20} color="#339933" /> },
        { title: "Express", icon: <SiExpress size={20} color="#000000" /> },
        { title: "NestJS", icon: <SiNestjs size={20} color="#E0234E" /> },
        { title: "Prisma", icon: <SiPrisma size={20} color="#0C344B" /> },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      skills: [
        {
          title: "PostgreSQL",
          icon: <SiPostgresql size={20} color="#4169E1" />,
        },
        { title: "MongoDB", icon: <SiMongodb size={20} color="#47A248" /> },
      ],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Tools",
      skills: [
        { title: "Git", icon: <SiGit size={20} color="#F05032" /> },
        { title: "GitHub", icon: <SiGithub size={20} color="#181717" /> },
        { title: "Vercel", icon: <SiVercel size={20} color="#000000" /> },
      ],
    },
  ];

  return (
    <Section id="skills" className="min-h-[100vh] flex flex-col justify-center">
      <div
        className={`
    transition-all duration-700
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
        ref={sectionRef}
      >
        <SectionHeader title="Technical Skills" />

        <p className="text-3xl md:text-4xl mb-8 font-bold text-black max-w-2xl leading-tight">
          Libraries / Frameworks
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="
          p-8 bg-white border-4 border-black rounded-sm
              transition-transform duration-300 ease-out
              hover:-translate-y-1
              "
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 text-black">{category.icon}</div>
                <h3 className="text-xl font-semibold text-black">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.title}
                    variant="secondary"
                    className="
                    flex items-center gap-1.5
                    px-3 py-1.5 text-sm
                    bg-transparent border-2 border-black
                    text-black cursor-default
                    "
                  >
                    <span>{skill.icon}</span>
                    {skill.title}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
