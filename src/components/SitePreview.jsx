// A small, realistic "screenshot" of each demo site's HOME PAGE, rendered inside
// browser chrome. Used on portfolio cards and the project detail page so the
// imagery shows what the actual website looks like (hero + nav + CTA), with the
// business photo used as the site's hero image. Falls back to MockThumb.
import MockThumb from "./MockThumb.jsx"

const themes = {
  restaurant: {
    bg: "#1a1206", panel: "#241a0c", muted: "#c9b79a", domain: "spiceroute.in",
    brand: "Spice Route", nav: ["Menu", "Story", "Gallery", "Book"], cta: "Reserve",
    headline: ["Authentic North", "Indian flavours"],
  },
  salon: {
    bg: "#f7f1ee", panel: "#ffffff", muted: "#8a6b73", domain: "lumieresalon.in", light: true,
    brand: "Lumière", nav: ["Services", "Prices", "Gallery", "Book"], cta: "Book now",
    headline: ["Beauty, styled", "just for you"],
  },
  retail: {
    bg: "#f2f8f2", panel: "#ffffff", muted: "#3f6b4d", domain: "kiranafresh.in", light: true,
    brand: "Kirana Fresh", nav: ["Shop", "Offers", "About", "Order"], cta: "Order",
    headline: ["Fresh groceries", "every day"],
  },
  gym: {
    bg: "#0a0f14", panel: "#0d141b", muted: "#94a3b8", domain: "fitcore.in",
    brand: "FitCore", nav: ["Classes", "Plans", "Trainers", "Join"], cta: "Free trial",
    headline: ["Build your", "strongest self"],
  },
  florist: {
    bg: "#fdf4f7", panel: "#ffffff", muted: "#7c5c67", domain: "bloomandco.in", light: true,
    brand: "Bloom & Co.", nav: ["Shop", "Occasions", "About", "Order"], cta: "Order",
    headline: ["Flowers that", "say it best"],
  },
  cafe: {
    bg: "#20160f", panel: "#2a1e14", muted: "#c8b49c", domain: "chaipoint.in",
    brand: "Chai Point", nav: ["Menu", "Specials", "About", "Visit"], cta: "See menu",
    headline: ["Your daily cup", "of comfort"],
  },
}

export default function SitePreview({ demo, accent, accent2 = accent, heroImg, brand, className = "" }) {
  const t = themes[demo]
  if (!t) {
    return <MockThumb accent={accent} accent2={accent2} label={brand} className={className} />
  }
  const light = t.light
  const text = light ? "#2a2028" : "#f4f4f5"
  const line = light ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)"
  const ctaText = light ? "#ffffff" : "#0a0e1a"

  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${className}`}
      style={{ background: t.bg, borderColor: line, color: text }}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: `1px solid ${line}`, background: t.panel }}>
        <span className="h-2 w-2 rounded-full" style={{ background: "#f87171" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#facc15" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "#4ade80" }} />
        <span
          className="ml-2 flex-1 truncate rounded px-2 py-0.5 text-[8px]"
          style={{ background: light ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)", color: t.muted }}
        >
          {t.domain}
        </span>
      </div>

      {/* home page */}
      <div className="px-3 pb-3 pt-2.5">
        {/* nav */}
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1 text-[10px] font-extrabold">
            <span style={{ color: accent }}>●</span> {t.brand}
          </span>
          <div className="hidden items-center gap-2 sm:flex">
            {t.nav.map((n) => (
              <span key={n} className="text-[8px]" style={{ color: t.muted }}>{n}</span>
            ))}
          </div>
          <span className="rounded-full px-2 py-0.5 text-[8px] font-bold" style={{ background: accent, color: ctaText }}>
            {t.cta}
          </span>
        </div>

        {/* hero */}
        <div className="mt-3 grid grid-cols-2 items-center gap-2.5">
          <div>
            <div className="text-[13px] font-extrabold leading-tight">
              {t.headline[0]}<br />
              <span style={{ color: accent }}>{t.headline[1]}</span>
            </div>
            <div className="mt-2 space-y-1">
              <span className="block h-1 w-full rounded" style={{ background: line }} />
              <span className="block h-1 w-2/3 rounded" style={{ background: line }} />
            </div>
            <span className="mt-2.5 inline-block rounded-full px-2.5 py-1 text-[8px] font-bold" style={{ background: accent, color: ctaText }}>
              {t.cta}
            </span>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 -z-10 rounded-xl opacity-40 blur" style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }} />
            <img
              src={heroImg}
              alt={`${t.brand} website hero`}
              className="aspect-[4/3] w-full rounded-lg object-cover"
              style={{ border: `1px solid ${line}` }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
