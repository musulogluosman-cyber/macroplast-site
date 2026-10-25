'use client'

import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { RfqForm } from './rfq-form'
import { contactInfo } from '@/lib/site-data'
import { useLanguage } from '../../app/LanguageContext'

export function Contact() {
  const { t } = useLanguage()

  const items = [
    { icon: Mail, label: t('contact.email') || 'E-posta', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: t('contact.phone') || 'Telefon', value: contactInfo.phone, href: `tel:${contactInfo.phoneHref}` },
    { icon: Clock, label: t('contact.hours') || 'Çalışma Saatleri', value: contactInfo.hours },
    { icon: MapPin, label: t('contact.address') || 'Adres', value: contactInfo.address },
  ]

  return (
    <section id="iletisim" className="border-t border-border bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {t('contact.badge') || 'Teklif & İletişim'}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t('contact.title') || 'Projeniz için teklif alın'}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t('contact.description') || 'Ölçü, malzeme ve çalışma koşullarını paylaşın; mühendis ekibimiz 1 iş günü içinde size dönüş yapsın.'}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-2">
            <RfqForm />
          </div>

          <aside className="flex flex-col rounded-xl bg-navy p-6 text-navy-foreground sm:p-8">
            <h3 className="text-lg font-semibold">
              {t('contact.info_title') || 'İletişim Bilgileri'}
            </h3>
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
              {t('contact.urgent_note') || 'Acil arıza ve duruş durumlarında telefonla ulaşarak öncelikli üretim talep edebilirsiniz.'}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
