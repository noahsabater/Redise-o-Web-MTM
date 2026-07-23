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
    }),
});

export const collections = { blog };
