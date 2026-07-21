import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Story } from '@/components/story'
import { Trips } from '@/components/trips'
import { Gallery } from '@/components/gallery'
import { GoodToKnow } from '@/components/good-to-know'
import { Contact, SiteFooter } from '@/components/contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Trips />
        <Gallery />
        <GoodToKnow />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
