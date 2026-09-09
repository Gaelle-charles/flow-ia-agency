import { createFileRoute, Link } from "@tanstack/react-router";

import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CrewCredential } from "@/components/site/CrewCredential";
import { Hero } from "@/components/site/Hero";
import { OperationWalkthrough } from "@/components/site/OperationWalkthrough";
import { PageShell } from "@/components/site/PageShell";
import { OperationalEvidence } from "@/components/site/OperationalEvidence";
import brand from "@/content/brand.config.json";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { hero } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(hero.title, hero.body) };
  },
  component: HomePage,
});

function OrganizationStructuredData() {
  const { common } = useLocalizedContent();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    legalName: brand.legalName,
    identifier: brand.siren,
    description: common.brandCategory,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function HomePage() {
  const { crew, deliverySteps, featuredCase, home, thesis } = useLocalizedContent();

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
            <p className="home-eyebrow">{home.modelEyebrow}</p>
            <h2 className="home-heading">
              {home.modelTitle[0]}
              <br />
              {home.modelTitle[1]}
            </h2>
          </div>
          <p className="home-intro">{home.modelIntro}</p>
        </header>

        <OperationWalkthrough />

        <div className="home-thesis" id="thesis">
          <p>{thesis.title}</p>
          <Link to="/cas-usage" className="home-text-link">
            {home.useCasesLink}
          </Link>
        </div>
      </section>

      <section id="proof" className="home-section home-proof">
        <div>
          <p className="home-eyebrow text-accent">{home.proofEyebrow}</p>
          <h2 className="home-heading">
            {home.proofTitle[0]}
            <br />
            {home.proofTitle[1]}
          </h2>
          <p className="home-intro mt-5">{featuredCase.summary}</p>
          <p className="mt-5 text-sm text-muted-foreground">{featuredCase.statuses.join(" · ")}</p>
          <Link to="/realisations" className="home-text-link mt-6 inline-flex">
            {home.proofLink}
          </Link>
        </div>

        <article className="proof-comparison">
          <div>
            <p className="home-eyebrow">{home.before}</p>
            <h3>Reprendre chaque fichier.</h3>
            <p>{featuredCase.before}</p>
          </div>
          <div>
            <p className="home-eyebrow text-accent">{home.builtSystem}</p>
            <h3>{home.engineTitle}</h3>
            <p>{featuredCase.execution}</p>
          </div>
          <p className="proof-control">{home.proofControl}</p>
        </article>
      </section>

      <section id="delivery" className="home-section home-delivery">
        <figure className="delivery-photo">
          <img
            src="/images/editorial/operations-room-v2.webp"
            alt={home.deliveryAlt}
            width={1586}
            height={992}
            loading="lazy"
          />
          <figcaption>{home.deliveryCaption}</figcaption>
        </figure>
        <div>
          <p className="home-eyebrow">{home.deliveryEyebrow}</p>
          <h2 className="home-heading">{home.deliveryTitle}</h2>
          <ol className="delivery-sequence">
            {deliverySteps.map((step) => (
              <li key={step.stage}>
                <h3>{step.phase}</h3>
                <p>{step.deliverable}</p>
              </li>
            ))}
          </ol>
          <Link to="/methode" className="home-text-link">
            {home.deliveryLink}
          </Link>
        </div>
      </section>

      <section id="team" className="home-section home-team">
        <div>
          <p className="home-eyebrow">{crew.eyebrow}</p>
          <h2 className="home-heading">{crew.title}</h2>
          <p className="home-intro mt-5">{crew.intro}</p>
          <Link to="/a-propos" className="home-text-link mt-6 inline-flex">
            {home.teamLink}
          </Link>
        </div>
        <CrewCredential />
      </section>

      <section id="faq" className="home-section home-faq">
        <div>
          <p className="home-eyebrow">{home.faqEyebrow}</p>
          <h2 className="home-heading">{home.faqTitle}</h2>
        </div>
        <FaqAccordion indices={[0, 2, 3]} />
      </section>

      <section id="contact" className="home-contact">
        <div>
          <p className="home-eyebrow text-accent">{home.contactEyebrow}</p>
          <h2 className="home-heading">{home.contactTitle}</h2>
        </div>
        <Link to="/contact" className="home-primary-link">
          {home.contactLink}
        </Link>
      </section>
    </PageShell>
  );
}
