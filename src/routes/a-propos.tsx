import { createFileRoute } from "@tanstack/react-router";

import { HeroCover, PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { about } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(about.title.join(" "), about.body) };
  },
  component: AboutPage,
});

function AboutPage() {
  const { about, certification } = useLocalizedContent();

  return (
    <PageShell>
      <HeroCover
        title={about.title}
        body={about.body}
        image={{ src: "/images/editorial/operations-room-v2.webp", alt: about.mediaAlt }}
      />

      <section className="band">
        <div className="border-t border-border pt-6">
          <h2 className="display-3 max-w-[30ch] text-foreground">{about.modelTitle}</h2>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {about.roles.map((role) => (
            <li key={role.id}>
              <h3 className="text-sm font-bold text-accent">{role.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[0.8125rem] leading-6 text-muted-foreground">
                {role.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[70ch] border-t border-border pt-6 text-[0.875rem] leading-6 text-muted-foreground">
          {about.team}
        </p>
      </section>

      <section className="band pt-10 sm:pt-12">
        <div className="surface-card flex flex-wrap items-center gap-6 p-6 sm:gap-9 sm:p-8">
          <img
            src={certification.image}
            alt={about.credential.alt}
            loading="lazy"
            decoding="async"
            className="h-24 w-24 flex-none object-contain sm:h-28 sm:w-28"
          />
          <div>
            <h2 className="display-3 max-w-[22ch] text-foreground">{about.credential.title}</h2>
            <p className="mt-3 max-w-[44ch] text-[0.8125rem] leading-6 text-muted-foreground">
              {about.credential.body}
            </p>
          </div>
        </div>
      </section>

      <section className="band pt-10 sm:pt-12">
        <div className="border-t border-border pt-6">
          <h2 className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
            {about.legalTitle}
          </h2>
          <p className="mt-3 max-w-[70ch] text-[0.875rem] leading-6 text-foreground">
            {brand.name} {about.legalText} {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}
            .
          </p>
          <a
            href={about.publicRecordUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="cta-ghost mt-3 text-foreground"
          >
            {about.publicRecord}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
