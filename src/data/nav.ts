// Navegación principal de MTM.
// La estructura respeta el orden original: el logo va centrado entre
// los dos grupos de enlaces (izquierda / derecha).

export interface NavItem {
  label: string;
  href: string;
}

export const navLeft: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Marcas', href: '/marcas' },
  { label: 'Productos', href: '/productos' },
  { label: 'Formación', href: '/formacion' },
];

export const navRight: NavItem[] = [
  { label: 'Aplicaciones', href: '/aplicaciones' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

// Lista completa (para el menú móvil).
export const navAll: NavItem[] = [...navLeft, ...navRight];
