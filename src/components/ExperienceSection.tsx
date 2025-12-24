import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Web Development Bootcamp",
    company: "Purwadhika (Bootcamp)",
    location: "Remote",
    period: "2025",
    responsibilities: [
      "Completed intensive full-stack curriculum focused on JavaScript, React, Next.js, and Node.js",
      "Built real-world projects including an e-commerce site, dashboard app, and developer portfolio",
      "Collaborated in team projects simulating agile workflows (sprint planning, Git collaboration, code reviews)",
      "Implemented authentication, REST APIs, and database integration",
      "Deployed projects to Vercel and practiced CI/CD workflows",
    ],
    technologies: ["Next.js", "React", "Node.js", "Backendless", "TailwindCSS"],
  },
  {
    title: "Portfolio Project – LESSEGOS Streetwear",
    company: "Purwadhika (Bootcamp)",
    location: "Remote",
    period: "2025",
    responsibilities: [
      "Developed a full-stack e-commerce platform for an Indonesian streetwear brand as part of bootcamp capstone",
      "Implemented product catalog with filtering, pagination, and wishlist functionality",
      "Built an article publishing system with login-based access control",
      "Integrated Backendless for database, authentication, and APIs",
      "Deployed on Vercel with a mobile-first, responsive design",
    ],
    technologies: ["Next.js", "TailwindCSS", "Backendless"],
  },
];

export const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-muted/5">
      <SectionHeader title="Experience & Projects" />

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-black transform md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-2 md:-translate-x-2 z-10 animate-glow-pulse" />

              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                } ml-12 md:ml-0`}
              >
                <Card className="p-6 bg-transparent border-2 border-black transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-black mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-black mb-4 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-black font-bold mr-2 mt-1">
                          •
                        </span>
                        <span className="leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2 py-1 text-xs text-black bg-transparent border-2 border-black transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
