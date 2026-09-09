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
      "Diagnostic, pilote, industrialisation : une approche ancrée dans le travail réel jusqu’au fonctionnement durable du système.",
    ),
  }),
  component: MethodPage,
});

function MethodPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Approche"
        title="Une première boucle qui fonctionne dans votre environnement."
        body="Nous partons du travail réel, construisons dans vos outils et accompagnons le système jusqu’à ce que son résultat soit observable."
      />

      <section className="px-1 py-14 sm:px-4 sm:py-16 lg:px-7 lg:py-20">
        <SectionHeader
          eyebrow="Notre méthode"
          title="Diagnostic → Pilote → Industrialisation"
          body="Trois temps - Embed, Build, Run - pour passer d’une rupture observée à un système que vos équipes peuvent suivre et reprendre."
        />
        <ol className="mt-9">
          {deliverySteps.map((item) => (
            <MethodStep key={item.index} item={item} />
          ))}
        </ol>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <SectionHeader
          eyebrow="Ce que nous construisons avec vous"
          title="Un périmètre qui évolue avec la preuve."
          body="Le résultat reste le même : une opération comprise, une boucle construite et un chemin clair pour la faire durer."
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
