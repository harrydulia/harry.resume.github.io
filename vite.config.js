import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // <-- 1. 引入 Tailwind Vite 外掛

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // <-- 2. 將外掛加入陣列中
  ],
  base: '/harry.resume.github.io/'
})