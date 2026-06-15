import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { PhotographyServicesSection } from '@/components/PhotographyServicesSection'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Timeless Wedding Photography"
        description="Stunning portraits and candid moments that capture the essence of your love story. Artistic compositions and authentic emotions preserved forever."
        icon="📷"
      />

      <PhotographyServicesSection />

      <section className="bg-royal-blue/5 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-royal-blue mb-6">
            Capture Your Beautiful Moments
          </h3>
          <p className="text-charcoal text-lg mb-8">
            Let us create timeless photographs that tell your unique love story. Contact us to book your photography session today.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20book%20wedding%20photography%20for%20my%20special%20day"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium"
          >
            Get in Touch via WhatsApp
          </a>
        </div>
      </section>

      <GlassmorphismFooter />
    </main>
  )
}
