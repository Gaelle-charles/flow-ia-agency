import { Link } from "@tanstack/react-router";

import { hero } from "@/content/site-content";

export function Hero() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-background" aria-hidden="true">
          <img
            src="/images/editorial/context-control-v2.webp"
            alt=""
            width={1568}
            height={1003}
            fetchPriority="high"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
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
          </div>
        </div>
      </section>
      <div className="hero-proofbar" aria-label="Principes et repères">
        <p className="hero-principle">{hero.principle}</p>
        <p className="hero-system-line">Context → Execution → Intelligence</p>
        <a href="#team" className="hero-credential">
          Une certification Claude au sein du collectif
        </a>
      </div>
    </>
  );
}
