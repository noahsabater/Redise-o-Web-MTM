// Categorías del blog como páginas reales.
//
// Antes las categorías sólo existían como filtro de JavaScript en /blog/: los
// botones escondían y enseñaban tarjetas, así que para Google no había nada que
// rastrear. Son 9 páginas que agrupan contenido ya escrito y que pueden
// posicionar por términos genéricos ("morteros de cal", "aislamiento térmico")
// que ningún artículo suelto cubre bien.

export const slugCategoria = (nombre: string) =>
  nombre
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * Texto de cabecera de cada categoría. Sin esto las páginas serían una rejilla
 * de tarjetas sin contenido propio, que es justo lo que Google considera
 * "página pobre" y no posiciona. Se indexan sólo las categorías con 2 o más
 * artículos, por lo mismo.
 */
export const DESCRIPCIONES: Record<string, string> = {
  construccion:
    'Materiales, sistemas y soluciones constructivas explicadas desde la obra real: qué usar en cada soporte, cómo prepararlo y qué errores salen caros después.',
  decoracion:
    'Acabados decorativos para paredes y suelos —microcemento, resinas, efectos metálicos y pinturas naturales— con el criterio de quién los aplica a diario.',
  mantenimiento:
    'Cómo conservar fachadas, suelos y paredes: limpieza, protección e hidrofugado para que lo que ya está hecho aguante los años sin rehacerlo.',
  'cal-natural':
    'Morteros y pinturas de cal: por qué un material de siempre sigue siendo la mejor respuesta a la transpirabilidad, la humedad y los acabados naturales.',
  'aislamiento-termico':
    'Aislar sin obra y sin perder espacio: corcho proyectado, morteros aislantes y revestimientos térmicos reflexivos, con los datos de rendimiento delante.',
  pintura:
    'Pinturas técnicas y decorativas: cómo elegirlas según el soporte, prepararlo bien y conseguir que el acabado dure.',
  humedades:
    'Humedad por capilaridad, condensación y filtraciones: cómo distinguirlas, por qué vuelven cuando se tapan y qué sistema resuelve cada una.',
  impermeabilizacion:
    'Terrazas, cubiertas y zonas húmedas: sistemas de impermeabilización, errores que provocan goteras y cómo evitarlos desde el principio.',
  arte:
    'Proyectos y obras donde los materiales de MTM son el medio: artistas, muralistas y aplicadores llevando los productos más allá de la construcción.',
};

export const descripcionDe = (nombre: string) =>
  DESCRIPCIONES[slugCategoria(nombre)] ??
  `Artículos de MTM sobre ${nombre.toLowerCase()}: consejos prácticos, materiales y soluciones para tus proyectos.`;
