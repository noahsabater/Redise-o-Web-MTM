// Genera las redirecciones de las fichas técnicas en PDF de la web antigua
// (WordPress) hacia las páginas de producto de la web nueva.
//
// Contexto: al migrar se subieron las 186 fichas a /public/fichas/ con nombres
// nuevos, pero nadie redirigió las URLs viejas de /wp-content/uploads/. Google
// las sigue mostrando y devolvían 403: 437 clics perdidos en 3 meses.
//
// El destino es la PÁGINA DE PRODUCTO, no el PDF nuevo: quien busca una ficha
// llega a un sitio donde puede descargarla y además ver el producto.
//
// Uso:  node scripts/fichas-antiguas.mjs        (imprime las reglas)
// El resultado ya está volcado en public/_redirects; este script queda como
// documentación de cómo se hizo el mapeo y para rehacerlo si aparecen más PDFs.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename } from 'node:path';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const productos = JSON.parse(readFileSync(join(raiz, 'src/data/products.json'), 'utf8'));

// Correcciones revisadas a mano: el emparejamiento automático por nombre falla
// con los nombres franceses de Scalp (FT_ES_ScalpAqua03) y con los números de
// serie parecidos (Aqua 03 / 04 / 05, Mineralizante 94 / 95 / 2016).
export const CORRECCIONES = {
  'FT_ES_ScalpAqua03_030521_AP_compressed-1.pdf': 'aqua-03',
  'FT_ES_ScalpAqua03.pdf': 'aqua-03',
  'FT_ES_ScalpAqua04.pdf': 'aqua-04',
  'FT_ES_ScalpAqua04_030521_AP_compressed.pdf': 'aqua-04',
  'FT_ES_ScalpAqua05.pdf': 'scalp-aqua-05',
  'FT_ES_ScalpAquanet08_030521_AP.pdf': 'scalp-aqua-08',
  'FT_ES_Aquafuge18_070521_AP_compressed.pdf': 'aquafuge-18',
  'FT_ES_ScalpMineralisant95.pdf': 'scalp-mineralizante-95',
  'FT_ES_ScalpDecolPapier_140521_AP.pdf': 'scalp-despega-papel',
  'FT_ES_ScalpDecolPapier.pdf': 'scalp-despega-papel',
  'Ficha-Renovador-pav.-extrem.pdf': 'tixol-renovador-de-pavimentos-extreme',
  'ficha-tecnica_tixol-marine-aceite-de-terminacion-oil-1-copia.pdf': 'aceite-saturador-oil-1',
  'ficha-tecnica_tixol-pu-finish-antirayadog-copia.pdf': 'barniz-acrilico-pu-finish-antirayado',
  'Ficha-Tecnica_TIXOL-BARNIZ-PU-FINISH-2C.pdf':
    'barniz-de-poliuretano-alifatico-pu-finish-2-c-base-disolvente',
  "®Carta-de-Colores-Nature-Arcilla-TRZ-LW2.pdf": "tixol-nature-arcilla",
  "®Carta-de-Colores-Nature-Wall-TRZ-LW2.pdf": "tixol-nature-wall",
  "®Carta-de-Colores-Nature-Floor-trz-LW2.pdf": "nature-floor-toner",
  "PROMOTOR-DE-ADHERENCIA-FICHA-TECNICA.pdf": "tixol-promotor-adherencia-acryflex-pu",
  "Tixol-Carta-colores-corcho-2024.pdf": "tixol-toners-thermo-corcho",
  "Ficha-Tecnica_TIXOL-COLORANTE-CORCHO-copia.pdf": "tixol-toners-thermo-corcho",
  "Ficha-Tecnica_TIXOepoxi-estandar-colorsESPmayo18-copia.pdf": "epoxi-standard-colors",
  "FT-ES_BatiNetM3100.pdf": "scalp-batinet-3100",
  "FT-ES-Sensitive-Cleaner.pdf": "scalp-sensitive-limpiador-antigrafiti",
  "tecnolap.pdf": "tecnoplac",
  "FT_ES_ScalpexAL23.pdf": "scalp-scalpex-al23",
  "FT_ES_ScalpAntiTaches07.pdf": "anti-manchas-07",
  "FT_ES_ScalpAntiSalpetre.pdf": "scalp-antisalitre",
  "FT_ES_EliminodordeAdhesivos_GEL.pdf": "scalpik-eliminador-de-adhesivos",
  "FT-ES_VernasolvPU31-1.pdf": "scalp-vernasol-pu31",
  "ficha_tecnica_tixol_express-v.2018-1.pdf": "express-20-minutos",
  "FT_ES_ScalpexAENWNG.pdf": "decapantes-scalpex-ae-nw",
  "FT_ES_ScalpnetEDJ28_110521_AP.pdf": "scalp-scalpnet-edj28",
  "FT_ES_ScalpoxAS2.pdf": "scalpox-as-2",
  "FT-FR_ScalpoxAS2_070720AS_compressed.pdf": "scalpox-as-2",
  "FT_ES_ScalpexSD.pdf": "scalp-scalpex-sd",
  "FT_ES_ScalpConsolidantHydrofuge.pdf": "scalp-consolidante-hidrofugante",
  "ficha-tcnica-supertape-2-capas-mtm-materialesmodernos.pdf": "proteccion-especial-mas-plastico-antideslizante-2-capas",
  "Ficha-Auronivelante-Top-Level24.pdf": "tixol-top-level",
  "Ficha-Tecnica_TIXOsatinadoLION.pdf": "tixol-satinee-lion",
  "ficha-tecnica_tixoepoxi3d-capa-gruesa.pdf": "epoxi-capa-gruesa",
  "FT_ES_ScalpfugePro.pdf": "scalp-scalpfuge-pro",
  "FT_ES_AquafugePro.pdf": "scalp-aquafuge-pro",
  "Ficha-Flexistop-Eco.pdf": "tixol-flexistop-eco",
  "Ficha-Hidro-Finish-Pu-Natur-1C.pdf": "tixol-hidro-finish-pu-1c",
  "tixol-hidro-finish-pu-v1-buena-4.pdf": "tixol-hidro-finish-pu-1c",
};

