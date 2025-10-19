import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// ✅ Configurazione Vite compatibile con ReaperBeatSlab (React + JSX)
export default defineConfig({
  plugins: [react()],
  root: '.', // assicura che la root sia la cartella principale
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.json'], // <— forza uso main.jsx
  },
})
