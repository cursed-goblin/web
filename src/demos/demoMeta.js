// Metadata for the live client demos. Used by the Demo gallery and to map
// project cards to their live preview. Demos with photography set `thumb`;
// the rest fall back to a styled CSS mockup preview.
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
  {
    slug: "gym",
    name: "FitCore Gym",
    type: "Fitness",
    accent: "#22d3ee",
    accent2: "#0891b2",
    thumb: null,
    blurb: "A bold, high-energy site with class schedule and membership plans.",
  },
  {
    slug: "florist",
    name: "Bloom & Co.",
    type: "Florist",
    accent: "#ec4899",
    accent2: "#be185d",
    thumb: null,
    blurb: "A soft, photographic bouquet shop with same-day delivery orders.",
  },
  {
    slug: "cafe",
    name: "Chai Point Café",
    type: "Café",
    accent: "#d97706",
    accent2: "#92400e",
    thumb: null,
    blurb: "A cosy café site with a full menu board and daily specials.",
  },
]

export const getDemoMeta = (slug) => demoMeta.find((d) => d.slug === slug)
