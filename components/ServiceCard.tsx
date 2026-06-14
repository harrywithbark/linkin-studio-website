import type { LucideIcon } from 'lucide-react'

export interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border-gray bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-royal-blue/30 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-royal-blue/10 text-royal-blue transition-colors duration-300 group-hover:bg-royal-blue group-hover:text-cream">
        <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-heading mb-3 text-2xl font-semibold text-royal-blue">
        {title}
      </h3>
      <p className="leading-relaxed text-charcoal/80">{description}</p>
    </div>
  )
}
