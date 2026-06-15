'use client'

export function AccessoryCollectionSection() {
  const accessories = [
    {
      title: 'Indian Jewellery',
      description: 'Traditional and modern jewellery to complete your bridal look',
      icon: '💎',
    },
    {
      title: 'Bangles',
      description: 'A wide selection of bangles for every occasion and ceremony',
      icon: '✨',
    },
    {
      title: 'Wedding Accessories',
      description: 'Everything you need to style the perfect bridal outfit',
      icon: '👑',
    },
    {
      title: 'Shagun Stuff',
      description: 'Traditional shagun items for blessings, ceremonies, and gifting',
      icon: '🎁',
    },
    {
      title: 'Jago Rental',
      description: 'Jago decorations and props available for rent for your celebration',
      icon: '🪴',
    },
    {
      title: 'Decoration',
      description: 'Beautiful décor for weddings, jagos, and South Asian events',
      icon: '🌸',
    },
  ]

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FAF6F1' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#6B3E3E' }}
          >
            Our Accessory Collection
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Placeholder Image - 3:2 Aspect Ratio */}
              <div className="w-full bg-gradient-to-br from-[#F5E6E0] to-[#EDD5CC] aspect-video flex items-center justify-center overflow-hidden relative">
                <div className="text-6xl opacity-40">{item.icon}</div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Rose-Gold Icon SVG */}
                <div className="mb-6 inline-block">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="#C4A57B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Simple decorative rose-gold icon */}
                    <circle cx="16" cy="16" r="12" />
                    <path d="M16 10v12M10 16h12" />
                    <circle cx="16" cy="16" r="4" fill="#C4A57B" opacity="0.2" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  className="font-playfair text-2xl font-bold mb-3"
                  style={{ color: '#C4A57B' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
