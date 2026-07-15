import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import PageHeader from "../components/PageHeader.jsx"

const budgets = ["₹1,999 (Starter)", "₹5,000–10,000", "₹10,000+", "Not sure yet"]

// Where enquiries are delivered. Uses FormSubmit (https://formsubmit.co) so the
// form works on a static site with no backend. Change this to your real inbox —
// FormSubmit emails you once to confirm on the very first submission.
const CONTACT_EMAIL = "hello@sitesprout.in"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", budget: "", message: "" })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = "Please enter your name."
    if (!form.email.trim()) err.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email address."
    if (!form.message.trim()) err.message = "Tell us a little about what you need."
    return err
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length > 0) return

    setSending(true)
    setSendError("")
    try {
      const endpoint = "https://formsubmit.co/ajax/" + encodeURIComponent(CONTACT_EMAIL)
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business || "—",
          budget: form.budget || "—",
          message: form.message,
          _subject: "New website enquiry via SiteSprout",
          _template: "table",
        }),
      })
      if (!res.ok) throw new Error("Request failed")
      setSent(true)
    } catch {
      setSendError(
        `Sorry, something went wrong sending your message. Please email us directly at ${CONTACT_EMAIL}.`
      )
    } finally {
      setSending(false)
    }
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent-400/60 focus:bg-white/[0.07]"

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get your shop"
        highlight="online"
        subtitle="Tell us about your business and we'll send a free, no-obligation quote — usually within a day."
      />

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white">Get in touch</h2>
            <p className="mt-3 text-slate-400">
              Prefer to reach out directly? We're always happy to chat about your shop.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@sitesprout.in" },
                { icon: Phone, label: "Phone", value: "+91 90000 12345" },
                { icon: MapPin, label: "Based in", value: "India — serving shops everywhere" },
              ].map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-accent-500/15">
                      <Icon className="h-5 w-5 text-accent-400" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">{c.label}</p>
                      <p className="text-sm font-medium text-white">{c.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-6 sm:p-8 lg:col-span-3"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-green-500/15">
                  <CheckCircle2 className="h-8 w-8 text-green-400" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white">Thank you!</h3>
                <p className="mt-2 max-w-sm text-slate-400">
                  Your message is on its way. We'll get back to you with a free quote very soon.
                </p>
                <button
                  onClick={() => {
                    setSent(false)
                    setSendError("")
                    setForm({ name: "", email: "", business: "", budget: "", message: "" })
                  }}
                  className="btn-ghost mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
                    <input className={field} value={form.name} onChange={update("name")} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                    <input className={field} value={form.email} onChange={update("email")} placeholder="you@email.com" />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Business <span className="text-slate-500">(optional)</span>
                    </label>
                    <input className={field} value={form.business} onChange={update("business")} placeholder="Your shop's name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Budget <span className="text-slate-500">(optional)</span>
                    </label>
                    <select className={field} value={form.budget} onChange={update("budget")}>
                      <option value="" className="bg-ink-800">Select a range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-ink-800">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    rows={5}
                    className={field}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your shop and what you'd like your website to do."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
                {sendError && (
                  <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {sendError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
