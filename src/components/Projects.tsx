"use client";

import { FadeIn } from "./FadeIn";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Aether Pay",
    category: "Fintech Platform",
    description:
      "A high-performance payment SDK dashboard inspired by Stripe's design language. Built with a focus on low-latency data visualizations, real-time analytics, and an accessible multi-step checkout flow.",
    tech: ["TypeScript", "React", "GraphQL", "Redis"],
    color: "#3b82f6",
  },
  {
    number: "02",
    title: "Helios Smart Grid",
    category: "IoT / Energy Analytics",
    description:
      "Real-time IoT monitoring dashboard for solar grid infrastructure. Uses persistent WebSocket connections to update energy production, consumption, and distribution metrics at 60fps.",
    tech: ["React", "D3.js", "WebSockets", "TailwindCSS"],
    color: "#10b981",
  },
  {
    number: "03",
    title: "Veloce Customizer",
    category: "3D E-Commerce",
    description:
      "Interactive 3D product configurator for athletic wear. Loads optimized glTF models and applies real-time texture and material parameters based on user selections, loading under 2 seconds on mobile.",
    tech: ["Three.js", "WebGL", "Next.js", "Framer Motion"],
    color: "#f59e0b",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p
              className="text-xs font-medium mono mb-3 tracking-widest uppercase"
              style={{ color: "#3b82f6" }}
            >
              03 — Work
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--text-1)" }}
            >
              Featured Projects
            </h2>
            <p className="mt-3 text-base max-w-lg" style={{ color: "var(--text-2)" }}>
              Selected engineering work — each project built with attention to
              performance, accessibility, and visual detail.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.number} delay={i * 0.1}>
              <div
                className="group rounded-xl border p-8 transition-all duration-300 cursor-default"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--border-2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--border)";
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-start">
                  {/* Number */}
                  <div
                    className="mono text-4xl font-bold select-none hidden lg:block"
                    style={{ color: "var(--border-2)" }}
                  >
                    {project.number}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: project.color }}
                      />
                      <span
                        className="text-xs mono uppercase tracking-wider"
                        style={{ color: "var(--text-3)" }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 tracking-tight"
                      style={{ color: "var(--text-1)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 max-w-2xl"
                      style={{ color: "var(--text-2)" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs mono border"
                          style={{
                            borderColor: "var(--border-2)",
                            color: "var(--text-3)",
                            background: "var(--bg-3)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-3">
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        borderColor: "var(--border-2)",
                        color: "var(--text-2)",
                        background: "transparent",
                      }}
                      onClick={() => alert("Demo running on local test server.")}
                    >
                      <ExternalLink size={13} />
                      Live
                    </button>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        borderColor: "var(--border-2)",
                        color: "var(--text-2)",
                        background: "transparent",
                      }}
                      onClick={() => alert("Redirecting to repository.")}
                    >
                      <Github size={13} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
