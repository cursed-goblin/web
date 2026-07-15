// Metadata for the three live client demos. Used by the Demo gallery and to
// map project cards to their live preview.
import restaurantThumb from "../assets/demos/restaurant-hero.png"
import salonThumb from "../assets/demos/salon-interior.png"
import retailThumb from "../assets/demos/retail-storefront.png"

export const demoMeta = [
  {
    slug: "restaurant",
    name: "Spice Route",
    type: "Restaurant",
    accent: "#f59e0b",
    accent2: "#b91c1c",
    thumb: restaurantThumb,
    blurb: "A warm, menu-first site for a North Indian family restaurant — with reservations.",
  },
  {
    slug: "salon",
    name: "Lumière Salon",
    type: "Salon & Spa",
    accent: "#b76e79",
    accent2: "#8a5a63",
    thumb: salonThumb,
    blurb: "An elegant, editorial booking site for a hair & beauty studio.",
  },
  {
    slug: "retail",
    name: "Kirana Fresh",
    type: "Retail",
    accent: "#16a34a",
    accent2: "#15803d",
    thumb: retailThumb,
    blurb: "A bright, fast storefront for a neighbourhood grocery with weekly deals.",
  },
]

export const getDemoMeta = (slug) => demoMeta.find((d) => d.slug === slug)
