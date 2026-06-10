"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(10,10,10,0.85)",
        borderColor: "var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-bold text-sm mono tracking-tight"
          style={{ color: "var(--text-1)" }}
        >
          <span style={{ color: "#3b82f6" }}>MH</span>
          <span style={{ color: "var(--text-3)" }}>.dev</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium transition-colors duration-200"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-3)";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/afarar505-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-200 hidden sm:flex"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--border-2)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--text-1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--text-3)";
            }}
          >
            <Github size={14} />
          </a>
          <a
            href="mailto:afarar505@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
            style={{ background: "#3b82f6", color: "#ffffff" }}
          >
            <Mail size={12} />
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
