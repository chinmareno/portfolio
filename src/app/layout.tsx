import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "chinmareno | Software Engineer",
    template: "%s | chinmareno",
  },

  description:
    "Fullstack JavaScript developer passionate about building modern web apps.",
  openGraph: {
    title: "chinmareno | Software Engineer",
    description:
      "Fullstack JavaScript developer passionate about building modern web apps.",
    url: "https://chinmareno.vercel.app",
    siteName: "chinmareno",

    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "chinmareno's personal site",
      },
    ],
    type: "website",
  },
  keywords: [
    "chinmareno",
    "software engineer",
    "fullstack developer",
    "javascript developer",
    "web developer",
    "react developer",
    "next.js developer",
    "frontend developer",
    "backend developer",
    "portfolio",
    "indonesia developer",
    "tangerang developer",
  ],

  twitter: {
    card: "summary_large_image",
    title: "chinmareno | Software Engineer",
    description:
      "Fullstack JavaScript developer passionate about building modern web apps.",
    images: ["/favicon.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
