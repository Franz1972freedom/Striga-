'use client'

import { useState } from 'react'
import { Anchor, Menu, X } from 'lucide-react'

const links = [
  { href: '#trips', label: 'The Trips' },
  { href: '#story', label: 'Our Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#good-to-know', label: 'Good to Know' },
  { href: '#contact', label: 'Say Ahoy' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Anchor className="h-5 w-5" />
          </span>
          STRIGA
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold text-foreground/75 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-secondary px-5 py-2 font-display font-bold text-secondary-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-foreground/10 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
