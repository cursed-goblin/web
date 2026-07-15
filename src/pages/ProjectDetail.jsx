import { motion } from "framer-motion"
import { Link, useParams, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check, ExternalLink, MapPin, Calendar } from "lucide-react"
import { getProject } from "../data/projects.js"
import MockThumb from "../components/MockThumb.jsx"
import SitePreview from "../components/SitePreview.jsx"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/portfolio" replace />

  const gallery = project.gallery && project.gallery.length ? project.gallery : null

  return (
    <div className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl px-5">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: `${project.accent}22`, color: project.accent }}
          >
            {project.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-400">{project.oneLiner}</p>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent-400" /> {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-accent-400" /> {project.year}
            </span>
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          {project.demo ? (
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-glow-sm">
              <SitePreview
                demo={project.demo}
                accent={project.accent}
                accent2={project.accent2}
                heroImg={project.thumb}
                brand={project.name}
              />
            </div>
          ) : project.thumb ? (
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-glow-sm">
              <img
                src={project.thumb}
                alt={`${project.name} website preview`}
                className="aspect-[16/10] w-full object-cover"
                loading="eager"
              />
            </div>
          ) : (
            <MockThumb
              accent={project.accent}
              accent2={project.accent2}
              label={project.name}
              className="mx-auto max-w-3xl"
            />
          )}
        </motion.div>

        {/* Gallery */}
        {gallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.name} detail ${i + 1}`}
                className="aspect-square w-full rounded-xl border border-white/10 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            ))}
          </motion.div>
        )}

        {/* Body */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white">Overview</h2>
            <p className="mt-3 leading-relaxed text-slate-400">{project.overview}</p>

            <h2 className="mt-8 text-xl font-bold text-white">What we delivered</h2>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {project.services.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/20">
                    <Check className="h-3 w-3 text-accent-400" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Results + CTA */}
          <div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Results
              </h3>
              <div className="mt-4 space-y-4">
                {project.results.map((r) => (
                  <div key={r.l}>
                    <p className="text-2xl font-extrabold text-gradient">{r.v}</p>
                    <p className="text-xs text-slate-400">{r.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {project.demo && (
                <Link to={`/demo/${project.demo}`} className="btn-primary w-full">
                  View live demo <ExternalLink className="h-4 w-4" />
                </Link>
              )}
              <Link to="/contact" className="btn-ghost w-full">
                Get a site like this <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </div>
  )
}
