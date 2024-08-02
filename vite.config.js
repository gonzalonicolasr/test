import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'login': ['login.js'],
          'register': ['register.js']
        }
      }
    }
  }
});