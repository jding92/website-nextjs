// app/page.tsx
import ScrollAnimation from "@/components/ScrollAnimation";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-40 p-8">
      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-gray-600">Check out these scroll animations!</p>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Another Section</h2>
          <p className="text-gray-600">Scroll down to see the magic happen.</p>
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Another Section</h2>
          <p className="text-gray-600">Scroll down to see the magic happen.</p>
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Another Section</h2>
          <p className="text-gray-600">Scroll down to see the magic happen.</p>
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Another Section</h2>
          <p className="text-gray-600">Scroll down to see the magic happen.</p>
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Another Section</h2>
          <p className="text-gray-600">Scroll down to see the magic happen.</p>
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Another Section</h2>
          <p className="text-gray-600">Scroll down to see the magic happen.</p>
        </section>
      </ScrollAnimation>
      {/* Add more AnimatedSections as needed */}
    </main>
  );
}
