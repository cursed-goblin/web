// Subtle animated ambient background: slowly drifting gradient orbs over a faint
// grid. Fixed behind all content. Motion is gentle and pauses under
// prefers-reduced-motion (handled in index.css).
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 top-[-12%] h-[34rem] w-[34rem] rounded-full bg-accent-600/20 blur-[110px] animate-drift-slow" />
      <div className="absolute right-[-14%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-400/15 blur-[120px] animate-drift-slower" />
      <div
        className="absolute bottom-[-12%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#1e3a8a]/25 blur-[120px] animate-drift-slow"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  )
}
