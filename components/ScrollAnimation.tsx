// components/AnimatedSection.tsx
"use client"; // must be a client component to use hooks

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollAnimation({ children }: ScrollAnimationProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
