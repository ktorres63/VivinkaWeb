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
│   ├── sections/    # Secciones reutilizables (hero, CTA, etc.)
│   └── ui/          # Componentes pequeños (botones, tarjetas, iconos)
├── data/            # Contenido editable (navegación, labor, proyectos, galería)
├── layouts/         # Layout base con metadatos y SEO
├── pages/           # Inicio, nosotros, labor, proyectos, galería, contacto, 404
└── styles/          # Tokens de marca y estilos globales
public/
└── images/          # Ilustraciones y fotografías
```

## Contenido pendiente de validación

Siguiendo las pautas del proyecto, no se inventó información institucional. Antes de publicar:

- **Historia, misión, visión y valores:** completar y validar el contenido de `src/pages/nosotros.astro`.
- **Contacto:** reemplazar los valores provisionales de `src/data/site.ts`.
- **Proyectos y actividades:** completar `src/data/projects.ts` con la información oficial.
- **Galería:** añadir fotografías reales en `public/images/galeria/` y completar `src`
  y `alt` en `src/data/gallery.ts`. Publicar solo imágenes autorizadas.
- **Dominio:** actualizar `site` en `astro.config.mjs` y `src/data/site.ts`.
- **Redes sociales:** incorporar los perfiles oficiales cuando estén definidos.

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
