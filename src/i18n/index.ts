import { defaultLocale, localeNames, locales } from './config';
import { ui } from './ui';

export type { Locale } from './config';
export { defaultLocale, localeNames, locales };

/** Devuelve el diccionario de textos del idioma indicado. */
export const getTranslations = (locale: Locale) => ui[locale];

/** Elimina el prefijo de idioma de una ruta: /en/nosotros -> /nosotros */
export const stripLocale = (pathname: string): string => {
  const match = pathname.match(/^\/[a-z]{2}(?=\/|$)/);
  if (!match) return pathname || '/';
  const rest = pathname.slice(match[0].length);
  return rest || '/';
};

/** Detecta el idioma a partir de la ruta actual. */
export const getLocaleFromPath = (pathname: string): Locale => {
  const segment = pathname.split('/')[1]?.toLowerCase();
  return (locales as readonly string[]).includes(segment) ? (segment as Locale) : defaultLocale;
};

/** Construye la ruta interna de un idioma: localePath('en', '/nosotros') -> /en/nosotros/ */
export const localePath = (locale: Locale, path = '/'): string => {
  const [pathname, hash] = path.split('#');
  const clean = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const suffix = hash ? `#${hash}` : '';

  const base = clean ? `${prefix}/${clean}/` : `${prefix}/`;
  return `${base}${suffix}`;
};

/** Idioma alternativo para el selector de idioma. */
export const otherLocale = (locale: Locale): Locale =>
  locale === defaultLocale ? 'en' : defaultLocale;
