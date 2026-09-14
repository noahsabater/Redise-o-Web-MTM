// Enlaza, dentro del texto de los artículos, la primera mención de cada
// producto del catálogo.
//
// El bloque "Productos de los que habla este artículo" ya empuja tráfico a las
// fichas, pero un enlace dentro del párrafo vale más: va en contexto y es el
// que Google usa para entender de qué trata la ficha enlazada.
//
// Reglas de seguridad (por eso no es un simple buscar-y-reemplazar):
//   - sólo la PRIMERA mención de cada producto, máximo 4 por artículo;
//   - nunca dentro de un enlace que ya existe;
//   - nunca en un título (línea que empieza por #) ni en el frontmatter;
//   - nombres genéricos de una sola palabra fuera, o "Disolvente" enlazaría
//     cualquier mención de disolvente.
//
// Uso:  node scripts/enlazar-productos.mjs [--aplicar]
// Sin --aplicar sólo enseña lo que haría.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const dirBlog = join(raiz, 'src/content/blog');
const productos = JSON.parse(readFileSync(join(raiz, 'src/data/products.json'), 'utf8'));
const aplicar = process.argv.includes('--aplicar');

const GENERICOS = new Set(['disolvente', 'economic', 'nature', 'marine', 'wood', 'soluciones']);
const MAX_POR_ARTICULO = 4;

const sinAcentos = (s) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const escapar = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Nombre completo y nombre sin la marca; el más largo primero. */
function variantes(p) {
  const corto = p.name.replace(/^(Tixol|Scalp|Supertape)\s+/, '');
  return [...new Set([p.name, corto])]
    .filter((v) => {
      if (GENERICOS.has(sinAcentos(v))) return false;
      const palabras = v.trim().split(/\s+/).length;
      return (palabras >= 2 && v.length >= 10) || /\d/.test(v) || v.length >= 9;
    })
    .sort((a, b) => b.length - a.length);
}

// Los nombres largos van antes: si "Mortero de Cal Romano Fino" y "Mortero de
// Cal" compiten por el mismo texto, debe ganar el específico.
const candidatos = productos
  .flatMap((p) => variantes(p).map((v) => ({ texto: v, slug: p.slug })))
  .sort((a, b) => b.texto.length - a.texto.length);

/** Trozos del markdown donde NO se puede tocar. */
function zonasProhibidas(cuerpo) {
  const zonas = [];
  const añadir = (re) => {
    for (const m of cuerpo.matchAll(re)) zonas.push([m.index, m.index + m[0].length]);
  };
  añadir(/\[[^\]]*\]\([^)]*\)/g); // enlaces ya existentes
  añadir(/^#{1,6} .*$/gm); // títulos
  añadir(/```[\s\S]*?```/g); // bloques de código
  añadir(/!\[[^\]]*\]\([^)]*\)/g); // imágenes
  return zonas;
}

let totales = 0;
for (const fichero of readdirSync(dirBlog).filter((f) => f.endsWith('.md'))) {
  const ruta = join(dirBlog, fichero);
  const original = readFileSync(ruta, 'utf8');
  const corte = original.indexOf('\n---', 3) + 4;
  const cabecera = original.slice(0, corte);
  let cuerpo = original.slice(corte);

  const puestos = [];
  for (const c of candidatos) {
    if (puestos.length >= MAX_POR_ARTICULO) break;
    if (puestos.some((p) => p.slug === c.slug)) continue;
    if (cuerpo.includes(`(/producto/${c.slug}/)`)) continue;

    // Insensible a mayúsculas: los artículos escriben "Convertidor de óxido"
    // y el catálogo "Convertidor de Óxido". Se conserva el texto tal cual está
    // escrito en el artículo (m[0]), no el del catálogo.
    const re = new RegExp(`(?<![\\w/-])${escapar(c.texto)}(?![\\w-])`, 'i');
    const m = re.exec(cuerpo);
    if (!m) continue;
    const prohibidas = zonasProhibidas(cuerpo);
    if (prohibidas.some(([a, b]) => m.index >= a && m.index < b)) continue;

    cuerpo =
      cuerpo.slice(0, m.index) +
      `[${m[0]}](/producto/${c.slug}/)` +
      cuerpo.slice(m.index + m[0].length);
    puestos.push({ slug: c.slug, texto: m[0] });
  }

  if (!puestos.length) continue;
  totales += puestos.length;
  console.log(`${fichero}\n   ${puestos.map((p) => `«${p.texto}» → ${p.slug}`).join('\n   ')}`);
  if (aplicar) writeFileSync(ruta, cabecera + cuerpo);
}
console.log(`\n${totales} enlaces ${aplicar ? 'insertados' : 'a insertar (usa --aplicar)'}.`);
