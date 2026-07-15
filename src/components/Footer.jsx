import { Link } from "react-router-dom"
import { Sprout } from "lucide-react"

const tags = ["Affordable", "Fast", "Secure", "Scalable"]
const footerLinks = [
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Demo", to: "/demo" },
  { label: "Contact", to: "/contact" },
]

export default function Footer() {
  return (
    <footer className="relative mt-16 pt-10">
      <div className="mx-auto max-w-6xl px-5">
        {/* Tagline strip */}
        <div className="flex items-center justify-center gap-3">
          <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-accent-500/50 sm:block" />
          <p className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            {tags.map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {t}
                {i < tags.length - 1 && <span className="h-1 w-1 rounded-full bg-accent-400" />}
              </span>
            ))}
          </p>
          <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-accent-500/50 sm:block" />
        </div>

        {/* Brand + links */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-600 to-accent-400">
              <Sprout className="h-4 w-4 text-white" />
            </span>
            <span className="font-bold text-white">
              Site<span className="text-gradient">Sprout</span>
            </span>
          </Link>
          <p className="order-last text-xs text-slate-500 sm:order-none">
            © {new Date().getFullYear()} SiteSprout. Websites for every local shop.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400">
            {footerLinks.map((l) => (
              <Link key={l.to} to={l.to} className="transition hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Glowing blue line at the very bottom edge */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-accent-500 to-transparent shadow-glow" />
      <div className="h-1 w-full bg-accent-500/40 blur-md" />
    </footer>
  )
}
