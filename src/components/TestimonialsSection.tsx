import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      company: "TechStartup Inc.",
      content:
        "chinmareno delivered exceptional results on our e-commerce platform. The project was completed ahead of schedule and exceeded all performance expectations. His attention to detail and proactive communication made the entire process seamless.",
      rating: 5,
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      company: "InnovateCorp",
      content:
        "Working with chinmareno was a game-changer for our team. His technical expertise in React and Node.js helped us build a scalable solution that handles our growing user base efficiently. Highly recommend!",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content:
        "chinmareno's full-stack development skills are outstanding. He transformed our legacy system into a modern, responsive application. The code quality is excellent and the performance improvements were remarkable.",
      rating: 5,
      initials: "ER",
    },
    {
      name: "David Thompson",
      role: "Founder, RetailRevolution",
      company: "RetailRevolution",
      content:
        "The analytics dashboard chinmareno built for us has revolutionized how we make business decisions. The real-time data visualization and intuitive interface have improved our operational efficiency significantly.",
      rating: 5,
      initials: "DT",
    },
    {
      name: "Lisa Park",
      role: "Operations Director, LogiFlow",
      company: "LogiFlow",
      content:
        "chinmareno's ability to understand complex business requirements and translate them into technical solutions is impressive. The task management system he developed has streamlined our workflow tremendously.",
      rating: 5,
      initials: "LP",
    },
    {
      name: "Robert Wilson",
      role: "VP Engineering, CloudTech",
      company: "CloudTech",
      content:
        "Professional, reliable, and technically excellent. chinmareno delivered a high-quality microservices architecture that improved our system performance by 40%. His documentation and code quality are top-notch.",
      rating: 5,
      initials: "RW",
    },
  ];

  return (
    <Section id="testimonials">
      <SectionHeader title="Client Testimonials" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            className="p-6 bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in relative group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
              <Quote className="w-8 h-8" />
            </div>

            <div className="flex items-center mb-4">
              <Avatar className="w-12 h-12 mr-4 ring-2 ring-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-xs text-primary font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
              &quot;{testimonial.content}&quot;
            </blockquote>
          </Card>
        ))}
      </div>
    </Section>
  );
};
