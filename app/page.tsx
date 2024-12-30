import ScrollNameReveal from '@/components/ScrollNameReveal'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main>
      <section className="h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <ScrollNameReveal />
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-xl leading-relaxed text-gray-600 mb-8">
              I blend technical expertise with design thinking to build innovative solutions. 
              Specializing in full-stack development and user-centered design.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Engineering</h3>
              <p className="text-gray-600">
                Full-stack development with modern technologies.
                Building scalable, maintainable, and performant applications.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Design</h3>
              <p className="text-gray-600">
                Creating intuitive interfaces and meaningful user experiences.
                From concept to implementation.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </main>
  )
}
``