import { Clock, MapPin, Phone, Star, Flame } from "lucide-react"
import heroImg from "../assets/demos/restaurant-hero.png"
import butterChickenImg from "../assets/demos/restaurant-butterchicken.png"
import paneerImg from "../assets/demos/restaurant-paneer.png"
import interiorImg from "../assets/demos/restaurant-interior.png"

const nav = [
  { l: "Menu", h: "#menu" },
  { l: "About", h: "#about" },
  { l: "Gallery", h: "#gallery" },
  { l: "Visit", h: "#visit" },
]

const dishes = [
  { n: "Dal Makhani", d: "Slow-cooked black lentils, cream & butter", p: "₹260" },
  { n: "Paneer Tikka", d: "Char-grilled cottage cheese, mint chutney", p: "₹320" },
  { n: "Butter Chicken", d: "Tandoori chicken in silky tomato gravy", p: "₹380" },
  { n: "Laccha Paratha", d: "Flaky layered whole-wheat flatbread", p: "₹80" },
  { n: "Rogan Josh", d: "Kashmiri lamb curry, aromatic spices", p: "₹420" },
  { n: "Gulab Jamun", d: "Warm milk dumplings in cardamom syrup", p: "₹140" },
]

const featured = [
  { img: butterChickenImg, n: "Butter Chicken", d: "Our most-loved signature" },
  { img: paneerImg, n: "Paneer Tikka", d: "Straight from the tandoor" },
]

const gallery = [interiorImg, heroImg, butterChickenImg, paneerImg]

export default function RestaurantDemo() {
  return (
    <div className="min-h-screen bg-[#1a1512] font-serif text-[#f5ede1]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1a1512]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-bold">
            <Flame className="h-5 w-5" style={{ color: "#f59e0b" }} />
            Spice Route
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => (
              <a key={n.h} href={n.h} className="transition hover:text-[#f59e0b]">{n.l}</a>
            ))}
          </nav>
          <a href="#visit" className="rounded-full px-4 py-2 text-sm font-semibold text-[#1a1512]" style={{ background: "#f59e0b" }}>
            Book a table
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 70% 20%, rgba(245,158,11,0.28), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-5 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "#f59e0b" }}>Est. 1998 · Jaipur</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              North Indian flavours,<br />cooked from the heart.
            </h1>
            <p className="mt-4 max-w-md text-[#c9bba8]">
              Traditional recipes, tandoor classics and warm hospitality — in the heart of the old city.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full px-6 py-3 text-sm font-semibold text-[#1a1512]" style={{ background: "#f59e0b" }}>View the menu</a>
              <a href="#visit" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">Reserve</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] opacity-60 blur-2xl" style={{ background: "linear-gradient(135deg,#f59e0b,#b91c1c)" }} />
            <img
              src={heroImg}
              alt="Assorted North Indian dishes"
              className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured dishes with photos */}
      <section className="mx-auto max-w-5xl px-5 pb-4 pt-2">
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((f) => (
            <div key={f.n} className="group relative overflow-hidden rounded-3xl border border-white/10">
              <img src={f.img} alt={f.n} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-xl font-bold text-white">{f.n}</h3>
                <p className="text-sm text-white/80">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Signature Menu</h2>
        <p className="mt-2 text-center text-[#c9bba8]">A taste of the classics our regulars love.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {dishes.map((d) => (
            <div key={d.n} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-semibold">{d.n}</h3>
                <p className="text-sm text-[#c9bba8]">{d.d}</p>
              </div>
              <span className="whitespace-nowrap font-bold" style={{ color: "#f59e0b" }}>{d.p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#221a15] py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2 sm:items-center">
          <img src={interiorImg} alt="Spice Route dining room" className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover" loading="lazy" />
          <div>
            <h2 className="text-3xl font-bold">Three generations of taste</h2>
            <p className="mt-4 text-[#c9bba8]">
              Spice Route began as a small family kitchen and grew into one of Jaipur's most-loved
              dining rooms. We still grind our own masalas daily and cook everything to order.
            </p>
            <p className="mt-3 text-[#c9bba8]">
              Whether it's a quiet dinner or a big celebration, our doors — and our tandoor — are always warm.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{ v: "25+", l: "Years serving" }, { v: "4.8★", l: "1,200+ reviews" }].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/10 p-5">
                  <p className="text-3xl font-bold" style={{ color: "#f59e0b" }}>{s.v}</p>
                  <p className="text-sm text-[#c9bba8]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">From our kitchen</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Spice Route dish"
              className="aspect-square w-full rounded-xl border border-white/10 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#221a15] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { t: "Best butter chicken in the city, hands down.", a: "— Ananya R." },
              { t: "Warm service and unbeatable flavours every time.", a: "— Rohit M." },
              { t: "Feels like eating at grandma's, but better!", a: "— Priya S." },
            ].map((r) => (
              <div key={r.a} className="rounded-2xl border border-white/10 p-6">
                <div className="flex gap-1" style={{ color: "#f59e0b" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-[#f5ede1]">“{r.t}”</p>
                <p className="mt-2 text-sm text-[#c9bba8]">{r.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Visit us</h2>
            <ul className="mt-5 space-y-3 text-[#c9bba8]">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: "#f59e0b" }} /> 14 Old City Road, Jaipur</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: "#f59e0b" }} /> Open daily 12:00 – 23:00</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: "#f59e0b" }} /> +91 141 000 0000</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 p-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-semibold">Reserve a table</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Name" />
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Phone" />
              <input className="rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Date & time" />
              <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#1a1512]" style={{ background: "#f59e0b" }}>Request booking</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#c9bba8]">
        © {new Date().getFullYear()} Spice Route Restaurant · Jaipur
      </footer>
    </div>
  )
}
