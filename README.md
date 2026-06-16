# saken-docs

Comprehensive documentation for the [Saken](https://github.com/Saken-Community-Management)
project — the residential-community management app (web app `saken`, backend
`saken-server`, and `saken-mcp`).

**Live site:** https://saken-community-management.github.io/saken-docs/

Built with [Vocs](https://vocs.dev) (React + Vite). Content is MDX under `docs/pages/`,
with Mermaid diagrams, search, and dark mode out of the box.

## Develop

```bash
npm install
npm run dev      # local preview with hot reload
npm run build    # production build (full-static → docs/dist/public)
npm run preview  # serve the production build
```

> The build checks for dead internal links and fails on any it finds.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy-docs.yml`, which builds the site and
publishes `docs/dist/public` to GitHub Pages. See the
[About this site](https://saken-community-management.github.io/saken-docs/about) page for
details.

## Structure

```
vocs.config.ts          # title, sidebar, top nav, basePath, theme
docs/pages/             # all MDX content (mirrors the sidebar + URLs)
public/                 # brand assets (icon.svg, logo.svg)
.github/workflows/      # GitHub Pages deploy
```

## Editing content

Find the page under `docs/pages/` (the path mirrors the URL), edit the MDX, and push. Each
page also has a "Suggest changes to this page" link that jumps straight to its source file.
