import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { AccessoryCollectionSection } from '@/components/AccessoryCollectionSection'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Beautiful Wedding Accessories"
        description="Exquisite jewelry and accessories to complete your bridal look. From delicate necklaces to elegant hair pieces, find the perfect finishing touches."
      />

      <AccessoryCollectionSection />

      <section className="bg-royal-blue/5 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-royal-blue mb-6">
            Complete Your Bridal Ensemble
          </h3>
          <p className="text-charcoal text-lg mb-8">
            Browse our curated collection of wedding accessories and find the perfect pieces to complement your bridal style. Contact us for personalized recommendations.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20browse%20wedding%20accessories"
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
