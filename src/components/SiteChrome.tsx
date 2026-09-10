import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Menu, X } from "lucide-react";

import brand from "@/content/brand.config.json";
import { useLocalizedContent } from "@/content/localized-content";
import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/locale";

const socialIcons = { linkedin: Linkedin, x: X, instagram: Instagram } as const;

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const { common } = useLocalizedContent();

  return (
    <div
      role="group"
      aria-label={common.languageLabel}
      className={`flex w-fit items-center gap-1 ${className}`}
    >
      {(["fr", "en"] as Locale[]).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={locale === option}
          onClick={() => setLocale(option)}
          className={`flex h-7 min-w-8 items-center justify-center rounded-full px-2 text-[0.6875rem] font-bold uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
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

      <header className="sticky top-0 z-50 bg-page/85 backdrop-blur-xl">
        <div className="band flex min-h-[4.25rem] items-center justify-between gap-6">
          <Link
            to="/"
            aria-label={`${brand.name}, ${common.homeLabel}`}
            className="shrink-0 rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="font-display text-[1.0625rem] font-extrabold tracking-[-0.04em]">
              {brand.name}
            </span>
          </Link>

          <nav aria-label={common.mainNavigation} className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground" }}
                className="text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <Link to="/contact" className="cta-pill">
              {common.contactCta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <details className="group relative">
              <summary
                aria-label={common.menu}
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground [&::-webkit-details-marker]:hidden"
              >
                <Menu aria-hidden="true" className="h-5 w-5" />
              </summary>
              <nav
                aria-label={common.mobileNavigation}
                className="absolute right-0 top-12 z-50 grid w-[min(17rem,calc(100vw-2rem))] gap-1 rounded-2xl border border-border bg-card p-3 shadow-2xl"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/contact" className="cta-pill mt-2 justify-center">
                  {common.contactCta}
                  <span aria-hidden="true">→</span>
                </Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}

export function LegalFooter() {
  const { common, navigation } = useLocalizedContent();
  const socials = brand.social.filter((item) => item.url.length > 0);
  const [primaryLinks, secondaryLinks] = [navigation.slice(0, 3), navigation.slice(3)];

  return (
    <footer className="band pb-8 pt-14 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1.9fr]">
        <div>
          <p className="font-display text-xl font-extrabold tracking-[-0.04em] text-foreground">
            {brand.name}
          </p>
          <p className="mt-2 text-[0.8125rem] text-muted-foreground">{common.brandCategory}</p>
        </div>

        <nav
          aria-label={common.footerNavigation}
          className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[0.8125rem]"
        >
          <div className="grid gap-2.5">
            {primaryLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-2.5">
            {secondaryLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {common.contact}
            </Link>
          </div>
        </nav>

        <div className="lg:text-right">
          {socials.length > 0 && (
            <ul
              aria-label={common.socialLabel}
              className="flex gap-4 text-muted-foreground lg:justify-end"
            >
              {socials.map((item) => {
                const Icon = socialIcons[item.id as keyof typeof socialIcons];
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.label}
                      className="transition-colors hover:text-foreground"
                    >
                      <Icon aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="mt-4 text-[0.75rem] leading-6 text-muted-foreground">
            {brand.name} {common.legalLine} {brand.legalName}, {brand.legalForm} – SIREN{" "}
            {brand.siren}.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-[0.75rem] text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {brand.name}. {common.rightsReserved}
        </p>
        <div className="flex gap-6">
          <Link to="/mentions-legales" className="transition-colors hover:text-foreground">
            {common.legal}
          </Link>
          <Link to="/confidentialite" className="transition-colors hover:text-foreground">
            {common.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
