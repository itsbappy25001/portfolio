import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Research from '@/components/Research'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Research />
      <Publications />
      <Projects />
      <Contact />
    </div>
  )
}
