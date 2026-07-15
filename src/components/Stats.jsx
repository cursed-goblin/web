import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "₹1,999", label: "Starting Price" },
  { value: "500+", label: "Local Shops Online" },
  { value: "24/7", label: "Support & Uptime" },
]

export default function Stats() {
  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass grid grid-cols-2 items-center gap-8 rounded-2xl p-8 shadow-glow-sm sm:grid-cols-4 sm:p-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-extrabold sm:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
          <div className="col-span-2 flex justify-center sm:col-span-1 sm:justify-end">
            <a href="#contact" className="btn-primary">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
