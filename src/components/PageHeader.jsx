import { motion } from "framer-motion"

// Reusable sub-page hero header that matches the SiteSprout style.
export default function PageHeader({ eyebrow, title, highlight, subtitle }) {
  return (
    <section className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_0%,rgba(37,99,235,0.22),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-3xl px-5 text-center">
        {eyebrow && (
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-500" />
            <span className="text-sm font-medium italic text-accent-400">{eyebrow}</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent-500" />
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient">{highlight}</span>
            </>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
