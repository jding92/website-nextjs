// components/Header.tsx
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link href="/">丁ack</Link>
      </div>
      <nav className="space-x-6">
        <Link href="/about" className="hover:opacity-80">About</Link>
        <Link href="/portfolio" className="hover:opacity-80">Work</Link>
        <Link href="/contact" className="hover:opacity-80">Contact</Link>
      </nav>
    </header>
  )
}
