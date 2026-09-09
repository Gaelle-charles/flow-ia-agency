import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import brand from "@/content/brand.config.json";
import { useLocalizedContent } from "@/content/localized-content";
import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/locale";

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const label = locale === "fr" ? "Choisir la langue" : "Choose language";

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex w-fit items-center rounded-full border border-border bg-secondary/60 p-1 ${className}`}
    >
      {(["fr", "en"] as Locale[]).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={locale === option}
          onClick={() => setLocale(option)}
          className={`min-h-8 rounded-full px-3 text-xs font-bold uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            locale === option
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { common, navigation } = useLocalizedContent();

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-transform focus:translate-y-0"
      >
        {common.skipToContent}
      </a>

      <header className="sticky top-2 z-50 mx-2 mb-2 rounded-full border border-border bg-background/92 px-4 backdrop-blur-xl sm:mx-3 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            to="/"
            aria-label={`${brand.name}, ${common.homeLabel}`}
            className="shrink-0 rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-lg font-black tracking-[-0.03em] sm:text-xl">{brand.name}</span>
          </Link>

          <nav aria-label={common.mainNavigation} className="hidden items-center gap-7 lg:flex">
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

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {common.contactCta}
            </Link>
          </div>

          <details className="relative lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-border px-4 text-sm font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" aria-hidden="true" />
              {common.menu}
            </summary>
            <nav
              aria-label={common.mobileNavigation}
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
              <div className="px-2 py-2">
                <LanguageSwitcher />
              </div>
              <Link
                to="/contact"
                className="mt-1 rounded-2xl bg-accent px-4 py-3 text-sm font-bold text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                {common.contactCta}
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function LegalFooter() {
  const { common, navigation } = useLocalizedContent();

  return (
    <footer className="border-t border-border bg-background px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:items-end">
        <div>
          <p className="text-2xl font-black tracking-[-0.04em] text-foreground">{brand.name}</p>
          <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
            {common.brandCategory}
          </p>
        </div>

        <nav aria-label={common.footerNavigation} className="grid grid-cols-2 gap-x-6 gap-y-3">
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
            {common.journal}
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {common.contact}
          </Link>
        </nav>

        <div className="lg:text-right">
          <p className="text-sm leading-6 text-muted-foreground">
            {brand.name} {common.legalLine} {brand.legalName}, {brand.legalForm}, SIREN{" "}
            {brand.siren}.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            <Link
              to="/mentions-legales"
              className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {common.legal}
            </Link>
            <Link
              to="/confidentialite"
              className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {common.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
