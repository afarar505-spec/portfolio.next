"use client";

import { FadeIn } from "./FadeIn";

const skills = {
  Frontend: [
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 70 },
  ],
  Tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "Figma", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "npm / Node", level: 80 },
  ],
  Learning: [
    { name: "TypeScript (Advanced)", level: 50 },
    { name: "Performance Optimization", level: 55 },
    { name: "UI/UX Design", level: 60 },
    { name: "Python", level: 65 },
  ],
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm" style={{ color: "var(--text-2)" }}>
          {name}
        </span>
        <span className="text-xs mono" style={{ color: "var(--text-3)" }}>
          {level}%
        </span>
      </div>
      <div
        className="h-px rounded-full overflow-hidden"
        style={{ background: "var(--border-2)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${level}%`,
            background:
              level >= 85
                ? "#3b82f6"
                : level >= 65
                ? "rgba(59,130,246,0.6)"
                : "rgba(59,130,246,0.35)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
              02 — Skills
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--text-1)" }}
            >
              Tech Stack
            </h2>
            <p className="mt-3 text-base max-w-lg" style={{ color: "var(--text-2)" }}>
              Technologies I work with daily — and ones I'm actively learning.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <FadeIn key={category} delay={ci * 0.1}>
              <div
                className="rounded-xl border p-6 hover:border-[#2a2a2a] transition-all duration-300"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg)",
                }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:
                        category === "Frontend"
                          ? "#3b82f6"
                          : category === "Tools"
                          ? "#10b981"
                          : "#f59e0b",
                    }}
                  />
                  <h3
                    className="text-sm font-semibold uppercase tracking-wider mono"
                    style={{ color: "var(--text-2)" }}
                  >
                    {category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
