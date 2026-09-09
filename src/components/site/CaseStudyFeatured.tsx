import { useLocalizedContent } from "@/content/localized-content";

export function CaseStudyFeatured() {
  const { component, featuredCase } = useLocalizedContent();

  return (
    <article className="rounded-[1.4rem] border border-border bg-card p-5 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-semibold text-accent">{featuredCase.statuses.join(" · ")}</p>
          <h3 className="type-feature-title mt-4 max-w-xl font-semibold">{featuredCase.title}</h3>
        </div>
        <div>
          <p className="text-base leading-7">{featuredCase.summary}</p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            <strong className="font-semibold text-foreground">{component.before}: </strong>
            {featuredCase.before}
          </p>
        </div>
      </div>

      <dl className="mt-8 grid gap-6 border-y border-border py-6 md:grid-cols-3 md:gap-10">
        {[
          ["Context", featuredCase.context],
          ["Execution", featuredCase.execution],
          ["Intelligence", featuredCase.intelligence],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-sm font-semibold text-accent">{label}</dt>
            <dd className="mt-3 text-base leading-7 text-muted-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-semibold">{component.humanControl}</p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            {featuredCase.humanControl}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">{component.observedOutcome}</p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">{featuredCase.outcome}</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-6 text-muted-foreground">
        {featuredCase.proofNote} {featuredCase.disclaimer}
      </p>
    </article>
  );
}
