// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL de producción (ajústala al dominio final cuando se publique)
  site: 'https://materialesmodernos.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Formatos modernos por defecto para <Image>
    // Astro genera WebP/AVIF + lazy-load + srcset automáticamente.
    responsiveStyles: true,
  },
});
