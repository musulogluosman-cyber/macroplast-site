import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Macroplast Hazar | PTFE Conta ve Endüstriyel Sızdırmazlık Çözümleri',
  description:
    'Yüksek sıcaklık, kimyasal direnç ve aşırı basınç gerektiren tesisler için %100 saf PTFE (Teflon) flanş contaları, burçlar ve özel sızdırmazlık çözümleri.',
  keywords: [
    'PTFE conta',
    'Teflon conta',
    'flanş contası',
    'PTFE burç',
    'torna imalatı',
    'endüstriyel sızdırmazlık',
  ],
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#141c2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
