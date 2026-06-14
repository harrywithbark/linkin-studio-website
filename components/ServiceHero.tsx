import type { LucideIcon } from 'lucide-react'
import { ImageIcon } from 'lucide-react'

export interface ServiceHeroProps {
  title: string
  description: string
  icon: LucideIcon
  eyebrow?: string
}

export function ServiceHero({ title, description, icon: Icon, eyebrow }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-b from-cream to-light-gray px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-blue text-cream">
              <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
            </span>
            {eyebrow ? (
              <span className="text-sm font-semibold uppercase tracking-widest text-royal-blue/70">
                {eyebrow}
              </span>
            ) : null}
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-royal-blue text-balance md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
            {description}
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border-gray bg-white shadow-lg">
          <div className="flex h-full w-full items-center justify-center bg-champagne/20">
            <div className="flex flex-col items-center gap-2 text-royal-blue/30">
              <ImageIcon className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-sm font-medium">Image placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
