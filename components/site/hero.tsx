'use client'

import Image from 'next/image'
import { ArrowRight, Thermometer, ScanLine, Timer } from 'lucide-react'
import { useLanguage } from '../../app/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  const badges = [
    { 
      icon: Thermometer, 
      title: t('hero.badge1.title') || 'Yüksek Sıcaklık Dayanımı', 
      detail: t('hero.badge1.detail') || '-200°C / +260°C' 
    },
    { 
      icon: ScanLine, 
      title: t('hero.badge2.title') || 'Tornada Hassas İmalat', 
      detail: t('hero.badge2.detail') || '±0,1 mm tolerans' 
    },
    { 
      icon: Timer, 
      title: t('hero.badge3.title') || 'Hızlı Termin & Kalite Güvencesi', 
      detail: t('hero.badge3.detail') || 'Lot bazlı izlenebilirlik' 
    },
  ]

  return (
    <section id="anasayfa" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-amber-accent">
            <span className="size-1.5 rounded-full bg-amber-accent" aria-hidden="true" />
            {t('hero.tagline') || 'PTFE Sızdırmazlık Uzmanı'}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero.title_prefix') || 'Endüstriyel Sızdırmazlıkta'}{' '}
            <span className="text-amber-accent">{t('hero.title_highlight') || 'Üstün Mühendislik'}</span>{' '}
            {t('hero.title_suffix') || 've Güven'}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
            {t('hero.description') || 'Yüksek sıcaklık, kimyasal direnç ve aşırı basınç gerektiren endüstriyel tesisler için %100 saf PTFE conta çözümleri üretiyoruz.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#urunler"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-amber-accent"
            >
              {t('hero.btn_catalog') || 'Ürün Kataloğunu İncele'}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center rounded-md border border-navy-foreground/30 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-navy-foreground/60 hover:bg-navy-foreground/5"
            >
              {t('hero.btn_consulting') || 'Teknik Danışmanlık Alın'}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-navy-foreground/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/hero-ptfe.png"
              alt="Çelik yüzey üzerinde istiflenmiş beyaz PTFE flanş contaları"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-lg border border-navy-foreground/15 bg-navy/80 px-4 py-3 backdrop-blur-md sm:left-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-navy-foreground/60">
              {t('hero.material_label') || 'Malzeme'}
            </p>
            <p className="text-sm font-semibold">
              {t('hero.material_value') || '%100 Saf PTFE'}
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-navy-foreground/10 bg-navy-foreground/[0.03]">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-navy-foreground/10 px-4 sm:grid-cols-3 sm:divide-y-0 sm:px-6 lg:divide-x lg:px-8">
          {badges.map(({ icon: Icon, title, detail }) => (
            <li key={title} className="flex items-center gap-4 py-5 lg:px-6 lg:first:pl-0">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-amber-accent/10 text-amber-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-snug">{title}</p>
                <p className="font-mono text-xs text-navy-foreground/60">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
