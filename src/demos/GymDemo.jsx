import { Dumbbell, Clock, MapPin, Phone, Check, Flame, Zap } from "lucide-react"

// Free-to-use stock photos (Pexels CDN, hotlinked).
const heroImg = "https://images.pexels.com/photos/38453113/pexels-photo-38453113.jpeg?auto=compress&cs=tinysrgb&w=1400"
const gallery = [
  "https://images.pexels.com/photos/31015145/pexels-photo-31015145.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20418612/pexels-photo-20418612.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/35567437/pexels-photo-35567437.jpeg?auto=compress&cs=tinysrgb&w=900",
]

const nav = [
  { l: "Classes", h: "#classes" },
  { l: "Plans", h: "#plans" },
  { l: "Trainers", h: "#trainers" },
  { l: "Join", h: "#join" },
]

const classes = [
  { d: "Mon", n: "HIIT Burn", t: "6:00 AM" },
  { d: "Tue", n: "Strength 101", t: "7:00 AM" },
  { d: "Wed", n: "Spin & Sweat", t: "6:30 AM" },
  { d: "Thu", n: "Functional", t: "7:00 AM" },
  { d: "Fri", n: "CrossFit", t: "6:00 AM" },
  { d: "Sat", n: "Yoga Flow", t: "8:00 AM" },
]

const plans = [
  { n: "Monthly", p: "₹1,499", per: "/mo", f: ["Full gym access", "2 group classes/wk", "Locker"], hot: false },
  { n: "Quarterly", p: "₹3,999", per: "/3mo", f: ["Full gym access", "Unlimited classes", "1 PT session/mo", "Diet plan"], hot: true },
  { n: "Annual", p: "₹12,999", per: "/yr", f: ["Everything in Quarterly", "4 PT sessions/mo", "Body composition scans", "Guest passes"], hot: false },
]

const trainers = [
  { n: "Arjun", s: "Strength & Conditioning" },
  { n: "Meera", s: "HIIT & Mobility" },
  { n: "Rahul", s: "CrossFit Coach" },
]

export default function GymDemo() {
  return (
    <div className="min-h-screen bg-[#0a0f14] font-sans text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-extrabold uppercase tracking-wide">
            <Dumbbell className="h-5 w-5" style={{ color: "#22d3ee" }} />
            FitCore
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            {nav.map((n) => (
              <a key={n.h} href={n.h} className="transition hover:text-[#22d3ee]">{n.l}</a>
            ))}
          </nav>
          <a href="#join" className="rounded-full px-4 py-2 text-sm font-bold text-[#0a0f14]" style={{ background: "#22d3ee" }}>
            Start free trial
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 70% 10%, rgba(34,211,238,0.22), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-5 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em]" style={{ color: "#22d3ee" }}>
              <Zap className="h-4 w-4" /> Train harder
            </p>
            <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
              Build the<br />strongest<br />version of you.
            </h1>
            <p className="mt-4 max-w-md text-slate-400">
              Hyderabad's high-energy strength & conditioning gym. Expert coaches, packed class
              schedule and a community that pushes you further.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#join" className="rounded-full px-6 py-3 text-sm font-bold text-[#0a0f14]" style={{ background: "#22d3ee" }}>Claim 3-day trial</a>
              <a href="#plans" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold">See plans</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] opacity-50 blur-2xl" style={{ background: "linear-gradient(135deg,#22d3ee,#0891b2)" }} />
            <img src={heroImg} alt="Athlete training in a dark modern gym" className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl" loading="eager" />
          </div>
        </div>
        <div className="mx-auto -mt-6 max-w-5xl px-5 pb-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[{ v: "1,200+", l: "Members" }, { v: "25", l: "Classes / wk" }, { v: "8", l: "Expert coaches" }, { v: "24/7", l: "Access" }].map((s) => (
              <div key={s.l} className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4">
                <p className="text-2xl font-extrabold" style={{ color: "#22d3ee" }}>{s.v}</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold uppercase sm:text-4xl">Weekly Schedule</h2>
        <p className="mt-2 text-center text-slate-400">Morning sessions to kickstart your day.</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <div key={c.d} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#22d3ee" }}>{c.d}</p>
                <h3 className="mt-1 text-lg font-bold">{c.n}</h3>
              </div>
              <span className="flex items-center gap-1.5 text-sm text-slate-400"><Clock className="h-4 w-4" /> {c.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt="FitCore gym" className="aspect-square w-full rounded-xl border border-white/10 object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          ))}
        </div>
      </section>

      <section id="plans" className="bg-[#0d141b] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-3xl font-extrabold uppercase sm:text-4xl">Membership Plans</h2>
          <p className="mt-2 text-center text-slate-400">No joining fee. Cancel anytime.</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((pl) => (
              <div key={pl.n} className={`rounded-3xl border p-7 ${pl.hot ? "border-[#22d3ee] bg-white/5" : "border-white/10"}`}>
                {pl.hot && (
                  <span className="mb-3 inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold text-[#0a0f14]" style={{ background: "#22d3ee" }}>
                    <Flame className="h-3 w-3" /> Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold uppercase">{pl.n}</h3>
                <p className="mt-2"><span className="text-4xl font-extrabold">{pl.p}</span><span className="text-slate-400">{pl.per}</span></p>
                <ul className="mt-5 space-y-2.5">
                  {pl.f.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="h-4 w-4" style={{ color: "#22d3ee" }} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#join" className={`mt-6 block rounded-full px-5 py-2.5 text-center text-sm font-bold ${pl.hot ? "text-[#0a0f14]" : "border border-white/20 text-white"}`} style={pl.hot ? { background: "#22d3ee" } : {}}>
                  Choose {pl.n}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold uppercase">Meet the coaches</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {trainers.map((t) => (
            <div key={t.n} className="overflow-hidden rounded-3xl border border-white/10">
              <div className="flex h-40 items-center justify-center" style={{ background: "linear-gradient(135deg,#22d3ee,#0891b2)" }}>
                <span className="text-5xl font-extrabold text-[#0a0f14]/70">{t.n[0]}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{t.n}</h3>
                <p className="text-sm text-slate-400">{t.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="bg-[#0d141b] py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold uppercase">Start your free trial</h2>
            <p className="mt-3 text-slate-400">Drop your details and we'll set up a 3-day all-access pass.</p>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: "#22d3ee" }} /> 42 Jubilee Hills, Hyderabad</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: "#22d3ee" }} /> Open 5:00 – 23:00 daily</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: "#22d3ee" }} /> +91 40 0000 0000</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 p-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-bold">Book your trial</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-[#22d3ee]" placeholder="Name" />
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-[#22d3ee]" placeholder="Phone" />
              <select className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-[#22d3ee]">
                <option className="bg-[#0a0f14]">Preferred class</option>
                {classes.map((c) => <option key={c.n} className="bg-[#0a0f14]">{c.n}</option>)}
              </select>
              <button className="rounded-full px-5 py-2.5 text-sm font-bold text-[#0a0f14]" style={{ background: "#22d3ee" }}>Get free pass</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FitCore Gym · Hyderabad
      </footer>
    </div>
  )
}
