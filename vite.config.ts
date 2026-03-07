import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const srcDir = path.resolve(__dirname, 'src')
const publicDir = path.resolve(__dirname, 'public')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@src': srcDir,
      '@public': publicDir
    }
  }
})
