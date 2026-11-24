// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real cuando esté disponible.
  site: 'https://vivinka.example',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // El español vive en la raíz (/, /nosotros...) y el inglés bajo /en/.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
