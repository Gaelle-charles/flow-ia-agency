import { createFileRoute, Link } from "@tanstack/react-router";

import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CrewCredential } from "@/components/site/CrewCredential";
import { Hero } from "@/components/site/Hero";
import { OperationWalkthrough } from "@/components/site/OperationWalkthrough";
import { PageShell } from "@/components/site/PageShell";
import { OperationalEvidence } from "@/components/site/OperationalEvidence";
import brand from "@/content/brand.config.json";
import { crew, deliverySteps, featuredCase, thesis } from "@/content/site-content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      brand.category,
      `${brand.shortName} conçoit les systèmes qui relient vos données, vos outils et vos équipes. CRM, automatisation et systèmes agentiques, de l’opération à la production.`,
    ),
  }),
  component: HomePage,
});

function OrganizationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    legalName: brand.legalName,
    identifier: brand.siren,
    description: brand.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function HomePage() {
  return (
    <PageShell>
      <OrganizationStructuredData />

      <div id="hero">
        <Hero />
      </div>

      <OperationalEvidence />

      <section id="model" className="home-section home-model">
        <header className="home-section-heading">
          <div>
            <p className="home-eyebrow">Notre expertise, en pratique</p>
            <h2 className="home-heading">
              Le travail entre vos outils.
              <br />
              Enfin relié.
            </h2>
          </div>
          <p className="home-intro">
            Un email à traiter, un rapport à produire, une décision à préparer. Voici comment
            l’opération peut avancer.
          </p>
        </header>

        <OperationWalkthrough />

        <div className="home-thesis" id="thesis">
          <p>{thesis.title}</p>
          <Link to="/cas-usage" className="home-text-link">
            Voir les six cas d’usage
          </Link>
        </div>
      </section>

      <section id="proof" className="home-section home-proof">
        <div>
          <p className="home-eyebrow text-accent">Une réalisation client</p>
          <h2 className="home-heading">
            Le reporting avance.
            <br />
            L’historique reste.
          </h2>
          <p className="home-intro mt-5">{featuredCase.summary}</p>
          <p className="mt-5 text-sm text-muted-foreground">{featuredCase.statuses.join(" · ")}</p>
          <Link to="/realisations" className="home-text-link mt-6 inline-flex">
            Lire la réalisation
          </Link>
        </div>

        <article className="proof-comparison">
          <div>
            <p className="home-eyebrow">Avant</p>
            <h3>Reprendre chaque fichier.</h3>
            <p>{featuredCase.before}</p>
          </div>
          <div>
            <p className="home-eyebrow text-accent">Le système construit</p>
            <h3>Un moteur, toutes les périodes.</h3>
            <p>{featuredCase.execution}</p>
          </div>
          <p className="proof-control">
            Les équipes gardent les zones manuelles et valident les exceptions.
          </p>
        </article>
      </section>

      <section id="delivery" className="home-section home-delivery">
        <figure className="delivery-photo">
          <img
            src="/images/editorial/operations-room-v2.webp"
            alt="Mise en scène illustrative d’un atelier de cartographie entre métier et construction technique."
            width={1586}
            height={992}
            loading="lazy"
          />
          <figcaption>Au contact de l’opération. Illustration.</figcaption>
        </figure>
        <div>
          <p className="home-eyebrow">Notre façon de livrer</p>
          <h2 className="home-heading">Du terrain à la production.</h2>
          <ol className="delivery-sequence">
            {deliverySteps.map((step) => (
              <li key={step.stage}>
                <h3>{step.stage}</h3>
                <p>{step.deliverable}</p>
              </li>
            ))}
          </ol>
          <Link to="/methode" className="home-text-link">
            Voir l’approche et les livrables
          </Link>
        </div>
      </section>

      <section id="team" className="home-section home-team">
        <div>
          <p className="home-eyebrow">{crew.eyebrow}</p>
          <h2 className="home-heading">{crew.title}</h2>
          <p className="home-intro mt-5">{crew.intro}</p>
          <Link to="/a-propos" className="home-text-link mt-6 inline-flex">
            Découvrir le crew
          </Link>
        </div>
        <CrewCredential />
      </section>

      <section id="faq" className="home-section home-faq">
        <div>
          <p className="home-eyebrow">Avant de démarrer</p>
          <h2 className="home-heading">Les questions utiles.</h2>
        </div>
        <FaqAccordion indices={[0, 2, 3]} />
      </section>

      <section id="contact" className="home-contact">
        <div>
          <p className="home-eyebrow text-accent">Une opération à faire avancer</p>
          <h2 className="home-heading">Où le travail se bloque-t-il ?</h2>
        </div>
        <Link to="/contact" className="home-primary-link">
          Parler du workflow
        </Link>
      </section>
    </PageShell>
  );
}
