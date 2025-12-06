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
        "RESTful APIs",
        "tRPC",
        "JWT Authentication",
        "Auth.js",
        "Better Auth",
        "UploadThing (file uploads)",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      skills: ["PostgreSQL", "Prisma"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "Vercel"],
    },
  ];

  return (
    <Section id="skills" className="bg-muted-foreground/5">
      <SectionHeader title="Technical Skills" />

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center mb-6">
              <div className="text-primary group-hover:text-primary transition-colors duration-300 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 text-foreground py-1.5 text-sm bg-secondary/80 hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105"
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
