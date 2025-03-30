import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata = {
  title: "Inkverse | Stories Written in Shadow",
  description: "Enter the Inkverse — a portal to tales beyond dimensions. Discover lore, darkness, chaos, and the chronicles that shape it all.",
  keywords: ["Inkverse", "Chronicles of Ink", "sci-fi", "dark fantasy", "RPG universe"],
  authors: [{ name: "Luciano Gomez" }],
  creator: "Luciano Gomez",
  themeColor: "#000000",
  openGraph: {
    title: "Inkverse",
    description: "This ain't just a book — it's a damn portal.",
    url: "https://www.enterinkverse.com",
    siteName: "Inkverse",
    images: [
      {
        url: "https://www.enterinkverse.com/Logo04.jpg",
        width: 800,
        height: 600,
        alt: "Inkverse Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
     <body className="antialiased">
  <main className="min-h-screen w-full flex flex-col items-center justify-center px-4">
    <Navbar />
    {children}
    <Footer />
    <Analytics />
    <SpeedInsights />
  </main>
</body>
    </html>
  )
}
