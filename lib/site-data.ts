export const navLinks = [
  { href: '#anasayfa', label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#urunler', label: 'Ürünler' },
  { href: '#muhendislik', label: 'Mühendislik & Kalite' },
  { href: '#iletisim', label: 'İletişim' },
] as const

export const productGroups = ['Flanş Contası', 'PTFE Burç', 'Özel İmalat'] as const
export type ProductGroup = (typeof productGroups)[number]

export const RFQ_SELECT_EVENT = 'rfq:select-product'

export const contactInfo = {
  email: 'info@macroplast.com.tr',
  phone: '+90 (216) 393 1711',
  phoneHref: '+902163931711',
  hours: 'Pazartesi – Cuma: 08:00 – 18:00',
  address: 'Çınardere mahallesi, Acar sokak, NO:6/A Pendik-İstanbul-Türkiye',
}
