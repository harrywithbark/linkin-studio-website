import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { FeaturedGallery } from '@/components/FeaturedGallery'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'
import { Camera, UserRound, Church, PartyPopper, Heart, Palette, BookOpen } from 'lucide-react'

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        eyebrow="Photography"
        title="Timeless Wedding Photography"
        description="Stunning portraits and candid moments that capture the essence of your love story. Artistic compositions and authentic emotions preserved forever."
        icon={Camera}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-heading mb-12 text-center text-4xl font-bold text-royal-blue">
          Our Photography Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={UserRound}
            title="Bridal Portraits"
            description="Elegant and flattering portraits showcasing your beauty. Professional styling, lighting, and posing for stunning images you'll treasure."
          />
          <ServiceCard
            icon={Church}
            title="Ceremony Coverage"
            description="Emotional moments from the first look through the final kiss. Every tear, smile, and embrace documented with artistic precision."
          />
          <ServiceCard
            icon={PartyPopper}
            title="Reception Candids"
            description="Genuine celebrations, laughter, and joy captured throughout the evening. Spontaneous moments that tell the real story of your day."
          />
          <ServiceCard
            icon={Heart}
            title="Couple Sessions"
            description="Romantic couple portraits in your favorite locations. Intimate shots that celebrate your connection and create lasting memories."
          />
          <ServiceCard
            icon={Palette}
            title="Artistic Editing"
            description="Professional color correction, retouching, and enhancement. Your photos receive a timeless, polished look that stands the test of time."
          />
          <ServiceCard
            icon={BookOpen}
            title="Album Design"
            description="Custom-designed albums with premium printing. Display your favorite moments in a beautifully bound keepsake for your home."
          />
        </div>
      </section>

      <FeaturedGallery
        heading="Featured Photography"
        subheading="A selection of bridal portraits, ceremony moments, and candid celebrations from recent weddings."
        items={[
          'Bridal portrait',
          'First look',
          'Ceremony kiss',
          'Reception dance',
          'Couple session',
        ]}
      />

      <BeforeAfterSlider />

      <section className="bg-royal-blue/5 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-heading mb-6 text-3xl font-bold text-royal-blue">
            Capture Your Beautiful Moments
          </h3>
          <p className="mb-8 text-lg text-charcoal/80">
            Let us create timeless photographs that tell your unique love story. Contact us to book your photography session today.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20book%20wedding%20photography%20for%20my%20special%20day"
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
