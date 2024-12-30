// components/FadeInSection.tsx
'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ 
    threshold: 0.05,
    rootMargin: "50px 0px"
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }}
    >
      {children}
    </motion.div>
  )
}
