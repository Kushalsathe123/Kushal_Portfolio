import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Contact from "@/components/sections/Contact"
import ParticlesBackground from "@/components/ui/ParticlesBackground"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  )
}

