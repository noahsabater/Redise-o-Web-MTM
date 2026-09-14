// Empareja cada artículo del blog con los productos del catálogo que menciona.
//
// Por qué existe: hasta ahora el blog (que es de donde salen casi todas las
// impresiones en Google) no enlazaba a las fichas de producto — sólo 4 de 78
// artículos lo hacían. Las fichas convierten 7 veces mejor que los artículos
// (CTR 6,15 % frente a 0,81 %, Search Console jun-sep 2026), así que cada
// artículo debe llevar al producto del que habla.
//
// Cómo puntúa: cuenta apariciones de los términos de cada producto en el texto,
// pero pesando cada término por lo raro que sea en el catálogo (idea de TF-IDF).
// Sin ese peso ganarían siempre "cal", "pintura" o "mortero", que salen en
// decenas de productos y no distinguen nada.

import productos from '../data/products.json';

type Producto = (typeof productos)[number];

/** Palabras que no aportan (artículos, preposiciones y la marca en sí). */
const VACIAS = new Set([
  'de','del','la','el','los','las','y','o','a','en','con','para','por','al','un','una',
  'tixol','scalp','supertape','mtm',
]);

const limpiar = (s: string) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const tokens = (s: string) =>
  limpiar(s).split(/[^a-z0-9+]+/).filter((t) => t.length > 2 && !VACIAS.has(t));

/** Términos de cada producto: nombre + gamas. */
function terminosDe(p: Producto): string[] {
  return [...new Set([...tokens(p.name), ...p.gamas.flatMap((g) => tokens(g.name))])];
}

// Frecuencia de cada término en el catálogo: "hidrofugante" aparece en 3
// productos y vale mucho; "cal" aparece en 30 y casi no distingue.
const frecuencia = new Map<string, number>();
for (const p of productos) {
  for (const t of terminosDe(p)) frecuencia.set(t, (frecuencia.get(t) ?? 0) + 1);
}
const peso = (t: string) => Math.log(productos.length / (1 + (frecuencia.get(t) ?? 0)));

/**
 * Devuelve los productos más relacionados con un texto.
 * `minimo` evita el caso peor: colocar productos irrelevantes en un artículo
 * que no habla de ninguno. Mejor no enseñar nada que enseñar ruido.
 */
export function productosDe(texto: string, limite = 4, minimo = 3.2): Producto[] {
  const cuerpo = ' ' + limpiar(texto) + ' ';
  const puntuados: { p: Producto; s: number }[] = [];

  for (const p of productos) {
    const terminos = terminosDe(p);
    if (!terminos.length) continue;

    let s = 0;
    let acertados = 0;
    for (const t of terminos) {
      const apariciones = cuerpo.split(' ' + t).length - 1;
      if (!apariciones) continue;
      acertados++;
      // El logaritmo evita que un término repetido 40 veces aplaste al resto.
      s += peso(t) * (1 + Math.log(apariciones));
    }
    // Exigir que aparezca buena parte del nombre: así "Mortero de Cal Romano
    // Fino" no salta en un artículo que sólo dice "mortero".
    const cobertura = acertados / terminos.length;
    if (cobertura < 0.6) continue;
    if (s >= minimo) puntuados.push({ p, s: s * cobertura });
  }

  return puntuados.sort((a, b) => b.s - a.s).slice(0, limite).map((x) => x.p);
}
