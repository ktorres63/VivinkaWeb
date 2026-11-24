# Vivinka — Sitio web institucional

Sitio estático de **Vivinka**, asociación andina dedicada a la cultura, el aprendizaje y la vida
comunitaria. Construido con Astro, TypeScript y Tailwind CSS, con iconos de Lucide.

## Comandos

| Comando        | Acción                                            |
| :------------- | :------------------------------------------------ |
| `pnpm install` | Instala las dependencias                          |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321`        |
| `pnpm build`   | Genera el sitio de producción en `./dist/`        |
| `pnpm preview` | Previsualiza la compilación de producción         |

El servidor de desarrollo se puede ejecutar en segundo plano con `astro dev --background` y
gestionar con `astro dev status`, `astro dev logs` y `astro dev stop`.

## Estructura

```text
src/
├── components/
│   ├── layout/      # Encabezado y pie de página
│   ├── pages/       # Cuerpo reutilizable de cada página (usado por es/ y en/)
│   ├── sections/    # Secciones reutilizables (hero, CTA, etc.)
│   └── ui/          # Componentes pequeños (botones, tarjetas, iconos)
├── data/            # Contenido editable por idioma (navegación, labor, proyectos, galería)
├── i18n/            # Diccionarios de textos y utilidades de idioma
├── layouts/         # Layout base con metadatos y SEO
├── pages/           # Rutas: raíz (es) y /en (en)
└── styles/          # Tokens de marca y estilos globales
public/
└── images/          # Ilustraciones y fotografías
```

## Internacionalización

Se usa el enrutado i18n nativo de Astro (`src/i18n/`):

| Español (por defecto) | Inglés               |
| :--------------------- | :------------------- |
| `/`                    | `/en/`               |
| `/nosotros/`           | `/en/nosotros/`      |
| `/labor/`              | `/en/labor/`         |
| `/proyectos/`          | `/en/proyectos/`     |
| `/galeria/`            | `/en/galeria/`       |
| `/contacto/`           | `/en/contacto/`      |

- Los textos de interfaz viven en `src/i18n/ui.ts` (el diccionario `es` define el tipo, por lo que
  TypeScript avisa si falta una traducción en `en`).
- El contenido estructurado (hero, líneas de trabajo, proyectos, galería, contacto) se guarda por
  idioma en `src/data/`.
- En los componentes se usa `Astro.currentLocale` y `localePath(locale, path)` para construir
  enlaces localizados.
- El `Layout` genera `hreflang` (`es`, `en`, `x-default`) y el atributo `lang` correcto.

Para añadir un idioma: crear su carpeta en `src/pages/`, añadir el locale en
`astro.config.mjs` y en `src/i18n/config.ts`, y duplicar los diccionarios de `src/i18n/ui.ts` y
`src/data/`.

## Encabezado

- Variante `overlay` (página de inicio): fijo, transparente sobre el hero, con texto blanco y la
  versión clara del logotipo (`public/images/vivinkaLogoLight.png`, fondo transparente) para que
  resalte sobre la fotografía.
- Variante `solid` (páginas interiores): fijo, con fondo blanco translúcido, borde inferior y el
  logotipo original en verde (`public/images/vivinkaLogo.png`).
- Al desplazarse, el encabezado transparente pasa a sólido mediante la clase `is-scrolled` y el
  logotipo cambia automáticamente al original en verde (`public/images/vivinkaLogo.png`).
- Incluye redes sociales (`src/components/ui/SocialLinks.astro`) y selector de idioma
  (`src/components/ui/LanguageSwitcher.astro`).
- Botón flotante de WhatsApp (`src/components/ui/WhatsAppButton.astro`) en la esquina inferior
  derecha, presente en todas las páginas.

## Contenido pendiente de validación

Siguiendo las pautas del proyecto, no se inventó información institucional. Antes de publicar:

- **Historia, misión, visión y valores:** completar y validar el contenido de `src/pages/nosotros.astro`.
- **Contacto:** reemplazar los valores provisionales de `src/data/site.ts`.
- **Proyectos y actividades:** completar `src/data/projects.ts` con la información oficial.
- **Galería:** añadir fotografías reales en `public/images/galeria/` y completar `src`
  y `alt` en `src/data/gallery.ts`. Publicar solo imágenes autorizadas.
- **Dominio:** actualizar `site` en `astro.config.mjs` y `src/data/site.ts`.
- **Redes sociales:** sustituir los `href` de `src/data/site.ts` (`socialLinks`) por los perfiles
  oficiales de Vivinka.
- **Traducciones:** el inglés ya está completo; conviene revisarlo con un hablante nativo antes de
  publicar.

## Identidad visual

La paleta oficial vive en `src/styles/global.css` como tokens de Tailwind:

| Token           | Valor     |
| :-------------- | :-------- |
| `primary`       | `#0A6808` |
| `primary-dark`  | `#064705` |
| `accent`        | `#F20505` |
| `surface`       | `#F4F6F5` |
| `ink`           | `#1A221B` |
| `muted`         | `#5C665E` |

La tipografía combina **Fraunces** (títulos) e **Inter** (texto), cargadas desde Google Fonts con
`display=swap`. Los motivos andinos se construyen con el patrón SVG `andean-pattern.svg` y la
chakana del logotipo.

## Accesibilidad y rendimiento

- HTML semántico, enlace para saltar al contenido y estados de foco visibles.
- Menú móvil sin JavaScript (elemento `details`).
- Respeto por `prefers-reduced-motion`.
- Imágenes con texto alternativo y carga diferida cuando corresponde.
- Metadatos SEO, Open Graph y datos estructurados básicos de organización.
