# saken-docs

Comprehensive documentation for the [Saken](https://github.com/Saken-Community-Management)
project — the residential-community management app (web app `saken`, backend
`saken-server`, and `saken-mcp`).

Built with [Nextra 4](https://nextra.site) on Next.js (App Router). Content is MDX under
`content/`, with Mermaid diagrams, Pagefind search, and dark mode out of the box. The site
is **internal-only**: every route is gated by a Supabase email allowlist (the same model as
the `saken-admin` console).

## Develop

```bash
npm install
npm run dev        # local preview with hot reload (port 3002)
npm run build      # production build
npm run start      # serve the production build (port 3002)
npm run typecheck  # tsc --noEmit
```

Requires three env vars (see `.env.example`): `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SAKEN_ADMIN_ALLOWLIST`. The docs site has **no
database** — these are used only for the auth gate.

## Deploy

Vercel auto-detects the Next.js app and builds on push to `main`. Configure the three env
vars in the Vercel project settings. See the [About this site](/about) page for details.

## Structure

```
next.config.mjs         # Nextra wrapper around the Next.js config
mdx-components.js        # merges nextra-theme-docs MDX components
proxy.ts                # Next 16 auth gate (the renamed middleware)
app/
  layout.tsx            # root <html>/<body> + Nextra <Head>
  (docs)/               # docs route group: Nextra Layout + [[...mdxPath]] catch-all
  (auth)/               # /login + /denied (standalone, ungated)
  auth/                 # /auth/callback + /auth/signout (OAuth)
lib/
  supabase/             # server.ts + client.ts (auth-only Supabase clients)
  auth/admin-allowlist.ts  # SAKEN_ADMIN_ALLOWLIST check
content/                # all MDX content + _meta.ts (sidebar grouping/order)
public/                 # brand assets (icon.svg, logo.svg)
```

## Editing content

Find the page under `content/` (the path mirrors the URL), edit the MDX, and push. Section
grouping and page order live in the `content/**/_meta.ts` files. Each page also has a
"Suggest changes to this page" link that jumps straight to its source file.
