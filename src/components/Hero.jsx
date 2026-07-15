import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, TrendingUp, Check } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-32 sm:pt-40">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(37,99,235,0.28),transparent_70%)]" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      <div className="mx-auto max-w-6xl px-5 text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent-500" />
          <span className="text-sm font-medium italic text-accent-400">Professional</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent-500" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl"
        >
          Websites for Every
          <br />
          <span className="text-gradient">Local Shop</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Domain, hosting, custom email, security and database — all handled by us. Get your
          business online, starting at just ₹1,999.
        </motion.p>

        {/* Divider with dot */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="my-8 flex items-center justify-center gap-2"
        >
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-accent-500/60" />
          <span className="h-2 w-2 rounded-full bg-accent-400 shadow-glow-sm" />
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-accent-500/60" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mb-20 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/contact" className="btn-primary">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="btn-ghost">
            View Plans
          </Link>
        </motion.div>

        {/* Browser mockup */}
        <Mockup />
      </div>
    </section>
  )
}

function Mockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      className="relative mx-auto max-w-4xl"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-500/20 blur-3xl" />

      {/* Browser window */}
      <div className="glass overflow-hidden rounded-2xl shadow-glow">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#f87171]/80" />
          <span className="h-3 w-3 rounded-full bg-[#facc15]/80" />
          <span className="h-3 w-3 rounded-full bg-[#4ade80]/80" />
          <div className="ml-4 flex-1 rounded-md bg-ink-900/60 px-3 py-1.5 text-xs text-slate-400">
            https://your-shop.sitesprout.in
          </div>
        </div>

        {/* Dashboard */}
        <div className="grid gap-4 p-6 text-left sm:grid-cols-3">
          {/* Visitors card */}
          <div className="glass rounded-xl p-4 sm:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Monthly Visitors</p>
                <p className="text-2xl font-bold text-white">12,480</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-400">
                <TrendingUp className="h-3.5 w-3.5" /> +38%
              </span>
            </div>
            <AreaChart />
          </div>

          {/* Plan card */}
          <div className="glass flex flex-col rounded-xl p-4">
            <div>
              <p className="text-xs text-slate-400">Your Plan</p>
              <h4 className="mt-1 text-lg font-bold text-white">Starter</h4>
              <p className="text-xs text-slate-400">From ₹1,999</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {["Free domain", "Custom email", "SSL security"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Check className="h-3.5 w-3.5 text-accent-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="btn-primary mt-4 w-full px-4 py-2.5 text-xs">
              Go Live <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Trusted-by row */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 sm:col-span-3 sm:pl-28">
            <span className="text-xs uppercase tracking-widest text-slate-500">
              Trusted by local shops
            </span>
            <div className="flex flex-wrap items-center gap-5 opacity-70">
              {["Chai Point", "Sharma Kirana", "Bloom Florist", "Fit Gym", "Kraft Café"].map((n) => (
                <span key={n} className="text-sm font-semibold text-slate-300">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone peeking from bottom-left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="absolute -bottom-10 -left-10 hidden w-32 sm:block"
      >
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-2 shadow-glow backdrop-blur-xl">
          <div className="rounded-[1.2rem] bg-gradient-to-b from-ink-700 to-ink-900 p-3">
            <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/20" />
            <div className="mb-2 h-16 rounded-lg bg-gradient-to-br from-accent-600/40 to-accent-400/20" />
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded bg-white/15" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
            </div>
            <div className="mt-3 h-6 rounded-md bg-gradient-to-r from-accent-600 to-accent-400" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function AreaChart() {
  const d =
    "M0,95 C40,80 60,60 100,65 C140,70 160,40 200,38 C240,36 260,55 300,45 C340,36 360,18 400,12"
  return (
    <svg viewBox="0 0 400 120" className="h-28 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path d={`${d} L400,120 L0,120 Z`} fill="url(#area)" />
      <path d={d} fill="none" stroke="url(#line)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
