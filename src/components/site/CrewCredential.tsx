import { useLocalizedContent } from "@/content/localized-content";

export function CrewCredential() {
  const { certification, component } = useLocalizedContent();

  return (
    <div className="crew-credential">
      <img
        src={certification.image}
        alt={component.credentialAlt}
        width={402}
        height={402}
        loading="lazy"
      />
      <div>
        <p className="home-eyebrow text-accent">{component.credentialEyebrow}</p>
        <h3>{certification.title}</h3>
        <p className="credential-level">{certification.level}</p>
        <p className="credential-scope">{certification.scope}</p>
      </div>
    </div>
  );
}
