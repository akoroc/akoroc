import Hero from '@/components/hero'
import { TrustStrip, ServicesGrid, About, Process, TechStack, CTA } from '@/components/sections'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <About />
      <Process />
      <TechStack />
      <CTA />
    </main>
  )
}
