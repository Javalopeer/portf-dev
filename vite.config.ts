import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portf-dev/', // 👈 change to your exact GitHub repo name
})
