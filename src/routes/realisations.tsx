import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero, PageShell } from "@/components/site/PageShell";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/realisations")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { casesPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(casesPage.title.join(" "), casesPage.body) };
  },
  component: CasesPage,
});

function CasesPage() {
  const { cases, casesPage, component } = useLocalizedContent();
  const [sector, setSector] = useState<string>("all");

  // Tabs follow the published work, so a new sector appears as soon as a case
  // for it is added to the content file.
  const sectors = cases.reduce<{ id: string; label: string }[]>((list, item) => {
    if (!list.some((entry) => entry.id === item.sector)) {
      list.push({ id: item.sector, label: item.sectorLabel });
    }
    return list;
  }, []);
  const filters = [{ id: "all", label: casesPage.filterAll }, ...sectors];
  const visibleCases = sector === "all" ? cases : cases.filter((item) => item.sector === sector);

  return (
    <PageShell>
      <PageHero eyebrow={casesPage.eyebrow} title={casesPage.title} body={casesPage.body} />

      <section className="band">
        <div
          role="group"
          aria-label={casesPage.filterLabel}
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={sector === filter.id}
              onClick={() => setSector(filter.id)}
              className={`border-b-2 pb-2 text-[0.8125rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                sector === filter.id
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
              {filter.id === "all" && (
                <span className="ml-1.5 align-super text-[0.625rem] text-muted-foreground">
                  {cases.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {visibleCases.length === 0 ? (
          <p className="mt-8 text-[0.875rem] text-muted-foreground">{casesPage.empty}</p>
        ) : (
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {visibleCases.map((item) => (
              <li key={item.id} className="surface-card overflow-hidden">
                <div className="media-frame rounded-none">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10]"
                  />
                </div>
                <div className="p-5">
                  <p className="eyebrow text-muted-foreground">{item.sectorLabel}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h2 className="font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.025em] text-foreground">
                      {item.shortTitle}
                    </h2>
                    <Link
                      to="/contact"
                      aria-label={`${component.readCase} — ${item.title}`}
                      className="arrow-circle"
                    >
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <p className="mt-4 text-[0.75rem] text-muted-foreground">{item.tags}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="band pt-10 sm:pt-12">
        <div className="relative isolate flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-[1.15rem] border border-border bg-card p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/15 blur-[80px]"
          />
          <p className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
            {casesPage.bannerTitle}
          </p>
          <Link to="/contact" className="cta-pill">
            {casesPage.bannerCta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
