export interface NavItem {
  label: string;
  href: string;
}

/**
 * Datos generales del sitio.
 * Los textos y canales de contacto son provisionales hasta ser
 * validados con la asociación Vivinka.
 */
export const site = {
  name: 'Vivinka',
  tagline: 'Asociación andina',
  description:
    'Vivinka es una asociación andina que promueve la cultura, el aprendizaje y la vida comunitaria a través de encuentros, talleres y proyectos con identidad territorial.',
  url: 'https://vivinka.example',
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Nuestra labor', href: '/labor' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Contacto', href: '/contacto' },
  ] as NavItem[],
} as const;

export interface ContactChannel {
  label: string;
  value: string;
  icon: 'mail' | 'phone' | 'map-pin' | 'share';
  note?: string;
  href?: string;
}

/**
 * Canales de contacto.
 * Reemplazar "Por confirmar" por la información oficial de la asociación.
 */
export const contactChannels: ContactChannel[] = [
  {
    label: 'Correo electrónico',
    value: 'Por confirmar',
    icon: 'mail',
    note: 'La asociación definirá el correo oficial de atención.',
  },
  {
    label: 'Teléfono',
    value: 'Por confirmar',
    icon: 'phone',
    note: 'Se habilitará un número de contacto directo.',
  },
  {
    label: 'Ubicación',
    value: 'Por confirmar',
    icon: 'map-pin',
    note: 'Localidad y dirección pendientes de validación.',
  },
  {
    label: 'Redes sociales',
    value: 'Por confirmar',
    icon: 'share',
    note: 'Perfiles oficiales pendientes de definir.',
  },
];
