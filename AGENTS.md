# AGENTS.md — VIVINKA

## 1. Project Overview

Develop a modern, responsive institutional website for **Vivinka**, an Andean association.

The website should communicate its identity, mission, activities, projects, and cultural roots through a clean and visually appealing design.

Combine modern web design with subtle references to Andean culture.

## 2. Technology Stack

- **Astro:** Main framework.
- **TypeScript:** Application logic and type safety.
- **Tailwind CSS:** Styling and responsive layouts.
- **Lucide Icons:** Interface icons.

Rules:
- Use Astro components (`.astro`) by default.
- Avoid React, Vue, or other frameworks.
- Minimize client-side JavaScript.
- Avoid unnecessary dependencies.
- Follow Astro conventions.

## 3. Project Structure

Maintain a modular and organized architecture:

```text
src/
├── assets/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── layouts/
├── pages/
└── styles/
public/
└── images/
```

Create reusable components and separate content from presentation when appropriate.

## 4. Brand Identity

Use the official Vivinka color palette:

```css
:root {
  --color-primary: #0A6808;
  --color-primary-dark: #064705;
  --color-accent: #F20505;
  --color-accent-dark: #C40404;
  --color-bg-main: #FFFFFF;
  --color-bg-alt: #F4F6F5;
  --color-text-main: #1A221B;
  --color-text-muted: #5C665E;
}
```

### Design Guidelines

- Green is the dominant brand color.
- Red is a secondary accent; use it sparingly.
- Use white and light gray for backgrounds.
- Incorporate subtle Andean geometric patterns.
- Prioritize authentic photography.
- Use elegant typography and clear visual hierarchy.
- Maintain generous whitespace.
- Avoid generic templates and excessive visual effects.

## 5. Development Standards

- Use semantic HTML and accessible components.
- Follow a mobile-first responsive approach.
- Use Tailwind for styling.
- Use Lucide for icons.
- Avoid `any` in TypeScript.
- Keep components reusable and maintainable.
- Optimize images and loading performance.
- Implement basic SEO metadata.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary animations and dependencies.

## 6. Development Server

When starting the development server, use background mode:

```bash
astro dev --background
```

Manage the background server using:

```bash
astro dev status
astro dev logs
astro dev stop
```

Do not start multiple development servers unnecessarily.

## 7. Documentation

Official Astro documentation:

https://docs.astro.build

Consult the relevant documentation before implementing related features:

- **Routing, dynamic routes, and middleware:** https://docs.astro.build/en/guides/routing/
- **Astro components:** https://docs.astro.build/en/basics/astro-components/
- **Framework components:** https://docs.astro.build/en/guides/framework-components/
- **Content collections:** https://docs.astro.build/en/guides/content-collections/
- **Styling and Tailwind:** https://docs.astro.build/en/guides/styling/
- **Internationalization:** https://docs.astro.build/en/guides/internationalization/

Prefer official documentation over outdated tutorials or assumptions.

## 8. Content Guidelines

The website language is Spanish.

Use professional, warm, clear, and human communication.

Never invent:
- Organizational history.
- Mission or vision.
- Projects or achievements.
- Partnerships or statistics.
- Contact information.

Use placeholders when information is missing.

## 9. Main Website Sections

Recommended sections:

1. Inicio (Hero).
2. Nosotros.
3. Nuestra labor.
4. Proyectos y actividades.
5. Galería.
6. Contacto.

Adapt the structure according to the association's actual needs.

## 10. Code Quality

- Inspect existing code before making changes.
- Reuse components whenever possible.
- Avoid duplicated code.
- Do not overwrite existing functionality unnecessarily.
- Test responsiveness and accessibility.
- Verify the production build before considering a task complete.

**Main objective:** Create a modern, fast, accessible, and visually distinctive institutional website that represents Vivinka's identity and Andean cultural values.