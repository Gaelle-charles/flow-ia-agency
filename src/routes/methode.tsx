import { createFileRoute } from "@tanstack/react-router";

import { EngagementCard } from "@/components/site/EngagementCard";
import { GovernancePrinciple } from "@/components/site/GovernancePrinciple";
import { MethodStep } from "@/components/site/MethodStep";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { deliverySteps, engagements, governancePrinciples } from "@/content/site-content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: pageMeta(
      "Approche",
      "Embed, build, run : une approche déployée au plus près des opérations jusqu’au fonctionnement réel du système.",
    ),
  }),
  component: MethodPage,
});

function MethodPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Approche"
        title="De l’opération réelle au système en production."
        body="Nous travaillons au contact du workflow, construisons dans son environnement et accompagnons le système jusqu’à son fonctionnement réel."
      />

      <section className="px-1 py-14 sm:px-4 sm:py-16 lg:px-7 lg:py-20">
        <SectionHeader
          eyebrow="Notre modèle de delivery"
          title="Embed → Build → Run"
          body="L’équipe est la façon dont nous déployons l’expertise. Elle n’est pas l’offre."
        />
        <ol className="mt-9">
          {deliverySteps.map((item) => (
            <MethodStep key={item.index} item={item} />
          ))}
        </ol>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <SectionHeader
          eyebrow="Formats d’engagement"
          title="Un engagement autour du système, jamais autour d’un profil."
          body="Le périmètre dépend de la maturité de l’opération, mais le résultat reste un système construit, utilisé et mesuré."
        />
        <div className="mt-9">
          {engagements.map((item) => (
            <EngagementCard key={item.index} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-2 rounded-[1.4rem] bg-ivory px-5 py-12 text-background sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <SectionHeader
          eyebrow="Gouvernance"
          title="L’autonomie se définit avant de se déployer."
          body="Données, permissions, validations, traces et reprise sont traitées comme des choix de produit, pas comme des détails techniques."
          inverted
        />
        <div className="mt-9">
          {governancePrinciples.map((item) => (
            <GovernancePrinciple key={item.title} item={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
