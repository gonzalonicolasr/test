import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './src/index.html',
        inicioSesion: './src/vistas/inicio-sesion.html',
        register: './src/vistas/register.html'
      }
    }
  }
});