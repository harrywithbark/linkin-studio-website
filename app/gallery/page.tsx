import { Header } from '@/components/Header'
import { GalleryGrid } from '@/components/GalleryGrid'
import { ContactSection } from '@/components/ContactSection'
import { GlassmorphismFooter } from '@/components/GlassmorphismFooter'

export const metadata = {
  title: 'Gallery - Linkin Studio',
  description: 'View our wedding films, photography, bridal wear, and accessories portfolio.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E8A020]"></div>
            <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase">
              Our Portfolio
            </p>
            <div className="w-8 h-[2px] bg-[#E8A020]"></div>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Wedding &amp; Event Moments
          </h1>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base md:text-lg">
            From intimate ceremonies to grand celebrations — explore our latest wedding films, photography, and bridal collections.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* Booking CTA */}
      <section className="py-16 md:py-20 bg-royal-blue">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-4">
            Ready to capture your story?
          </h2>
          <p className="text-cream/90 mb-8 text-base md:text-lg">
            Book your wedding photography or video session with Linkin Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17785397039"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cream text-royal-blue rounded-lg hover:bg-cream/90 transition-colors font-semibold text-center text-sm md:text-base"
            >
              WhatsApp to Book
            </a>
            <a
              href="tel:604-864-4999"
              className="px-8 py-3 border-2 border-cream text-cream rounded-lg hover:bg-white/10 transition-colors font-semibold text-center text-sm md:text-base"
            >
              Call 604-864-4999
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <GlassmorphismFooter />
    </main>
  )
}
