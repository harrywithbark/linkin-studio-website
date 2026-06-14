import { Header } from '@/components/Header'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceCard } from '@/components/ServiceCard'
import { FeaturedGallery } from '@/components/FeaturedGallery'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'
import { Clapperboard, Video, Sparkles, Film, Plane, Music, Disc } from 'lucide-react'

export default function WeddingFilmsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ServiceHero
        eyebrow="Wedding Films"
        title="Professional Wedding Films"
        description="Cinematic videos capturing every precious moment of your special day. From emotional vows to joyful celebrations, we craft timeless films you'll cherish forever."
        icon={Clapperboard}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-heading mb-12 text-center text-4xl font-bold text-royal-blue">
          Our Wedding Film Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Video}
            title="Full Day Coverage"
            description="Complete documentation from getting ready through the reception. Capture every meaningful moment and detail of your wedding day."
          />
          <ServiceCard
            icon={Sparkles}
            title="Cinematic Editing"
            description="Professional color grading, transitions, and music synchronization. Your film is crafted like a Hollywood production designed just for you."
          />
          <ServiceCard
            icon={Film}
            title="Highlight Reel"
            description="A beautifully edited 3–5 minute highlight video. Perfect for sharing with family and friends who couldn't attend your celebration."
          />
          <ServiceCard
            icon={Plane}
            title="Aerial Shots"
            description="Stunning drone footage showcasing your venue and celebration from unique perspectives. Add cinematic scale to your wedding story."
          />
          <ServiceCard
            icon={Music}
            title="Music Curation"
            description="Personalized soundtrack selection that perfectly complements your film. Every beat enhances the emotional journey of your day."
          />
          <ServiceCard
            icon={Disc}
            title="Final Delivery"
            description="Your finished wedding film delivered in multiple formats. Enjoy unlimited copies, digital sharing, and forever preservation."
          />
        </div>
      </section>

      <FeaturedGallery
        heading="Featured Films"
        subheading="Stills from recent cinematic wedding films, highlight reels, and aerial coverage."
        items={[
          'Ceremony film still',
          'Highlight reel',
          'Aerial venue shot',
          'First dance',
          'Reception celebration',
        ]}
      />

      <section className="bg-royal-blue/5 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-heading mb-6 text-3xl font-bold text-royal-blue">
            Ready to Preserve Your Wedding Story?
          </h3>
          <p className="mb-8 text-lg text-charcoal/80">
            Contact us today to discuss your wedding film package and create something truly unforgettable.
          </p>
          <a
            href="https://wa.me/17785397039?text=I%20would%20like%20to%20book%20wedding%20films%20for%20my%20special%20day"
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
