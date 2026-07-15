import { motion } from "framer-motion"
import { ArrowRight, Play, TrendingUp } from "lucide-react"

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
    <section id="home" className="relative overflow-hidden pb-28 pt-32 sm:pt-40">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(37,99,235,0.28),transparent_70%)]" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
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
          <a href="#contact" className="btn-primary">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="btn-ghost">
            View Plans
          </a>
        </motion.div>

        {/* Laptop mockup */}
        <LaptopMockup />
      </div>
    </section>
  )
}

function LaptopMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      className="relative mx-auto max-w-3xl"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent-500/20 blur-3xl" />

      {/* Laptop lid / screen */}
      <div className="relative rounded-t-2xl border border-b-0 border-white/10 bg-[#0b1120] p-2.5 shadow-glow sm:p-3">
        <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-white/20" />
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-ink-800 to-ink-900 ring-1 ring-white/5">
          <SampleSite />
        </div>
      </div>

      {/* Laptop base / keyboard deck */}
      <div className="relative -ml-[5%] h-3.5 w-[110%] rounded-b-xl bg-gradient-to-b from-[#2a3243] to-[#141a28] shadow-lg sm:h-4">
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-lg bg-black/40" />
      </div>

      {/* Phone peeking from bottom-left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="absolute -bottom-9 -left-16 hidden w-24 sm:block"
      >
        <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-1.5 shadow-glow backdrop-blur-xl">
          <div className="rounded-[1rem] bg-gradient-to-b from-ink-700 to-ink-900 p-2.5">
            <div className="mx-auto mb-2.5 h-1 w-8 rounded-full bg-white/20" />
            <div className="mb-2 h-14 rounded-lg bg-gradient-to-br from-accent-600/40 to-accent-400/20" />
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded bg-white/15" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
            </div>
            <div className="mt-2.5 h-5 rounded-md bg-gradient-to-r from-accent-600 to-accent-400" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function SampleSite() {
  return (
    <div className="p-3 text-left sm:p-5">
      {/* Mini nav */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-accent-600 to-accent-400 text-[7px] font-bold text-white">
            S
          </span>
          <span className="text-xs font-bold text-white">SiteSprout</span>
        </div>
        <div className="hidden items-center gap-3 text-[10px] text-slate-400 sm:flex">
          <span className="text-white">Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Blog</span>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white">
          Contact
        </span>
      </div>

      {/* Sample hero */}
      <div className="grid items-center gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <p className="text-[10px] font-medium italic text-accent-400">— Professional —</p>
          <h3 className="mt-1 text-base font-extrabold leading-tight text-white sm:text-xl">
            Grow Your <span className="text-gradient">Business</span> Online
          </h3>
          <p className="mt-1.5 text-[10px] leading-relaxed text-slate-400 sm:text-xs">
            Affordable websites for local shops — domain, email &amp; hosting included.
          </p>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-600 to-accent-400 px-3 py-1 text-[10px] font-semibold text-white">
              Get Started <ArrowRight className="h-2.5 w-2.5" />
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-300">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-white/20">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Watch Video
            </span>
          </div>
        </div>

        {/* Chart card */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">Revenue Growth</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-green-400">
              <TrendingUp className="h-2.5 w-2.5" /> +68%
            </span>
          </div>
          <GrowthChart />
        </div>
      </div>

      {/* Trusted-by row */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/5 pt-3">
        <span className="text-[9px] uppercase tracking-widest text-slate-500">
          Trusted by 500+ shops
        </span>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 opacity-70">
          {["Chai Point", "Sharma Kirana", "Bloom", "Fit Gym"].map((n) => (
            <span key={n} className="text-[10px] font-semibold text-slate-300">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function GrowthChart() {
  const bars = [26, 40, 32, 52, 46, 66, 80]
  const step = 27
  const barW = 14
  const x0 = 8
  const pts = bars.map((h, i) => [x0 + i * step + barW / 2, 100 - h - 2])
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ")
  const last = pts[pts.length - 1]
  return (
    <svg viewBox="0 0 200 100" className="h-16 w-full sm:h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={x0 + i * step}
          y={100 - h}
          width={barW}
          height={h}
          rx="3"
          fill="url(#bar)"
          opacity={0.35 + i * 0.09}
        />
      ))}
      <path d={line} fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={`M${last[0] - 9},${last[1] + 1} L${last[0]},${last[1]} L${last[0] - 1},${last[1] + 9}`}
        fill="none"
        stroke="#93c5fd"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
