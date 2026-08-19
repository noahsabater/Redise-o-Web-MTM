import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
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
      const coverUrl = post.data.cover
        ? new URL(post.data.cover.src, baseUrl).href
        : undefined;

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        link: `/blog/${post.id}/`,
        categories: [post.data.category],
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
