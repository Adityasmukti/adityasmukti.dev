<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Tech Stack
- **Next.js 16 (BETA)** + **React 19**: Be cautious with hooks and server components as APIs might differ from stable versions.
- **Tailwind CSS v4**: Uses `@import "tailwindcss"` in `src/app/globals.css`. Theme configuration is primarily handled via `@theme` blocks in CSS. `tailwind.config.ts` exists but may be partially bypassed by the new CSS-first configuration.
- **Animations**: `framer-motion` (v12) and `tw-animate-css`.
- **Diagrams**: `mermaid` is integrated for architectural visualizations.

## Architecture & Conventions
- **Source Root**: Main application is in `src/`.
- **Centralized Content**: Portfolio data is managed in `src/data/portfolio.ts`. **Avoid hardcoding text in components**; update this file instead.
- **Component Patterns**: 
  - `src/components/ui`: Generic UI components (Radix/CVA).
  - `src/components/typefolio`: Feature-specific components.
  - `src/sections`: Higher-level layout sections.
- **Legacy/Archive**: `Proyek-Saya/` contains external project archives. `docs/` contains design assets and CV. These are NOT part of the active build.

## Commands
- `npm run dev`: Start dev server.
- `npm run build`: Production build.
- `npm run lint`: Linting (ESLint 9+).

## Important Constraints
- **Hydration**: With React 19, pay close attention to hydration mismatches in server components.
- **Styling**: Prefer using CSS variables defined in `:root` and `.dark` (via `globals.css`) for theme-aware styling.
- **Mermaid**: Use the `MermaidDiagram` component for rendering charts from the data file.
