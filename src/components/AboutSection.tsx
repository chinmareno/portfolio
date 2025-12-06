import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Eye, Shield, Clock } from "lucide-react";

export const AboutSection = () => {
  const coreSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next",
    "Remix",
    "Node",
    "Express",
    "PostgreSQL",
    "Git",
    "Tailwind CSS",
    "REST",
  ];

  const values = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Consistency",
      description: "Once I set a goal, I stay committed until I achieve it.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description:
        "I follow through on commitments and take responsibility for my actions.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Calm",
      description:
        "Stay logical and maintain fairness even in intense situations.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "High Achiever",
      description:
        "Set ambitious goals and push to reach them with dedication and focus.",
    },
  ];

  return (
    <Section id="about">
      <SectionHeader title="About Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            I’m a full-stack web developer who plans database schemas, backend
            architecture, and atomic frontend components before writing code. I
            build fast, reliable applications using <strong>Next.js</strong>,
            <strong> Remix</strong>, <strong>React</strong>, and have experience
            with <strong>Express</strong> on personal projects. I also can speak
            in <strong>Indonesian</strong>, <strong>English</strong>, and
            conversational <strong>Mandarin</strong>. I’m continuously learning
            system design and infrastructure to deliver scalable, maintainable
            applications.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-foreground text-sm bg-secondary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-6 bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary">{value.icon}</div>
              <h3 className="font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
