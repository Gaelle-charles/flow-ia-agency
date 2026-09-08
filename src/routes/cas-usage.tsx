import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import { UseCaseCard } from "@/components/site/UseCaseCard";
import { useCases } from "@/content/use-cases";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/cas-usage")({
  head: () => ({
    meta: pageMeta(
      "Cas d’usage",
      "Six opérations racontées de Before à Outcome, avec contexte, exécution, intelligence et contrôle humain.",
    ),
  }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Cas d’usage"
        title="Là où le travail se bloque."
        body="Six situations, de l’opération fragmentée au système à construire. Ouvrez celle qui ressemble à votre quotidien."
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
