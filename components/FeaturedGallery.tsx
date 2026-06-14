import { ImageIcon } from 'lucide-react'

export interface FeaturedGalleryProps {
  heading: string
  subheading?: string
  items: string[]
}

export function FeaturedGallery({ heading, subheading, items }: FeaturedGalleryProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-royal-blue md:text-4xl text-balance">
            {heading}
          </h2>
          {subheading ? (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">{subheading}</p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((label, idx) => (
            <figure
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-border-gray bg-champagne/20 ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square' : 'aspect-[4/3]'
              }`}
            >
              <div className="flex h-full w-full items-center justify-center text-royal-blue/30 transition-colors duration-300 group-hover:bg-champagne/40">
                <ImageIcon className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-royal-blue/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-cream">{label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
