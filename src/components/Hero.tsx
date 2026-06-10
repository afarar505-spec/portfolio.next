"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: Github, href: "https://github.com/afarar505-spec", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/maksim-hüseynov-99659a321",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/_afarar_/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:afarar505@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue accent glow - top left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: Main content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border mono"
                style={{
                  borderColor: "rgba(59,130,246,0.3)",
                  color: "#3b82f6",
                  background: "rgba(59,130,246,0.08)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ color: "var(--text-1)" }}
            >
              Maksim
              <br />
              <span style={{ color: "var(--text-2)" }}>Hüseynov</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="text-lg font-medium"
                style={{ color: "#3b82f6" }}
              >
                Front-End Developer
              </span>
              <span style={{ color: "var(--border-2)" }}>—</span>
              <span style={{ color: "var(--text-3)" }}>Baku, Azerbaijan</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--text-2)" }}
            >
              I build modern, responsive web interfaces with a focus on clean
              code, performance, and usability. Currently deepening my expertise
              in React and Next.js.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#3b82f6",
                  color: "#ffffff",
                }}
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border-2)",
                  color: "var(--text-2)",
                  background: "transparent",
                }}
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-1"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--border-2)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-3)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div
              className="w-56 rounded-xl border p-6 space-y-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-2)",
              }}
            >
              {[
                { label: "Experience", value: "1+ yr" },
                { label: "Projects", value: "15+" },
                { label: "Focus", value: "React / Next" },
                { label: "Location", value: "Baku 🇦🇿" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs mb-1 mono" style={{ color: "var(--text-3)" }}>
                    {label}
                  </p>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-1)" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-3)" }}
      >
        <span className="text-xs mono">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
