import { Clock, MapPin, Phone, Sparkles } from "lucide-react"
import interiorImg from "../assets/demos/salon-interior.png"
import stylingImg from "../assets/demos/salon-styling.png"
import manicureImg from "../assets/demos/salon-manicure.png"

const nav = [
  { l: "Services", h: "#services" },
  { l: "About", h: "#about" },
  { l: "Gallery", h: "#gallery" },
  { l: "Book", h: "#book" },
]

const services = [
  { n: "Haircut & Style", d: "Consultation, wash, cut and finish", p: "₹700" },
  { n: "Hair Colour", d: "Global or root touch-up, premium care", p: "₹2,200" },
  { n: "Keratin Treatment", d: "Smoothing, frizz-free for weeks", p: "₹4,500" },
  { n: "Facial & Glow", d: "Deep-cleanse, hydrate and radiance", p: "₹1,500" },
  { n: "Bridal Package", d: "Hair, make-up and draping", p: "₹8,000" },
  { n: "Manicure & Pedicure", d: "Spa-grade nail & skin care", p: "₹900" },
]

const gallery = [
  { img: stylingImg, l: "Hair styling" },
  { img: manicureImg, l: "Nail care" },
  { img: interiorImg, l: "Our studio" },
]

export default function SalonDemo() {
  return (
    <div className="min-h-screen bg-[#faf6f3] font-serif text-[#3a2e2e]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-[#e7d9d2] bg-[#faf6f3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-wide">
            <Sparkles className="h-5 w-5" style={{ color: "#b76e79" }} />
            Lumière
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => (
              <a key={n.h} href={n.h} className="transition hover:text-[#b76e79]">{n.l}</a>
            ))}
          </nav>
          <a href="#book" className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ background: "#b76e79" }}>
            Book now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(55% 55% at 30% 20%, rgba(183,110,121,0.18), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-5 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "#b76e79" }}>Hair · Beauty · Spa</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              Where you leave<br />feeling radiant.
            </h1>
            <p className="mt-4 max-w-md text-[#6e5c5c]">
              A calm, luxurious studio in Bengaluru. Expert stylists, premium products and a little
              pampering every time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: "#b76e79" }}>Book an appointment</a>
              <a href="#services" className="rounded-full border border-[#d8c2ba] px-6 py-3 text-sm font-semibold">View services</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] opacity-40 blur-2xl" style={{ background: "linear-gradient(135deg,#b76e79,#8a5a63)" }} />
            <img
              src={interiorImg}
              alt="Lumière salon interior"
              className="aspect-[4/3] w-full rounded-3xl border border-[#e7d9d2] object-cover shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Services</h2>
        <p className="mt-2 text-center text-[#6e5c5c]">Thoughtful treatments for hair, skin and nails.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="rounded-2xl border border-[#e7d9d2] bg-white p-6">
              <h3 className="text-lg font-semibold">{s.n}</h3>
              <p className="mt-1 text-sm text-[#6e5c5c]">{s.d}</p>
              <p className="mt-4 font-bold" style={{ color: "#b76e79" }}>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2 sm:items-center">
          <img src={stylingImg} alt="Stylist at work" className="aspect-[4/3] w-full rounded-3xl border border-[#e7d9d2] object-cover" loading="lazy" />
          <div>
            <h2 className="text-3xl font-bold">A studio built around you</h2>
            <p className="mt-4 text-[#6e5c5c]">
              At Lumière we believe beauty should feel effortless. Our stylists take time to
              understand your look and lifestyle, so every visit leaves you glowing.
            </p>
            <p className="mt-3 text-[#6e5c5c]">
              From everyday trims to bridal glam, we use only premium, skin-friendly products.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{ v: "10+", l: "Expert stylists" }, { v: "4.9★", l: "900+ reviews" }].map((s) => (
                <div key={s.l} className="rounded-2xl border border-[#e7d9d2] p-5">
                  <p className="text-3xl font-bold" style={{ color: "#b76e79" }}>{s.v}</p>
                  <p className="text-sm text-[#6e5c5c]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">A peek inside</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {gallery.map((g) => (
            <div key={g.l} className="group relative overflow-hidden rounded-2xl border border-[#e7d9d2]">
              <img src={g.img} alt={g.l} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-4 text-sm font-semibold text-white">{g.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Offer banner */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-3xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg,#b76e79,#8a5a63)" }}>
          <h2 className="text-3xl font-bold">First visit? Enjoy 15% off</h2>
          <p className="mt-2 text-white/85">Mention this offer when you book your first appointment with us.</p>
          <a href="#book" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold" style={{ color: "#b76e79" }}>Claim offer</a>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Book your visit</h2>
            <ul className="mt-5 space-y-3 text-[#6e5c5c]">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: "#b76e79" }} /> 22 Church Street, Bengaluru</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: "#b76e79" }} /> Tue – Sun, 10:00 – 20:00</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: "#b76e79" }} /> +91 80 0000 0000</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-[#e7d9d2] p-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-semibold">Request an appointment</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-lg border border-[#e7d9d2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Name" />
              <input className="rounded-lg border border-[#e7d9d2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Phone" />
              <select className="rounded-lg border border-[#e7d9d2] bg-transparent px-4 py-2.5 text-sm outline-none">
                <option>Choose a service</option>
                {services.map((s) => <option key={s.n}>{s.n}</option>)}
              </select>
              <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: "#b76e79" }}>Request booking</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#e7d9d2] py-8 text-center text-sm text-[#6e5c5c]">
        © {new Date().getFullYear()} Lumière Salon & Spa · Bengaluru
      </footer>
    </div>
  )
}
