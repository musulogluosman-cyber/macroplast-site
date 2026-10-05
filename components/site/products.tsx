import { ProductCard, type Product } from './product-card'

const products: Product[] = [
  {
    id: 'flans',
    title: 'PTFE Flanş Contaları',
    description: 'Asit ve buhar hatları için tam sızdırmazlık sağlayan PTFE flanş contaları.',
    image: '/images/flans-contasi.png',
    tags: ['Asit Hattı', 'Buhar Hattı'],
    group: 'Flanş Contası',
    specs: [
      ['Sıcaklık', '-200°C / +260°C'],
      ['Basınç', '≤ 100 bar'],
      ['Ölçü', 'DN10 – DN1200'],
      ['Kalınlık', '1 – 6 mm'],
    ],
  },
  {
    id: 'burc',
    title: 'PTFE Burçlar ve Özel Parçalar',
    description: 'Müşteri teknik resmine göre özel talaşlı imalat ve burçlar.',
    image: '/images/ptfe-burc.png',
    tags: ['Torna İmalatı', 'Teknik Resim'],
    group: 'PTFE Burç',
    specs: [
      ['Tolerans', '±0,05 mm'],
      ['Çap', 'Ø5 – Ø600 mm'],
    ],
  },
  {
    id: 'musluk',
    title: 'Musluk ve Sıhhi Tesisat Contaları',
    description: 'Gıda ve içme suyu uygulamaları için hijyenik sızdırmazlık.',
    image: '/images/musluk-conta.png',
    tags: ['Gıda', 'İçme Suyu'],
    group: 'Özel İmalat',
    specs: [
      ['Uygunluk', 'Gıda & içme suyu'],
      ['Sıcaklık', '-50°C / +200°C'],
      ['Ölçü', '1/4" – 2"'],
      ['Renk', 'Doğal beyaz'],
    ],
  },
]

export function Products() {
  return (
    <section id="urunler" className="border-y border-border bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">Ürünler</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Ana ürün gruplarımız</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Standart katalog ölçülerinden müşteriye özel imalata kadar, her uygulama için doğru PTFE çözümü.
            </p>
          </div>
          <a
            href="#iletisim"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Aradığınız ölçü yok mu? Özel imalat talep edin →
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
