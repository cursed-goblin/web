// Shared centered section heading (eyebrow + title + optional subtitle).
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-500" />
          <span className="text-sm font-medium italic text-accent-400">{eyebrow}</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent-500" />
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
    </div>
  )
}
