import { claudeCertification } from "@/content/credentials";

export function CrewCredential() {
  return (
    <div className="crew-credential">
      <img
        src={claudeCertification.image}
        alt="Badge Claude Certified Developer — Foundations"
        width={402}
        height={402}
        loading="lazy"
      />
      <div>
        <p className="home-eyebrow text-accent">Une expertise certifiée au sein du crew</p>
        <h3>{claudeCertification.title}</h3>
        <p className="credential-level">{claudeCertification.level}</p>
        <p className="credential-scope">{claudeCertification.scope}</p>
      </div>
    </div>
  );
}
