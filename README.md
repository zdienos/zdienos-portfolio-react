# zdienos — portfolio

Personal site of Mardino Santosa. Swiss information-design layout: a fixed
index panel on the left, tabular content on a twelve-column grid on the right
(press <kbd>G</kbd> to show the grid).

## Stack

- React 19, React Router 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vite 8, `vite-plugin-pwa` for the offline service worker
- `react-pdf` for the CV viewer, `react-github-calendar` for activity
- oxlint for linting

## Scripts

```sh
npm install
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

Requires Node.js 22.22 or newer.

## Data

- Projects are fetched from npoint (`src/data/content.js`, `PROJECTS_URL`).
- Coding-time share comes from a public WakaTime share link.
- Static content (roles, contacts, stack matrix) lives in `src/data/content.js`.
