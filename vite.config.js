import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  build: {
    rollupOptions: {
      external: ['react-scroll-parallax', '@portabletext/react']
    }
  },
  plugins: [react()],
})
