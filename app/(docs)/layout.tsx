import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Saken" width={24} height={24} />
        <b>Saken</b>
      </span>
    }
    projectLink="https://github.com/Saken-Community-Management"
  />
)

const footer = (
  <Footer>
    <span>
      Saken — the shared ledger for residential communities. Internal
      documentation.
    </span>
  </Footer>
)

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/Saken-Community-Management/saken-docs/tree/main"
      editLink="Suggest changes to this page"
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      darkMode
    >
      {children}
    </Layout>
  )
}
