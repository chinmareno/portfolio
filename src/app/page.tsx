import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { PortfolioSection } from "@/components/PortfolioSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <footer className="bg-secondary/50 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 place-self-center">
          <a
            href="https://github.com/chinmareno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group hover:bg-primary/10 p-3 rounded-lg transition-all duration-300"
          >
            <div className="text-primary transition-colors duration-300 mr-4">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Github
              </h4>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
