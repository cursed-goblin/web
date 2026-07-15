import { Flower2, Clock, MapPin, Phone, Truck } from "lucide-react"

// Free-to-use stock photos (Pexels CDN, hotlinked).
const shopImg = "https://images.pexels.com/photos/21835295/pexels-photo-21835295.jpeg?auto=compress&cs=tinysrgb&w=1400"
const bImgPink = "https://images.pexels.com/photos/38323759/pexels-photo-38323759.jpeg?auto=compress&cs=tinysrgb&w=900"
const bImgRoses = "https://images.pexels.com/photos/20416142/pexels-photo-20416142.jpeg?auto=compress&cs=tinysrgb&w=900"
const bImgKraft = "https://images.pexels.com/photos/23331187/pexels-photo-23331187.jpeg?auto=compress&cs=tinysrgb&w=900"

const nav = [
  { l: "Shop", h: "#shop" },
  { l: "Occasions", h: "#occasions" },
  { l: "About", h: "#about" },
  { l: "Order", h: "#order" },
]

const bouquets = [
  { n: "Rose Romance", d: "12 red roses, baby's breath", p: "₹899", img: bImgRoses },
  { n: "Pink Blush", d: "Soft pink roses, wrapped", p: "₹749", img: bImgPink },
  { n: "Kraft Classic", d: "Seasonal blooms in kraft paper", p: "₹999", img: bImgKraft },
  { n: "Pure White", d: "Lilies & white roses", p: "₹1,199", img: bImgPink },
  { n: "Garden Fresh", d: "Seasonal wildflower mix", p: "₹649", img: bImgRoses },
  { n: "Celebration", d: "Bright mixed bouquet", p: "₹1,349", img: bImgKraft },
]

const occasions = ["Birthday", "Anniversary", "Congratulations", "Get Well", "Sympathy", "Just Because"]

export default function FloristDemo() {
  return (
    <div className="min-h-screen bg-[#fdf4f7] font-serif text-[#4a2f39]">
      <header className="sticky top-0 z-40 border-b border-[#f3d9e2] bg-[#fdf4f7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-wide">
            <Flower2 className="h-5 w-5" style={{ color: "#ec4899" }} />
            Bloom & Co.
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => (
              <a key={n.h} href={n.h} className="transition hover:text-[#ec4899]">{n.l}</a>
            ))}
          </nav>
          <a href="#order" className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ background: "#ec4899" }}>
            Order flowers
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(55% 55% at 30% 15%, rgba(236,72,153,0.16), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-5 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "#ec4899" }}>Fresh · Handtied · Goa</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              Flowers that say<br />it perfectly.
            </h1>
            <p className="mt-4 max-w-md text-[#7c5c67]">
              Beautiful hand-tied bouquets for every occasion, arranged fresh each morning and
              delivered across Goa the same day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: "#ec4899" }}>Shop bouquets</a>
              <a href="#order" className="rounded-full border border-[#e6b9c8] px-6 py-3 text-sm font-semibold">Same-day delivery</a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-[#7c5c67]"><Truck className="h-4 w-4" style={{ color: "#ec4899" }} /> Order before 4 PM for same-day delivery</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] opacity-40 blur-2xl" style={{ background: "linear-gradient(135deg,#ec4899,#be185d)" }} />
            <img src={shopImg} alt="Bloom & Co. flower shop full of bouquets" className="aspect-[4/3] w-full rounded-3xl border border-[#f3d9e2] object-cover shadow-xl" loading="eager" />
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Bouquets</h2>
        <p className="mt-2 text-center text-[#7c5c67]">Handcrafted with the freshest seasonal blooms.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bouquets.map((b) => (
            <div key={b.n} className="overflow-hidden rounded-3xl border border-[#f3d9e2] bg-white">
              <img src={b.img} alt={b.n} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{b.n}</h3>
                <p className="mt-1 text-sm text-[#7c5c67]">{b.d}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold" style={{ color: "#ec4899" }}>{b.p}</span>
                  <button className="rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ background: "#ec4899" }}>Add to order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="occasions" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-3xl font-bold">Shop by occasion</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => (
              <span key={o} className="rounded-full border border-[#e6b9c8] px-5 py-2 text-sm font-medium transition hover:bg-[#fdf4f7]">
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <img src={bImgKraft} alt="Hand-tied bouquet" className="aspect-[4/3] w-full rounded-3xl border border-[#f3d9e2] object-cover" loading="lazy" />
          <div>
            <h2 className="text-3xl font-bold">A little studio full of blooms</h2>
            <p className="mt-4 text-[#7c5c67]">
              Bloom & Co. started as a weekend flower stall and grew into Goa's favourite little
              florist. Every bouquet is hand-tied to order by our small, passionate team.
            </p>
            <p className="mt-3 text-[#7c5c67]">
              We source fresh from local growers, so your flowers last longer and look their best.
            </p>
          </div>
        </div>
      </section>

      <section id="order" className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Place an order</h2>
            <ul className="mt-5 space-y-3 text-[#7c5c67]">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: "#ec4899" }} /> 5 Calangute Market Road, Goa</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: "#ec4899" }} /> Open daily 8:00 – 20:00</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: "#ec4899" }} /> +91 832 000 0000</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-[#f3d9e2] p-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-semibold">Order & delivery</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-lg border border-[#f3d9e2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Your name" />
              <input className="rounded-lg border border-[#f3d9e2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Delivery address" />
              <select className="rounded-lg border border-[#f3d9e2] bg-transparent px-4 py-2.5 text-sm outline-none">
                <option>Choose a bouquet</option>
                {bouquets.map((b) => <option key={b.n}>{b.n}</option>)}
              </select>
              <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: "#ec4899" }}>Send order</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#f3d9e2] py-8 text-center text-sm text-[#7c5c67]">
        © {new Date().getFullYear()} Bloom & Co. · Goa
      </footer>
    </div>
  )
}
