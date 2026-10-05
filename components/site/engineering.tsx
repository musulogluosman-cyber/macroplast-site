import Image from 'next/image'
import { PenTool, Cog } from 'lucide-react'

const features = [
  {
    icon: PenTool,
    title: 'Hızlı Prototipleme',
    text: 'Özel ölçü ve teknik resme göre kısa sürede numune üretimi; DWG, DXF ve STEP dosyalarıyla doğrudan çalışma.',
  },
  {
    icon: Cog,
    title: 'Tornada Hassas İmalat',
    text: 'Torna tezgahlarımızda PTFE çubuk ve borulardan tekrarlanabilir, çapaksız ve dar toleranslı parça üretimi.',
  },
]

const steps = ['Teknik Analiz', 'Malzeme Seçimi', 'Prototip', 'Numune Onayı', 'Seri Üretim']

export function Engineering() {
  return (
    <section id="muhendislik" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">Mühendislik & Kalite</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Teknik resminizden seri üretime
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Her sızdırmazlık problemi farklıdır. Uygulama koşullarınızı analiz eder, doğru malzemeyi seçer ve
              ölçülebilir kaliteyle üretiriz.
            </p>
          </div>

          <div className="lg:col-span-3">
            <ul className="grid gap-5 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-navy p-6 text-navy-foreground sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-amber-accent">Üretim Süreci</h3>
              <ol className="mt-6 grid gap-4 sm:grid-cols-5">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 sm:flex-col sm:items-start">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-amber-accent/50 font-mono text-xs text-amber-accent">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-navy-foreground/10 pt-5 text-sm text-navy-foreground/70">
                Kalite yönetim sistemimiz ISO 9001 standartlarına uygun olarak yürütülmektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
