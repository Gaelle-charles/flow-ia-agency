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
      "Un responsable de mission et un collectif d’exécution mobilisé pour faire avancer chaque opération.",
    ),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Le collectif"
        title="Un responsable identifié, un collectif mobilisé."
        body="Chaque mission garde un interlocuteur clair. Les expertises nécessaires sont mobilisées au moment où l’opération les exige."
      />

      <div className="py-3">
        <CrewSection />
      </div>

      <section className="rounded-[1.4rem] border border-border bg-card px-5 py-8 sm:p-9">
        <SectionHeader
          eyebrow="Le modèle"
          title="Un interlocuteur clair, les expertises utiles au bon moment."
        />
        <div className="mt-9 grid gap-8 border-t border-border pt-8 lg:grid-cols-3 lg:gap-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-foreground">Le client</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Il apporte le contexte, les priorités, les règles métier et la validation du résultat.
            </p>
          </div>
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-foreground">Le responsable de mission</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Il porte la relation, le périmètre, la coordination et le résultat tout au long de la
              mission.
            </p>
          </div>
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-foreground">Le collectif</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Nous mobilisons les compétences utiles au moment où le workflow les exige, sans
              imposer une équipe standardisée.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
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
      </section>
    </PageShell>
  );
}
