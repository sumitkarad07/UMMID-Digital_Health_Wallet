import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./",        // ✅ REQUIRED for Render & GitHub Pages
  plugins: [react()],
})
