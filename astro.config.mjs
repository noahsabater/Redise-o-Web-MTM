// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL de producción (ajústala al dominio final cuando se publique)
  site: 'https://materialesmodernos.com',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Formatos modernos por defecto para <Image>
    // Astro genera WebP/AVIF + lazy-load + srcset automáticamente.
    responsiveStyles: true,
  },
});
