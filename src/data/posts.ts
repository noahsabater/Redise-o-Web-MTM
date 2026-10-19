// Posts destacados en la home — contenido literal de la web de referencia.
// (El blog completo se importa como colección; aquí solo los 3 destacados.)

import aislar from '../assets/blog/aislar-sin-obras.jpg';
import humedad from '../assets/blog/humedad-capilar.jpg';
import cal from '../assets/blog/pintura-de-cal.jpg';
import type { ImageMetadata } from 'astro';

export interface FeaturedPost {
  title: string;
  category: string;
  date: string; // legible
  excerpt: string;
  href: string;
  image: ImageMetadata;
}

export const featuredPosts: FeaturedPost[] = [
  {
    title: 'Paredes que cuidan de ti: el poder de la pintura de cal',
    category: 'Cal natural',
    date: '12 enero, 2026',
    excerpt:
      '¿Sabías que tus paredes pueden mejorar tu bienestar? Descubre por qué la pintura de cal es la alternativa más saludable.',
    href: '/blog/paredes-que-cuidan-de-ti-el-poder-de-la-pintura-de-cal/',
    image: cal,
  },
  {
    title:
      'Aislar tu casa sin obras es posible: descubre cómo ahorrar energía sin perder espacio',
    category: 'Aislamiento Térmico',
    date: '15 diciembre, 2025',
    excerpt:
      'Un hogar mal aislado puede perder hasta el 40% de su energía. Te contamos cómo evitarlo sin reformas ni perder metros.',
    href: '/blog/aislar-tu-casa-sin-obras-es-posible-descubre-como-ahorrar-energia-sin-perder-espacio/',
    image: aislar,
  },
  {
    title:
      'Humedad por capilaridad: cómo identificarla y el sistema para eliminarla',
    category: 'Humedades',
    date: '8 septiembre, 2026',
    excerpt:
      'La humedad que sube del suelo no se va ventilando ni tapándola con pintura: vuelve. Te explicamos cómo distinguirla de la condensación y cómo cortarla.',
    href: '/blog/el-mejor-sistema-antihumedad-para-la-humedad-por-capilaridad/',
    image: humedad,
  },
];
