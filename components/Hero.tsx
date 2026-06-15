import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-stretch min-h-screen md:min-h-[680px]">

          {/* Left Column: Content */}
          <div className="py-12 md:py-16 lg:py-20 pr-0 md:pr-12 flex flex-col justify-between min-h-[600px] md:min-h-auto">
            <div className="space-y-7">

              {/* Community tag */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#E8A020]"></div>
                <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase">
                  Abbotsford&apos;s Community Studio
                </p>
              </div>

              {/* Main headline */}
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-charcoal leading-[1.05] tracking-tight">
                Everything<br />
                your family<br />
                needs,{' '}
                <span className="text-[#E8A020]">one address.</span>
              </h1>

              {/* Supporting copy */}
              <p className="text-sm md:text-base lg:text-lg text-charcoal/70 leading-relaxed max-w-md">
                Passport photos, wedding films, bridal wear, jewellery, Jago rentals, Gurbani radios — all under one roof, serving the Fraser Valley South Asian community.
              </p>

              {/* Language tags */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1.5 border border-border-gray rounded-full text-sm text-charcoal/70 font-medium">English</span>
                <span className="px-3 py-1.5 border border-border-gray rounded-full text-sm text-charcoal/70 font-medium">ਪੰਜਾਬੀ</span>
                <span className="px-3 py-1.5 border border-border-gray rounded-full text-sm text-charcoal/70 font-medium">हिंदी</span>
                <span className="text-xs text-charcoal/40 font-medium">Open 7 days</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:604-864-4999"
                  className="px-7 py-3.5 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-semibold text-center text-sm"
                >
                  Call 604-864-4999
                </a>
                <a
                  href="https://wa.me/17785397039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border-2 border-royal-blue text-royal-blue rounded-lg hover:bg-royal-blue hover:text-cream transition-colors font-semibold text-center text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Tagline at bottom */}
            <p className="mt-10 text-sm text-charcoal/40 italic font-medium">
              &ldquo;Trust professional to save you memories!&rdquo; — Namdeep Sidhu
            </p>
          </div>

          {/* Right Column: Services Panel - Hidden on Mobile */}
          <div className="hidden md:flex bg-[#1a2744] py-16 lg:py-20 px-8 md:px-10 lg:px-12 flex-col gap-8">

            {/* Walk In Today */}
            <div>
              <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-4">Walk In Today</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/#passport-photos"
                  className="group p-4 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 hover:border-[#E8A020]/50 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21v-1a5 5 0 0110 0v1"/></svg>
                  </div>
                  <p className="font-semibold text-cream text-sm group-hover:text-[#E8A020] transition-colors">Passport photos</p>
                  <p className="text-cream/60 text-xs mt-1">Adults &amp; infants — ready in minutes</p>
                </a>
                <a
                  href="/#western-union"
                  className="group p-4 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 hover:border-[#E8A020]/50 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <p className="font-semibold text-cream text-sm group-hover:text-[#E8A020] transition-colors">Western Union</p>
                  <p className="text-cream/60 text-xs mt-1">Send money home — open every day</p>
                </a>
              </div>
            </div>

            {/* All Services */}
            <div className="flex-1">
              <p className="text-xs font-bold tracking-widest text-cream/50 uppercase mb-4">All Services</p>
              <div className="space-y-1">
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
                    className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-cream/80 group-hover:text-cream text-sm transition-colors">{item.label}</span>
                    {item.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-[#E8A020] text-[#1a2744] rounded-full flex-shrink-0">
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
              className="flex items-center justify-between pt-6 border-t border-white/10 text-[#E8A020] hover:text-cream transition-colors font-semibold text-sm"
            >
              <span>View our portfolio</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
