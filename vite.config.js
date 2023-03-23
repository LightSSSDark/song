import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/song/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
  }
})
