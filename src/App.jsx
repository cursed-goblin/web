import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import ScrollToTop from "./components/ScrollToTop.jsx"
import MarketingLayout from "./layouts/MarketingLayout.jsx"
import DemoLayout from "./layouts/DemoLayout.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import About from "./pages/About.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import FaqPage from "./pages/FaqPage.jsx"
import Contact from "./pages/Contact.jsx"
import Demo from "./pages/Demo.jsx"
import DemoResolver from "./demos/DemoResolver.jsx"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* SiteSprout marketing site */}
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
          </Route>

          {/* Standalone client demos (no SiteSprout chrome, watermark CTA only) */}
          <Route element={<DemoLayout />}>
            <Route path="/demo/:slug" element={<DemoResolver />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </MotionConfig>
  )
}
