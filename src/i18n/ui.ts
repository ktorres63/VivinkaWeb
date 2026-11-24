import type { Locale } from './config';

/**
 * Diccionario de textos de la interfaz.
 * `es` define la forma del tipo, por lo que `en` debe mantener exactamente
 * las mismas claves para que TypeScript detecte textos faltantes.
 */
const es = {
  meta: {
    home: {
      title: 'Vivinka · Asociación andina',
      description:
        'Vivinka es una asociación andina que promueve la cultura, el aprendizaje y la vida comunitaria.',
    },
    about: {
      title: 'Nosotros · Vivinka',
      description:
        'Conoce la identidad de Vivinka, asociación andina dedicada a la cultura, el aprendizaje y la vida comunitaria.',
    },
    labor: {
      title: 'Nuestra labor · Vivinka',
      description:
        'Ámbitos de trabajo de Vivinka: cultura viva, aprendizaje y vida comunitaria en el territorio andino.',
    },
    projects: {
      title: 'Proyectos y actividades · Vivinka',
      description: 'Líneas de trabajo y proyectos en preparación de Vivinka, asociación andina.',
    },
    gallery: {
      title: 'Galería · Vivinka',
      description: 'Galería de imágenes de Vivinka: encuentros, cultura, talleres y territorio andino.',
    },
    contact: {
      title: 'Contacto · Vivinka',
      description: 'Canales de contacto de Vivinka, asociación andina. Información oficial próximamente.',
    },
    notFound: {
      title: 'Página no encontrada · Vivinka',
      description: 'La página que buscas no existe o ha cambiado de dirección.',
    },
  },

  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    labor: 'Nuestra labor',
    projects: 'Proyectos',
    gallery: 'Galería',
    contact: 'Contacto',
  },

  header: {
    menu: 'Menú',
    openMenu: 'Abrir menú de navegación',
    social: 'Redes sociales',
    language: 'Idioma',
    skipToContent: 'Saltar al contenido',
    home: 'Vivinka — Ir al inicio',
    whatsapp: 'Escríbenos por WhatsApp',
    whatsappMessage:
      'Hola, vengo desde la web de Vivinka. Me gustaría recibir más información.',
  },

  footer: {
    explore: 'Explorar',
    contact: 'Contacto',
    contactPending:
      'La información oficial de contacto se publicará próximamente.',
    goToContact: 'Ir a contacto',
    rights: 'Todos los derechos reservados.',
    tagline: 'Asociación andina · Cultura, comunidad y territorio',
    description:
      'Asociación andina dedicada a la cultura, el aprendizaje y la vida comunitaria.',
  },

  home: {
    about: {
      eyebrow: 'Nosotros',
      title: 'Una identidad que se comparte',
      description:
        'Vivinka se reconoce en lo andino: sus paisajes, sus saberes y su forma de hacer comunidad.',
      paragraph:
        'La asociación impulsa espacios de participación, aprendizaje e intercambio cultural, entendiendo que nuestras raíces son una fuente viva de encuentro y futuro.',
      highlights: [
        {
          title: 'Cultura viva',
          text: 'Encuentros que mantienen presentes nuestras expresiones y saberes.',
        },
        {
          title: 'Aprendizaje compartido',
          text: 'Espacios formativos abiertos al intercambio entre generaciones.',
        },
        {
          title: 'Vida comunitaria',
          text: 'Vínculos de reciprocidad y cuidado con el territorio que compartimos.',
        },
      ],
      link: 'Conoce más sobre Vivinka',
      quote: '«Un espacio para aprender, compartir y construir desde nuestras raíces.»',
      quoteLabel: 'Identidad Vivinka',
      badge: 'Cultura viva',
    },
    labor: {
      eyebrow: 'Nuestra labor',
      title: 'Tres ejes, una misma raíz',
      description:
        'Nuestro trabajo se organiza en ámbitos que se entrelazan y se nutren entre sí.',
      cta: 'Ver nuestra labor',
      cardLink: 'Explorar',
    },
    projects: {
      eyebrow: 'Proyectos y actividades',
      title: 'Lo que estamos preparando',
      description:
        'Estamos dando forma a las primeras iniciativas de Vivinka. Pronto compartiremos aquí sus objetivos y avances.',
      cta: 'Ver proyectos',
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Miradas de lo que somos',
      description:
        'Un espacio para las imágenes de nuestros encuentros, talleres y paisajes. Las fotografías se incorporarán cuando la asociación las comparta.',
      cta: 'Ver galería',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Quieres conocer Vivinka?',
      description:
        'Escríbenos o acércate a nuestras actividades. Estaremos compartiendo novedades y formas de participar muy pronto.',
      primaryCta: 'Ir a contacto',
      secondaryCta: 'Ver proyectos',
    },
  },

  about: {
    hero: {
      eyebrow: 'Nosotros',
      title: 'Una asociación con raíces y mirada de futuro',
      description:
        'Vivinka se define desde lo andino: su cultura, sus saberes y su manera de hacer comunidad.',
    },
    draft:
      'Estamos reuniendo la historia, la misión y la visión oficiales de Vivinka. Los textos de esta página son provisionales y se actualizarán con la información validada por la asociación.',
    who: {
      eyebrow: 'Quiénes somos',
      title: 'Identidad que se comparte',
      paragraph1:
        'Vivinka es una asociación andina. Su identidad se expresa en la cultura, el aprendizaje y la vida comunitaria, y en el vínculo con el territorio que habita.',
      paragraph2:
        'La asociación busca generar espacios donde las personas puedan encontrarse, compartir sus saberes y participar de iniciativas construidas desde la comunidad.',
      historyNote:
        'La historia y el recorrido de la asociación se incorporarán en este espacio cuando la información sea confirmada.',
    },
    name: {
      eyebrow: 'Nuestro nombre',
      note: 'El significado y el origen del nombre serán documentados junto a la asociación.',
      natureLabel: 'Naturaleza',
      natureValue: 'Asociación andina',
      areasLabel: 'Ámbitos',
      areasValue: 'Cultura · Educación · Comunidad',
    },
    mission: {
      eyebrow: 'Misión y visión',
      title: 'Hacia dónde caminamos',
      description:
        'Dos brújulas para orientar el trabajo de la asociación. Ambos textos están pendientes de validación.',
      missionTitle: 'Misión',
      missionText:
        'Promover el encuentro y la participación de la comunidad en torno a la cultura andina, el aprendizaje y el cuidado del territorio.',
      visionTitle: 'Visión',
      visionText:
        'Una comunidad que reconoce y comparte sus raíces, y que construye colectivamente un futuro con identidad.',
      provisional: 'Provisional',
    },
    values: {
      eyebrow: 'Valores',
      title: 'Lo que nos sostiene',
      description: 'Principios que orientan la manera de encontrarnos y de trabajar juntos.',
      items: [
        {
          title: 'Identidad',
          text: 'Valoramos la cultura andina como fuente de sentido y pertenencia.',
        },
        {
          title: 'Comunidad',
          text: 'Creemos en el encuentro y la participación como base de lo que hacemos.',
        },
        {
          title: 'Reciprocidad',
          text: 'Entendemos el apoyo mutuo como una forma de sostenernos entre todos.',
        },
        {
          title: 'Respeto',
          text: 'Cuidamos a las personas, los saberes y el territorio que compartimos.',
        },
      ],
    },
  },

  labor: {
    hero: {
      eyebrow: 'Nuestra labor',
      title: 'Cultura, aprendizaje y comunidad en movimiento',
      description:
        'Tres ejes de trabajo que se entrelazan y se nutren entre sí, siempre desde la participación de la comunidad.',
    },
    draft:
      'Las líneas de trabajo están definidas de manera general. Las actividades, fechas y alcances concretos se publicarán cuando la asociación los confirme.',
    whatWeDo: 'Qué hacemos en este eje',
    upcoming:
      'Las actividades concretas se anunciarán oportunamente en esta página y en nuestros canales oficiales.',
    participate: {
      eyebrow: 'Participa',
      title: 'Cómo acercarte a Vivinka',
      description:
        'No necesitas experiencia previa: solo las ganas de encontrarte y compartir.',
      steps: [
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
      cta: 'Quiero participar',
    },
  },

  projects: {
    hero: {
      eyebrow: 'Proyectos y actividades',
      title: 'Iniciativas que nacen de la comunidad',
      description:
        'Estamos construyendo las primeras propuestas de Vivinka. Aquí encontrarás las líneas de trabajo y los espacios reservados para los proyectos que vendrán.',
    },
    draft:
      'Esta sección está preparada para recibir los proyectos reales de la asociación. Los nombres, objetivos, fechas y resultados se publicarán cuando estén confirmados.',
    lines: {
      eyebrow: 'Líneas de trabajo',
      title: 'Desde dónde parten nuestros proyectos',
      description: 'Cada proyecto de Vivinka se vincula a uno o más de estos ámbitos.',
      link: 'Ver línea de trabajo',
    },
    slots: {
      eyebrow: 'Proyectos',
      title: 'Espacios en preparación',
      description:
        'Tres lugares reservados para las iniciativas que la asociación definirá próximamente.',
    },
    activities: {
      eyebrow: 'Actividades',
      title: 'Próximos encuentros',
      description:
        'Cuando el calendario esté definido, las actividades se anunciarán en este espacio.',
      cta: 'Quiero recibir novedades',
    },
  },

  gallery: {
    hero: {
      eyebrow: 'Galería',
      title: 'La memoria también se mira',
      description:
        'Un espacio para las fotografías de nuestros encuentros, talleres, paisajes y expresiones culturales.',
    },
    draft:
      'La galería se encuentra en construcción. Las fotografías se incorporarán a medida que la asociación las comparta y autorice su publicación.',
    shareTitle: '¿Tienes fotografías de Vivinka?',
    shareText:
      'Si formas parte de la comunidad y quieres compartir imágenes de nuestros encuentros, escríbenos. Publicaremos solo las fotografías autorizadas.',
  },

  contact: {
    hero: {
      eyebrow: 'Contacto',
      title: 'Conversemos',
      description:
        'Estamos definiendo nuestros canales oficiales de atención. Mientras tanto, estas son las vías que habilitaremos próximamente.',
    },
    draft:
      'La información de contacto aún no ha sido confirmada. Los datos oficiales se publicarán en cuanto la asociación los defina.',
    meanwhile: {
      eyebrow: 'Mientras tanto',
      title: 'Puedes conocer más sobre nuestro trabajo',
      description:
        'Explora las líneas de trabajo de la asociación y los proyectos que estamos preparando.',
      laborCta: 'Nuestra labor',
      projectsCta: 'Ver proyectos',
    },
    closing: {
      eyebrow: 'Comunidad',
      title: 'La mejor forma de conocer Vivinka es encontrarnos.',
      description:
        'Cuando el calendario de actividades esté disponible, lo compartiremos aquí y en nuestros canales oficiales.',
    },
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'Esta página no está en nuestro camino',
    description:
      'Puede que el enlace haya cambiado o que la página todavía no exista. Volvamos al inicio.',
    home: 'Ir al inicio',
  },

  common: {
    draftTitle: 'Contenido en preparación.',
    photoPending: 'Fotografía por incorporar',
    infoPending: 'Información por confirmar',
    statusPreparing: 'En preparación',
    slideTo: 'Ir a la diapositiva',
    pagerLabel: 'Seleccionar diapositiva',
  },
} as const;

