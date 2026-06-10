export default function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs mono" style={{ color: "var(--text-3)" }}>
          <span style={{ color: "#3b82f6" }}>MH</span>.dev
        </p>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          © 2026 Maksim Hüseynov. Built with Next.js & Tailwind CSS.
        </p>
        <p className="text-xs mono" style={{ color: "var(--text-3)" }}>
          Baku, Azerbaijan 🇦🇿
        </p>
      </div>
    </footer>
  );
}
