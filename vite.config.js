import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allow Modal host preview URL and its subdomains
const allowedHosts = [
  '.modal.host',
  // Fallback: add common alt domains if any are used by the environment
]

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // listen on all addresses for external preview
    strictPort: true,
    cors: true,
    hmr: false, // disable HMR to avoid proxy issues in preview env
    allowedHosts,
  },
  preview: {
    port: 3000,
    host: true,
    allowedHosts,
  },
})