import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", className)}
    >
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader = ({ title, className }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold bg-primary bg-clip-text text-black mb-4">
        {title}
      </h2>
    </div>
  );
};
