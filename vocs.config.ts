import { defineConfig } from 'vocs/config'

// GitHub Pages project-page base. Static assets (logo/icon) are served under it,
// and Vocs does not auto-prefix logoUrl/iconUrl, so we prepend it explicitly.
const basePath = '/saken-docs'

export default defineConfig({
  title: 'Saken',
  description: 'Residential complex management — full documentation',
  // Project layout: pages live in docs/pages, build output in docs/dist.
  srcDir: 'docs',
  pagesDir: 'pages',
  outDir: 'docs/dist',
  // GitHub Pages is a static host — emit a fully static site (HTML per route).
  renderStrategy: 'full-static',
  // Required for GitHub Pages project-page hosting at
  // https://saken-community-management.github.io/saken-docs/
  basePath,
  iconUrl: `${basePath}/icon.svg`,
  logoUrl: `${basePath}/logo.svg`,
  // Saken brand: deep slate-blue.
  accentColor: 'light-dark(#1e3a5f, #7aa7d6)',
  ogImageUrl:
    'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  editLink: {
    link: 'https://github.com/Saken-Community-Management/saken-docs/edit/main/docs/pages/:path',
    text: 'Suggest changes to this page',
  },
  socials: [
    { icon: 'github', link: 'https://github.com/Saken-Community-Management' },
  ],
  topNav: [
    { text: 'Docs', link: '/introduction/what-is-saken' },
    { text: 'Roadmap', link: '/roadmap/missing-features' },
    {
      text: 'GitHub',
      items: [
        {
          text: 'saken-docs (this site)',
          link: 'https://github.com/Saken-Community-Management/saken-docs',
        },
        {
          text: 'saken (web app)',
          link: 'https://github.com/Saken-Community-Management/saken',
        },
        {
          text: 'saken-server (backend)',
          link: 'https://github.com/Saken-Community-Management/saken-server',
        },
        {
          text: 'saken-mcp (MCP server)',
          link: 'https://github.com/Saken-Community-Management/saken-mcp',
        },
        {
          text: 'Project board',
          link: 'https://github.com/orgs/Saken-Community-Management/projects/1',
        },
      ],
    },
  ],
  sidebar: [
    {
      text: 'Introduction',
      items: [
        { text: 'What is Saken', link: '/introduction/what-is-saken' },
        { text: 'Quick tour', link: '/introduction/quick-tour' },
        { text: 'Status & maturity', link: '/introduction/status' },
      ],
    },
    {
      text: 'Getting Started',
      items: [
        { text: 'Prerequisites', link: '/getting-started/prerequisites' },
        { text: 'Local setup', link: '/getting-started/local-setup' },
        { text: 'First admin account', link: '/getting-started/first-admin' },
        { text: 'Project tour', link: '/getting-started/project-tour' },
      ],
    },
    {
      text: 'Concepts',
      items: [
        { text: 'Complex, building, apartment', link: '/concepts/data-hierarchy' },
        { text: 'Roles & role stacking', link: '/concepts/roles' },
        { text: 'Multi-community', link: '/concepts/multi-community' },
        { text: 'Fiscal year & rollover', link: '/concepts/fiscal-year' },
        { text: 'Identity model', link: '/concepts/identity' },
        { text: 'The money model', link: '/concepts/money-model' },
      ],
    },
    {
      text: 'Features',
      items: [
        { text: 'Authentication', link: '/features/authentication' },
        { text: 'Invitations', link: '/features/invitations' },
        { text: 'Apartments & residents', link: '/features/apartments-residents' },
        { text: 'Budget & expenses', link: '/features/budget-expenses' },
        { text: 'Collections & cash flow', link: '/features/collections' },
        { text: 'Treasurer tools', link: '/features/treasurer' },
        { text: 'Concierge submissions', link: '/features/concierge' },
        { text: 'Special projects', link: '/features/special-projects' },
        { text: 'Reports (YTD, PDF)', link: '/features/reports' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Overview', link: '/architecture/overview' },
        { text: 'Frontend (Next.js)', link: '/architecture/frontend' },
        { text: 'Backend & MCP', link: '/architecture/backend' },
        { text: 'Auth & RLS wiring', link: '/architecture/auth-rls' },
        { text: 'Multi-tenant isolation', link: '/architecture/multi-tenant' },
      ],
    },
    {
      text: 'Database',
      items: [
        { text: 'Schema overview', link: '/database/schema' },
        { text: 'Migration history', link: '/database/migrations' },
        { text: 'RLS policies', link: '/database/rls' },
        { text: 'Views & RPCs', link: '/database/rpcs' },
      ],
    },
    {
      text: 'API & Integrations',
      items: [
        { text: 'Server actions', link: '/api/server-actions' },
        { text: 'saken-server endpoints', link: '/api/backend-endpoints' },
        { text: 'saken-mcp tools', link: '/api/mcp-tools' },
        { text: 'Email & WhatsApp delivery', link: '/api/delivery' },
      ],
    },
    {
      text: 'Operations',
      items: [
        { text: 'Deployment', link: '/operations/deployment' },
        { text: 'CI/CD pipeline', link: '/operations/ci-cd' },
        { text: 'Database migrations', link: '/operations/migrations-workflow' },
        { text: 'Secrets & environment', link: '/operations/secrets' },
        { text: 'Monitoring & logs', link: '/operations/monitoring' },
      ],
    },
    {
      text: 'Roadmap & Missing Features',
      items: [
        { text: 'Missing features', link: '/roadmap/missing-features' },
        { text: 'Recommended build order', link: '/roadmap/build-order' },
        { text: 'Project board', link: '/roadmap/project-board' },
      ],
    },
    {
      text: 'Contributing',
      items: [{ text: 'How to contribute', link: '/contributing' }],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Changelog', link: '/changelog' },
        { text: 'About this site', link: '/about' },
      ],
    },
  ],
})
