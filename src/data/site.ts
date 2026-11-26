import type { Locale } from '../i18n/config';

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  url: string;
}

/** Datos generales del sitio, traducidos por idioma. */
export const site: Record<Locale, SiteInfo> = {
  es: {
    name: 'Vivinka',
    tagline: 'Asociación andina',
    description:
      'Vivinka es una asociación andina que promueve la cultura, el aprendizaje y la vida comunitaria a través de encuentros, talleres y proyectos con identidad territorial.',
    url: 'https://vivinka.example',
  },
  en: {
    name: 'Vivinka',
    tagline: 'Andean association',
    description:
      'Vivinka is an Andean association promoting culture, learning and community life through gatherings, workshops and projects with a territorial identity.',
    url: 'https://vivinka.example',
  },
};

export interface ContactChannel {
  label: string;
  value: string;
  icon: 'mail' | 'phone' | 'map-pin' | 'share';
  note?: string;
  href?: string;
}

export type SocialIcon = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'mail';

export interface SocialLink {
  id: string;
  label: string;
  icon: SocialIcon;
  /** TODO: reemplazar por la URL oficial cuando la asociación la confirme. */
  href: string;
}

/**
 * Canales de contacto.
 * Reemplazar "Por confirmar" por la información oficial de la asociación.
 */
export const contactChannels: Record<Locale, ContactChannel[]> = {
  es: [
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
  ],
  en: [
    {
      label: 'Email',
      value: 'To be confirmed',
      icon: 'mail',
      note: 'The association will define the official contact address.',
    },
    {
      label: 'Phone',
      value: 'To be confirmed',
      icon: 'phone',
      note: 'A direct contact number will be enabled.',
    },
    {
      label: 'Location',
      value: 'To be confirmed',
      icon: 'map-pin',
      note: 'Town and address pending validation.',
    },
    {
      label: 'Social media',
      value: 'To be confirmed',
      icon: 'share',
      note: 'Official profiles pending definition.',
    },
  ],
};

/**
 * Redes sociales mostradas en el encabezado.
 * TODO: sustituir `href` por los perfiles oficiales de Vivinka.
 */
export const socialLinks: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/people/Vivinka/61596677252084/?rdid=N4MQUKdxcw6HaGLd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CThyHEqY3%2F' },
  { id: 'tiktok', label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@vivinkaturismo?_r=1&_t=ZS-9Bg4UEnqg1U' },
  { id: 'mail', label: 'Email', icon: 'mail', href: '#' },
];

/**
 * Botón flotante de WhatsApp.
 * Número oficial de Vivinka en formato internacional (Perú, +51).
 */
export const whatsapp = {
  href: 'https://wa.me/51970226635',
  display: '+51 970 226 635',
};

