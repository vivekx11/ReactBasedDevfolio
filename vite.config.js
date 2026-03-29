import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// normmal vite are in use ..
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // We'll keep it simple for now to ensure build stability
    rollupOptions: {
      output: {
        manualChunks: undefined, // Rollback to default automatic splitting
      },
    },
    chunkSizeWarningLimit: 1000,
    cssMinify: true,
  },
})
// end 
