// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real cuando esté disponible.
  site: 'https://vivinka.example',
  vite: {
    plugins: [tailwindcss()],
  },
});
