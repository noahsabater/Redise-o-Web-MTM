import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { site } from '../data/site';
import type { APIContext } from 'astro';

// Feed RSS del blog: /rss.xml
// Lo consume n8n para detectar artículos nuevos y montar la newsletter.

/** Escapa los caracteres que romperían el XML dentro de un atributo. */
const xmlAttr = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Tamaño en bytes de cada portada original. <enclosure> lo exige, y Astro copia
// estas imágenes sin recodificar, así que el tamaño del original es el bueno.
// Ojo: hay que partir de process.cwd() (la raíz del proyecto). `import.meta.url`
// apunta al bundle dentro de dist/ durante el build, no al código fuente.
const coversDir = join(process.cwd(), 'src', 'assets', 'blog');
const coverBytes = new Map<string, number>();
if (existsSync(coversDir)) {
  for (const file of readdirSync(coversDir)) {
    coverBytes.set(file, statSync(join(coversDir, file)).size);
  }
}

/** '/_astro/mi-post.BFdEJykD.jpg' → 'mi-post.jpg' (quita el hash de Astro). */
const originalName = (src: string) => {
  const file = src.split('/').pop()?.split('?')[0] ?? '';
  const parts = file.split('.');
  if (parts.length >= 3) parts.splice(parts.length - 2, 1);
  return parts.join('.');
};

const MIME: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  avif: 'image/avif',
  gif: 'image/gif',
};

export async function GET(context: APIContext) {
  const baseUrl = context.site ?? new URL(site.url);

  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${site.name} · Blog`,
    description:
      'Consejos prácticos y tendencias de decoración y reformas para ayudarte a crear espacios con personalidad.',
    site: baseUrl,
    // Espacio de nombres Media RSS: permite adjuntar la imagen de portada.
    xmlns: { media: 'http://search.yahoo.com/mrss/' },
    items: posts.map((post) => {
      const cover = post.data.cover;
      const coverUrl = cover ? new URL(cover.src, baseUrl).href : undefined;

      // <enclosure> es el adjunto estándar de RSS (lo leen n8n y los lectores);
      // solo se emite si sabemos el tamaño real del fichero.
      const name = cover ? originalName(cover.src) : '';
      const bytes = coverBytes.get(name);
      const type = MIME[name.split('.').pop()?.toLowerCase() ?? ''];

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        link: `/blog/${post.id}/`,
        categories: [post.data.category],
        ...(coverUrl && bytes && type
          ? { enclosure: { url: coverUrl, length: bytes, type } }
          : {}),
        customData: coverUrl
          ? `<media:content url="${xmlAttr(coverUrl)}" medium="image" />`
          : undefined,
      };
    }),
    customData: [
      '<language>es-ES</language>',
      `<copyright>© ${new Date().getFullYear()} ${site.legalName}</copyright>`,
    ].join(''),
    trailingSlash: true,
  });
}
