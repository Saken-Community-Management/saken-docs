import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'Saken Docs',
    template: '%s — Saken Docs',
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
      <Head />
      <body>{children}</body>
    </html>
  )
}
