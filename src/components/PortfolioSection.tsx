import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  liveUrl: string;
};

const projects = [
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
    description: `Xiao ERP was built for Chinese companies in Indonesia that needed something simple, practical, and bilingual. Most struggled with language barriers, oversized ERP systems full of features they didn't need, and confusing inventory processes. Since I could bridge both languages, I set out to create a system tailored to how they actually work.

I designed a lightweight ERP that keeps everything clear and familiar, with full Chinese–Indonesian support and automatic IDR–CNY currency conversion. I built integrated modules for inventory, sales, and accounting, added multi-tenant access with invite links, and made sure stock updates happen automatically whenever purchases or sales occur.

The result is a faster, more automated workflow where teams can confidently manage operations in the language they prefer, without the complexity of big ERP platforms.`,
    image: "/xiao-erp.png",
    liveUrl: "https://xiao-erp-landing.vercel.app",
  },
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
    description: `LESSEGOS is a fast-growing Indonesian streetwear brand that lacked a proper online presence. Most of their audience could only interact with them through marketplaces, limiting brand identity and customer engagement.

    I designed and built a platform tailored to showcase their story and products clearly, with a clean, mobile-first interface. The site features a product catalog with filters and pagination, a community-driven articles section, and a user login system that allows customers to save favorites with a wishlist.
    
    The result is a modern, engaging online experience that strengthens their brand identity, makes shopping seamless, and extends their reach beyond marketplace platforms.`,
    image: "/lessegos.jpg",
    liveUrl: "https://lessegos.vercel.app",
  },
] as Project[];

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
