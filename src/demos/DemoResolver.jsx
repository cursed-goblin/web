import { useParams, Navigate } from "react-router-dom"
import RestaurantDemo from "./RestaurantDemo.jsx"
import SalonDemo from "./SalonDemo.jsx"
import RetailDemo from "./RetailDemo.jsx"

const demos = {
  restaurant: RestaurantDemo,
  salon: SalonDemo,
  retail: RetailDemo,
}

export default function DemoResolver() {
  const { slug } = useParams()
  const Demo = demos[slug]
  if (!Demo) return <Navigate to="/demo" replace />
  return <Demo />
}
