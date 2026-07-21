import { Anchor, Ship, Compass } from 'lucide-react'

const bits = [
  {
    icon: Ship,
    title: 'A motorsailer, honestly',
    text: 'STRIGA is not a powerboat and not a pure sailing yacht. We can hoist the sails when the wind is kind, but more often we cruise gently on her trusty 50hp Perkins diesel.',
  },
  {
    icon: Anchor,
    title: 'Born in 1973',
    text: 'She was built in Italy in 1973, her first home port was Trieste, and today she is registered in Piran. "Striga" means witch in the local Italian slang — a friendly one.',
  },
  {
    icon: Compass,
    title: 'Franz at the helm',
    text: 'Your skipper and owner is Francesco — Franz — born in 1972, so exactly one year older than his boat. The two of them have plenty of stories to share.',
  },
]

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/images/striga-helm.jpg"
            alt="The view from STRIGA's helm, looking up through the open hatch at the sails and ship's wheel"
            className="aspect-4/5 w-full rounded-3xl border-4 border-background object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 -right-3 rotate-3 rounded-2xl bg-accent px-5 py-3 font-display font-bold text-accent-foreground shadow-lg sm:-right-5">
            "Mind your head on the boom!"
          </div>
        </div>

        <div>
          <span className="font-display font-bold uppercase tracking-wide text-primary">
            Our story
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            An old sea witch with a very big heart
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We are not here to sell you champagne on a floating hotel. STRIGA is
            a proper old motorsailer — ropes, brass and character, with cozy
            wood-trimmed interiors — and we take her out for the simple
            pleasures: a slow cruise along the coast, a swim in clear water, and
            time to do very little at all.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {bits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 rounded-2xl border-2 border-border bg-card p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {b.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
