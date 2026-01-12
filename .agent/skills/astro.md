---
name: astro
description: Expert guidance on building high-performance websites with Astro. Focuses on Islands Architecture, Content Collections, and zero-JS by default.
license: Complete terms in LICENSE.txt
---

This skill provides expertise in building high-performance, content-driven websites using the Astro framework. It emphasizes Astro's unique "Islands Architecture" to deliver the fastest possible experience.

## Core Concepts & tailored Best Practices

### 1. Islands Architecture (Partial Hydration)
- **Principle**: Ship **Zero JavaScript** to the client by default.
- **Implementation**: Render components to static HTML on the server.
- **Interactive Islands**: When interactivity is needed, use `client:*` directives to hydrate only that specific component.
  - `client:load`: For high-priority interactive elements (e.g., navbars).
  - `client:visible`: For elements below the fold (e.g., image carousels).
  - `client:idle`: For low-priority interactivity.
  - `client:media`: For elements that only need to be interactive on specific media queries.
  - `client:only`: For components that *must* run on the client (accessing browser APIs).

### 2. Project Structure
Follow the standard Astro project structure:
- `src/pages/`: File-based routing. `.astro`, `.md`, `.mdx`, `.html`, `.js`/`.ts` files here become routes.
- `src/components/`: Reusable UI components (Astro, React, Vue, Svelte, etc.).
- `src/layouts/`: Wrapper components for page layouts (headers, footers, etc.).
- `src/content/`: Reserved for Content Collections.
- `public/`: Static assets (fonts, images, robots.txt) served as-is.

### 3. Content Collections
Use Content Collections for managing content (Markdown, MDX, YAML, JSON).
- **Type Safety**: Define schemas in `src/content/config.ts` using `zod` to validate frontmatter.
- **Usage**: Query content using `getCollection()` and `getEntry()`.
- **Typing**: Use `CollectionEntry<"collection-name">` for strict typing in components.

### 4. Routing
- **Static Routing**: Created physically in `src/pages`.
- **Dynamic Routing**: Use `[brackets]` for dynamic parameters (e.g., `src/pages/blog/[slug].astro`).
  - Requires `getStaticPaths()` export in the page file for SSG.
- **404 Handling**: Create `src/pages/404.astro`.

### 5. Styles & Assets
- **Scoped Styles**: `<style>` tags in `.astro` components are scoped by default.
- **Global Styles**: 
  - Create `src/styles/global.css` for global imports (e.g., `@import "tailwindcss";`) and CSS variables.
  - MUST import this file in your main Layout component (e.g., `import '../styles/global.css'`).
- **Images**: Use Astro's `<Image />` component for automatic optimization (format, size, lazy loading).

### 6. View Transitions (Client Router)
- **Usage**: Import `{ ClientRouter }` from `astro:transitions` and add `<ClientRouter />` to the `<head>` of your layout.
- **Effect**: Enables SPA-like navigation with zero config.
- **Directives**: Use `transition:animate="fade"` or `transition:persist` on elements.

### 7. Middleware
- **File**: `src/middleware.ts`.
- **Usage**: Export `onRequest` function using `defineMiddleware`.
- **Purpose**: Intercept requests, modify response, handle auth, or inject locals.

### 8. Server-Side Rendering (SSR) & Adapters
- **Modes**:
  - `output: 'static'` (Default): Pre-rendered at build time.
  - `output: 'server'`: Rendered on every request.
  - `output: 'hybrid'`: Prerender by default, opt-out for specific dynamic pages.
- **Adapters**: Required for SSR. Install via `npx astro add vercel/netlify/node/cloudflare`.

### 9. Integrations
- Use `npx astro add [integration]` to install official integrations (Tailwind, React, Vue, Sitemap, etc.).
- This handles configuration automatically in `astro.config.mjs`.

## Code Style & Conventions
- **Frontmatter**: Use the code fence `---` at the top of `.astro` files for server-side JavaScript/TypeScript.
- **Props**: Define props interfaces for TypeScript support: `interface Props { ... }` then `const { prop } = Astro.props;`.
- **Imports**: Import components and assets at the top of the frontmatter.

## Performance Checklist
- [ ] Is JavaScript necessary here? If not, don't use a client directive.
- [ ] Are images optimized?
- [ ] Are fonts loaded efficiently?
- [ ] Is the HTML structure semantic?

Use this skill to guide the user in building fast, modern, and type-safe websites with Astro.
