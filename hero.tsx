import { Sun, Waves } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/striga-boat.jpg"
          alt="STRIGA, our tan-hulled 1973 motorsailer, anchored on the calm blue sea off Piran with her tender alongside"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-foreground/40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-display font-bold text-accent-foreground">
          <Sun className="h-4 w-4" />
          A 1973 motorsailer · home port Piran
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-background text-balance sm:text-6xl">
          Meet STRIGA — the little witch of the Piran bay
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-background/90">
          Hop aboard our characterful old motorsailer for half-day and full-day
          trips out of Piran. Not a shiny powerboat, not a racing yacht — just a
          warm, characterful old boat, a swim in a quiet cove, and a bit of
          sunshine. Small groups only, and pets are very welcome.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#trips"
            className="rounded-full bg-primary px-6 py-3 font-display text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            See the trips
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-background/90 px-6 py-3 font-display text-lg font-bold text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Waves className="h-5 w-5 text-secondary" />
            Say ahoy to Franz
          </a>
        </div>
      </div>
    </section>
  )
}
