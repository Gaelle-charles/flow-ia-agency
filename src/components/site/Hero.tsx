import { Link } from "@tanstack/react-router";

import { hero } from "@/content/site-content";

export function Hero() {
  return (
    <section className="home-hero">
      <p className="home-eyebrow text-accent">{hero.eyebrow}</p>
      <div className="hero-layout">
        <h1 className="type-hero">{hero.title}</h1>
        <div className="hero-intro">
          <p data-hero-body>
            Nous concevons les systèmes qui relient vos données, vos outils et les personnes qui
            font avancer l’opération.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="home-primary-link">
              Parler d’un workflow
            </Link>
            <a href="#model" className="home-text-link">
              Explorer un exemple
            </a>
          </div>
        </div>
      </div>
      <a href="#team" className="hero-credential">
        Une certification Claude au sein du crew
      </a>
    </section>
  );
}
