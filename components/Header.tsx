'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-h',
          `${headerRef.current.offsetHeight}px`
        )
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Info Bar */}
      <div className="bg-royal-blue text-cream text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mon–Fri 10am–7pm &nbsp;·&nbsp; Sat–Sun 11am–6:30pm
            </span>
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              2580 Cedar Park Place, Abbotsford BC
            </span>
            <span className="text-champagne font-semibold hidden md:block">
              Walk-ins welcome for passport photos
            </span>
          </div>
          <a href="tel:604-864-4999" className="text-cream font-semibold hover:text-champagne transition-colors">
            604-864-4999
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-cream/95 glass-frosted border-b border-royal-blue/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center">
              <span className="text-cream font-bold text-sm leading-none text-center">LS</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-playfair font-bold text-lg text-royal-blue leading-tight block">
                Linkin Photo &amp; Video Studio
              </span>
              <span className="text-xs text-charcoal/50 leading-none">Abbotsford, BC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className="text-charcoal hover:text-royal-blue transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-charcoal hover:text-royal-blue transition-colors font-medium flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-royal-blue/15 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                <div className="px-3 py-1.5 text-xs font-bold text-royal-blue/50 uppercase tracking-widest">Photography & Film</div>
                <Link href="/wedding-films" className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-royal-blue transition-colors text-sm">Wedding Films</Link>
                <Link href="/photography" className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-royal-blue transition-colors text-sm">Photography</Link>
                <div className="px-3 py-1.5 text-xs font-bold text-royal-blue/50 uppercase tracking-widest mt-1 border-t border-border-gray">Bridal</div>
                <Link href="/accessories" className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-royal-blue transition-colors text-sm">Accessories</Link>
                <div className="px-3 py-1.5 text-xs font-bold text-royal-blue/50 uppercase tracking-widest mt-1 border-t border-border-gray">Walk-In Services</div>
                <Link href="/#passport-photos" className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-royal-blue transition-colors text-sm">Passport Photos</Link>
                <Link href="/#western-union" className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-royal-blue transition-colors text-sm">Western Union</Link>
              </div>
            </div>

            <Link href="/gallery" className="text-charcoal hover:text-royal-blue transition-colors font-medium">
              Gallery
            </Link>
            <a href="#contact" className="text-charcoal hover:text-royal-blue transition-colors font-medium">
              Contact
            </a>
            <a
              href="https://wa.me/17785397039"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-semibold"
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          >
            <div className={`w-full h-0.5 bg-charcoal rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-full h-0.5 bg-charcoal rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-charcoal rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-royal-blue/10 bg-cream py-4 px-4">
            <nav className="flex flex-col gap-1">
              <Link href="/" className="py-2 px-3 rounded-lg text-charcoal hover:bg-light-gray hover:text-royal-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <div className="py-2 px-3">
                <p className="text-xs font-bold text-royal-blue/50 uppercase tracking-widest mb-2">Photography &amp; Film</p>
                <Link href="/wedding-films" className="block py-1.5 pl-3 text-charcoal hover:text-royal-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Wedding Films</Link>
                <Link href="/photography" className="block py-1.5 pl-3 text-charcoal hover:text-royal-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Photography</Link>
              </div>
              <div className="py-2 px-3">
                <p className="text-xs font-bold text-royal-blue/50 uppercase tracking-widest mb-2">Bridal</p>
                <Link href="/accessories" className="block py-1.5 pl-3 text-charcoal hover:text-royal-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
              </div>
              <div className="py-2 px-3">
                <p className="text-xs font-bold text-royal-blue/50 uppercase tracking-widest mb-2">Walk-In Services</p>
                <Link href="/#passport-photos" className="block py-1.5 pl-3 text-charcoal hover:text-royal-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Passport Photos</Link>
                <Link href="/#western-union" className="block py-1.5 pl-3 text-charcoal hover:text-royal-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Western Union</Link>
              </div>
              <Link href="/gallery" className="py-2 px-3 rounded-lg text-charcoal hover:bg-light-gray hover:text-royal-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <a href="#contact" className="py-2 px-3 rounded-lg text-charcoal hover:bg-light-gray hover:text-royal-blue transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a
                href="https://wa.me/17785397039"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 bg-royal-blue text-cream rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
