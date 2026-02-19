# Kayus Website - Context & Guidelines

This project is a high-performance restaurant menu application built with Next.js, leveraging Contentful as a headless CMS and i18next for multi-language support.

## Project Overview

- **Purpose:** Provide a digital menu for Kayus (Lounge and Hotel).
- **Architecture:** Next.js App Router with dynamic routing.
- **Data Source:** Contentful CMS.
- **Styling:** Tailwind CSS v4 and SCSS.
- **Internationalization:** i18next with server-side and client-side support (EN, RO).

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **CMS:** Contentful
- **Styling:** Tailwind CSS v4, SCSS, Sass
- **i18n:** i18next, react-i18next
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Optimizations:** React Compiler enabled, Bunny CDN for images.

## Development Commands

- `npm run dev`: Starts the development server at `http://localhost:3000`.
- `npm run build`: Generates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to identify and report on patterns found in ECMAScript/JavaScript code.

## Key Directories & Files

- `src/app/`: Contains the application's pages and layouts (App Router).
  - `[type]/`: Dynamic route for restaurant types (e.g., `/lounge`, `/hotel`).
  - `[type]/[slug]/`: Dynamic route for menu categories (e.g., `/lounge/drinks`).
- `src/app/lib/`: Core utilities and service integrations.
  - `contentful.ts`: Contentful client configuration.
  - `i18n-server.ts` & `i18n-client.tsx`: Translation logic.
  - `lounge-menu.ts`: Menu fetching logic.
- `src/app/components/`: Reusable UI components (banners, toggles, etc.).
- `src/locales/`: Static translation files in JSON format.
- `src/app/model/`: TypeScript type definitions and interfaces.
- `src/envConfig.ts`: Environment variable initialization using `@next/env`.

## Development Conventions

### Routing
- Dynamic routes are used extensively. `type` refers to the restaurant type, and `slug` refers to the menu category or item.
- Valid restaurant types are defined in `src/app/model/restaurant-type.ts`.

### Internationalization (i18n)
- Locale is primarily managed via cookies and retrieved on the server using `getServerLocaleFromCookies()`.
- Use `useTranslationServer()` in Server Components and `useTranslation()` in Client Components.

### Styling
- Tailwind CSS v4 is used for most styling.
- Global styles and specific overrides are handled in `src/app/globals.scss`.

### Data Fetching
- Contentful is the source of truth for menu data.
- Ensure `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` are set in the environment.

## TODOs / Technical Debt
- [ ] Implement automated testing (Jest/Vitest or Playwright).
- [ ] Add more comprehensive error handling for Contentful API failures.
- [ ] Optimize image loading for large menu categories.
