import { MessageCircle, MapPin, Anchor } from 'lucide-react'

const details = [
  {
    icon: MessageCircle,
    label: 'WhatsApp or call Franz',
    value: '+385 98 997 6290',
    href: 'https://wa.me/385989976290',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Where we set off',
    value: 'Home port: Piran',
    href: 'https://maps.google.com/?q=Piran',
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="overflow-hidden rounded-3xl border-2 border-border bg-secondary/20">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-wide text-primary">
              <MessageCircle className="h-4 w-4" />
              Say ahoy
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
              Fancy a day out? Message Franz
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              There is no online booking robot here — just Franz and STRIGA.
              WhatsApp or call the same number, and he will find you a spot,
              answer your questions and tell you exactly where to meet the boat
              in Piran.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.external ? '_blank' : undefined}
                  rel={d.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-muted-foreground">
                      {d.label}
                    </span>
                    <span className="font-display text-lg font-bold text-foreground">
                      {d.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src="/images/striga-tender.jpg"
              alt="STRIGA's inflatable tender floating on calm clear water off the coast"
              className="aspect-square w-full rounded-3xl border-4 border-background object-cover shadow-xl"
            />
            <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
              <Anchor className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground/10 bg-secondary/15">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Anchor className="h-4 w-4" />
          </span>
          STRIGA
        </a>
        <p className="text-center text-sm text-muted-foreground sm:text-right">
          Family-run sea excursions from Piran aboard a 1973 motorsailer.
          <br className="hidden sm:block" /> Operated by{' '}
          <span className="font-semibold text-foreground">
            Canelus d.o.o.
          </span>{' '}
          travel agency · code 8825236614
          <br className="hidden sm:block" /> © {new Date().getFullYear()} STRIGA
          — fair winds and good times.
        </p>
      </div>
    </footer>
  )
}
