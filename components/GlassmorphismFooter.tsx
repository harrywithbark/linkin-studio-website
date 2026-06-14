import Link from 'next/link'
import { StoreHoursTable } from './StoreHoursTable'

export function GlassmorphismFooter() {
  return (
    <footer
      className="border-t border-royal-blue/15 glass-frosted"
      style={{
        background: 'linear-gradient(rgba(27, 58, 140, 0.04), rgba(27, 58, 140, 0.04)), rgba(250, 247, 242, 0.65)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-16">

        {/* Main grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-royal-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-cream font-bold text-xs">LS</span>
              </div>
              <span className="font-playfair font-bold text-royal-blue text-base leading-tight">
                Linkin Photo &amp;<br />Video Studio
              </span>
            </div>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-4 italic">
              &ldquo;Trust professional to save you memories!&rdquo;
            </p>
            <p className="text-charcoal/50 text-xs">Owner: Namdeep Sidhu</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {['English', 'ਪੰਜਾਬੀ', 'हिंदी'].map(lang => (
                <span key={lang} className="px-2.5 py-1 border border-border-gray rounded-full text-xs text-charcoal/60">{lang}</span>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-semibold text-charcoal text-sm mb-4 uppercase tracking-wide">Services</h4>
            <nav className="space-y-2.5">
              {[
                { label: 'Wedding Films', href: '/wedding-films' },
                { label: 'Photography', href: '/photography' },
                { label: 'Bridal Wear', href: '/bridal-wear' },
                { label: 'Accessories', href: '/accessories' },
                { label: 'Passport Photos', href: '/#passport-photos' },
                { label: 'Western Union', href: '/#western-union' },
                { label: 'Gurbani Radios', href: '/#gurbani' },
                { label: 'VHS to Digital', href: '/#media-transfer' },
              ].map(item => (
                <Link key={item.label} href={item.href} className="block text-sm text-charcoal/60 hover:text-royal-blue transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours column */}
          <div>
            <h4 className="font-semibold text-charcoal text-sm mb-4 uppercase tracking-wide">Hours</h4>
            <StoreHoursTable />
            <p className="text-xs text-charcoal/40 mt-3">Walk-ins welcome — no appointment needed for passport photos &amp; Western Union</p>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-semibold text-charcoal text-sm mb-4 uppercase tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-charcoal/40 uppercase tracking-wide mb-1">Address</p>
                <p className="text-sm text-charcoal leading-relaxed">
                  Unit 112 – 2580 Cedar Park Place<br />
                  Abbotsford, BC V2T 3S5
                </p>
              </div>
              <div>
                <p className="text-xs text-charcoal/40 uppercase tracking-wide mb-1">Voice</p>
                <a href="tel:604-864-4999" className="text-sm font-semibold text-royal-blue hover:text-royal-blue/70 transition-colors">
                  604-864-4999
                </a>
              </div>
              <div>
                <p className="text-xs text-charcoal/40 uppercase tracking-wide mb-1">WhatsApp / Text</p>
                <a
                  href="https://wa.me/17785397039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-royal-blue text-cream rounded-lg text-sm font-semibold hover:bg-royal-blue/90 transition-colors"
                >
                  778-539-7039
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-royal-blue/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-charcoal/50 text-xs">
            &copy; {new Date().getFullYear()} Linkin Photo &amp; Video Studio. All rights reserved. Abbotsford, BC.
          </p>
          <p className="text-charcoal/30 text-xs">
            Wedding films · Photography · Passport photos · Western Union · Gurbani radios
          </p>
        </div>

      </div>
    </footer>
  )
}
