// components/AboutSection.tsx
import React from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imageSrc: string
  imageAlt: string
}

export default function AboutSection({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}: AboutSectionProps) {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
          <a
            href={buttonLink}
            className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md
                       hover:bg-gray-700 transition duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
