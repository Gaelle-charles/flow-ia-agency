import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: pageMeta(
      "Confidentialité",
      "Principes de traitement des informations transmises depuis la vitrine.",
      false,
    ),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Confidentialité"
        title="Limiter les données dès le premier échange."
        body="Le formulaire demande uniquement les informations nécessaires pour comprendre un processus et préparer une prise de contact."
      />
      <article className="mx-auto max-w-4xl px-2 py-12 sm:py-14 lg:py-16">
        <div className="space-y-10 rounded-[1.5rem] border border-border bg-card p-6 sm:p-10">
          <section>
            <h2 className="text-2xl font-black text-foreground">Responsable du traitement</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Informations demandées</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Nom, fonction, organisation, email professionnel, description du processus, outils
              concernés et conséquence du dysfonctionnement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Finalité</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Examiner la demande, préparer l’échange et répondre à la personne qui l’a transmise.
              Les contenus ne doivent inclure aucune donnée client, pièce sensible, identifiant ou
              secret d’affaires.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Formulaire et conservation</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Le formulaire ne confirme une réception qu’après réponse positive de la destination
              configurée. La destination, la durée de conservation et le canal d’exercice des droits
              doivent être validés avant son activation publique.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">Mesure d’audience</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Aucun outil d’analytics ou traceur marketing non nécessaire n’est intégré à cette
              version.
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
