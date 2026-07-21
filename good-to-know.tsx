import {
  Users,
  Dog,
  DoorClosed,
  Refrigerator,
  Waves,
  ShowerHead,
  Sailboat,
  Info,
} from 'lucide-react'

const items = [
  {
    icon: Users,
    title: 'Small groups only',
    text: 'STRIGA can legally carry 8, but we welcome a maximum of 4 guests so there is room to breathe. Cosy, never crowded.',
  },
  {
    icon: Dog,
    title: 'Pets welcome',
    text: 'Four-legged crew are happily aboard. They cannot come into the cabin anyway, so they stay out in the fresh air with everyone else.',
  },
  {
    icon: DoorClosed,
    title: 'A proper WC',
    text: 'There is a toilet in its own separate space — a little bit of privacy, which is not a given on a boat this age.',
  },
  {
    icon: Refrigerator,
    title: 'Small fridge aboard',
    text: 'We provide fresh drinking water. Bring your own food and drinks and keep them cool in our little fridge.',
  },
  {
    icon: Waves,
    title: 'Easy into the sea',
    text: 'A comfortable bathing platform with a ladder makes getting in and out of the water simple. Her tender takes you to the beach when we anchor nearby.',
  },
  {
    icon: ShowerHead,
    title: 'Plenty of water',
    text: 'STRIGA carries lots of water, so there is enough for a proper rinse and shower after your swim.',
  },
]

export function GoodToKnow() {
  return (
    <section id="good-to-know" className="bg-accent/25 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display font-bold uppercase tracking-wide text-primary">
            Good to know
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            The honest little details
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We would rather be honest than oversell. Here is exactly what to
            expect aboard.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-2 border-border bg-card p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl border-2 border-border bg-card p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Sailboat className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                One honest note
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                STRIGA does not have a big sunbathing platform — she is an old
                working motorsailer, not a party boat. What she offers instead
                is character, shade and calm.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border-2 border-primary/30 bg-primary/10 p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Info className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Skipper&apos;s tip: seasickness
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                If you are prone to seasickness, take a pill before we set off.
                Funnily enough it is often worse at anchor than under way, so
                come prepared and enjoy the day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