// Ficheros que NO identifican un producto concreto (cartas de color, dípticos,
// nombres genéricos que encajan con 2-3 productos). Van a la página de gama:
// es relevante y no se arriesga a mandar al cliente al producto equivocado.
export const A_GAMA = {
  'Ficha-Tecnica-Tixol-Thermo-Pintura.pdf': '/productos/tixol/termicos-reflexivos/',
  'ficha-tecnica_tixol-primer-antihumedad-copia.pdf': '/productos/tixol/humedades/',
  'Ficha-tecnica-Tixol-Ecosil.pdf': '/productos/tixol/acabados-interior-exterior/',
  'Ficha-Tecnica-Membrana-Aislante-termica.pdf': '/productos/tixol/aislamiento-electrico/',
  'F.T-TIXOL-THERMO-CORCHO-24.pdf': '/productos/tixol/corcho-proyectado/',
  'ficha-tecnica_tixol-esmalte-epoxi-80_-solidos.pdf': '/productos/tixol/resinas-epoxi/',
  'ficha-tecnica_tixol-imprimacion-epoxi-anti-polvo-copia.pdf': '/productos/tixol/resinas-epoxi/',
  'e_dptico_3capas.pdf': '/productos/tixol/resinas-epoxi/',
  'Ficha-Tecnica_TIXOL-PU-FINISH-standard-color-copia.pdf': '/productos/tixol/decoracion-de-pavimentos/',
  'Ficha-Tecnica-Tixol-Nature-Eco-2.pdf': '/productos/tixol/nature/',
  'ficha-tecnica_tixol_acryflex-copia.pdf': '/productos/tixol/impermeabilizantes/',
  'f_tec_endurecedor.pdf': '/productos/tixol/imprimaciones-especiales/',
  'ficha_tecnica_protector_suelos_2-03-10.pdf': '/productos/tixol/aceites/',
  'Ficha-Revestimeinto-Fachadas-24.pdf': '/productos/scalp/para-fachadas/',
  'ficha-tecnica_-limpiador-de-moho-musgo-y-verdin-copia.pdf': '/productos/scalp/sistemas-antihongos/',
  'ficha-tecnica-tixol-oxitec-metales-para-pulir-copia-3-buena.pdf':
    '/productos/tixol/revestimiento-metales-pulidos/',
};

// decodeURIComponent revienta con nombres que llevan un % suelto
// (p. ej. "tixol-esmalte-epoxi-80%-solidos"); por eso va protegido.
const decodificar = (s) => { try { return decodeURIComponent(s); } catch { return s; } };
const norm = (s) =>
  decodificar(s)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/\.pdf$/, '')
    .replace(
      /\b(ficha|fichas|tecnica|tecnico|ft|f_tec|ftec|es|fr|esp|copia|copy|nuevo|new|final|def|buena|bueno|compressed|scaled|ap|as|v\d+|rev\d+)\b/g,
      ' '
    )
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const claves = productos
  .filter((p) => p.datasheet)
  .map((p) => ({
    slug: p.slug,
    claves: [norm(basename(p.datasheet)), norm(p.name), norm(p.slug)].filter(Boolean),
  }));

function similitud(a, b) {
  const ta = new Set(a.split(' ')), tb = new Set(b.split(' '));
  const inter = [...ta].filter((t) => tb.has(t)).length;
  const jac = inter / new Set([...ta, ...tb]).size;
  // Subcadena: cubre "scalpaqua03" contra "scalp aqua 03". Solo con claves
  // largas — "oro" está dentro de "morteroromano" y emparejaba cualquier cosa.
  const sa = a.replace(/ /g, ''), sb = b.replace(/ /g, '');
  const corta = Math.min(sa.length, sb.length);
  const sub = corta >= 8 && (sa.includes(sb) || sb.includes(sa)) ? 1 : 0;
  return Math.max(jac, sub * 0.9);
}

export function destinoDe(rutaPdf) {
  const fichero = decodificar(basename(rutaPdf));
  if (A_GAMA[fichero]) return A_GAMA[fichero];
  if (CORRECCIONES[fichero]) return `/producto/${CORRECCIONES[fichero]}/`;
  const n = norm(fichero);
  let mejor = null, max = 0;
  for (const c of claves) {
    for (const k of c.claves) {
      const s = similitud(n, k);
      if (s > max) { max = s; mejor = c.slug; }
    }
  }
  return max >= 0.34 ? `/producto/${mejor}/` : null;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const rutas = readFileSync(join(raiz, 'scripts/pdfs-antiguos.txt'), 'utf8')
    .split('\n').map((l) => l.trim()).filter(Boolean);
  let sinDestino = 0;
  for (const r of rutas) {
    const d = destinoDe(r);
    if (!d) { console.error(`SIN DESTINO: ${r}`); sinDestino++; continue; }
    console.log(`${r} ${d} 301`);
  }
  console.error(`\n${rutas.length - sinDestino}/${rutas.length} fichas mapeadas.`);
}
