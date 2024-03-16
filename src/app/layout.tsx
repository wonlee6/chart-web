import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './provider'
import Nav from '@/components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chart',
  description: 'Use various chart libraries'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <main className='flex flex-col h-lvh'>
            <Nav />
            <div className='pt-4 h-screen'>{children}</div>
          </main>
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
