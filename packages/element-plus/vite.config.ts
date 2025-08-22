import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: ['./index.ts'],
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'index',
    },
    minify: true,
    cssMinify: true,
    rollupOptions: {
      external: ['vue'],
    },
  },
})
