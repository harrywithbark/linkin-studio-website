import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        title="Beautiful Wedding Accessories"
        description="Exquisite jewelry and accessories to complete your bridal look. From delicate necklaces to elegant hair pieces, find the perfect finishing touches."
        icon="✨"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl font-bold text-royal-blue text-center mb-12">
          Our Accessory Collection
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="💎"
            title="Bridal Jewelry"
            description="Stunning necklaces, bracelets, and earrings to complement your gown. Elegant pieces crafted to enhance your natural beauty."
          />
          <ServiceCard
            icon="👑"
            title="Hair Accessories"
            description="Beautiful tiaras, hair combs, and clips to complete your hairstyle. Delicate pieces designed to blend seamlessly with your look."
          />
          <ServiceCard
            icon="🎀"
            title="Veils & Wraps"
            description="Romantic veils and elegant wraps in various lengths and styles. Frame your face beautifully and add drama to your entrance."
          />
          <ServiceCard
            icon="👞"
            title="Wedding Shoes"
            description="Comfortable and stylish bridal shoes designed for all-day wear. From classic white to metallics, find your perfect pair."
          />
          <ServiceCard
            icon="✋"
            title="Gloves & Hosiery"
            description="Delicate gloves, stockings, and hosiery to complete your ensemble. Premium fabrics that add sophistication and elegance."
          />
          <ServiceCard
            icon="💼"
            title="Accessory Styling"
            description="Professional consultation to coordinate all your accessories. Expert guidance to create a cohesive, stunning bridal look."
          />
        </div>
      </section>

      <section className="bg-royal-blue/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-3">Additional Services</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
              More Than Just Accessories
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              In addition to beautiful jewelry and accessories, we offer a full range of event services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon="🎪"
              title="Jago Rental & Decoration"
              description="Complete Jago setup and decoration services for your wedding. Professional installation with traditional and modern design options."
            />
            <ServiceCard
              icon="📺"
              title="IPTV Boxes"
              description="Premium IPTV boxes for Indian and South Asian content. Setup assistance and channel packages available."
            />
            <ServiceCard
              icon="🎬"
              title="Video Duplication & Transfer"
              description="Convert VHS, DVDs, and old tapes to digital formats. Preserve your precious memories with professional quality conversion."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-royal-blue mb-6">
            Complete Your Bridal Ensemble
          </h3>
          <p className="text-charcoal/70 text-base md:text-lg mb-8">
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
