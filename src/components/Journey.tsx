"use client";

import { FadeIn } from "./FadeIn";

const timelineItems = [
  {
    year: "2023",
    title: "Started the Journey",
    description:
      "Began learning web development — HTML, CSS, and the fundamentals of JavaScript. Built my first static websites and fell in love with the craft of building for the web.",
    tags: ["HTML5", "CSS3", "JavaScript Basics"],
  },
  {
    year: "2024",
    title: "Going Deeper",
    description:
      "Moved into JavaScript ES6+, learned Flexbox and CSS Grid in depth. Started exploring Git workflow, version control, and began contributing to personal projects on GitHub.",
    tags: ["ES6+", "Git", "Responsive Design", "Figma"],
  },
  {
    year: "2025",
    title: "React & Next.js Ecosystem",
    description:
      "Deep-dived into the React ecosystem — component patterns, hooks, state management. Adopted Next.js for full-stack capabilities. Currently advancing TypeScript and performance optimization skills.",
    tags: ["React", "Next.js", "TypeScript", "Python"],
  },
  {
    year: "Now",
    title: "Building Real Products",
    description:
      "Actively building professional projects, contributing to the open-source community, and continuously sharpening UI/UX sensibility to create interfaces that are both performant and beautiful.",
    tags: ["Advanced React", "UI/UX Design", "Performance", "Open Source"],
    current: true,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-32"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p
              className="text-xs font-medium mono mb-3 tracking-widest uppercase"
              style={{ color: "#3b82f6" }}
            >
              04 — Story
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--text-1)" }}
            >
              Development Journey
            </h2>
            <p
              className="mt-3 text-base max-w-lg"
              style={{ color: "var(--text-2)" }}
            >
              How I went from writing my first{" "}
              <code
                className="mono text-sm px-1 py-0.5 rounded"
                style={{
                  background: "var(--bg-3)",
                  color: "#3b82f6",
                }}
              >
                {"<div>"}
              </code>{" "}
              to building full-stack React applications.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-12">
            {timelineItems.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1} direction="left">
                <div className="md:pl-12 relative">
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 hidden md:flex items-center justify-center"
                    style={{
                      borderColor: item.current ? "#3b82f6" : "var(--border-2)",
                      background: item.current ? "rgba(59,130,246,0.15)" : "var(--bg)",
                    }}
                  >
                    {item.current && (
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </div>

                  <div
                    className="rounded-xl border p-6"
                    style={{
                      borderColor: item.current
                        ? "rgba(59,130,246,0.2)"
                        : "var(--border)",
                      background: item.current
                        ? "rgba(59,130,246,0.04)"
                        : "var(--bg)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="text-xs font-semibold mono px-2.5 py-1 rounded-md"
                        style={{
                          background: item.current
                            ? "rgba(59,130,246,0.12)"
                            : "var(--bg-3)",
                          color: item.current ? "#3b82f6" : "var(--text-3)",
                        }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="font-semibold text-base"
                        style={{ color: "var(--text-1)" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--text-2)" }}
                    >
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs mono px-2 py-0.5 rounded border"
                          style={{
                            borderColor: "var(--border-2)",
                            color: "var(--text-3)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
