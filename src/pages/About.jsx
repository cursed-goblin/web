import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Heart, Zap, ShieldCheck, Users, ArrowRight } from "lucide-react"
import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"
import Stats from "../components/Stats.jsx"

const values = [
  { icon: Heart, title: "Local-first", desc: "We build for the corner shop, the salon, the café — not just big brands." },
  { icon: Zap, title: "Fast & simple", desc: "Most shops go live in days, with zero technical work on your side." },
  { icon: ShieldCheck, title: "Fully handled", desc: "Domain, email, security and database — we manage all of it for you." },
  { icon: Users, title: "Real support", desc: "Friendly humans who answer, help and grow your site alongside you." },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Making the web"
        highlight="achievable for any shop"
        subtitle="SiteSprout exists so every local business can have a professional website — without the cost, jargon or hassle."
      />

      {/* Story */}
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Our story</h2>
            <div className="mt-4 space-y-4 text-slate-400">
              <p>
                Too many great local shops are invisible online — not because they don't want a
                website, but because it felt expensive and complicated.
              </p>
              <p>
                We started SiteSprout to change that. One affordable plan, starting at just
                ₹1,999, that bundles design, domain, DNS, custom email, security and database
                into a single service we fully handle for you.
              </p>
              <p>
                As your business grows, your website grows too — with pricing that only increases
                in line with the complexity you actually need.
              </p>
            </div>
            <Link to="/contact" className="btn-primary mt-6">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-white">Our mission</h3>
            <p className="mt-3 text-slate-400">
              To put every local shop online with a beautiful, secure website — affordably, quickly
              and without a single line of code on their part.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { v: "₹1,999", l: "Starting price" },
                { v: "3–5 days", l: "Typical launch" },
                { v: "500+", l: "Shops online" },
                { v: "100%", l: "Managed for you" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-extrabold text-gradient">{s.v}</p>
                  <p className="mt-1 text-xs text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="What we value" title="How we work" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                  className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15">
                    <Icon className="h-6 w-6 text-accent-400" />
                  </span>
                  <h3 className="text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Stats />
      <div className="h-10" />
    </>
  )
}
