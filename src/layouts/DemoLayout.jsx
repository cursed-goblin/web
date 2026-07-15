import { Outlet } from "react-router-dom"
import WatermarkCTA from "../components/WatermarkCTA.jsx"

// Wraps individual client demos. Intentionally has NO SiteSprout navbar/footer
// so each demo feels like a standalone business site. The only SiteSprout
// element is the floating watermark CTA.
export default function DemoLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Outlet />
      <WatermarkCTA />
    </div>
  )
}
