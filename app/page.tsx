import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Products } from '@/components/site/products'
import { Engineering } from '@/components/site/engineering'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Products />
        <Engineering />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
