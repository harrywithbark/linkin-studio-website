import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { FeaturedGallery } from '@/components/FeaturedGallery'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'
import { Sparkles, Gem, Crown, Ribbon, Footprints, Hand, Briefcase } from 'lucide-react'

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        eyebrow="Accessories"
        title="Beautiful Wedding Accessories"
        description="Exquisite jewelry and accessories to complete your bridal look. From delicate necklaces to elegant hair pieces, find the perfect finishing touches."
        icon={Sparkles}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-heading mb-12 text-center text-4xl font-bold text-royal-blue">
          Our Accessory Collection
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Gem}
            title="Bridal Jewelry"
            description="Stunning necklaces, bracelets, and earrings to complement your gown. Elegant pieces crafted to enhance your natural beauty."
          />
          <ServiceCard
            icon={Crown}
            title="Hair Accessories"
            description="Beautiful tiaras, hair combs, and clips to complete your hairstyle. Delicate pieces designed to blend seamlessly with your look."
          />
          <ServiceCard
            icon={Ribbon}
            title="Veils & Wraps"
            description="Romantic veils and elegant wraps in various lengths and styles. Frame your face beautifully and add drama to your entrance."
          />
          <ServiceCard
            icon={Footprints}
            title="Wedding Shoes"
            description="Comfortable and stylish bridal shoes designed for all-day wear. From classic white to metallics, find your perfect pair."
          />
          <ServiceCard
            icon={Hand}
            title="Gloves & Hosiery"
            description="Delicate gloves, stockings, and hosiery to complete your ensemble. Premium fabrics that add sophistication and elegance."
          />
          <ServiceCard
            icon={Briefcase}
            title="Accessory Styling"
            description="Professional consultation to coordinate all your accessories. Expert guidance to create a cohesive, stunning bridal look."
          />
        </div>
      </section>

      <FeaturedGallery
        heading="Featured Accessories"
        subheading="A curated look at the jewelry, veils, and finishing touches that complete a bridal ensemble."
        items={[
          'Bridal jewelry set',
          'Tiara & hair comb',
          'Lace veil',
          'Wedding shoes',
          'Styled ensemble',
        ]}
      />

      <section className="bg-royal-blue/5 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-heading mb-6 text-3xl font-bold text-royal-blue">
            Complete Your Bridal Ensemble
          </h3>
          <p className="mb-8 text-lg text-charcoal/80">
            Browse our curated collection of wedding accessories and find the perfect pieces to complement your bridal style. Contact us for personalized recommendations.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20browse%20wedding%20accessories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-royal-blue px-8 py-3 font-medium text-cream transition-colors hover:bg-royal-blue/90"
          >
            Get in Touch via WhatsApp
          </a>
        </div>
      </section>

      <GlassmorphismFooter />
    </main>
  )
}
