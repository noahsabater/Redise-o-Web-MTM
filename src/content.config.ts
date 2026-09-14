import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección del blog — cada artículo es un .md en src/content/blog/.
// Escalable: para importar el resto de posts basta con añadir ficheros .md.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string(),
      excerpt: z.string(),
      cover: image().optional(),
      // Fecha de la última revisión de fondo del artículo. Se emite como
      // dateModified: sin ella, para Google un post de 2018 lleva ocho años
      // sin tocarse aunque se haya reescrito entero.
      updated: z.coerce.date().optional(),
      // Preguntas frecuentes. Se pintan al final y se emiten como FAQPage,
      // que es lo que Google puede mostrar desplegado en los resultados.
      faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    }),
});

export const collections = { blog };
