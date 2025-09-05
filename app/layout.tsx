import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import SiteNav, { SiteFooter } from '@/components/nav'
import TopProgress from '@/components/top-progress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akoroc — Full‑Spectrum Digital Agency',
  description: 'Design, build, and scale modern products and platforms with Akoroc.',
  metadataBase: new URL('https://www.akoroc.com'),
  openGraph: {
    title: 'Akoroc — Full‑Spectrum Digital Agency',
    description: 'Design, build, and scale modern products and platforms with Akoroc.',
    url: 'https://www.akoroc.com',
    siteName: 'Akoroc',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akoroc — Full‑Spectrum Digital Agency',
    description: 'Design, build, and scale modern products and platforms with Akoroc.',
    images: ['/og.png'],
    creator: '@akoroc',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased overflow-x-hidden`}>
        <SiteNav />
        <TopProgress />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  )
}
