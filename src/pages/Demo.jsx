import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import PageHeader from "../components/PageHeader.jsx"
import MockThumb from "../components/MockThumb.jsx"
import { demoMeta } from "../demos/demoMeta.js"

export default function Demo() {
  return (
    <>
      <PageHeader
        eyebrow="Live demos"
        title="Take a sample site"
        highlight="for a spin"
        subtitle="Each demo is a complete, real website we could build for your shop. Click any box to open the full live demo."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demoMeta.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/demo/${d.slug}`}
                  className="glass group block h-full rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-glow-sm"
                >
                  <MockThumb accent={d.accent} accent2={d.accent2} label={d.name} className="aspect-[4/3]" />
                  <div className="flex items-start justify-between gap-3 px-2 pb-1 pt-4">
                    <div>
                      <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{ background: `${d.accent}22`, color: d.accent }}
                      >
                        {d.type}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-white">{d.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">{d.blurb}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
                        Open live demo <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <span className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 group-hover:border-accent-400/50 group-hover:bg-accent-500/15 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Each demo opens as a standalone site with a small “Get yours” badge that links back here.
          </p>
        </div>
      </section>
    </>
  )
}
