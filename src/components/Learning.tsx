"use client";

import { FadeIn } from "./FadeIn";

const learning = [
  {
    title: "Next.js (App Router)",
    description: "Server components, streaming, advanced routing patterns, and the full App Router architecture.",
    progress: 75,
  },
  {
    title: "TypeScript",
    description: "Advanced type system, generics, utility types, and writing fully type-safe React applications.",
    progress: 60,
  },
  {
    title: "Performance Optimization",
    description: "Core Web Vitals, code splitting, lazy loading, memoization, and bundle analysis techniques.",
    progress: 55,
  },
  {
    title: "UI/UX Design",
    description: "Mastering design systems, design tokens, component libraries, and the principles behind great interfaces.",
    progress: 65,
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p
              className="text-xs font-medium mono mb-3 tracking-widest uppercase"
              style={{ color: "#3b82f6" }}
            >
              05 — Growing
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--text-1)" }}
            >
              Currently Learning
            </h2>
            <p
              className="mt-3 text-base max-w-lg"
              style={{ color: "var(--text-2)" }}
            >
              Areas I'm actively investing time in to level up my engineering
              craft.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {learning.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div
                className="rounded-xl border p-6 h-full transition-all duration-300"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-2)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-semibold text-base leading-tight"
                    style={{ color: "var(--text-1)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-xs mono flex-shrink-0 font-medium"
                    style={{ color: "#3b82f6" }}
                  >
                    {item.progress}%
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-2)" }}
                >
                  {item.description}
                </p>
                <div
                  className="h-px rounded-full overflow-hidden"
                  style={{ background: "var(--border-2)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.progress}%`,
                      background:
                        "linear-gradient(90deg, rgba(59,130,246,0.6), #3b82f6)",
                    }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
