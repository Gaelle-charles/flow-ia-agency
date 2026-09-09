import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import { UseCaseCard } from "@/components/site/UseCaseCard";
import { useCases } from "@/content/use-cases";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/cas-usage")({
  head: () => ({
    meta: pageMeta(
      "Cas d’usage",
      "Six situations où une opération se fragmente, racontées du problème initial à la boucle à construire.",
    ),
  }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Situations fréquentes"
        title="Les situations où nous intervenons."
        body="Derrière chacune, nous cherchons la rupture entre les outils, les données, les personnes et les décisions. Ouvrez celle qui ressemble à votre quotidien."
      />
      <section className="py-8 sm:py-10">
        <p className="mb-6 text-sm text-muted-foreground">
          Cas d’usage illustratifs · les résultats décrits sont des objectifs.
        </p>
        <div>
          {useCases.map((item, index) => (
            <UseCaseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
