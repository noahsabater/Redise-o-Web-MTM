// Árbol de categorías del catálogo — estructura y ORDEN según el índice del
// catálogo MTM 2026 (pág. 2): marca → gama → subcategorías.
// Orden de marcas y gamas replicado del índice para que la web coincida.

export interface Gama {
  name: string;
  slug: string;
  sub?: { name: string; slug: string }[];
}

export interface BrandCatalog {
  slug: string;
  name: string;
  gamas: Gama[];
}

export const catalog: BrandCatalog[] = [
  {
    slug: 'tixol',
    name: 'Tixol',
    gamas: [
      {
        name: 'Soluciones',
        slug: 'soluciones',
        sub: [
          { name: 'Antimanchas', slug: 'antimanchas' },
          { name: 'Renovación falsos techos', slug: 'renovacion-falsos-techos' },
          { name: 'Imprimaciones especiales', slug: 'imprimaciones-especiales' },
          { name: 'Impermeabilizantes', slug: 'impermeabilizantes' },
          { name: 'Hidrofugantes', slug: 'hidrofugantes' },
          { name: 'Humedades', slug: 'humedades' },
          { name: 'Aislamiento eléctrico', slug: 'aislamiento-electrico' },
        ],
      },
      {
        name: 'Thermoaislantes',
        slug: 'thermo-aislantes',
        sub: [
          { name: 'Thermo Aislantes', slug: 'thermo-aislantes' },
          { name: 'Acabados interior/exterior', slug: 'acabados-interior-exterior' },
        ],
      },
      {
        name: 'Nature',
        slug: 'nature',
        sub: [
          { name: 'Tixol Nature', slug: 'nature' },
          { name: 'Sistema Nature Floor', slug: 'sistema-nature-floor' },
          { name: 'Sistema Nature Wall', slug: 'sistema-nature-wall' },
          { name: 'Nature Arcilla', slug: 'nature-arcilla' },
          { name: 'Cal aérea natural', slug: 'cal-aerea-natural' },
          { name: 'Cal hidráulica natural', slug: 'cal-hidraulica-natural' },
        ],
      },
      {
        name: 'Oxitec',
        slug: 'oxitec',
        sub: [
          { name: 'Revestimientos acabado óxido', slug: 'revestimientos-acabado-oxido' },
          { name: 'Revestimiento metales pulidos', slug: 'revestimiento-metales-pulidos' },
          { name: 'Complementos Oxitec', slug: 'complementos-oxitec' },
        ],
      },
      {
        name: 'Wood',
        slug: 'wood',
        sub: [
          { name: 'Barnices', slug: 'barnices' },
          { name: 'Lasur', slug: 'lasur' },
          { name: 'Aceites', slug: 'aceites' },
        ],
      },
      { name: 'Marine', slug: 'marine' },
      {
        name: 'Decoración de Pavimentos',
        slug: 'decoracion-de-pavimentos',
        sub: [
          { name: 'Epoxi 3D', slug: 'epoxi-3d' },
          { name: 'Esmaltes', slug: 'esmaltes' },
          { name: 'Renovación de pavimentos', slug: 'renovacion-de-pavimentos' },
        ],
      },
      { name: 'Microcemento a rodillo', slug: 'microcemento-a-rodillo' },
    ],
  },
  {
    slug: 'supertape',
    name: 'Supertape',
    gamas: [
      { name: 'Protección Plus', slug: 'proteccion-plus' },
      { name: 'Papel Kraft + Antideslizante', slug: 'proteccion-papel-kraft-plastico-antideslizante' },
      { name: 'Suelos Kraft', slug: 'proteccion-suelos-kraft' },
      { name: 'Protección Plástico', slug: 'proteccion-plastico' },
      { name: 'Protección Paredes', slug: 'proteccion-paredes' },
    ],
  },
  {
    slug: 'scalp',
    name: 'Scalp',
    gamas: [
      {
        name: 'Limpiadores',
        slug: 'limpiadores',
        sub: [
          { name: 'Limpieza', slug: 'limpieza' },
          { name: 'Sistemas antihongos', slug: 'sistemas-antihongos' },
          { name: 'Desincrustantes de fachadas', slug: 'desincrustantes-de-fachadas' },
        ],
      },
      { name: 'Complementos', slug: 'complementos' },
      {
        name: 'Hidrófugos',
        slug: 'hidrofugos',
        sub: [
          { name: 'Para fachadas', slug: 'para-fachadas' },
          { name: 'Para suelos', slug: 'para-suelos' },
        ],
      },
      { name: 'Sistemas Antihumedad', slug: 'sistemas-antihumedad' },
      { name: 'Decapantes', slug: 'decapantes' },
      {
        name: 'Preparación de fondos',
        slug: 'preparacion-de-fondos',
        sub: [
          { name: 'Mineralizantes / consolidantes', slug: 'mineralizantes-consolidantes' },
          { name: 'Fijadores', slug: 'fijadores' },
        ],
      },
      {
        name: 'Antigraffitis',
        slug: 'antigraffitis',
        sub: [
          { name: 'Protección permanente', slug: 'proteccion-permanente' },
          { name: 'Un solo uso', slug: 'un-solo-uso' },
          { name: 'Limpiadores de graffiti', slug: 'limpiadores-de-graffiti' },
          { name: 'Quita sombras', slug: 'quita-sombras' },
        ],
      },
    ],
  },
];
