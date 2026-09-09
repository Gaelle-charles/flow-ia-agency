import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
import legal from "@/content/legal.config.json";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: pageMeta(
      "Mentions légales",
      "Informations légales relatives à l’éditeur de la vitrine.",
      false,
    ),
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Informations légales"
        title="Mentions légales"
        body="Cette page rassemble les informations vérifiées disponibles pour la version de travail du site."
      />
      <article className="mx-auto max-w-4xl px-2 py-12 sm:py-14 lg:py-16">
        <div className="space-y-10 rounded-[1.5rem] border border-border bg-card p-6 sm:p-10">
          <section>
            <h2 className="text-2xl font-black text-foreground">Éditeur</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}. {brand.name} est une marque
              de travail au statut provisoire.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Responsable de publication</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {legal.publicationDirector}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Coordonnées et hébergement</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              L’adresse légale à afficher et l’identité de l’hébergeur doivent être validées avant
              la publication définitive. Aucune adresse personnelle n’est inventée ou exposée dans
              cette version de travail.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Contenus</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Les cas d’usage illustratifs sont identifiés comme tels. Les expériences
              professionnelles des membres du collectif ne constituent pas une liste de clients de
              la structure.
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
