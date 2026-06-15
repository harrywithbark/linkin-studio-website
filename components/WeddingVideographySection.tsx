'use client'

import Image from 'next/image'

const services = [
  {
    title: 'Full Day Coverage',
    description: 'From getting ready to the final dance, every moment captured',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cinematic Editing',
    description: 'Professional colour grading, transitions, and music sync for a film-quality result',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Highlight Reel',
    description: 'A 3–5 minute edit perfect for sharing with family and friends',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18m-18 4h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: 'Aerial Shots',
    description: 'Drone footage of your venue and celebration from stunning perspectives',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Music Curation',
    description: 'A custom soundtrack that brings your wedding story to life',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
      </svg>
    ),
  },
  {
    title: 'Final Delivery',
    description: 'Your film delivered in multiple formats with unlimited copies',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export function WeddingVideographySection() {
  return (
    <section className="py-24" style={{ backgroundColor: '#1B1F3A' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-5xl font-bold text-white text-center mb-16">
          Wedding Videography
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
              style={{ backgroundColor: '#242848' }}
            >
              {/* Image Container */}
              <div className="relative h-40 bg-gradient-to-b from-black/30 to-black/60 overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${['1511379938326-c1ca6b4cac04', '1516573595154-a5c29ba55604', '1511671782486-a01980e01a18', '1519904981063-6f3e9b341d15', '1470225620780-dba8ba36b745', '1506157786151-b8491531f063'][idx]}?w=600&h=400&fit=crop`}
                  alt={service.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-yellow-500/80 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-yellow-500/90 group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: '1.5px solid rgba(212, 168, 83, 0.5)',
                  boxShadow: '0 0 16px rgba(212, 168, 83, 0.3) inset',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
