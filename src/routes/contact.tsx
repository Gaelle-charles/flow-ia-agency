import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import { ProcessIntakeForm } from "@/components/site/ProcessIntakeForm";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Décrire une opération",
      "Décrivez l’opération, les outils, les ruptures et le résultat attendu pour identifier la première boucle utile à construire.",
    ),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Premier échange"
        title="Décrivez une opération qui ralentit votre équipe."
        body="Nous regarderons ce qui se passe réellement : les étapes, les outils, les personnes, les décisions, les exceptions et les conséquences. Si le sujet s’y prête, nous définirons un premier périmètre et une preuve de résultat."
      />

      <section className="grid gap-9 px-1 py-12 sm:px-4 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-7 lg:py-16">
        <div>
          <p className="text-sm font-semibold text-accent">Avant de parler de solution</p>
          <h2 className="type-feature-title mt-6 text-balance font-semibold text-foreground">
            Partons du travail réel.
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
            <li>Ce qui déclenche l’opération et ce qui la bloque</li>
            <li>Les outils, données, personnes et décisions qui y participent</li>
            <li>Les exceptions et le moment où le contrôle humain est nécessaire</li>
            <li>Le résultat que vous voulez rendre observable</li>
          </ul>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card p-5 sm:p-7 lg:p-8">
          <ProcessIntakeForm />
        </div>
      </section>
    </PageShell>
  );
}
