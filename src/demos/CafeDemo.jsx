import { Coffee, Clock, MapPin, Phone, Star } from "lucide-react"

const nav = [
  { l: "Menu", h: "#menu" },
  { l: "Specials", h: "#specials" },
  { l: "About", h: "#about" },
  { l: "Visit", h: "#visit" },
]

const menu = [
  { c: "Chai & Coffee", items: [
    { n: "Masala Chai", p: "₹40" },
    { n: "Adrak (Ginger) Chai", p: "₹45" },
    { n: "Filter Coffee", p: "₹50" },
    { n: "Cold Coffee", p: "₹90" },
  ] },
  { c: "Snacks", items: [
    { n: "Samosa (2 pc)", p: "₹40" },
    { n: "Maggi Masala", p: "₹70" },
    { n: "Veg Grilled Sandwich", p: "₹110" },
    { n: "Bun Maska", p: "₹50" },
  ] },
]

const specials = [
  { d: "Mon", n: "Chai + Samosa combo", p: "₹69" },
  { d: "Wed", n: "Buy 1 Get 1 Cold Coffee", p: "₹90" },
  { d: "Sat", n: "Weekend Maggi + Chai", p: "₹99" },
]

export default function CafeDemo() {
  return (
    <div className="min-h-screen bg-[#20160f] font-serif text-[#f3e7d8]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#20160f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-bold">
            <Coffee className="h-5 w-5" style={{ color: "#d97706" }} />
            Chai Point
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => (
              <a key={n.h} href={n.h} className="transition hover:text-[#d97706]">{n.l}</a>
            ))}
          </nav>
          <a href="#visit" className="rounded-full px-4 py-2 text-sm font-semibold text-[#20160f]" style={{ background: "#d97706" }}>
            Find us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 70% 15%, rgba(217,119,6,0.22), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-5 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "#d97706" }}>Since 2015 · Mumbai</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              Your daily cup<br />of comfort.
            </h1>
            <p className="mt-4 max-w-md text-[#c8b49c]">
              A cosy corner café serving hand-brewed masala chai, filter coffee and hot snacks —
              the perfect break in your day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full px-6 py-3 text-sm font-semibold text-[#20160f]" style={{ background: "#d97706" }}>See the menu</a>
              <a href="#visit" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">Visit us</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] opacity-50 blur-2xl" style={{ background: "linear-gradient(135deg,#d97706,#92400e)" }} />
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl border border-white/10" style={{ background: "linear-gradient(135deg,#d97706,#92400e)" }}>
              <Coffee className="h-20 w-20 text-[#20160f]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Menu</h2>
        <p className="mt-2 text-center text-[#c8b49c]">Freshly made, all day long.</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {menu.map((cat) => (
            <div key={cat.c}>
              <h3 className="mb-4 text-lg font-bold uppercase tracking-wide" style={{ color: "#d97706" }}>{cat.c}</h3>
              <div className="space-y-3">
                {cat.items.map((it) => (
                  <div key={it.n} className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-3">
                    <span>{it.n}</span>
                    <span className="font-bold" style={{ color: "#d97706" }}>{it.p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specials */}
      <section id="specials" className="bg-[#2a1e14] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-3xl font-bold">Daily specials</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {specials.map((s) => (
              <div key={s.d} className="rounded-2xl border border-white/10 p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#d97706" }}>{s.d}</p>
                <h3 className="mt-2 text-lg font-semibold">{s.n}</h3>
                <p className="mt-2 text-2xl font-bold" style={{ color: "#d97706" }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl" style={{ background: "linear-gradient(135deg,#d97706,#92400e)" }}>
            <Coffee className="h-16 w-16 text-white/70" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">A neighbourhood favourite</h2>
            <p className="mt-4 text-[#c8b49c]">
              Chai Point began as a tiny tea stall and grew into a cosy café loved by students,
              workers and families alike. We still brew every cup by hand.
            </p>
            <p className="mt-3 text-[#c8b49c]">
              Pull up a stool, grab a bun maska, and stay a while.
            </p>
            <div className="mt-6 flex items-center gap-2" style={{ color: "#d97706" }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm text-[#c8b49c]">4.7 · 800+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-[#2a1e14] py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Visit us</h2>
            <ul className="mt-5 space-y-3 text-[#c8b49c]">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: "#d97706" }} /> 3 College Road, Bandra, Mumbai</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: "#d97706" }} /> Open daily 7:00 – 23:00</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: "#d97706" }} /> +91 22 0000 0000</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 p-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-semibold">Reserve a table</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Name" />
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Phone" />
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Date & time" />
              <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#20160f]" style={{ background: "#d97706" }}>Request booking</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#c8b49c]">
        © {new Date().getFullYear()} Chai Point Café · Mumbai
      </footer>
    </div>
  )
}
