// Genera vercel.json a partir de public/_redirects.
//
// public/_redirects es la ÚNICA fuente de verdad de las redirecciones.
// Está en formato Cloudflare/Netlify, que Vercel no entiende, así que este
// script lo traduce. Si añades o cambias una redirección, tócala solo en
// _redirects y ejecuta:
//
//     npm run redirects
//
// No edites vercel.json a mano: este script lo sobrescribe entero.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const origen = join(raiz, 'public', '_redirects');
const salida = join(raiz, 'vercel.json');

// Vercel aplica las reglas en orden y gana la primera que coincide, así que
// hay que conservar el orden del fichero: las específicas van antes que las
// genéricas (/categoria-producto/tixol/* antes que /categoria-producto/*).
const redirects = [];
const ignoradas = [];

for (const [n, cruda] of readFileSync(origen, 'utf8').split('\n').entries()) {
  const linea = cruda.trim();
  if (!linea || linea.startsWith('#')) continue;

  const [source, destination, codigo = '301'] = linea.split(/\s+/);
  if (!destination || !source.startsWith('/')) {
    ignoradas.push(`línea ${n + 1}: ${linea.slice(0, 60)}`);
    continue;
  }

  redirects.push({
    // El comodín de Cloudflare (*) es un grupo de captura en Vercel.
    source: source.replaceAll('*', '(.*)'),
    destination,
    permanent: codigo === '301',
  });
}

writeFileSync(salida, JSON.stringify({ trailingSlash: true, redirects }, null, 2) + '\n');

const comodines = redirects.filter((r) => r.source.includes('(.*)')).length;
console.log(`vercel.json generado: ${redirects.length} redirecciones (${comodines} con comodín).`);

// Vercel rechaza el despliegue por encima de 1024 reglas.
if (redirects.length > 1024) {
  console.error(`AVISO: ${redirects.length} reglas superan el límite de 1024 de Vercel.`);
  process.exit(1);
}
if (ignoradas.length) {
  console.warn(`Líneas ignoradas por formato:\n  ${ignoradas.join('\n  ')}`);
}
