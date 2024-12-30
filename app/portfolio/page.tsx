// app/portfolio/page.tsx
import ProjectCard from '@/components/ProjectCard'
import FadeInSection from '@/components/FadeInSection'

export default function About() {
  const projects = [
    {
      title: "E-commerce Platform",
      imageSrc: "/images/ecommerce-project.jpg",
      imageAlt: "E-commerce project screenshot",
      link: "https://example.com/ecommerce",
      description: "A full-stack e-commerce platform built with Next.js and Stripe integration"
    },
    {
      title: "AI Chat Assistant",
      imageSrc: "/images/ai-chat-project.jpg",
      imageAlt: "AI Chat application interface",
      link: "https://example.com/ai-chat",
      description: "Real-time chat application powered by OpenAI's GPT-4"
    },
    {
      title: "Health & Fitness App",
      imageSrc: "/images/fitness-app.jpg",
      imageAlt: "Fitness app interface",
      link: "https://example.com/fitness-app",
      description: "Mobile-first fitness tracking application with social features"
    },
    {
      title: "Portfolio Website",
      imageSrc: "/images/portfolio-project.jpg",
      imageAlt: "Portfolio website screenshot",
      link: "https://example.com/portfolio",
      description: "Modern portfolio website built with Next.js and Tailwind CSS"
    },
    {
      title: "Weather Dashboard",
      imageSrc: "/images/weather-app.jpg",
      imageAlt: "Weather dashboard interface",
      link: "https://example.com/weather",
      description: "Real-time weather dashboard with interactive maps"
    },
    {
      title: "Task Management Tool",
      imageSrc: "/images/task-manager.jpg",
      imageAlt: "Task management application",
      link: "https://example.com/task-manager",
      description: "Collaborative task management platform with real-time updates"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index}>
              <ProjectCard
                title={project.title}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                link={project.link}
                description={project.description}
              />
            </FadeInSection>
          ))}
        </div>
      </div>
    </main>
  )
}
