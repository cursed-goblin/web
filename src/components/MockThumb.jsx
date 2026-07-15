// Lightweight CSS "screenshot" of a website, tinted by an accent colour. Used as
// portfolio / demo card imagery so there are never broken external images.
export default function MockThumb({ accent, accent2 = accent, label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 ${className}`}
      style={{ background: "linear-gradient(160deg,#0d1220,#0a0e1a)" }}
    >
      {/* browser bar */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full" style={{ background: "#f87171" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#facc15" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#4ade80" }} />
        <span className="ml-2 hidden h-3 flex-1 rounded bg-white/10 sm:block" />
      </div>
      {/* body */}
      <div className="p-3">
        <div
          className="mb-2 flex h-20 items-end rounded-lg p-2"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}
        >
          <span className="rounded bg-black/25 px-2 py-0.5 text-[10px] font-semibold text-white">
            {label}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <span className="h-8 rounded" style={{ background: `${accent}22` }} />
          <span className="h-8 rounded" style={{ background: `${accent}22` }} />
          <span className="h-8 rounded" style={{ background: `${accent}22` }} />
        </div>
        <div className="mt-2 space-y-1.5">
          <span className="block h-1.5 w-full rounded bg-white/10" />
          <span className="block h-1.5 w-2/3 rounded bg-white/10" />
        </div>
      </div>
    </div>
  )
}
