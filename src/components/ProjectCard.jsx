import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import MockThumb from "./MockThumb.jsx"
import SitePreview from "./SitePreview.jsx"

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="glass group block h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-glow-sm"
      >
        {project.demo ? (
          <div className="p-3 pb-0">
            <SitePreview
              demo={project.demo}
              accent={project.accent}
              accent2={project.accent2}
              heroImg={project.thumb}
              brand={project.name}
              className="aspect-[4/3]"
            />
          </div>
        ) : project.thumb ? (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.thumb}
              alt={`${project.name} website preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          </div>
        ) : (
          <div className="p-3 pb-0">
            <MockThumb
              accent={project.accent}
              accent2={project.accent2}
              label={project.name}
              className="aspect-[4/3]"
            />
          </div>
        )}
        <div className="flex items-start justify-between gap-3 p-5">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                style={{ background: `${project.accent}22`, color: project.accent }}
              >
                {project.category}
              </span>
              {project.demo && (
                <span className="text-[11px] font-medium text-slate-500">Live demo</span>
              )}
            </div>
            <h3 className="mt-2 text-lg font-bold text-white">{project.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{project.oneLiner}</p>
          </div>
          <span className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 group-hover:border-accent-400/50 group-hover:bg-accent-500/15 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
