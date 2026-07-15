import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "What's included in the ₹1,999 plan?",
    a: "Your starter plan covers a professional single-page website, a free subdomain, hosting, basic security, and setup support. Domain registration and custom email can be added on. Pricing scales up only as your requirements grow in complexity.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Most simple shop websites go live within 3–5 working days once we have your content (logo, photos, and details). More complex sites with e-commerce or custom features take a little longer, and we'll share a clear timeline upfront.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Not at all. We handle everything — domain, DNS, custom email, website security, and the database. You just tell us about your shop, and we take care of the rest so you can focus on your business.",
  },
  {
    q: "Is my website secure?",
    a: "Yes. Every site includes HTTPS/SSL encryption, secure hosting, and managed database protection. We handle updates and monitoring so your customers' data stays safe.",
  },
  {
    q: "Can I use my own domain and custom email?",
    a: "Absolutely. We can register a new domain for you or connect one you already own, and set up professional custom email addresses (like hello@yourshop.in) as part of your package.",
  },
  {
    q: "What if my needs grow later?",
    a: "Your website grows with you. You can add pages, online ordering, booking, payment gateways, and more at any time. Pricing increases only in line with the added complexity — no surprises.",
  },
]

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${
        isOpen ? "border-accent-400/40" : "hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white sm:text-lg">{item.q}</span>
        <span
          className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 ${
            isOpen ? "rotate-45 bg-gradient-to-br from-accent-600 to-accent-400 shadow-glow-sm" : ""
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400 sm:px-6 sm:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-accent-400">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Everything you need to know about getting your local shop online with SiteSprout.
          </p>
        </motion.div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center"
        >
          <p className="text-lg font-semibold text-white">Still have questions?</p>
          <p className="text-sm text-slate-400">
            We're happy to help you get your shop online. Reach out for a free quote.
          </p>
          <a href="#contact" className="btn-primary mt-2">
            Get Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
