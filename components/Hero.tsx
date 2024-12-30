// components/Hero.tsx
import React from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section
      className={`relative w-full h-screen flex flex-col justify-center items-center
                  bg-no-repeat bg-center bg-cover overflow-hidden`}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    >
      {/* Optional overlay if you want to darken the background for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl md:text-2xl text-white max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
