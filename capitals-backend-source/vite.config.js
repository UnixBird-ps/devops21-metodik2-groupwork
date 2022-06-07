import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT,
    hmr: false,
    proxy: {
      '/api': {
        target: 'http://localhost:4005',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
