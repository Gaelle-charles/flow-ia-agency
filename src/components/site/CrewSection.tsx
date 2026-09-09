import { Link } from "@tanstack/react-router";

import { CrewCredential } from "@/components/site/CrewCredential";
import { useLocalizedContent } from "@/content/localized-content";

export function CrewSection() {
  const { component, crew } = useLocalizedContent();

  return (
    <section className="grid gap-8 rounded-[1.6rem] border border-border bg-card p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="text-sm font-semibold text-accent">{crew.eyebrow}</p>
        <h2 className="type-feature-title mt-5 font-semibold text-foreground">
          {component.crewTitle}
        </h2>
        <p className="mt-5 text-base leading-7 text-foreground">{crew.intro}</p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{crew.team}</p>
        <Link to="/contact" className="home-primary-link mt-6">
          {component.crewCta}
        </Link>
      </div>
      <div className="self-center">
        <CrewCredential />
      </div>
    </section>
  );
}
