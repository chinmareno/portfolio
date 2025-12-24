import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Settings, Database } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "Remix",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Zustand",
        "React Hook Form",
        "TanStack Query",
        "Zod",
        "shadcn/ui",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Prisma",
        "tRPC",
        "JWT",
        "Better Auth",
        "UploadThing (file uploads)",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "Vercel"],
    },
  ];

  return (
    <Section className="min-h-[100vh] flex flex-col justify-center" id="skills">
      <SectionHeader title="Technical Skills" />
      <p
        className={`text-3xl md:text-4xl mb-2 font-bold text-black max-w-2xl leading-tight transition-all duration-700 `}
        style={{ transitionDelay: "100ms" }}
      >
        Libraries/Frameworks
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className="p-8 bg-white border-2 border-black transition-all duration-500 group animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center mb-6">
              <div className="text-black group-transition-colors duration-300 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl text-black font-semibold">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm bg-transparent border-2 text-black border-black transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 0.2 + skillIndex * 0.05}s`,
                    animation: "fade-in 0.6s ease-out forwards",
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
