import { createFileRoute, Link } from "@tanstack/react-router";

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

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: readonly string[];
  intro?: string;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-10">
      <div>
        <p className="eyebrow text-muted-foreground">{eyebrow}</p>
        <h2 className="display-2 mt-4 text-foreground">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>
      {intro && (
        <p className="max-w-[52ch] text-[0.8125rem] leading-6 text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

function CasesPage() {
  const { cases, casesPage, examples } = useLocalizedContent();
  const { featuredCase, labels } = casesPage;
  const caseRows = [
    { label: labels.before, value: featuredCase.before },
    { label: labels.context, value: featuredCase.context },
    { label: labels.execution, value: featuredCase.execution },
    { label: labels.intelligence, value: featuredCase.intelligence },
    { label: labels.humanControl, value: featuredCase.humanControl },
    { label: labels.outcome, value: featuredCase.outcome },
  ];

  return (
    <PageShell>
      <PageHero eyebrow={casesPage.eyebrow} title={casesPage.title} body={casesPage.body} />

      {/* Client work */}
      <section className="band">
        <article className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-10">
          <div>
            <p className="eyebrow text-accent">{casesPage.clientEyebrow}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {featuredCase.statuses.map((status) => (
                <li
                  key={status}
                  className="rounded-full border border-border px-3 py-1 text-[0.6875rem] font-semibold text-muted-foreground"
                >
                  {status}
                </li>
              ))}
            </ul>
            <h2 className="display-2 mt-5 text-foreground">{featuredCase.title}</h2>
            <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-7 text-muted-foreground">
              {featuredCase.summary}
            </p>
            <p className="mt-6 text-[0.75rem] leading-5 text-muted-foreground">
              {featuredCase.proofNote} {featuredCase.disclaimer}
            </p>
          </div>
          <dl className="rule-list">
            {caseRows.map((row) => (
              <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="eyebrow text-accent">{row.label}</dt>
                <dd className="text-[0.875rem] leading-6 text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </section>

      {/* Illustrative operations */}
      <section className="band pt-14 sm:pt-20">
        <SectionHeading
          eyebrow={casesPage.examplesEyebrow}
          title={casesPage.examplesTitle}
          intro={casesPage.examplesIntro}
        />
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {examples.map((example) => (
            <li key={example.id} className="surface-card flex flex-col overflow-hidden">
              <div className="media-frame rounded-none">
                <img
                  src={example.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow text-muted-foreground">{example.label}</p>
                <p className="eyebrow mt-4 text-accent">{labels.before}</p>
                <h3 className="mt-2 font-display text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
                  {example.before}
                </h3>
                <p className="eyebrow mt-5 text-accent">{labels.steps}</p>
                <ol className="rule-list mt-1">
                  {example.steps.map((step, index) => (
                    <li key={step.title} className="flex gap-3 py-3">
                      <span className="font-mono text-[0.6875rem] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[0.8125rem] font-semibold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-1 text-[0.8125rem] leading-5 text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="eyebrow mt-4 text-accent">{labels.humanControl}</p>
                <p className="mt-1 text-[0.8125rem] leading-5 text-muted-foreground">
                  {example.humanControl}
                </p>
                <p className="mt-auto border-t border-border pt-4 text-[0.8125rem] font-semibold leading-5 text-foreground">
                  {example.outcome}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Common situations */}
      <section className="band pt-14 sm:pt-20">
        <SectionHeading
          eyebrow={casesPage.situationsEyebrow}
          title={casesPage.situationsTitle}
          intro={casesPage.situationsBody}
        />
        <p className="eyebrow mt-6 text-muted-foreground">{casesPage.situationsDisclaimer}</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {cases.map((item) => (
            <li key={item.id} className="surface-card flex flex-col p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="eyebrow text-muted-foreground">{item.shortTitle}</p>
                <p className="eyebrow text-accent">{casesPage.illustrativeStatus}</p>
              </div>
              <h3 className="mt-3 font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.025em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-6 text-muted-foreground">{item.before}</p>
              <dl className="mt-5 grid gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-2">
                {(
                  [
                    [labels.context, item.context],
                    [labels.execution, item.execution],
                    [labels.intelligence, item.intelligence],
                    [labels.humanControl, item.humanControl],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label}>
                    <dt className="eyebrow text-accent">{label}</dt>
                    <dd className="mt-1 text-[0.8125rem] leading-5 text-muted-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 border-t border-border pt-4">
                <p className="eyebrow text-accent">{labels.targetOutcome}</p>
                <p className="mt-1 text-[0.8125rem] font-semibold leading-5 text-foreground">
                  {item.outcome}
                </p>
                <p className="mt-3 text-[0.75rem] text-muted-foreground">
                  {labels.examples} : {item.examples.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Publication + contact */}
      <section className="band grid gap-3 pt-10 sm:pt-12 lg:grid-cols-[1fr_1fr]">
        <div className="surface-card p-6 sm:p-7">
          <p className="eyebrow text-muted-foreground">{casesPage.publicationEyebrow}</p>
          <h2 className="mt-3 font-display text-base font-bold tracking-[-0.02em] text-foreground">
            {casesPage.publicationTitle}
          </h2>
          <p className="mt-2 text-[0.8125rem] leading-6 text-muted-foreground">
            {casesPage.publicationBody}
          </p>
        </div>
        <div className="relative isolate flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-[1.15rem] border border-border bg-card p-6 sm:p-7">
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
