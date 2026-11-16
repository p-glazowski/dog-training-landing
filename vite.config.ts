import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from https://p-glazowski.github.io/dog-training-landing/
  base: '/dog-training-landing/',
})
