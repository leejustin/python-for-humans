import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Python for Humans',
  description: 'UI/UX principles demonstrated through clean, minimal design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <div className="min-h-screen">
          <Navigation />
          <main className="max-w-6xl mx-auto px-6 py-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}