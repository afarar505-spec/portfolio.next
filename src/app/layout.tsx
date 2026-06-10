import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksim Hüseynov — Front-End Developer",
  description:
    "Front-End Developer based in Baku. Building modern, responsive, and performant web interfaces with React, Next.js, and TypeScript.",
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Baku",
    "Azerbaijan",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Maksim Hüseynov" }],
  openGraph: {
    title: "Maksim Hüseynov — Front-End Developer",
    description:
      "Front-End Developer based in Baku. Building modern, responsive, and performant web interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
