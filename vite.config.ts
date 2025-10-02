/// <reference types="node" />
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/motion'],
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
          motion: ['@vueuse/motion'],
        },
      },
    },
  },
})
