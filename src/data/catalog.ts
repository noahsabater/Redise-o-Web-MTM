// Árbol de categorías del catálogo — estructura real de la web de referencia
// (marca → gama → subcategorías). Base para poblar las fichas de producto.

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
          { name: 'Acabados interior/exterior', slug: 'acabados-interior-exterior' },
          { name: 'Aislamiento eléctrico', slug: 'aislamiento-electrico' },
          { name: 'Antimanchas', slug: 'antimanchas' },
          { name: 'Hidrofugantes', slug: 'hidrofugantes' },
          { name: 'Humedades', slug: 'humedades' },
          { name: 'Impermeabilizantes', slug: 'impermeabilizantes' },
          { name: 'Imprimaciones especiales', slug: 'imprimaciones-especiales' },
          { name: 'Renovación falsos techos', slug: 'renovacion-falsos-techos' },
          { name: 'Thermo-aislantes', slug: 'thermo-aislantes' },
        ],
      },
      {
        name: 'Decoración de Pavimentos',
        slug: 'decoracion-de-pavimentos',
        sub: [
          { name: 'Epoxi 3D', slug: 'epoxi-3d' },
          { name: 'Esmaltes', slug: 'esmaltes' },
          { name: 'Renovación de pavimentos', slug: 'renovacion-de-pavimentos' },
        ],
      },
      {
        name: 'Nature',
        slug: 'nature',
        sub: [
          { name: 'Cal aérea natural', slug: 'cal-aerea-natural' },
          { name: 'Cal hidráulica natural', slug: 'cal-hidraulica-natural' },
          { name: 'Nature Arcilla', slug: 'nature-arcilla' },
          { name: 'Sistema Nature Floor', slug: 'sistema-nature-floor' },
          { name: 'Sistema Nature Wall', slug: 'sistema-nature-wall' },
        ],
      },
      {
        name: 'Oxitec',
        slug: 'oxitec',
        sub: [
          { name: 'Complementos Oxitec', slug: 'complementos-oxitec' },
          { name: 'Revestimientos acabado óxido', slug: 'revestimientos-acabado-oxido' },
          { name: 'Revestimiento metales pulidos', slug: 'revestimiento-metales-pulidos' },
        ],
      },
      { name: 'Marine', slug: 'marine' },
      {
        name: 'Wood',
        slug: 'wood',
        sub: [
          { name: 'Aceites', slug: 'aceites' },
          { name: 'Barnices', slug: 'barnices' },
          { name: 'Lasur', slug: 'lasur' },
        ],
      },
      { name: 'Microcemento a rodillo', slug: 'microcemento-a-rodillo' },
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
          { name: 'Desincrustantes de fachadas', slug: 'desincrustantes-de-fachadas' },
          { name: 'Sistemas antihongos', slug: 'sistemas-antihongos' },
        ],
      },
      {
        name: 'Antigraffitis',
        slug: 'antigraffitis',
        sub: [
          { name: 'Limpiadores de graffiti', slug: 'limpiadores-de-graffiti' },
          { name: 'Protección permanente', slug: 'proteccion-permanente' },
          { name: 'Quita sombras', slug: 'quita-sombras' },
          { name: 'Un solo uso', slug: 'un-solo-uso' },
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
          { name: 'Fijadores', slug: 'fijadores' },
          { name: 'Mineralizantes / consolidantes', slug: 'mineralizantes-consolidantes' },
        ],
      },
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
];
