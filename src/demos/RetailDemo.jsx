import { ShoppingBasket, Truck, Clock, MapPin, Leaf, Tag } from "lucide-react"

const nav = [
  { l: "Shop", h: "#shop" },
  { l: "Offers", h: "#offers" },
  { l: "About", h: "#about" },
  { l: "Visit", h: "#visit" },
]

const products = [
  { n: "Fresh Tomatoes", u: "per kg", p: "₹40" },
  { n: "Farm Eggs", u: "dozen", p: "₹84" },
  { n: "Toned Milk", u: "1 L", p: "₹54" },
  { n: "Basmati Rice", u: "5 kg", p: "₹520" },
  { n: "Fresh Bananas", u: "dozen", p: "₹60" },
  { n: "Atta (Wheat Flour)", u: "10 kg", p: "₹440" },
  { n: "Cooking Oil", u: "1 L", p: "₹145" },
  { n: "Onions", u: "per kg", p: "₹35" },
]

export default function RetailDemo() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#14321f]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-[#dcefe2] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-extrabold">
            <Leaf className="h-5 w-5" style={{ color: "#16a34a" }} />
            Kirana Fresh
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            {nav.map((n) => (
              <a key={n.h} href={n.h} className="transition hover:text-[#16a34a]">{n.l}</a>
            ))}
          </nav>
          <a href="#visit" className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ background: "#16a34a" }}>
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(55% 55% at 75% 15%, rgba(22,163,74,0.14), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-5 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#16a34a" }}>Your neighbourhood store</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
              Fresh groceries,<br />delivered to your door.
            </h1>
            <p className="mt-4 max-w-md text-[#4c6b57]">
              Daily fresh produce, pantry staples and household essentials — at honest prices, from
              your trusted local kirana in Pune.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: "#16a34a" }}>Shop now</a>
              <a href="#offers" className="rounded-full border border-[#bfe6cd] px-6 py-3 text-sm font-semibold">See offers</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-[#4c6b57]">
              <span className="flex items-center gap-2"><Truck className="h-4 w-4" style={{ color: "#16a34a" }} /> Free delivery over ₹500</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" style={{ color: "#16a34a" }} /> Same-day drop-off</span>
            </div>
          </div>
          <div className="aspect-square rounded-3xl" style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}>
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-white">
              <ShoppingBasket className="h-16 w-16" />
              <p className="text-2xl font-bold">300+ daily essentials</p>
              <p className="text-white/85">Fresh stock every morning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { t: "10% off first order", d: "Use code FRESH10 at checkout" },
            { t: "Free delivery over ₹500", d: "Across Kothrud & nearby" },
            { t: "Weekly veggie combo", d: "5 kg mix for just ₹199" },
          ].map((o) => (
            <div key={o.t} className="flex items-start gap-3 rounded-2xl border border-[#dcefe2] bg-[#f3fbf6] p-5">
              <Tag className="mt-0.5 h-5 w-5" style={{ color: "#16a34a" }} />
              <div>
                <p className="font-semibold">{o.t}</p>
                <p className="text-sm text-[#4c6b57]">{o.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Today's Picks</h2>
        <p className="mt-2 text-center text-[#4c6b57]">Fresh in this morning — order before 5 PM for same-day delivery.</p>
        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-4">
          {products.map((p) => (
            <div key={p.n} className="rounded-2xl border border-[#dcefe2] p-4">
              <div className="mb-3 aspect-square rounded-xl" style={{ background: "linear-gradient(135deg,#bbf7d0,#16a34a)" }} />
              <h3 className="text-sm font-semibold leading-tight">{p.n}</h3>
              <p className="text-xs text-[#4c6b57]">{p.u}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold" style={{ color: "#16a34a" }}>{p.p}</span>
                <button className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "#16a34a" }}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#f3fbf6] py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h2 className="text-3xl font-extrabold">Serving the neighbourhood since 2009</h2>
            <p className="mt-4 text-[#4c6b57]">
              Kirana Fresh is a family-run store built on trust. We hand-pick fresh produce daily and
              know most of our customers by name.
            </p>
            <p className="mt-3 text-[#4c6b57]">
              Now you can browse and order online — and we'll deliver right to your doorstep.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            {[{ v: "15 yrs", l: "In the community" }, { v: "120+", l: "Orders weekly" }].map((s) => (
              <div key={s.l} className="rounded-2xl border border-[#dcefe2] bg-white p-5">
                <p className="text-3xl font-extrabold" style={{ color: "#16a34a" }}>{s.v}</p>
                <p className="text-sm text-[#4c6b57]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Visit or order</h2>
            <ul className="mt-5 space-y-3 text-[#4c6b57]">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: "#16a34a" }} /> 8 Market Lane, Kothrud, Pune</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: "#16a34a" }} /> Open daily 7:00 – 22:00</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-[#dcefe2] p-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-semibold">Place an order</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-lg border border-[#dcefe2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Name" />
              <input className="rounded-lg border border-[#dcefe2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="Delivery address" />
              <textarea rows={3} className="rounded-lg border border-[#dcefe2] bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="What would you like?" />
              <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: "#16a34a" }}>Send order</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#dcefe2] py-8 text-center text-sm text-[#4c6b57]">
        © {new Date().getFullYear()} Kirana Fresh · Kothrud, Pune
      </footer>
    </div>
  )
}
