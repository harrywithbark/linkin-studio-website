import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { WeddingVideographySection } from '@/components/WeddingVideographySection'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function WeddingFilmsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Professional Wedding Films"
        description="Cinematic videos capturing every precious moment of your special day. From emotional vows to joyful celebrations, we craft timeless films you'll cherish forever."
        icon="🎬"
      />

      <WeddingVideographySection />

      <section className="bg-royal-blue/5 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-royal-blue mb-6">
            Ready to Preserve Your Wedding Story?
          </h3>
          <p className="text-charcoal text-lg mb-8">
            Contact us today to discuss your wedding film package and create something truly unforgettable.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20book%20wedding%20films%20for%20my%20special%20day"
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
