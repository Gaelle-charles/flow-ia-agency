import { Link } from "@tanstack/react-router";

import { hero } from "@/content/site-content";

export function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="home-eyebrow text-accent">{hero.eyebrow}</p>
          <h1 className="type-hero">{hero.title}</h1>
          <p data-hero-body>{hero.body}</p>
          <div className="hero-actions">
            <Link to="/contact" className="home-primary-link">
              {hero.primaryCta}
            </Link>
            <a href="#model" className="home-text-link">
              Explorer un exemple
            </a>
          </div>
          <a href="#team" className="hero-credential">
            Une certification Claude au sein du collectif
          </a>
        </div>
        <figure className="hero-visual">
          <img
            src="/images/editorial/context-control-v2.webp"
            alt="Une main relie des éléments d’un workflow sur un schéma opérationnel."
            width={1568}
            height={1003}
            fetchPriority="high"
          />
          <figcaption className="hero-visual-caption">
            <span className="hero-visual-kicker">Context → Execution → Intelligence</span>
            <span>Construire au contact du travail réel.</span>
          </figcaption>
        </figure>
      </div>
      <p className="hero-principle">{hero.principle}</p>
    </section>
  );
}
