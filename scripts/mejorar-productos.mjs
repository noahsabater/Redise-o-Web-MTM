/* ============================================================
   Mejora por lotes de imágenes de producto con fal.ai
   - Edita cada imagen manteniendo el producto/etiqueta (NO regenera).
   - Uso:
       node scripts/mejorar-productos.mjs --test              (solo 1 imagen)
       node scripts/mejorar-productos.mjs --brand tixol       (una marca)
       node scripts/mejorar-productos.mjs                     (las 204)
   - Requiere:  export FAL_KEY="tu_api_key"
   ============================================================ */
import { fal } from '@fal-ai/client';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

// ===== CONFIG DEL MODELO (rellenar con los datos de fal) =====
// 1) MODEL: el identificador exacto (de la pestaña API del modelo en fal)
const MODEL = 'fal-ai/nano-banana-pro/edit';
// 2) IMAGE_FIELD: cómo se llama el campo de la imagen en ese modelo
//    (mira el ejemplo de la API: puede ser 'image_url', 'image_urls', etc.)
const IMAGE_FIELD = 'image_urls';
// 3) IMAGE_AS_ARRAY: true si el campo espera una lista [url]; false si una sola url
const IMAGE_AS_ARRAY = true;
// ==============================================================

const PROMPT = `Recreate this product image as a high-quality PROFESSIONAL STUDIO PHOTOGRAPH, without changing ANY detail of the product. Keep the product IDENTICAL: same container, same shape, same colors and above all the SAME LABEL with its exact text, typography, logo, icons and data, letter by letter. Do not rewrite, translate, invent or correct any text. It is a real product from a real brand and must stay 100% recognizable. Improve ONLY the photographic quality: soft even professional studio lighting (softbox) with natural reflections, maximum sharpness and high resolution, clean pure WHITE studio background, product perfectly CENTERED in frontal view with a uniform margin, subtle realistic contact shadow, square 1:1 format. Premium e-commerce catalog aesthetic. No added text, no watermark, no decorative elements, do not change the angle.`;

const IN = 'Imagenes productos web';
const OUT = 'Imagenes productos web/mejoradas';
const BRANDS = ['tixol', 'scalp', 'supertape'];

const args = process.argv.slice(2);
const test = args.includes('--test');
const brandArg = args.includes('--brand') ? args[args.indexOf('--brand') + 1] : null;

if (!process.env.FAL_KEY) { console.error('❌ Falta la API key. Ejecuta:  export FAL_KEY="tu_key"'); process.exit(1); }
fal.config({ credentials: process.env.FAL_KEY });

const mime = (f) => f.endsWith('.png') ? 'image/png' : f.endsWith('.webp') ? 'image/webp' : 'image/jpeg';

async function processOne(brand, file) {
  const outDir = `${OUT}/${brand}`;
  mkdirSync(outDir, { recursive: true });
  const outPath = `${outDir}/${file.replace(/\.(png|webp|jpe?g)$/i, '.png')}`;
  if (existsSync(outPath)) { console.log(`  ⏭  ya existe: ${file}`); return; }

  const buf = readFileSync(`${IN}/${brand}/${file}`);
  const blob = new Blob([buf], { type: mime(file) });
  const imageUrl = await fal.storage.upload(blob);

  const input = { prompt: PROMPT };
  input[IMAGE_FIELD] = IMAGE_AS_ARRAY ? [imageUrl] : imageUrl;
  const res = await fal.subscribe(MODEL, { input });
  const url = res?.data?.images?.[0]?.url || res?.images?.[0]?.url;
  if (!url) throw new Error('sin imagen en la respuesta: ' + JSON.stringify(res).slice(0, 200));

  const out = await fetch(url); const outBuf = Buffer.from(await out.arrayBuffer());
  writeFileSync(outPath, outBuf);
  console.log(`  ✅ ${file}`);
}

async function run() {
  const brands = brandArg ? [brandArg] : BRANDS;
  let done = 0, fail = 0;
  for (const brand of brands) {
    const files = readdirSync(`${IN}/${brand}`).filter(f => /\.(png|webp|jpe?g)$/i.test(f));
    const list = test ? files.slice(0, 1) : files;
    console.log(`\n=== ${brand.toUpperCase()} (${list.length}) ===`);
    for (const file of list) {
      let ok = false;
      for (let intento = 1; intento <= 3 && !ok; intento++) {
        try { await processOne(brand, file); ok = true; done++; }
        catch (e) { console.log(`  ⚠  ${file} intento ${intento}: ${e.message}`); await new Promise(r => setTimeout(r, 1500)); }
      }
      if (!ok) fail++;
      if (test) break;
    }
    if (test) break;
  }
  console.log(`\n=== FIN · ${done} hechas · ${fail} fallidas ===`);
}
run();
