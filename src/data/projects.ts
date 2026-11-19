export interface ProjectSlot {
  number: string;
  category: string;
  title: string;
  summary: string;
  status: string;
}

/**
 * Proyectos.
 * Espacios reservados para los proyectos reales de Vivinka.
 * No publicar nombres, fechas ni resultados hasta contar con la
 * información oficial de la asociación.
 */
export const projectSlots: ProjectSlot[] = [
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
];

export interface ActivitySlot {
  title: string;
  category: string;
  date: string;
}

export const activitySlots: ActivitySlot[] = [
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
];
