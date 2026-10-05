import { BadgeCheck } from 'lucide-react'
import { Logo } from './logo'
import { navLinks, contactInfo } from '@/lib/site-data'

const productLinks = ['PTFE Flanş Contaları', 'PTFE Burçlar', 'Sıhhi Tesisat Contaları']

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/65">
            Yüksek performanslı PTFE contalar, burçlar ve özel sızdırmazlık çözümleri.
          </p>
        </div>

        <nav aria-label="Hızlı bağlantılar">
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-accent">Hızlı Bağlantılar</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-accent">Ürünler</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {productLinks.map((p) => (
              <li key={p}>
                <a href="#urunler" className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-accent">Kalite & İletişim</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-amber-accent" aria-hidden="true" />
              ISO 9001 Kalite Yönetim Sistemi
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-navy-foreground">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Macroplast Hazar. Tüm hakları saklıdır.</p>
          <ul className="flex gap-5">
            <li>
              <a href="#" className="hover:text-navy-foreground">
                Gizlilik Politikası
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-navy-foreground">
                KVKK Aydınlatma Metni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
