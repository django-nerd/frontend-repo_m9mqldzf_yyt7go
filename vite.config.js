import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // listen on all addresses for external preview
    strictPort: true,
    cors: true,
    hmr: false, // disable HMR to avoid proxy issues in preview env
  },
  preview: {
    port: 3000,
    host: true,
  },
})
