import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { DailyDriversSection } from '@/components/DailyDriversSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { LegacySection } from '@/components/LegacySection'
import { ContactSection } from '@/components/ContactSection'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <DailyDriversSection />
      <ServicesGrid />
      <LegacySection />
      <ContactSection />
      <GlassmorphismFooter />
    </main>
  )
}
