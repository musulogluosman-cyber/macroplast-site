'use client'

import { startTransition, useActionState, useEffect, useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitRfq, type RfqState } from '@/app/actions'
import { productGroups, RFQ_SELECT_EVENT } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const initialState: RfqState = { status: 'idle' }

const inputClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary/15 aria-[invalid=true]:border-destructive'

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {' *'}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function RfqForm() {
  const [state, formAction, pending] = useActionState(submitRfq, initialState)
  const [product, setProduct] = useState('')

  useEffect(() => {
    const onSelect = (e: Event) => setProduct((e as CustomEvent<string>).detail)
    window.addEventListener(RFQ_SELECT_EVENT, onSelect)
    return () => window.removeEventListener(RFQ_SELECT_EVENT, onSelect)
  }, [])

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Talebiniz iletildi</h3>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const e = state.errors ?? {}
  const describe = (key: keyof typeof e) => (e[key] ? { 'aria-invalid': true, 'aria-describedby': `${key}-error` } : {})

  return (
    <form
      noValidate
      className="grid gap-5 sm:grid-cols-2"
      onSubmit={(ev) => {
        // Submitting via a transition avoids React's automatic form reset, so input survives validation errors.
        ev.preventDefault()
        const data = new FormData(ev.currentTarget)
        startTransition(() => formAction(data))
      }}
    >
      <Field id="name" label="Ad Soyad" required error={e.name}>
        <input id="name" name="name" autoComplete="name" required className={inputClass} placeholder="Adınız Soyadınız" {...describe('name')} />
      </Field>
      <Field id="company" label="Şirket Adı" required error={e.company}>
        <input id="company" name="company" autoComplete="organization" required className={inputClass} placeholder="Firma Ünvanı" {...describe('company')} />
      </Field>
      <Field id="email" label="E-posta" required error={e.email}>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} placeholder="ornek@firma.com.tr" {...describe('email')} />
      </Field>
      <Field id="phone" label="Telefon" error={e.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+90 5XX XXX XX XX" {...describe('phone')} />
      </Field>
      <Field id="product" label="İlgilenilen Ürün Grubu" required error={e.product} className="sm:col-span-2">
        <select
          id="product"
          name="product"
          required
          value={product}
          onChange={(ev) => setProduct(ev.target.value)}
          className={cn(inputClass, 'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2020%2020%27%20fill%3D%27%2364748b%27%3E%3Cpath%20d%3D%27M5.5%207.5l4.5%204.5%204.5-4.5%27%20stroke%3D%27%2364748b%27%20stroke-width%3D%271.5%27%20fill%3D%27none%27/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10')}
          {...describe('product')}
        >
          <option value="" disabled>
            Ürün grubu seçin
          </option>
          {productGroups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Mesaj / Teknik Çizim Notu" required error={e.message} className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(inputClass, 'resize-y')}
          placeholder="Ölçüler (DN, iç/dış çap, kalınlık), adet, çalışma sıcaklığı, basınç ve akışkan bilgisi..."
          {...describe('message')}
        />
      </Field>

      <div className="flex flex-col-reverse gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {state.status === 'error' ? <span className="text-destructive">{state.message}</span> : 'Bilgileriniz yalnızca teklif hazırlamak için kullanılır.'}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-navy disabled:opacity-70"
        >
          {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
          Teklif Talep Et
        </button>
      </div>
    </form>
  )
}
