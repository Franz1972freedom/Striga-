import { Clock, Sun, Anchor, Fish, Waves, Droplets, Fuel } from 'lucide-react'

const trips = [
  {
    name: 'Half-Day Trip',
    price: '€250',
    image: '/images/striga-deck.jpg',
    imageAlt: "The view forward along STRIGA's deck over calm blue water",
    duration: 'About 3–4 hours',
    when: 'Daytime or sunset',
    tagline: 'A relaxed cruise with a swim or a sunset.',
    includes: [
      { icon: Waves, text: 'Panoramic cruise + swim stop (daytime)' },
      { icon: Fish, text: 'Dolphin-spotting on sunset trips' },
      { icon: Sun, text: 'Perfect for a gentle first outing' },
    ],
  },
  {
    name: 'Full-Day Trip',
    price: '€350',
    image: '/images/striga-swimming.jpg',
    imageAlt: 'STRIGA anchored offshore while guests swim in the turquoise water',
    duration: 'About 6–8 hours',
    when: 'Out with the morning',
    tagline: 'A whole day of coast, coves and swimming.',
    includes: [
      { icon: Anchor, text: 'More time at anchor in quiet spots' },
      { icon: Waves, text: 'Swim, snorkel and use the tender to reach the beach' },
      { icon: Sun, text: 'Time to really switch off' },
    ],
    featured: true,
  },
]

export function Trips() {
  return (
    <section id="trips" className="bg-secondary/15 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display font-bold uppercase tracking-wide text-primary">
            The trips
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Two ways to spend a day on the water
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Both trips are small and unhurried — we welcome a maximum of 4
            guests aboard. Prices include fuel and fresh water; bring your own
            food and drinks and pop them in our little fridge.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {trips.map((trip) => (
            <article
              key={trip.name}
              className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-border bg-card shadow-sm transition-transform hover:-translate-y-1"
            >
              {trip.featured && (
                <span className="absolute right-4 top-4 z-10 rotate-3 rounded-full bg-accent px-3 py-1 font-display text-sm font-bold text-accent-foreground shadow">
                  Most loved
                </span>
              )}
              <img
                src={trip.image || '/placeholder.svg'}
                alt={trip.imageAlt}
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-extrabold text-foreground">
                    {trip.name}
                  </h3>
                  <span className="font-display text-2xl font-extrabold text-primary">
                    {trip.price}
                  </span>
                </div>
                <p className="mt-1 text-muted-foreground">{trip.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-semibold text-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {trip.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-semibold text-foreground">
                    <Sun className="h-4 w-4 text-primary" />
                    {trip.when}
                  </span>
                </div>

                <ul className="mt-5 flex flex-col gap-3">
                  {trip.includes.map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/25 text-secondary-foreground">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t-2 border-border pt-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Fuel className="h-4 w-4 text-secondary" />
                    Fuel included
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Droplets className="h-4 w-4 text-secondary" />
                    Fresh water included
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-6 rounded-full bg-primary px-5 py-3 text-center font-display font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Ask about this trip
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
          Fancy the boat to yourselves for a birthday or a get-together? Just
          ask Franz — STRIGA loves a private trip.
        </p>
      </div>
    </section>
  )
}
