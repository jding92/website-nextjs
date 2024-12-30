'use client'

import { useEffect, useState } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

export default function ScrollNameReveal() {
  const { scrollY } = useScroll()
  
  // Define scroll breakpoints
  const firstBreakpoint = 100
  const secondBreakpoint = 200
  const thirdBreakpoint = 300
  const finalBreakpoint = 400

  // Transform values based on scroll position
  const chineseOpacity = useTransform(
    scrollY,
    [0, firstBreakpoint, secondBreakpoint],
    [1, 1, 0]
  )

  const jOpacity = useTransform(
    scrollY,
    [firstBreakpoint, secondBreakpoint],
    [0, 1]
  )

  const jackOpacity = useTransform(
    scrollY,
    [firstBreakpoint, secondBreakpoint],
    [0, 1]
  )

  const dingOpacity = useTransform(
    scrollY,
    [secondBreakpoint, thirdBreakpoint],
    [0, 1]
  )

  const nameOpacity = useTransform(
    scrollY,
    [thirdBreakpoint, finalBreakpoint],
    [1, 0]
  )

  const introOpacity = useTransform(
    scrollY,
    [thirdBreakpoint, finalBreakpoint],
    [0, 1]
  )

  return (
    <div className="relative text-4xl md:text-6xl font-bold text-center">
      <motion.div style={{ opacity: nameOpacity }} className="relative">
        <span>I am </span>
        <motion.span
          style={{ opacity: chineseOpacity }}
          className="absolute"
        >
          丁
        </motion.span>
        <motion.span
          style={{ opacity: jOpacity }}
          className="absolute"
        >
          J
        </motion.span>
        <motion.span
          style={{ opacity: jackOpacity }}
          className="ml-[1.1em]"
        >
          ack
        </motion.span>
        <motion.span
          style={{ opacity: dingOpacity }}
        >
          {" "}Ding
        </motion.span>
      </motion.div>

      <motion.div
        style={{ opacity: introOpacity }}
        className="absolute top-0 left-0 w-full text-2xl md:text-3xl"
      >
        <p className="max-w-2xl mx-auto">
          A software engineer and designer passionate about creating meaningful digital experiences
        </p>
      </motion.div>
    </div>
  )
} 