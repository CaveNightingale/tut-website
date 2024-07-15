import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/bluemap/settings.json': {
        target: 'http://localhost:8100',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/bluemap/, ''),
      },
      '^/bluemap/maps/.*': {
        target: 'http://localhost:8100',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/bluemap/, ''),
      }
    }
  }
});
