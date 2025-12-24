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
      <footer className="bg-gray-100 border-t-2 border-black py-8">
        <div className="max-w-7xl mx-auto  text-black border-2 border-black rounded-lg bg-white place-self-center">
          <a
            href="https://github.com/chinmareno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group  hover:opacity-70 p-3  transition-all duration-300"
          >
            <div className=" transition-colors duration-300 mr-4">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold transition-colors">Github</h4>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
