import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyFeatured } from "@/components/site/CaseStudyFeatured";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { publicProjects } from "@/content/projects";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: pageMeta(
      "Réalisations",
      "Des systèmes opérationnels présentés avec leur contexte, leur exécution, leur niveau d’intelligence et leurs limites.",
    ),
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Réalisations"
        title="Voir les systèmes, pas seulement les technologies."
        body="Chaque réalisation montre l’opération de départ, le système construit, le contrôle humain et le résultat observé."
      />

      <section className="py-10 sm:py-12">
        <SectionHeader
          eyebrow="Réalisation client"
          title="Un reporting partenaire en production."
        />
        <div className="mt-9">
          <CaseStudyFeatured />
        </div>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <SectionHeader
          eyebrow="Produit propriétaire"
          title="Construire un système autour d’une expertise exigeante."
          body="Un produit propriétaire n’est pas une mission client. Il démontre notre capacité à structurer le contexte, l’exécution et l’expérience d’usage."
        />
        <div className="mt-9 space-y-4">
          {publicProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <p className="text-sm font-semibold text-accent">Publication des résultats</p>
          <div>
            <h2 className="type-feature-title text-balance font-semibold text-foreground">
              Des preuves documentées, publiées avec accord.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Nous ne publions que les métriques validées et anonymisées. Les données sensibles
              restent confidentielles.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
