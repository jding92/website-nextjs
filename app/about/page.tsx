// app/about/page.tsx
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'

export default function About() {
  return (
    <>
      <Hero
        title="About Me"
        subtitle="Some short tagline or overview about you."
      />
      <AboutSection
        title="My Story"
        description="I’m a software engineer who loves creating engaging user experiences..."
        buttonText="View My Work"
        buttonLink="/portfolio"
        imageSrc="/images/chill-guy.png"
        imageAlt="Your portrait"
      />
    </>
  )
}
