export function DailyDriversSection() {
  return (
    <section className="bg-white border-y border-border-gray py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-3">Open 7 Days a Week</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
            Walk-In Services — No Appointment Needed
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
            Quick, reliable services for the whole community. Come in anytime during business hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Passport Photos */}
          <div id="passport-photos" className="group border border-border-gray rounded-2xl p-8 hover:border-royal-blue/30 hover:shadow-md transition-all bg-cream/40">
            <div className="w-12 h-12 rounded-xl bg-royal-blue/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21v-1a5 5 0 0110 0v1"/>
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Passport Photos</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
              Government-compliant passport and visa photos for adults, children, and infants. Ready in minutes. Canadian, US, Indian, and international formats.
            </p>
            <ul className="space-y-1.5 mb-6">
              {['Adults & infants welcome', 'Ready in minutes', 'All countries & formats', 'Walk-in, no appointment'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8A020] flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:604-864-4999"
              className="inline-flex items-center gap-2 text-royal-blue font-semibold text-sm hover:text-royal-blue/70 transition-colors"
            >
              Call to confirm hours
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Western Union */}
          <div id="western-union" className="group border border-border-gray rounded-2xl p-8 hover:border-royal-blue/30 hover:shadow-md transition-all bg-cream/40">
            <div className="w-12 h-12 rounded-xl bg-royal-blue/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021 5.5V3.935M8 3.935A9 9 0 0112 3a9 9 0 014 .935M8 3.935A9 9 0 003 12a9 9 0 009 9 9 9 0 009-9 9 9 0 00-5-8.065"/>
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Western Union</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
              Send money to India, Pakistan, Philippines, and 200+ countries quickly and securely. Trusted by the Fraser Valley South Asian community.
            </p>
            <ul className="space-y-1.5 mb-6">
              {['Send to 200+ countries', 'Fast, reliable transfers', 'Open 7 days a week', 'Friendly bilingual staff'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8A020] flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:604-864-4999"
              className="inline-flex items-center gap-2 text-royal-blue font-semibold text-sm hover:text-royal-blue/70 transition-colors"
            >
              Call before you come
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Gurbani Radio & Media Transfer */}
          <div className="border border-border-gray rounded-2xl p-8 hover:border-royal-blue/30 hover:shadow-md transition-all bg-cream/40">
            <div className="w-12 h-12 rounded-xl bg-royal-blue/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-2" id="gurbani">Gurbani Radios &amp; More</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
              Dedicated Gurbani radio devices, IPTV boxes, and VHS/tape to digital conversion. Preserve your family memories and stay connected to your faith.
            </p>
            <ul className="space-y-1.5 mb-6" id="media-transfer">
              {['Gurbani radio devices', 'IPTV boxes', 'VHS & tape to digital', 'In-store pickup available'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8A020] flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/17785397039"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-royal-blue font-semibold text-sm hover:text-royal-blue/70 transition-colors"
            >
              Ask on WhatsApp
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
