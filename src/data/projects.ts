import type { Locale } from '../i18n/config';

export interface ProjectSlot {
  number: string;
  category: string;
  title: string;
  summary: string;
  status: string;
}

export interface ActivitySlot {
  title: string;
  category: string;
  date: string;
}

/**
 * Proyectos.
 * Espacios reservados para los proyectos reales de Vivinka.
 * No publicar nombres, fechas ni resultados hasta contar con la
 * información oficial de la asociación.
 */
export const projectSlots: Record<Locale, ProjectSlot[]> = {
  es: [
    {
      number: '01',
      category: 'Cultura',
      title: 'Proyecto por definir',
      summary:
        'Espacio reservado para el primer proyecto cultural de la asociación. Aquí se describirán sus objetivos, alcance y públicos.',
      status: 'En preparación',
    },
    {
      number: '02',
      category: 'Educación',
      title: 'Proyecto por definir',
      summary:
        'Espacio reservado para una iniciativa formativa. Se completará con la información validada por la asociación.',
      status: 'En preparación',
    },
    {
      number: '03',
      category: 'Comunidad',
      title: 'Proyecto por definir',
      summary:
        'Espacio reservado para una iniciativa comunitaria o territorial. Contenido pendiente de definición.',
      status: 'En preparación',
    },
  ],
  en: [
    {
      number: '01',
      category: 'Culture',
      title: 'Project to be defined',
      summary:
        'Space reserved for the association’s first cultural project. Its goals, scope and audiences will be described here.',
      status: 'In preparation',
    },
    {
      number: '02',
      category: 'Education',
      title: 'Project to be defined',
      summary:
        'Space reserved for a training initiative. It will be completed with the information validated by the association.',
      status: 'In preparation',
    },
    {
      number: '03',
      category: 'Community',
      title: 'Project to be defined',
      summary:
        'Space reserved for a community or territorial initiative. Content pending definition.',
      status: 'In preparation',
    },
  ],
};

export const activitySlots: Record<Locale, ActivitySlot[]> = {
  es: [
    {
      title: 'Actividad por anunciar',
      category: 'Encuentro cultural',
      date: 'Fecha por confirmar',
    },
    {
      title: 'Actividad por anunciar',
      category: 'Taller',
      date: 'Fecha por confirmar',
    },
    {
      title: 'Actividad por anunciar',
      category: 'Espacio comunitario',
      date: 'Fecha por confirmar',
    },
  ],
  en: [
    {
      title: 'Activity to be announced',
      category: 'Cultural gathering',
      date: 'Date to be confirmed',
    },
    {
      title: 'Activity to be announced',
      category: 'Workshop',
      date: 'Date to be confirmed',
    },
    {
      title: 'Activity to be announced',
      category: 'Community space',
      date: 'Date to be confirmed',
    },
  ],
};
