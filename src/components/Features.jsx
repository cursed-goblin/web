import { motion } from "framer-motion"
import { Palette, Globe, Mail, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Website Design",
    desc: "Beautiful, mobile-ready websites custom-built to match your shop's brand.",
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    desc: "Your own custom domain, DNS setup and fast, reliable hosting included.",
  },
  {
    icon: Mail,
    title: "Custom Email",
    desc: "Professional you@yourshop.in mailboxes, set up and managed for you.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Database",
    desc: "SSL, backups and database — all secured and fully handled by us.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Features() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="Everything to get your shop online"
          subtitle="One affordable plan. We handle all the tech so you can focus on running your business."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f, i) => {
            const active = i === 0
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={item}
                className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  active
                    ? "bg-gradient-to-br from-accent-600 to-accent-500 shadow-glow"
                    : "glass hover:border-accent-400/40 hover:shadow-glow-sm"
                }`}
              >
                <span
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    active ? "bg-white/20" : "bg-accent-500/15"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${active ? "text-white" : "text-accent-400"}`} />
                </span>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    active ? "text-blue-50/90" : "text-slate-400"
                  }`}
                >
                  {f.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-500" />
        <span className="text-sm font-medium italic text-accent-400">{eyebrow}</span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent-500" />
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
    </div>
  )
}
