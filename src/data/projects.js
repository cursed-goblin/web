// Portfolio projects. Projects with a `demo` slug also have a live demo under
// /demo/:slug. Projects with real photography set `thumb` (and optional
// `gallery`); the rest fall back to a styled CSS mockup thumbnail.
import restaurantHero from "../assets/demos/restaurant-hero.png"
import restaurantButter from "../assets/demos/restaurant-butterchicken.png"
import restaurantPaneer from "../assets/demos/restaurant-paneer.png"
import restaurantInterior from "../assets/demos/restaurant-interior.png"
import salonInterior from "../assets/demos/salon-interior.png"
import salonStyling from "../assets/demos/salon-styling.png"
import salonManicure from "../assets/demos/salon-manicure.png"
import retailStorefront from "../assets/demos/retail-storefront.png"
import retailBasket from "../assets/demos/retail-basket.png"
import retailShelves from "../assets/demos/retail-shelves.png"

export const projects = [
  {
    slug: "spice-route",
    name: "Spice Route",
    category: "Restaurant",
    accent: "#f59e0b",
    accent2: "#b91c1c",
    demo: "restaurant",
    thumb: restaurantHero,
    gallery: [restaurantHero, restaurantButter, restaurantPaneer, restaurantInterior],
    year: "2025",
    location: "Jaipur",
    oneLiner: "Menu-forward site for a North Indian family restaurant.",
    overview:
      "Spice Route wanted diners to browse the full menu and book a table without picking up the phone. We built a warm, appetite-first site with a photographed menu, gallery and one-tap reservation.",
    services: ["Website design", "Custom domain & email", "Online menu & reservations", "Hosting & SSL"],
    results: [
      { v: "3.2x", l: "More table bookings" },
      { v: "48%", l: "Fewer phone calls" },
      { v: "4 days", l: "From brief to live" },
    ],
  },
  {
    slug: "lumiere-salon",
    name: "Lumière Salon",
    category: "Salon",
    accent: "#b76e79",
    accent2: "#8a5a63",
    demo: "salon",
    thumb: salonInterior,
    gallery: [salonInterior, salonStyling, salonManicure],
    year: "2025",
    location: "Bengaluru",
    oneLiner: "Elegant booking site for a hair & beauty studio.",
    overview:
      "Lumière needed a calm, premium presence that let clients see the service menu and request an appointment in seconds. We paired a soft, editorial layout with a clear price list and booking flow.",
    services: ["Website design", "Service & price list", "Appointment requests", "Custom email"],
    results: [
      { v: "+61%", l: "Online bookings" },
      { v: "2.4x", l: "Instagram click-throughs" },
      { v: "5 days", l: "From brief to live" },
    ],
  },
  {
    slug: "kirana-fresh",
    name: "Kirana Fresh",
    category: "Retail",
    accent: "#16a34a",
    accent2: "#15803d",
    demo: "retail",
    thumb: retailStorefront,
    gallery: [retailStorefront, retailBasket, retailShelves],
    year: "2025",
    location: "Pune",
    oneLiner: "Bright storefront for a neighbourhood grocery.",
    overview:
      "Kirana Fresh wanted regulars to see daily offers and place WhatsApp orders. We built a clean, fast storefront with a product grid, weekly deals and a simple order request.",
    services: ["Website design", "Product catalogue", "Offers & WhatsApp orders", "Hosting & SSL"],
    results: [
      { v: "+38%", l: "Repeat orders" },
      { v: "120+", l: "Weekly online orders" },
      { v: "3 days", l: "From brief to live" },
    ],
  },
  {
    slug: "fitcore-gym",
    name: "FitCore Gym",
    category: "Fitness",
    accent: "#22d3ee",
    accent2: "#0891b2",
    demo: "gym",
    year: "2024",
    location: "Hyderabad",
    oneLiner: "Membership & class schedule site for a local gym.",
    overview:
      "FitCore wanted prospects to see class timings, trainers and membership plans, then enquire without a phone call. We built a bold, high-energy site with a live class schedule and a plan comparison.",
    services: ["Website design", "Class schedule", "Membership plans", "Lead capture form"],
    results: [
      { v: "+54%", l: "Trial sign-ups" },
      { v: "1.9x", l: "Membership enquiries" },
      { v: "6 days", l: "From brief to live" },
    ],
  },
  {
    slug: "bloom-and-co",
    name: "Bloom & Co.",
    category: "Florist",
    accent: "#ec4899",
    accent2: "#be185d",
    demo: "florist",
    year: "2024",
    location: "Goa",
    oneLiner: "Same-day flower delivery site for a boutique florist.",
    overview:
      "Bloom & Co. wanted customers to browse bouquets and order for same-day delivery. We built a soft, photographic site with an occasion-based catalogue and a quick order request.",
    services: ["Website design", "Bouquet catalogue", "Same-day order form", "Custom email"],
    results: [
      { v: "+72%", l: "Online orders" },
      { v: "90%", l: "Same-day fulfilment" },
      { v: "4 days", l: "From brief to live" },
    ],
  },
  {
    slug: "chai-point-cafe",
    name: "Chai Point Café",
    category: "Café",
    accent: "#d97706",
    accent2: "#92400e",
    demo: "cafe",
    year: "2024",
    location: "Mumbai",
    oneLiner: "Cosy café site with menu and daily specials.",
    overview:
      "Chai Point wanted a warm little home online for their menu, specials and location. We built a snug, hand-lettered-feel site with a menu board and an inviting gallery.",
    services: ["Website design", "Menu board", "Daily specials", "Map & hours"],
    results: [
      { v: "+40%", l: "Walk-ins from search" },
      { v: "2.1x", l: "Directions requests" },
      { v: "3 days", l: "From brief to live" },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
