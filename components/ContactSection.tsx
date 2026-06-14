import { StoreHoursTable } from './StoreHoursTable'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-3">We&apos;d Love to See You</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal">
            Visit or Contact the Studio
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-lg mx-auto">
            Drop in for passport photos and Western Union any day. Call or WhatsApp to book weddings, Jago, or bridal appointments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            {/* Phone 1 */}
            <div>
              <p className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wide mb-2">
                Voice Call
              </p>
              <a
                href="tel:604-864-4999"
                className="text-3xl font-bold text-royal-blue hover:text-royal-blue/80 transition-colors"
              >
                604-864-4999
              </a>
              <p className="text-charcoal/60 text-sm mt-1">Call us to discuss your wedding plans</p>
            </div>

            {/* Phone 2 */}
            <div>
              <p className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wide mb-2">
                WhatsApp / Text Message
              </p>
              <a
                href="https://wa.me/17785397039"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-semibold"
              >
                Message 778-539-7039
              </a>
              <p className="text-charcoal/60 text-sm mt-2">Quick messages and WhatsApp inquiries welcome</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wide mb-2">
                Location
              </p>
              <p className="text-lg text-charcoal font-medium">
                112-2580 Cedar Park Pl<br />
                Abbotsford, BC V2T 3S5<br />
                Canada
              </p>
              <p className="text-charcoal/60 text-sm mt-2">Located in Metro Vancouver</p>
            </div>

            {/* Store Hours */}
            <StoreHoursTable />
          </div>

          {/* Right Column: Google Maps Container */}
          <div className="flex items-stretch">
            <div className="w-full bg-white rounded-lg overflow-hidden border-[0.5px] border-royal-blue shadow-lg">
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.573!2d-122.3012!3d49.0504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9a9b8a3!2s2580+Cedar+Park+Pl%2C+Abbotsford%2C+BC+V2T+3S5!5e0!3m2!1sen!2sca!4v1"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Linkin Photo & Video Studio — 2580 Cedar Park Pl, Abbotsford BC"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
