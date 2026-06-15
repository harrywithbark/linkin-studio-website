import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-cream flex flex-col" style={{ minHeight: 'calc(100dvh - var(--header-h, 88px))' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex-1 flex flex-col">
        <div className="grid md:grid-cols-2 items-stretch flex-1">

          {/* Left Column: Identity & Headline */}
          <div className="py-8 md:py-10 lg:py-12 pr-0 md:pr-12 flex flex-col justify-between">
            <div className="space-y-5">

              {/* Community tag */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#E8A020]"></div>
                <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase">
                  Abbotsford&apos;s Community Studio
                </p>
              </div>

              {/* Main headline */}
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05] tracking-tight">
                Everything<br />
                your family<br />
                needs,{' '}
                <span className="text-[#E8A020]">one address.</span>
              </h1>

              {/* Supporting copy */}
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed max-w-md">
                Passport photos in minutes. Send money home with Western Union. Wedding films, Jago rentals, Indian jewellery, Gurbani radios — all under one roof, serving the Fraser Valley South Asian community.
              </p>

              {/* Language tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 border border-border-gray rounded-full text-xs text-charcoal/70 font-medium">English</span>
                <span className="px-2.5 py-1 border border-border-gray rounded-full text-xs text-charcoal/70 font-medium">ਪੰਜਾਬੀ</span>
                <span className="px-2.5 py-1 border border-border-gray rounded-full text-xs text-charcoal/70 font-medium">हिंदी</span>
                <span className="text-xs text-charcoal/40 font-medium">Open 7 days</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href="tel:604-864-4999"
                  className="px-6 py-2.5 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-semibold text-center text-sm"
                >
                  Call 604-864-4999
                </a>
                <a
                  href="https://wa.me/17785397039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-royal-blue text-royal-blue rounded-lg hover:bg-royal-blue hover:text-cream transition-colors font-semibold text-center text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Tagline at bottom */}
            <p className="mt-6 text-xs text-charcoal/40 italic font-medium">
              &ldquo;Trust professional to save you memories!&rdquo; — Namdeep Sidhu
            </p>
          </div>

          {/* Right Column: Dark Walk-In + Services Panel */}
          <div className="bg-[#1a2744] py-8 md:py-10 lg:py-12 px-6 md:px-8 lg:px-10 flex flex-col gap-4">

            {/* Walk In Today */}
            <div>
              <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-3">Walk In Today</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/#passport-photos"
                  className="group p-3 bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 hover:border-[#E8A020]/50 transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                    <svg className="w-3.5 h-3.5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21v-1a5 5 0 0110 0v1"/></svg>
                  </div>
                  <p className="font-semibold text-cream text-xs group-hover:text-[#E8A020] transition-colors">Passport photos</p>
                  <p className="text-cream/60 text-[10px] mt-0.5">In minutes</p>
                </a>
                <a
                  href="/#western-union"
                  className="group p-3 bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 hover:border-[#E8A020]/50 transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                    <svg className="w-3.5 h-3.5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <p className="font-semibold text-cream text-xs group-hover:text-[#E8A020] transition-colors">Western Union</p>
                  <p className="text-cream/60 text-[10px] mt-0.5">Every day</p>
                </a>
              </div>
            </div>

            {/* All Services */}
            <div className="flex-1 min-h-0">
              <p className="text-xs font-bold tracking-widest text-cream/50 uppercase mb-2">All Services</p>
              <div className="space-y-0.5 overflow-y-auto max-h-48">
                {[
                  { label: 'Wedding photography & videography', href: '/photography', badge: 'Book' },
                  { label: 'Jago rental & decoration', href: '/accessories', badge: 'Enquire' },
                  { label: 'Indian jewellery & bangles', href: '/accessories', badge: null },
                  { label: 'Gurbani radios', href: '/#gurbani', badge: null },
                  { label: 'IPTV boxes', href: '/#iptv', badge: null },
                  { label: 'VHS & tape to digital transfer', href: '/#media-transfer', badge: null },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-cream/80 group-hover:text-cream text-xs transition-colors line-clamp-1">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#E8A020] text-[#1a2744] rounded-full flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Gallery CTA */}
            <Link
              href="/gallery"
              className="flex items-center justify-between pt-3 border-t border-white/10 text-[#E8A020] hover:text-cream transition-colors font-semibold text-xs"
            >
              <span>View our portfolio</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
