const photos = [
  {
    src: '/images/striga-boat.jpg',
    alt: 'STRIGA anchored on the calm blue sea off Piran with her tender alongside',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/striga-deck.jpg',
    alt: "The view forward along STRIGA's deck with fenders and ropes",
    className: '',
  },
  {
    src: '/images/striga-helm.jpg',
    alt: "Looking up through STRIGA's hatch at the sails and ship's wheel",
    className: '',
  },
  {
    src: '/images/striga-swimming.jpg',
    alt: 'STRIGA anchored offshore while people swim in the turquoise water',
    className: 'sm:col-span-2',
  },
  {
    src: '/images/striga-tender.jpg',
    alt: "STRIGA's inflatable tender floating on calm clear water",
    className: 'sm:col-span-2',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-display font-bold uppercase tracking-wide text-primary">
          Gallery
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
          A few snaps from aboard
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Real photos of STRIGA and her trips out of Piran. More to come as the
          season rolls on.
        </p>
      </div>

      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[200px]">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border-2 border-border ${p.className}`}
          >
            <img
              src={p.src || '/placeholder.svg'}
              alt={p.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
