'use client'

import Image from 'next/image'

const services = [
  {
    title: 'Wedding Photography',
    description: 'Full-day coverage capturing every emotional moment with artistic precision',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    badge: null,
  },
  {
    title: 'Bridal Portraits',
    description: 'Stunning portraits showcasing your beauty with professional lighting and posing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: null,
  },
  {
    title: 'Ceremony & Reception',
    description: 'Candid and composed shots from the ceremony through to the reception',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9.581m5.419 0C13.798 17.289 12.457 16 11 16H8m0 0H5.419m0 0C3.798 17.289 5.139 18.576 6.5 18.576c2 0 3.5-1.5 5-1.5 1.5 0 3 1.5 5 1.5 1.361 0 2.702-1.287 2.702-2.576z" />
      </svg>
    ),
    badge: null,
  },
  {
    title: 'Couple Sessions',
    description: 'Intimate portraits at your chosen location, celebrating your connection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM15 20h-5v-2a3 3 0 015.856-1.487M16 11a4 4 0 11-8 0 4 4 0 018 0zM6 20h12a2 2 0 002-2v-3a2 2 0 00-2-2H6a2 2 0 00-2 2v3a2 2 0 002 2z" />
      </svg>
    ),
    badge: null,
  },
  {
    title: 'Passport Photos',
    description: 'Fast, professional passport photos for all ages accepted worldwide',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5m-4 0V5a2 2 0 10-4 0v1m4 0a2 2 0 104 0m0 0H9m4 0h4m-11 4h2m7 0h2M9 20h6" />
      </svg>
    ),
    badge: 'Walk-ins Welcome',
  },
  {
    title: 'Infant Passport Photos',
    description: 'Gentle, quick passport photos for babies and newborns — stress-free service',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m0 0l-2-1m2 1v2.5M14 4l-2 1m0 0L10 4m2 1V2.5M6 7l-2 1m0 0L2 7m2 1v2.5m0 0l2 1m-2-1l-2 1m2-1v2.5m10 0l2 1m-2-1l-2 1m2-1v2.5m-10 0l2 1m-2-1l-2 1m2-1v2.5" />
      </svg>
    ),
    badge: 'Walk-ins Welcome',
  },
]

export function PhotographyServicesSection() {
  return (
    <section className="py-24" style={{ backgroundColor: '#FAF9F7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-5xl font-bold text-center mb-16" style={{ color: '#5B3E3E' }}>
          Photography Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl bg-white p-6"
            >
              {/* Image Container */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src={`https://images.unsplash.com/photo-${['1595777034583-87c3330f144c', '1516214104703-d4bc3004d4ad', '1585942012214-8fb461bfc682', '1516846016476-feae38db8cc0', '1581595436775-17e146e407f5', '1587225947293-c47ee5f8aab7'][idx]}?w=600&h=400&fit=crop`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                {service.badge && (
                  <div
                    className="inline-block text-xs font-bold px-2 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: 'rgba(201, 131, 122, 0.1)',
                      color: '#C9837A',
                      border: '1px solid #C9837A',
                    }}
                  >
                    {service.badge}
                  </div>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex-shrink-0 transition-colors duration-300"
                    style={{ color: '#C9837A' }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="text-lg font-bold transition-colors duration-300"
                    style={{ color: '#C9837A' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover border */}
              <div
                className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: '2px solid rgba(201, 131, 122, 0.3)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
