export type IconName =
  | 'music'
  | 'graduation-cap'
  | 'users'
  | 'mountain'
  | 'sprout'
  | 'heart-handshake';

export interface LaborArea {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
  icon: IconName;
}

/**
 * Líneas de trabajo.
 * Contenido provisional: describen ámbitos de acción, no logros
 * ni proyectos concretos. Validar con la asociación antes de publicar.
 */
export const laborAreas: LaborArea[] = [
  {
    id: 'cultura',
    eyebrow: 'Cultura',
    title: 'Cultura viva y memoria andina',
    summary:
      'Un espacio para encontrarnos alrededor de las expresiones que nos identifican: la música, la danza, los textiles, la palabra y los saberes que se transmiten de generación en generación.',
    points: [
      'Encuentros culturales abiertos a la comunidad',
      'Talleres de transmisión de saberes',
      'Difusión de expresiones artísticas andinas',
    ],
    icon: 'music',
  },
  {
    id: 'educacion',
    eyebrow: 'Educación',
    title: 'Aprendizaje y formación',
    summary:
      'Creemos en el conocimiento compartido. Impulsamos espacios de aprendizaje que conectan la experiencia de la comunidad con nuevas herramientas y oportunidades.',
    points: [
      'Talleres y espacios formativos',
      'Acompañamiento a procesos comunitarios',
      'Intercambio de experiencias entre generaciones',
    ],
    icon: 'graduation-cap',
  },
  {
    id: 'comunidad',
    eyebrow: 'Comunidad',
    title: 'Vida comunitaria y territorio',
    summary:
      'La asociación se sostiene en el encuentro. Promovemos la participación, el cuidado del territorio y los vínculos de reciprocidad que hacen posible la vida en comunidad.',
    points: [
      'Encuentros y asambleas participativas',
      'Acciones de cuidado del entorno',
      'Articulación con organizaciones locales',
    ],
    icon: 'users',
  },
];

export const participationSteps = [
  {
    title: 'Conocer',
    description:
      'Acércate a nuestras actividades y conversa con las personas que forman parte de Vivinka.',
  },
  {
    title: 'Participar',
    description:
      'Súmate a los encuentros, talleres y espacios de trabajo que se abren a la comunidad.',
  },
  {
    title: 'Colaborar',
    description:
      'Comparte tu tiempo, tus saberes o tu apoyo para sostener las iniciativas de la asociación.',
  },
];
