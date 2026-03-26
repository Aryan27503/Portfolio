import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Aryan Soni | Product Manager Portfolio',
  description: 'Portfolio showcasing product case studies, analytics projects, and product strategy insights. Deep dives into SkillBridge, RoadLoop, and AI-powered product thinking.',
  keywords: ['Product Manager', 'Product Strategy', 'Analytics', 'Case Studies', 'AI Product'],
  authors: [{ name: 'Aryan Soni' }],
  creator: 'Aryan Soni',
  openGraph: {
    title: 'Aryan Soni | Product Manager Portfolio',
    description: 'Premium portfolio showcasing product case studies and analytics projects',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Soni | Product Manager Portfolio',
    description: 'Product strategy, case studies, and analytics insights',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-slate-100 antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
