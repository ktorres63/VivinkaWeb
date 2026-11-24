import type { Locale } from '../i18n/config';

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

export interface ParticipationStep {
  title: string;
  description: string;
}

/**
 * Líneas de trabajo.
 * Contenido provisional: describen ámbitos de acción, no logros
 * ni proyectos concretos. Validar con la asociación antes de publicar.
 */
export const laborAreas: Record<Locale, LaborArea[]> = {
  es: [
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
  ],
  en: [
    {
      id: 'cultura',
      eyebrow: 'Culture',
      title: 'Living culture and Andean memory',
      summary:
        'A space to meet around the expressions that identify us: music, dance, textiles, storytelling and the knowledge passed from generation to generation.',
      points: [
        'Cultural gatherings open to the community',
        'Workshops transmitting knowledge',
        'Promoting Andean artistic expressions',
      ],
      icon: 'music',
    },
    {
      id: 'educacion',
      eyebrow: 'Education',
      title: 'Learning and training',
      summary:
        'We believe in shared knowledge. We foster learning spaces that connect the community’s experience with new tools and opportunities.',
      points: [
        'Workshops and training spaces',
        'Support for community processes',
        'Exchange of experiences between generations',
      ],
      icon: 'graduation-cap',
    },
    {
      id: 'comunidad',
      eyebrow: 'Community',
      title: 'Community life and territory',
      summary:
        'The association is held together by meeting. We promote participation, care for the territory and the bonds of reciprocity that make community life possible.',
      points: [
        'Gatherings and participatory assemblies',
        'Actions to care for the environment',
        'Coordination with local organisations',
      ],
      icon: 'users',
    },
  ],
};

export const participationSteps: Record<Locale, ParticipationStep[]> = {
  es: [
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
  ],
  en: [
    {
      title: 'Get to know us',
      description:
        'Come to our activities and talk with the people who make up Vivinka.',
    },
    {
      title: 'Take part',
      description:
        'Join the gatherings, workshops and working spaces open to the community.',
    },
    {
      title: 'Collaborate',
      description:
        'Share your time, your knowledge or your support to sustain the association’s initiatives.',
    },
  ],
};
