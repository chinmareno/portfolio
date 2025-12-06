import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "LESSEGOS – Streetwear E-commerce",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Backendless",
      "Zustand",
      "Shadcn UI",
    ],
    description: `
      LESSEGOS is a fast-growing Indonesian streetwear brand, but they had no website to showcase their identity or products. I designed and built a platform that gives them a strong online presence.
      The site highlights their brand story, a clean product catalog with filters & pagination, and a community-driven articles section. Users can also log in to save favorites with a wishlist feature.
      The result is a modern, mobile-first experience that makes the brand feel premium, and accessible beyond marketplace platforms.`,
    image: "/lessegos.jpg",
    liveUrl: "https://lessegos.vercel.app",
  },
] as const;

export const PortfolioSection = () => {
  return (
    <Section id="portfolio">
      <SectionHeader title="Featured Projects" />

      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="p-0 bg-card text-primary-foreground border-border hover:shadow-elegant transition-all duration-500 overflow-hidden animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden bg-white">
                <div className="relative aspect-[1.8/2] max-h-fit">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 "
                  />
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 transition-colors">
                  {project.title}
                </h3>

                <div className="text-sm">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary hover:shadow-glow transition-all duration-300"
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
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
