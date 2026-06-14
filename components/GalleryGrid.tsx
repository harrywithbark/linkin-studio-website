import { ImageIcon } from 'lucide-react'

export function GalleryGrid() {
  const galleryItems = [
    {
      category: 'Wedding Films',
      title: 'Sarah & Michael - Ceremony to Celebration',
      description: 'A cinematic wedding film capturing the emotional ceremony and vibrant reception celebration.',
    },
    {
      category: 'Wedding Films',
      title: 'Emma & James - Garden Romance',
      description: 'Ethereal garden wedding film with stunning natural lighting and candid moments.',
    },
    {
      category: 'Wedding Films',
      title: 'Rachel & David - Urban Elegance',
      description: 'Modern city wedding with cinematic production quality and professional color grading.',
    },
    {
      category: 'Photography',
      title: 'Bride Portraits - Studio & Natural',
      description: 'Stunning bridal portraits combining studio setup with natural outdoor lighting.',
    },
    {
      category: 'Photography',
      title: 'Ceremony Moments',
      description: 'Candid and posed photography capturing the emotional highlights of the ceremony.',
    },
    {
      category: 'Photography',
      title: 'Reception Highlights',
      description: 'Dynamic reception photography including dancing, toasts, and celebration moments.',
    },
    {
      category: 'Bridal Wear',
      title: 'Designer Wedding Collection',
      description: 'Exquisite wedding dresses from our curated bridal collection.',
    },
    {
      category: 'Accessories',
      title: 'Jewelry & Accessory Showcase',
      description: 'Beautiful wedding jewelry, veils, and accessories to complete your bridal look.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden bg-white border border-border-gray hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Placeholder - Ready for user images */}
              <div className="relative w-full aspect-video bg-champagne/20 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-2 p-6 text-royal-blue/30">
                  <ImageIcon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
                  <p className="text-charcoal/50 text-sm">{item.category}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-champagne/20 text-royal-blue text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-royal-blue mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border-gray">
                  <a
                    href="#contact"
                    className="text-royal-blue font-semibold text-sm hover:text-royal-blue/80 transition-colors"
                  >
                    Inquire about this →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
