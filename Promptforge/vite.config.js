import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Esto soluciona el error de conexión en Replit
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443 // Ayuda a que los cambios se vean en vivo en Replit
    }
  }
})