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
export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Encuentro de la comunidad', category: 'Comunidad', tone: 'deep' },
  { id: 'g2', title: 'Expresiones culturales', category: 'Cultura', tone: 'mid' },
  { id: 'g3', title: 'Paisaje y territorio', category: 'Territorio', tone: 'canvas' },
  { id: 'g4', title: 'Talleres y aprendizaje', category: 'Educación', tone: 'soft' },
  { id: 'g5', title: 'Saberes compartidos', category: 'Cultura', tone: 'canvas' },
  { id: 'g6', title: 'Trabajo colectivo', category: 'Comunidad', tone: 'mid' },
  { id: 'g7', title: 'Voces de la comunidad', category: 'Encuentros', tone: 'soft' },
  { id: 'g8', title: 'Territorio andino', category: 'Territorio', tone: 'deep' },
];
