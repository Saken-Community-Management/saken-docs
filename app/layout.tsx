import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'Saken',
    template: '%s — Saken docs',
  },
  description: 'Residential complex management — full documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="🏢" />
      <body>{children}</body>
    </html>
  )
}
