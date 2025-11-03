import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [react()]
});
