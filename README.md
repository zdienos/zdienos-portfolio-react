# zdienos — portfolio

Personal site of Mardino Santosa, set as a Swiss New Wave broadsheet: one long
page of plates in two overprinting spot inks (cyan and magenta), stepped
type, and a line-drawn portrait printed off register on a canvas.

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
- Career timeline, wins, toolbox and contacts come from the CV and live in
  `src/data/content.js`.

## Deploy

Every push to `main` builds the site in GitHub Actions
(`.github/workflows/deploy.yml`) and uploads `dist/` to the DirectAdmin hosting
over FTPS. Lint or build errors stop the run before anything is uploaded.

The upload only touches files it uploaded itself (tracked in
`.ftp-deploy-sync-state.json` on the server), so other files in `public_html`
are left alone.

### One-time setup (GitHub → Settings → Secrets and variables → Actions)

| Kind     | Name             | Value                                                     |
| -------- | ---------------- | --------------------------------------------------------- |
| Secret   | `FTP_SERVER`     | FTP host, e.g. `ftp.zdienos.com`                          |
| Secret   | `FTP_USERNAME`   | FTP account (a deploy-only account is best)               |
| Secret   | `FTP_PASSWORD`   | its password                                              |
| Variable | `FTP_SERVER_DIR` | site folder as seen after FTP login, ending in `/`        |
| Variable | `FTP_DEPLOY_LIVE`| `true` to really upload; anything else means dry run      |

`FTP_SERVER_DIR` depends on the FTP account: the main DirectAdmin user usually
sees `domains/zdienos.com/public_html/`, while an account limited to the site
folder sees `/`. An absolute path such as `/home/<user>/domains/…` also works
if the FTP server allows it. Before uploading, every run logs in and lists the
folder, and stops unless it already contains `index.html`. Leave `FTP_DEPLOY_LIVE` unset for the first run and check in
the log that files would land in `public_html`.

### Run, re-run, roll back

- Manual run: Actions → "Deploy to zdienos.com" → Run workflow (tick
  "dry run" to only preview).
- Roll back: `git revert` the bad commit on `main` and push; the previous
  version is deployed again.

### Server files that come from this repo

- `public/.htaccess`: HTTPS redirect, single-page-app fallback to
  `index.html`, no-cache for entry points.
- `public/assets/.htaccess`: one-year cache for hashed build files.
- `public/service-worker.js`: removes the old Create React App service worker
  from returning visitors' browsers.
