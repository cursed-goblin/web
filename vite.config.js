import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
// base: "./" makes all asset links relative, so the site works when served
// from a GitHub Pages project sub-path (e.g. https://<user>.github.io/web/)
// as well as from a custom domain root. No need to hard-code the repo name.
export default defineConfig({
  base: "./",
  plugins: [react()],
})
