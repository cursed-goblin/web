import { Link } from "react-router-dom"
import { Sprout, ArrowRight } from "lucide-react"

// Small floating "made with SiteSprout" badge shown ONLY on client demo pages.
// Sticks to the bottom-right corner and stays visible while scrolling.
export default function WatermarkCTA() {
  return (
    <Link
      to="/contact"
      aria-label="Contact SiteSprout for a website like this"
      className="group fixed bottom-4 right-4 z-[70] flex items-center gap-2 rounded-full border border-white/15 bg-[#0a0e1a]/90 px-3.5 py-2.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-[#60a5fa]/70 sm:bottom-6 sm:right-6 sm:px-4 sm:text-sm"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa]">
        <Sprout className="h-3.5 w-3.5 text-white" />
      </span>
      <span className="hidden sm:inline">Like this site?&nbsp;</span>Get yours
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
