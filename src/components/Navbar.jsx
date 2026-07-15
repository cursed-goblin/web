import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sprout, ArrowRight, Menu, X } from "lucide-react"

const links = ["Home", "Services", "About", "Portfolio", "FAQ", "Contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600 to-accent-400 shadow-glow-sm">
            <Sprout className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Site<span className="text-gradient">Sprout</span>
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setActive(l)}
                className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {l}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-400 transition-all duration-300 ${
                    active === l ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => {
                      setActive(l)
                      setOpen(false)
                    }}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
