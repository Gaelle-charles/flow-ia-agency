import evidence from "@/content/operational-evidence.json";

export function OperationalEvidence() {
  return (
    <section id="evidence" className="home-evidence" aria-labelledby="evidence-heading">
      <header className="home-section-heading">
        <div>
          <p className="home-eyebrow">Pourquoi commencer par l’opération</p>
          <h2 id="evidence-heading" className="home-heading">
            Le problème se voit dans les chiffres.
          </h2>
        </div>
        <p className="home-intro">
          Trouver l’information, relier les outils, rendre l’IA utile : le même besoin de continuité
          opérationnelle.
        </p>
      </header>
      <div className="evidence-grid">
        {evidence.metrics.map((metric) => {
          const source = evidence.sources.find((item) => item.id === metric.sourceId);
          if (!source) return null;
          return (
            <article key={metric.id} className="evidence-card">
              <p className="evidence-number">
                {metric.value}
                <span> {metric.unit}</span>
              </p>
              <h3>{metric.title}</h3>
              <p className="evidence-description">{metric.description}</p>
              <a href={source.url} target="_blank" rel="noreferrer" className="evidence-source">
                {source.label}
              </a>
            </article>
          );
        })}
      </div>
      <div className="evidence-notes">
        <p>{evidence.disclaimer}</p>
        <details>
          <summary>Périmètre des études</summary>
          <div>
            {evidence.sources.map((source) => (
              <p key={source.id}>
                <strong>{source.label}.</strong> {source.scope}
              </p>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
