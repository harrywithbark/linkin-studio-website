import Link from 'next/link'

const services = [
  {
    title: 'Wedding Videography',
    description: 'Cinematic wedding films from ceremony to reception. Professional equipment and editing that captures every emotion and moment for a lifetime.',
    href: '/wedding-films',
    badge: 'Book Now',
    category: 'Photography & Film',
  },
  {
    title: 'Wedding Photography',
    description: 'Timeless portraits and candid storytelling. We document your day with artistry and care — including engagement, anniversary, and graduation shoots.',
    href: '/photography',
    badge: 'Book Now',
    category: 'Photography & Film',
  },
  {
    title: 'Jago Rental & Decoration',
    description: 'Full Jago ceremony rental packages with authentic décor and lighting. We set up and take down — you just celebrate.',
    href: '/accessories',
    badge: 'Enquire',
    category: 'Wedding & Event',
  },
  {
    title: 'Bridal Wear',
    description: 'Exquisite wedding lehengas, salwar suits, and bridal gowns. Curated selection for brides who want to look and feel extraordinary.',
    href: '/bridal-wear',
    badge: null,
    category: 'Wedding & Event',
  },
  {
    title: 'Indian Jewellery & Bangles',
    description: 'Stunning bridal jewellery sets, bangles, and accessories. Beautiful pieces for weddings, Vaisakhi, Diwali, and everyday wear.',
    href: '/accessories',
    badge: null,
    category: 'Retail',
  },
  {
    title: 'Shagun & Wedding Accessories',
    description: 'Shagun envelopes, wedding favours, decorative items, and everything else you need to make your celebration complete and meaningful.',
    href: '/accessories',
    badge: null,
    category: 'Wedding & Event',
  },
  {
    title: 'VHS & Tape to Digital',
    description: 'Convert your old VHS tapes, film reels, Hi8, and slides to digital or DVD. Preserve irreplaceable family memories before they fade forever.',
    href: '/#media-transfer',
    badge: 'Enquire',
    category: 'Media Services',
  },
  {
    title: 'Gurbani Radios',
    description: 'Dedicated Gurbani radio and audio devices for your home. Stay connected to your faith with crystal-clear, continuous kirtan. In-store selection available.',
    href: '/#gurbani',
    badge: null,
    category: 'Retail',
  },
]

const categoryColors: Record<string, string> = {
  'Photography & Film': 'bg-royal-blue/10 text-royal-blue',
  'Wedding & Event': 'bg-champagne/60 text-charcoal',
  'Retail': 'bg-light-gray text-charcoal/70',
  'Media Services': 'bg-[#E8A020]/10 text-[#c07010]',
}

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-3">What We Do</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal">
            All Services
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto">
            From passport photos to cinematic wedding films — everything the Fraser Valley South Asian community needs, under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col bg-white border border-border-gray rounded-2xl p-7 hover:border-royal-blue/25 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[service.category]}`}>
                  {service.category}
                </span>
                {service.badge && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8A020] text-[#1a2744] flex-shrink-0">
                    {service.badge}
                  </span>
                )}
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 group-hover:text-royal-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-royal-blue font-semibold text-sm">
                Learn more
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Wedding CTA strip */}
        <div className="mt-10 p-8 bg-[#1a2744] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-1">Premium Service</p>
            <h3 className="font-playfair text-2xl font-bold text-cream">Planning a wedding?</h3>
            <p className="text-cream/60 text-sm mt-1">Photography, videography, Jago, bridal wear, jewellery — we do it all.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:604-864-4999"
              className="px-6 py-3 bg-[#E8A020] text-[#1a2744] rounded-lg font-bold text-sm hover:bg-[#d4901c] transition-colors"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/17785397039"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cream/20 text-cream rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
