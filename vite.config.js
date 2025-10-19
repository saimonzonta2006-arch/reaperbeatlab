import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Configurazione Vite compatibile con Vercel + React (JSX)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // forza Vite a usare main.jsx invece di main.ts
  },
  server: {
    port: 5173,
  },
})
