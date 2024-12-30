// components/ProjectCard.tsx
import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  link: string
  description?: string
}

export default function ProjectCard({ title, imageSrc, imageAlt, link, description }: ProjectCardProps) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={800}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-center items-center">
        <h3 className="text-white text-3xl opacity-0 group-hover:opacity-100 transition duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-white mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
            {description}
          </p>
        )}
      </div>
      <a href={link} className="absolute inset-0" />
    </div>
  )
}
