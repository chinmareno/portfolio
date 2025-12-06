"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Instagram } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message Sent!", {
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "chinmareno1@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+62 081770796443",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Tangerang, Banten",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: "https://www.instagram.com/chinmareno",
      username: "@chinmareno",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/chinmareno",
      username: "@chinmareno",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/chin-mareno-792b80229/",
      username: "chinmareno",
    },
  ];

  return (
    <Section id="contact" className="bg-muted/5">
      <SectionHeader title="Get In Touch" />

      <div className="grid lg:grid-cols-2 gap-12">
        <Card className="p-8 bg-card border-border shadow-elegant">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-card-foreground mb-2 block"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="border-border focus:border-primary"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-card-foreground mb-2 block"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-border focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="subject"
                className="text-sm font-medium text-card-foreground mb-2 block"
              >
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="border-border focus:border-primary"
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-sm font-medium text-card-foreground mb-2 block"
              >
                Message
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={1}
                  required
                  maxLength={200}
                  className="border-border focus:border-primary pb-8 resize-none"
                />
                <span className="absolute bottom-2 right-3 text-sm text-muted-foreground">
                  {formData.message.length}/200
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:shadow-glow transition-all duration-300 py-3 cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className="text-primary /60 transition-colors duration-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Follow Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group hover:bg-primary/10 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="text-primary transition-colors duration-300 mr-4">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
