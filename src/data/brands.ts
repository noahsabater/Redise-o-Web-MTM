// Marcas de MTM — contenido literal de la web de referencia.

export interface Brand {
  slug: string;
  name: string;
  role: string; // Fabricante / Dis. Oficial
  tagline: string;
  description: string;
  categories: string[];
  features?: string[];
}

export const brands: Brand[] = [
  {
    slug: 'tixol',
    name: 'Tixol',
    role: 'Fabricante',
    tagline:
      'Ofrece una amplia gama de productos para la decoración, reparación y protección de superficies, tanto en interior como en exterior.',
    description:
      'Tixol es una marca innovadora que combina calidad, estética y funcionalidad en sus productos. Marca española dedicada a la fabricación y comercialización de pinturas y barnices para los sectores de la construcción, la industria, el bricolaje y la decoración.',
    features: [
      'Acabados únicos',
      'Alto rendimiento',
      'Materiales innovadores',
      'Protección para Int/Ext',
      'Certificaciones y seguridad',
    ],
    categories: [
      'Soluciones',
      'Decoración de Pavimentos',
      'Nature',
      'Oxitec',
      'Marine',
      'Wood',
      'Sistema de Microcemento a Rodillo',
    ],
  },
  {
    slug: 'scalp',
    name: 'Scalp',
    role: 'Dis. Oficial',
    tagline:
      'Empresa francesa especializada en el diseño, fabricación y comercialización de productos para la limpieza y protección de superficies.',
    description:
      'Scalp ofrece limpiadores, hidrofugantes, algicidas, antigraffitis, decapantes y aceites para los sectores de la construcción y la industria. Desde MTM destacamos su innovación, calidad y respeto por el medio ambiente, posicionándonos como distribuidor oficial.',
    categories: [
      'Limpiadores',
      'Complementos',
      'Hidrofugantes',
      'Sistemas Antihumedad',
      'Decapantes',
      'Preparación de fondos',
      'Antigraffitis',
    ],
  },
  {
    slug: 'supertape',
    name: 'Supertape',
    role: 'Fabricante',
    tagline:
      'Ofrece una amplia gama de productos para la protección de superficies en reformas, como paredes y suelos.',
    description:
      'Supertape es una marca española fabricada por Materiales Modernos que ofrece una gama completa de productos de alta calidad para la protección de superficies. Papel Kraft de alta calidad con o sin encolado para protección de suelos, cintas krepp y plásticos reciclados para el pintor. Toda la gama se ha desarrollado con firme compromiso medioambiental empleando materiales reciclados, reciclables y biodegradables.',
    categories: [
      'Protección Plus',
      'Papel Kraft + Antideslizante',
      'Suelos Kraft',
      'Protección Plástico',
      'Protección Paredes',
    ],
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
