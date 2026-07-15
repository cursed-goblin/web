import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Palette,
  Globe,
  Mail,
  ShieldCheck,
  Database,
  Smartphone,
  Search,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react"
import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"

const services = [
  { icon: Palette, title: "Website Design", desc: "Custom, mobile-ready design built around your brand and colours." },
  { icon: Globe, title: "Domain & DNS", desc: "We register your domain and configure DNS — no jargon, no hassle." },
  { icon: Mail, title: "Custom Email", desc: "Professional you@yourshop.in mailboxes set up and managed for you." },
  { icon: ShieldCheck, title: "Website Security", desc: "HTTPS/SSL, monitoring and automatic backups on every site." },
  { icon: Database, title: "Database Handling", desc: "Your data stored, structured and secured — fully managed by us." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Looks flawless on phones, tablets and desktops out of the box." },
  { icon: Search, title: "Basic SEO", desc: "Clean structure and metadata so local customers can find you." },
  { icon: Headphones, title: "Ongoing Support", desc: "Friendly help whenever you need a change or have a question." },
]

const steps = [
  { n: "01", t: "Tell us about your shop", d: "Share your business, logo, photos and what you need. A quick chat is all it takes." },
  { n: "02", t: "We design & build", d: "We craft your site, set up domain, email, security and database — all handled for you." },
  { n: "03", t: "Review & go live", d: "You review, we polish, and your shop goes live — usually within 3–5 days." },
]

const planFeatures = [
  "Professional website design",
  "Free subdomain (custom domain add-on)",
  "Fast, reliable hosting",
  "HTTPS / SSL security",
  "Mobile responsive layout",
  "Setup & onboarding support",
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your shop needs,"
        highlight="handled by us"
        subtitle="Domain, hosting, custom email, security and database — one team, one affordable plan."
      />

      {/* Services grid */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                  className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-glow-sm"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15">
                    <Icon className="h-6 w-6 text-accent-400" />
                  </span>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, honest pricing"
            subtitle="Rates start at ₹1,999 and increase only as per the complexity of your requirements."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-md"
          >
            <div className="glass relative overflow-hidden rounded-3xl p-8 shadow-glow">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />
              <p className="text-sm font-medium text-accent-400">Starter</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-5xl font-extrabold text-white">₹1,999</span>
                <span className="mb-1 text-sm text-slate-400">/ starting</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Perfect for local shops getting online for the first time.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {planFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/20">
                      <Check className="h-3 w-3 text-accent-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-8 w-full">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="How it works" title="Online in three easy steps" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <span className="text-3xl font-extrabold text-gradient">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}

function FinalCta() {
  return (
    <section className="pb-8 pt-4">
      <div className="mx-auto max-w-4xl px-5">
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-glow-sm">
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to get your shop online?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Tell us what you need and we'll send a free, no-obligation quote.
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
