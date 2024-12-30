import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My MetaLab-Inspired Site',
  description: 'A sleek Next.js site using Tailwind for a Metalab-like experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <footer className="mt-20 py-8 text-center text-sm text-gray-600">
          © 2024 MyBrand. All Rights Reserved.
        </footer>
      </body>
    </html>
  )
}
