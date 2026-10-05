import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { RfqForm } from './rfq-form'
import { contactInfo } from '@/lib/site-data'

const items = [
  { icon: Mail, label: 'E-posta', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Telefon', value: contactInfo.phone, href: `tel:${contactInfo.phoneHref}` },
  { icon: Clock, label: 'Çalışma Saatleri', value: contactInfo.hours },
  { icon: MapPin, label: 'Adres', value: contactInfo.address },
]

export function Contact() {
  return (
    <section id="iletisim" className="border-t border-border bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">Teklif & İletişim</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Projeniz için teklif alın</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ölçü, malzeme ve çalışma koşullarını paylaşın; mühendis ekibimiz 1 iş günü içinde size dönüş yapsın.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-2">
            <RfqForm />
          </div>

          <aside className="flex flex-col rounded-xl bg-navy p-6 text-navy-foreground sm:p-8">
            <h3 className="text-lg font-semibold">İletişim Bilgileri</h3>
            <ul className="mt-6 flex flex-col gap-6">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy-foreground/10 text-amber-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.7rem] uppercase tracking-widest text-navy-foreground/55">{label}</p>
                    {href ? (
                      <a href={href} className="break-words text-sm font-medium hover:text-amber-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium leading-relaxed">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-auto border-t border-navy-foreground/10 pt-6 text-sm leading-relaxed text-navy-foreground/70">
              Acil arıza ve duruş durumlarında telefonla ulaşarak öncelikli üretim talep edebilirsiniz.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
