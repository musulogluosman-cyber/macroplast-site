import { Factory, Users, Globe2 } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Yıllık sektör deneyimi' },
  { value: '1.500+', label: 'Standart & özel ölçü' },
  { value: '%99,8', label: 'Zamanında teslimat oranı' },
  { value: '40+', label: 'Hizmet verilen sektör' },
]

const pillars = [
  { icon: Factory, title: 'Kendi Üretim Tesisimiz', text: 'Hammaddeden son ürüne tüm süreç tek çatı altında, tam kontrolle.' },
  { icon: Users, title: 'Mühendis Kadrosu', text: 'Uygulamaya özel malzeme seçimi ve tasarım desteği sunan teknik ekip.' },
  { icon: Globe2, title: 'Geniş Sektör Ağı', text: 'Kimya, petrokimya, gıda, ilaç, enerji ve su arıtma tesisleri.' },
]

export function About() {
  return (
    <section id="hakkimizda" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">Hakkımızda</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Kritik hatlar için tasarlanmış PTFE çözümleri
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Macroplast Hazar, yüksek performanslı PTFE (Teflon) contalar, burçlar ve özel sızdırmazlık
              elemanları üreten bir mühendislik ve imalat firmasıdır. Agresif kimyasallar, yüksek sıcaklık ve basınç
              altında çalışan tesislerin güvenliği için ölçülebilir kaliteyle üretiyoruz.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-card p-5">
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 font-mono text-3xl font-medium tracking-tight text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="flex flex-col gap-4 lg:pt-10">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5 rounded-lg border border-border bg-card p-6 shadow-sm">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
