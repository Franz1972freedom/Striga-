import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito, Baloo_2 } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  title: 'STRIGA — Family Boat Excursions from Piran',
  description:
    'Half-day and full-day sea excursions from Piran aboard STRIGA, a 1973 motorsailer. Panoramic cruising, swimming and dolphin-spotting with skipper Franz. Small groups, pets welcome, no fuss.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4e9cf',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${nunito.variable} ${baloo.variable}`}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
