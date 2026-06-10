"use client";

import { FadeIn } from "./FadeIn";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    value: "afarar505-spec",
    href: "https://github.com/afarar505-spec",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "maksim-hüseynov",
    href: "https://www.linkedin.com/in/maksim-hüseynov-99659a321",
  },
  {
    icon: Mail,
    label: "Email",
    value: "afarar505@gmail.com",
    href: "mailto:afarar505@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@_afarar_",
    href: "https://www.instagram.com/_afarar_/",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+994) 77 565 71 92",
    href: "tel:+994775657192",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baku, Azerbaijan",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
              06 — Contact
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--text-1)" }}
            >
              Get In Touch
            </h2>
            <p
              className="mt-3 text-base max-w-lg"
              style={{ color: "var(--text-2)" }}
            >
              Available for freelance projects, collaborations, and full-time
              opportunities. Let&apos;s build something great together.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Contact links */}
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map(({ icon: Icon, label, value, href }, i) => {
                const content = (
                  <div
                    className="flex items-center gap-4 p-5 rounded-xl border transition-all duration-200 group"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: "var(--bg-3)",
                        color: "var(--text-3)",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p
                        className="text-xs mono mb-0.5"
                        style={{ color: "var(--text-3)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--text-2)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </FadeIn>

          {/* Quick contact card */}
          <FadeIn delay={0.2} direction="right">
            <div
              className="rounded-xl border p-8 w-full lg:w-80"
              style={{
                borderColor: "rgba(59,130,246,0.2)",
                background: "rgba(59,130,246,0.04)",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                <Mail size={18} style={{ color: "#3b82f6" }} />
              </div>
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: "var(--text-1)" }}
              >
                Send a message
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-2)" }}
              >
                Have a project in mind? I&apos;d love to hear about it. Send me
                an email and I&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:afarar505@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#3b82f6", color: "#ffffff" }}
              >
                <Mail size={14} />
                afarar505@gmail.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
