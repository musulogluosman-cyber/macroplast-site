'use client'

import { BadgeCheck } from 'lucide-react'
import { Logo } from './logo'
import { navLinks, contactInfo } from '@/lib/site-data'
import { useLanguage } from '../../app/LanguageContext'

export function SiteFooter() {
  const { lang, t } = useLanguage()

  const productLinks = lang === 'en' 
    ? ['PTFE Flange Gaskets', 'PTFE Bushings', 'Plumbing Gaskets']
    : ['PTFE Flanş Contaları', 'PTFE Burçlar', 'Sıhhi Tesisat Contaları']

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/65">
            {t('footer.description') || (lang === 'en' 
              ? 'High-performance PTFE gaskets, bushings, and custom sealing solutions.' 
              : 'Yüksek performanslı PTFE contalar, burçlar ve özel sızdırmazlık çözümleri.')}
          </p>
        </div>

        <nav aria-label={lang === 'en' ? 'Quick links' : 'Hızlı bağlantılar'}>
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-accent">
            {t('footer.quick_links') || (lang === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar')}
          </h2>
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-accent">
            {t('footer.products') || (lang === 'en' ? 'Products' : 'Ürünler')}
          </h2>
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-accent">
            {t('footer.quality_contact') || (lang === 'en' ? 'Quality & Contact' : 'Kalite & İletişim')}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-amber-accent" aria-hidden="true" />
              {t('footer.iso') || (lang === 'en' ? 'ISO 9001 Quality Management System' : 'ISO 9001 Kalite Yönetim Sistemi')}
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
          <p>{t('footer.rights') || '© 2026 Macroplast Hazar. Tüm hakları saklıdır.'}</p>
          <ul className="flex gap-5">
            <li>
              <a href="#" className="hover:text-navy-foreground">
                {t('footer.privacy') || (lang === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-navy-foreground">
                {t('footer.kvkk') || 'KVKK Aydınlatma Metni'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
