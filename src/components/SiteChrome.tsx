import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import brand from "@/content/brand.config.json";
import { navigation } from "@/content/site-content";

export function SiteHeader() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-transform focus:translate-y-0"
      >
        Aller au contenu
      </a>

      <header className="sticky top-2 z-50 mb-2 rounded-full border border-border bg-background/92 px-4 backdrop-blur-xl sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            to="/"
            aria-label={`${brand.name}, accueil`}
            className="shrink-0 rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-lg font-black tracking-[-0.03em] sm:text-xl">{brand.name}</span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-sm text-sm font-semibold transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden min-h-11 items-center rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            Parler d’un workflow
          </Link>

          <details className="relative lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-border px-4 text-sm font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" aria-hidden="true" />
              Menu
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-14 grid w-[min(19rem,calc(100vw-2rem))] gap-1 rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-black/45"
            >
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-1 rounded-2xl bg-accent px-4 py-3 text-sm font-bold text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                Parler d’un workflow
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function LegalFooter() {
  return (
    <footer className="mt-2 rounded-[1.4rem] border border-border bg-card px-5 py-8 sm:px-8 sm:py-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:items-end">
        <div>
          <p className="text-2xl font-black tracking-[-0.04em] text-foreground">{brand.name}</p>
          <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
            {brand.category}
          </p>
        </div>

        <nav aria-label="Navigation de pied de page" className="grid grid-cols-2 gap-x-6 gap-y-3">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/journal"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Journal
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact
          </Link>
        </nav>

        <div className="lg:text-right">
          <p className="text-sm leading-6 text-muted-foreground">
            {brand.name} est une marque de travail portée par {brand.legalName}, {brand.legalForm},
            SIREN {brand.siren}.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            <Link
              to="/mentions-legales"
              className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Mentions légales
            </Link>
            <Link
              to="/confidentialite"
              className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
