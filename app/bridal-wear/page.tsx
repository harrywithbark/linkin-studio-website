import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { FeaturedGallery } from '@/components/FeaturedGallery'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'
import { Shirt, Sparkles, Ribbon, Scissors, Gem, Brush, ShoppingBag } from 'lucide-react'

export default function BridalWearPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        eyebrow="Bridal Wear"
        title="Exquisite Bridal Wear"
        description="Stunning wedding dresses and bridal attire designed to make you feel confident and beautiful. From classic elegance to modern sophistication, find your perfect gown."
        icon={Shirt}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-heading mb-12 text-center text-4xl font-bold text-royal-blue">
          Our Bridal Collection
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Sparkles}
            title="Wedding Dresses"
            description="Custom and ready-to-wear gowns in various styles. From romantic lace to sleek modern designs, discover the dress of your dreams."
          />
          <ServiceCard
            icon={Ribbon}
            title="Designer Consultation"
            description="Personal styling sessions to find your perfect look. Expert guidance on silhouettes, fabrics, and colors that complement your vision."
          />
          <ServiceCard
            icon={Scissors}
            title="Bridal Alterations"
            description="Professional tailoring and customization services. Ensure your gown fits perfectly and looks absolutely stunning on your special day."
          />
          <ServiceCard
            icon={Gem}
            title="Veil & Accessories"
            description="Coordinating veils, wraps, and accessories to complete your bridal look. Curated pieces to enhance your overall style and elegance."
          />
          <ServiceCard
            icon={Brush}
            title="Bridal Styling"
            description="Professional makeup and hair styling coordination. Ensure your complete bridal look comes together seamlessly and beautifully."
          />
          <ServiceCard
            icon={ShoppingBag}
            title="Boutique Experience"
            description="Personalized shopping experience in a comfortable, private setting. Take your time finding the perfect gown with expert assistance."
          />
        </div>
      </section>

      <FeaturedGallery
        heading="Featured Bridal Looks"
        subheading="A glimpse of the gowns and styling we have crafted for brides on their special day."
        items={[
          'Classic A-line gown',
          'Lace detail close-up',
          'Modern silhouette',
          'Veil & accessories',
          'Boutique fitting',
        ]}
      />

      <section className="bg-royal-blue/5 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-heading mb-6 text-3xl font-bold text-royal-blue">
            Find Your Dream Wedding Dress
          </h3>
          <p className="mb-8 text-lg text-charcoal/80">
            Schedule a private bridal consultation and discover the perfect gown for your special day. Our expert team is ready to help you feel absolutely beautiful.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20schedule%20a%20bridal%20wear%20consultation"
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
