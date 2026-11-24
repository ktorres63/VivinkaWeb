import type { Locale } from '../i18n/config';

export type GalleryTone = 'deep' | 'mid' | 'soft' | 'canvas';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tone: GalleryTone;
  /** Ruta pública de la fotografía real. Mientras esté vacía se muestra un marcador. */
  src?: string;
  alt?: string;
}

/**
 * Galería.
 * Añadir las fotografías en /public/images/galeria y completar `src`
 * y `alt` en cada elemento. Usar imágenes propias y con autorización
 * de las personas retratadas.
 */
export const galleryItems: Record<Locale, GalleryItem[]> = {
  es: [
    { id: 'g1', title: 'Encuentro de la comunidad', category: 'Comunidad', tone: 'deep' },
    { id: 'g2', title: 'Expresiones culturales', category: 'Cultura', tone: 'mid' },
    { id: 'g3', title: 'Paisaje y territorio', category: 'Territorio', tone: 'canvas' },
    { id: 'g4', title: 'Talleres y aprendizaje', category: 'Educación', tone: 'soft' },
    { id: 'g5', title: 'Saberes compartidos', category: 'Cultura', tone: 'canvas' },
    { id: 'g6', title: 'Trabajo colectivo', category: 'Comunidad', tone: 'mid' },
    { id: 'g7', title: 'Voces de la comunidad', category: 'Encuentros', tone: 'soft' },
    { id: 'g8', title: 'Territorio andino', category: 'Territorio', tone: 'deep' },
  ],
  en: [
    { id: 'g1', title: 'Community gathering', category: 'Community', tone: 'deep' },
    { id: 'g2', title: 'Cultural expressions', category: 'Culture', tone: 'mid' },
    { id: 'g3', title: 'Landscape and territory', category: 'Territory', tone: 'canvas' },
    { id: 'g4', title: 'Workshops and learning', category: 'Education', tone: 'soft' },
    { id: 'g5', title: 'Shared knowledge', category: 'Culture', tone: 'canvas' },
    { id: 'g6', title: 'Collective work', category: 'Community', tone: 'mid' },
    { id: 'g7', title: 'Voices of the community', category: 'Gatherings', tone: 'soft' },
    { id: 'g8', title: 'Andean territory', category: 'Territory', tone: 'deep' },
  ],
};
