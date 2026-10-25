'use client'

import { ProductCard, type Product } from './product-card'
import { useLanguage } from '../../app/LanguageContext'

export function Products() {
  const { lang, t } = useLanguage()

  const products: Product[] = [
    {
      id: 'flans',
      title: lang === 'en' ? 'PTFE Flange Gaskets' : 'PTFE Flanş Contaları',
      description: lang === 'en' 
        ? 'PTFE flange gaskets providing full sealing for acid and steam lines.' 
        : 'Asit ve buhar hatları için tam sızdırmazlık sağlayan PTFE flanş contaları.',
      image: '/images/flans-contasi.png',
      tags: lang === 'en' ? ['Acid Line', 'Steam Line'] : ['Asit Hattı', 'Buhar Hattı'],
      group: 'Flanş Contası',
      specs: [
        [lang === 'en' ? 'Temperature' : 'Sıcaklık', '-200°C / +260°C'],
        [lang === 'en' ? 'Pressure' : 'Basınç', '≤ 100 bar'],
        [lang === 'en' ? 'Dimensions' : 'Ölçü', 'DN10 – DN1200'],
        [lang === 'en' ? 'Thickness' : 'Kalınlık', '1 – 6 mm'],
      ],
    },
    {
      id: 'burc',
      title: lang === 'en' ? 'PTFE Bushings & Custom Parts' : 'PTFE Burçlar ve Özel Parçalar',
      description: lang === 'en' 
        ? 'Custom machining and bushings according to customer technical drawings.' 
        : 'Müşteri teknik resmine göre özel talaşlı imalat ve burçlar.',
      image: '/images/ptfe-burc.png',
      tags: lang === 'en' ? ['Lathe Machining', 'Technical Drawing'] : ['Torna İmalatı', 'Teknik Resim'],
      group: 'PTFE Burç',
      specs: [
        [lang === 'en' ? 'Tolerance' : 'Tolerans', '±0,05 mm'],
        [lang === 'en' ? 'Diameter' : 'Çap', 'Ø5 – Ø600 mm'],
      ],
    },
    {
      id: 'musluk',
      title: lang === 'en' ? 'Valve & Plumbing Gaskets' : 'Musluk ve Sıhhi Tesisat Contaları',
      description: lang === 'en' 
        ? 'Hygienic sealing for food and drinking water applications.' 
        : 'Gıda ve içme suyu uygulamaları için hijyenik sızdırmazlık.',
      image: '/images/musluk-conta.png',
      tags: lang === 'en' ? ['Food', 'Drinking Water'] : ['Gıda', 'İçme Suyu'],
      group: 'Özel İmalat',
      specs: [
        [lang === 'en' ? 'Compliance' : 'Uygunluk', lang === 'en' ? 'Food & drinking water' : 'Gıda & içme suyu'],
        [lang === 'en' ? 'Temperature' : 'Sıcaklık', '-50°C / +200°C'],
        [lang === 'en' ? 'Dimensions' : 'Ölçü', '1/4" – 2"'],
        [lang === 'en' ? 'Color' : 'Renk', lang === 'en' ? 'Natural white' : 'Doğal beyaz'],
      ],
    },
  ]

  return (
    <section id="urunler" className="border-y border-border bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              {t('products.badge') || 'Ürünler'}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {t('products.title') || 'Ana ürün gruplarımız'}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t('products.description') || 'Standart katalog ölçülerinden müşteriye özel imalata kadar, her uygulama için doğru PTFE çözümü.'}
            </p>
          </div>
          <a
            href="#iletisim"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t('products.custom_link') || 'Aradığınız ölçü yok mu? Özel imalat talep edin →'}
          </a>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
