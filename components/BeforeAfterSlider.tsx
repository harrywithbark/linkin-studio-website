'use client'

import { useRef, useState, useCallback } from 'react'
import { ImageIcon, MoveHorizontal } from 'lucide-react'

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const handlePointerUp = () => {
    draggingRef.current = false
  }

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-royal-blue/70">
            Photo Restoration
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-royal-blue md:text-4xl text-balance">
            Bringing Old Photos Back to Life
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
            Drag the slider to see how we restore faded, damaged, and aged photographs into crisp, vibrant memories.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-3xl border border-border-gray shadow-lg"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* After (full background) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-champagne/30 text-royal-blue/40">
            <ImageIcon className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-semibold">After — Restored</span>
          </div>

          {/* Before (clipped overlay) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-charcoal/15 text-charcoal/50 grayscale"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <ImageIcon className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-semibold">Before — Original</span>
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize bg-cream shadow-[0_0_0_1px_rgba(27,58,140,0.3)]"
            style={{ left: `${position}%` }}
            onPointerDown={handlePointerDown}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5))
              if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5))
            }}
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-royal-blue text-cream shadow-lg">
              <MoveHorizontal className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
