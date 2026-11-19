export interface HeroSlide {
  image: string;
  alt: string;
  kicker: string;
  titleLead: string;
  title: string;
  cta: string;
  href: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/slide-1.jpg',
    alt: 'Cordillera de los Andes y ciudadela inca entre nubes',
    kicker: 'Asociación andina · Cultura y memoria',
    titleLead: 'Cultivamos raíces,',
    title: 'Tejemos comunidad',
    cta: 'Conócenos',
    href: '/nosotros',
  },
  {
    image: '/images/hero/slide-2.jpg',
    alt: 'Valle andino verde rodeado de montañas y campos comunitarios',
    kicker: 'Aprendizaje y saberes compartidos',
    titleLead: 'Encuentro e identidad',
    title: 'Nuestra labor',
    cta: 'Explorar',
    href: '/labor',
  },
  {
    image: '/images/hero/slide-3.jpg',
    alt: 'Montañas andinas de colores bajo cielo nublado',
    kicker: 'Territorio, reciprocidad y futuro',
    titleLead: 'Iniciativas vivas',
    title: 'Proyectos',
    cta: 'Ver más',
    href: '/proyectos',
  },
];
