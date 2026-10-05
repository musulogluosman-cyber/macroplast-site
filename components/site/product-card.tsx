'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RFQ_SELECT_EVENT, type ProductGroup } from '@/lib/site-data'

export type Product = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  group: ProductGroup
  specs: [string, string][]
}

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)
  const specsId = useId()

  function requestQuote() {
    window.dispatchEvent(new CustomEvent(RFQ_SELECT_EVENT, { detail: product.group }))
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/40 bg-white/80 px-2 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wide text-navy backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug">{product.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <div
          id={specsId}
          className={cn('grid transition-all duration-300', open ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}
        >
          <div className="min-h-0 overflow-hidden" inert={!open}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
              {product.specs.map(([label, value]) => (
                <div key={label} className="bg-secondary/60 px-3 py-2">
                  <dt className="text-[0.7rem] uppercase tracking-wide text-muted-foreground">{label}</dt>
                  <dd className="font-mono text-sm font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={specsId}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Teknik Detaylar
            <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={requestQuote}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-accent"
          >
            Teklif İste
            <Send className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
