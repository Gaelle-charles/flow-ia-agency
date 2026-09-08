import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import { journalEntries } from "@/content/projects";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: pageMeta(
      "Journal d’ingénierie",
      "Des pilotes et audits qui montrent comment une opération devient observable, exécutable et mesurable.",
    ),
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Journal d’ingénierie"
        title="Observer le système avant de lui donner plus d’autonomie."
        body="Des retours de terrain sur les ruptures, les actions réellement exécutées et les corrections nécessaires avant de passer à l’échelle."
      />

      <section className="px-1 py-12 sm:px-4 sm:py-14 lg:px-7 lg:py-16">
        {journalEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-[1.5rem] border border-border bg-card p-5 sm:p-7 lg:p-9"
          >
            <p className="text-sm font-semibold text-accent">{entry.statusLabels.join(" · ")}</p>
            <h2 className="type-feature-title mt-6 max-w-4xl text-balance font-semibold text-foreground">
              {entry.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {entry.intro}
            </p>

            <dl className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {entry.metrics.map((metric) => (
                <div key={metric.label} className="bg-secondary p-5 sm:p-6">
                  <dt className="text-sm leading-6 text-muted-foreground">{metric.label}</dt>
                  <dd className="mt-3 text-2xl font-black tracking-[-0.03em] text-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-secondary/45 p-6">
                <p className="text-sm font-semibold text-accent">Ce que le pilote a montré</p>
                <p className="mt-5 text-base leading-7 text-foreground">{entry.lesson}</p>
              </div>
              <div className="rounded-3xl border border-border p-6">
                <p className="text-sm font-semibold text-muted-foreground">Limite</p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{entry.disclaimer}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
