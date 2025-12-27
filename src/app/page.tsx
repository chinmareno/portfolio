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
      <footer className="bg-zinc-100 border-t-4 border-black py-12">
        <div className="place-self-center bg-white border-4 text-black border-black rounded-sm shadow-[4px_4px_0_0_#000]">
          <a
            href="https://github.com/chinmareno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 hover:opacity-70 transition-opacity"
          >
            <Github className="w-5 h-5" />
            <h4 className="font-semibold">GitHub</h4>
          </a>
        </div>
      </footer>
    </div>
  );
}
