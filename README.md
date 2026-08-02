# Louis C. — Data Analytics Portfolio

A responsive portfolio site for Power BI, Microsoft Fabric, analytics, and web application projects. It is built with React, TypeScript, and Vite and is ready for static hosting, including GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## Add a project

All portfolio entries live in [`src/data/projects.ts`](src/data/projects.ts). To add one:

1. Copy an existing object in the `projects` array.
2. Give it a unique `slug`, title, date, summary, contribution list, technology list, and project link.
3. Pick a preview style: `world-cup`, `fabric`, `sales`, `brokerage`, or `generic`.
4. Pick an accent: `cobalt`, `mint`, or `coral`.
5. Set `featured: true` only when the project should occupy the large lead position.
6. For a public embeddable project, add an `embed` object containing its iframe `title`, public `src` URL, `kind` (`power-bi` or `web-app`), and `sourceLabel`.

Only add URLs intended for public viewing. Never place private report links, access tokens, credentials, or restricted business data in the project file.

The project count and all project cards update automatically. No component changes are required.

## Edit profile details

Update the name, role, LinkedIn URL, and GitHub URL in [`src/data/profile.ts`](src/data/profile.ts).

## Validate a release

```bash
npm test
npm run build
```

The production-ready files are generated in `dist/`.

## GitHub Pages

The included workflow deploys the site whenever changes are pushed to the `main` branch:

1. Create a GitHub repository and push this folder to it.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

Vite uses a relative base path, so the site works from a project repository URL without editing the configuration.
