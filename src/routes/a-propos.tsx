import { createFileRoute } from "@tanstack/react-router";

import { CrewSection } from "@/components/site/CrewSection";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import brand from "@/content/brand.config.json";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: pageMeta(
      "À propos",
      "Senior expertise, embedded by design : une responsabilité claire de l’opération à la mise en production.",
    ),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Le crew"
        title="Un AI crew, du terrain à la production."
        body="Des expertises seniors complémentaires pour relier vos données, vos outils et vos opérations. Une responsabilité commune : construire un système qui fonctionne."
      />

      <div className="py-3">
        <CrewSection />
      </div>

      <section className="rounded-[1.4rem] border border-border bg-card px-5 py-8 sm:p-9">
        <SectionHeader
          eyebrow="Le modèle"
          title="La bonne équipe autour du système, avec une responsabilité claire."
        />
        <div className="mt-9 grid gap-8 border-t border-border pt-8 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-foreground">Pas de séparation artificielle</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Les personnes qui comprennent le problème participent aux choix d’architecture, à la
              construction et aux arbitrages de mise en production.
            </p>
          </div>
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-foreground">Cadre juridique</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {brand.name} est porté par {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}.
            </p>
            <a
              href="https://annuaire-entreprises.data.gouv.fr/entreprise/943812297"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Consulter la fiche publique
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
