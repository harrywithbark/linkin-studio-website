const pillars = [
  {
    title: 'Bilingual & Bicultural',
    body: 'We serve you in English, Punjabi, and Hindi. Namdeep and the team understand your traditions, your customs, and what matters most to your family.',
  },
  {
    title: 'One Stop, No Stress',
    body: 'Wedding films, bridal wear, passport photos, Western Union — all in one visit. No driving across Abbotsford. No juggling multiple vendors.',
  },
  {
    title: 'Open Every Day',
    body: 'Mon–Fri 10am–7pm and Sat–Sun 11am–6:30pm. Walk-ins welcome for passport photos and Western Union any day of the week.',
  },
  {
    title: 'Community First',
    body: 'Proudly serving the Punjabi and South Asian diaspora in Abbotsford and the Fraser Valley since day one. Your trust is our reputation.',
  },
]

export function LegacySection() {
  return (
    <section className="py-16 md:py-20 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#E8A020] uppercase mb-3">Why Linkin</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream leading-tight">
              Built for this<br />community.
            </h2>
          </div>
          <p className="text-cream/60 max-w-sm text-sm leading-relaxed">
            Unit 112 – 2580 Cedar Park Place, Abbotsford, BC — a trusted name for families from the Fraser Valley and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#1a2744] p-8 hover:bg-white/5 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#E8A020]/20 flex items-center justify-center mb-5">
                <span className="text-[#E8A020] font-bold text-sm">0{idx + 1}</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-cream mb-3">{pillar.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
          {[
            'Open 7 days a week',
            'Walk-ins welcome',
            'Bilingual staff — ਪੰਜਾਬੀ · हिंदी · English',
            'Fraser Valley community trusted',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-cream/50 text-sm">
              <div className="w-1 h-1 rounded-full bg-[#E8A020]"></div>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
