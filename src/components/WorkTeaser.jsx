import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SectionHeading from "./SectionHeading.jsx"
import ProjectCard from "./ProjectCard.jsx"
import { projects } from "../data/projects.js"

export default function WorkTeaser() {
  const featured = projects.slice(0, 3)
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our work"
          title="Sites we've built for local shops"
          subtitle="Real businesses, online in days. Explore a few, or open a live demo."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/portfolio" className="btn-primary">
            View all work <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/demo" className="btn-ghost">
            Browse live demos
          </Link>
        </div>
      </div>
    </section>
  )
}
