import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHeader from "../components/PageHeader.jsx"
import ProjectCard from "../components/ProjectCard.jsx"
import { projects, categories } from "../data/projects.js"

export default function Portfolio() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Websites built for"
        highlight="real local shops"
        subtitle="Browse a selection of our work across restaurants, salons, retail and more."
      />

      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-5">
          {/* Filter chips */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === c
                    ? "border-accent-400/60 bg-accent-500/15 text-white"
                    : "border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link to="/demo" className="btn-primary">
              Explore live demos <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get a site like these
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
