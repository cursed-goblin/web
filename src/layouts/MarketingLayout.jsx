import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import AmbientBackground from "../components/AmbientBackground.jsx"

export default function MarketingLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