type UI = typeof es;

const en: UI = {
  meta: {
    home: {
      title: 'Vivinka · Andean association',
      description:
        'Vivinka is an Andean association promoting culture, learning and community life.',
    },
    about: {
      title: 'About us · Vivinka',
      description:
        'Discover the identity of Vivinka, an Andean association dedicated to culture, learning and community life.',
    },
    labor: {
      title: 'Our work · Vivinka',
      description:
        "Vivinka's areas of work: living culture, learning and community life in the Andean territory.",
    },
    projects: {
      title: 'Projects and activities · Vivinka',
      description: 'Work lines and projects in preparation at Vivinka, an Andean association.',
    },
    gallery: {
      title: 'Gallery · Vivinka',
      description: 'Photo gallery of Vivinka: gatherings, culture, workshops and Andean landscapes.',
    },
    contact: {
      title: 'Contact · Vivinka',
      description: 'Contact channels for Vivinka, an Andean association. Official details coming soon.',
    },
    notFound: {
      title: 'Page not found · Vivinka',
      description: 'The page you are looking for does not exist or has moved.',
    },
  },

  nav: {
    home: 'Home',
    about: 'About us',
    labor: 'Our work',
    projects: 'Projects',
    gallery: 'Gallery',
    contact: 'Contact',
  },

  header: {
    menu: 'Menu',
    openMenu: 'Open navigation menu',
    social: 'Social media',
    language: 'Language',
    skipToContent: 'Skip to content',
    home: 'Vivinka — Go to homepage',
    whatsapp: 'Message us on WhatsApp',
    whatsappMessage:
      "Hi, I'm visiting the Vivinka website. I'd like to receive more information.",
  },

  footer: {
    explore: 'Explore',
    contact: 'Contact',
    contactPending: 'Official contact information will be published soon.',
    goToContact: 'Go to contact',
    rights: 'All rights reserved.',
    tagline: 'Andean association · Culture, community and territory',
    description:
      'Andean association dedicated to culture, learning and community life.',
  },

  home: {
    about: {
      eyebrow: 'About us',
      title: 'An identity that is shared',
      description:
        'Vivinka recognises itself in the Andean world: its landscapes, its knowledge and its way of building community.',
      paragraph:
        'The association fosters spaces for participation, learning and cultural exchange, understanding that our roots are a living source of encounter and future.',
      highlights: [
        {
          title: 'Living culture',
          text: 'Gatherings that keep our expressions and knowledge present.',
        },
        {
          title: 'Shared learning',
          text: 'Training spaces open to exchange between generations.',
        },
        {
          title: 'Community life',
          text: 'Bonds of reciprocity and care for the territory we share.',
        },
      ],
      link: 'Learn more about Vivinka',
      quote: '“A space to learn, share and build from our roots.”',
      quoteLabel: 'Vivinka identity',
      badge: 'Living culture',
    },
    labor: {
      eyebrow: 'Our work',
      title: 'Three axes, one same root',
      description:
        'Our work is organised around areas that intertwine and feed each other.',
      cta: 'See our work',
      cardLink: 'Explore',
    },
    projects: {
      eyebrow: 'Projects and activities',
      title: 'What we are preparing',
      description:
        'We are shaping Vivinka’s first initiatives. Soon we will share their goals and progress here.',
      cta: 'See projects',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Glimpses of who we are',
      description:
        'A space for the images of our gatherings, workshops and landscapes. Photos will be added once the association shares them.',
      cta: 'See gallery',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Would you like to meet Vivinka?',
      description:
        'Write to us or come to our activities. We will soon share news and ways to take part.',
      primaryCta: 'Go to contact',
      secondaryCta: 'See projects',
    },
  },

  about: {
    hero: {
      eyebrow: 'About us',
      title: 'An association with roots and a forward-looking vision',
      description:
        'Vivinka defines itself from the Andean world: its culture, its knowledge and its way of building community.',
    },
    draft:
      'We are gathering the official history, mission and vision of Vivinka. The texts on this page are provisional and will be updated with the information validated by the association.',
    who: {
      eyebrow: 'Who we are',
      title: 'An identity that is shared',
      paragraph1:
        'Vivinka is an Andean association. Its identity shows through culture, learning and community life, and through its bond with the territory it inhabits.',
      paragraph2:
        'The association seeks to create spaces where people can meet, share their knowledge and take part in initiatives built from the community.',
      historyNote:
        'The history and journey of the association will be added to this space once the information is confirmed.',
    },
    name: {
      eyebrow: 'Our name',
      note: 'The meaning and origin of the name will be documented with the association.',
      natureLabel: 'Nature',
      natureValue: 'Andean association',
      areasLabel: 'Areas',
      areasValue: 'Culture · Education · Community',
    },
    mission: {
      eyebrow: 'Mission and vision',
      title: 'Where we are heading',
      description:
        'Two compasses guiding the work of the association. Both texts are pending validation.',
      missionTitle: 'Mission',
      missionText:
        'Promote encounter and community participation around Andean culture, learning and care for the territory.',
      visionTitle: 'Vision',
      visionText:
        'A community that recognises and shares its roots, building collectively a future with identity.',
      provisional: 'Provisional',
    },
    values: {
      eyebrow: 'Values',
      title: 'What holds us together',
      description: 'Principles that shape how we meet and work together.',
      items: [
        {
          title: 'Identity',
          text: 'We value Andean culture as a source of meaning and belonging.',
        },
        {
          title: 'Community',
          text: 'We believe in encounter and participation as the base of everything we do.',
        },
        {
          title: 'Reciprocity',
          text: 'We see mutual support as a way of holding each other up.',
        },
        {
          title: 'Respect',
          text: 'We care for people, knowledge and the territory we share.',
        },
      ],
    },
  },

  labor: {
    hero: {
      eyebrow: 'Our work',
      title: 'Culture, learning and community in motion',
      description:
        'Three areas of work that intertwine and feed each other, always driven by community participation.',
    },
    draft:
      'The work lines are defined in general terms. Activities, dates and specific scopes will be published once the association confirms them.',
    whatWeDo: 'What we do in this area',
    upcoming:
      'Specific activities will be announced on this page and on our official channels in due course.',
    participate: {
      eyebrow: 'Take part',
      title: 'How to get closer to Vivinka',
      description:
        'No previous experience needed: just the wish to meet and share.',
      steps: [
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
      cta: 'I want to take part',
    },
  },

  projects: {
    hero: {
      eyebrow: 'Projects and activities',
      title: 'Initiatives born from the community',
      description:
        'We are building Vivinka’s first proposals. Here you will find the work lines and the spaces reserved for the projects to come.',
    },
    draft:
      'This section is ready to receive the association’s real projects. Names, goals, dates and results will be published once they are confirmed.',
    lines: {
      eyebrow: 'Work lines',
      title: 'Where our projects start',
      description: 'Every Vivinka project is linked to one or more of these areas.',
      link: 'See work line',
    },
    slots: {
      eyebrow: 'Projects',
      title: 'Spaces in preparation',
      description:
        'Three spaces reserved for the initiatives the association will define soon.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Upcoming gatherings',
      description:
        'Once the calendar is set, activities will be announced in this space.',
      cta: 'I want to receive news',
    },
  },

  gallery: {
    hero: {
      eyebrow: 'Gallery',
      title: 'Memory can also be seen',
      description:
        'A space for photos of our gatherings, workshops, landscapes and cultural expressions.',
    },
    draft:
      'The gallery is under construction. Photos will be added as the association shares them and authorises their publication.',
    shareTitle: 'Do you have photos of Vivinka?',
    shareText:
      'If you are part of the community and want to share images from our gatherings, write to us. We will only publish authorised photos.',
  },

  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      description:
        'We are defining our official contact channels. In the meantime, these are the routes we will open shortly.',
    },
    draft:
      'The contact information has not been confirmed yet. Official details will be published as soon as the association defines them.',
    meanwhile: {
      eyebrow: 'In the meantime',
      title: 'You can learn more about our work',
      description:
        'Explore the association’s work lines and the projects we are preparing.',
      laborCta: 'Our work',
      projectsCta: 'See projects',
    },
    closing: {
      eyebrow: 'Community',
      title: 'The best way to meet Vivinka is to meet us.',
      description:
        'When the activity calendar is available, we will share it here and on our official channels.',
    },
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'This page is not on our path',
    description:
      'The link may have changed or the page may not exist yet. Let’s go back to the homepage.',
    home: 'Go to homepage',
  },

  common: {
    draftTitle: 'Content in preparation.',
    photoPending: 'Photo to be added',
    infoPending: 'Information to be confirmed',
    statusPreparing: 'In preparation',
    slideTo: 'Go to slide',
    pagerLabel: 'Select slide',
  },
};

export const ui: Record<Locale, UI> = { es, en };
