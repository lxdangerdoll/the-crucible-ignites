import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // The 'base' property ensures all assets are linked relatively to this path
  base: '/aegis/aegis-agora/sovereign-drift/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})