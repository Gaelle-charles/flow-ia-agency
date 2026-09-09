import { createFileRoute } from "@tanstack/react-router";

import { CrewSection } from "@/components/site/CrewSection";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import brand from "@/content/brand.config.json";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { about } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(about.introTitle, about.introBody) };
  },
  component: AboutPage,
});

function AboutPage() {
  const { about } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro eyebrow={about.introEyebrow} title={about.introTitle} body={about.introBody} />

      <div className="py-3">
        <CrewSection />
      </div>

      <section className="rounded-[1.4rem] border border-border bg-card px-5 py-8 sm:p-9">
        <SectionHeader eyebrow={about.modelEyebrow} title={about.modelTitle} />
        <div className="mt-9 grid gap-8 border-t border-border pt-8 lg:grid-cols-3 lg:gap-10">
          {about.roles.map((role) => (
            <div key={role.title} className="max-w-xl">
              <h2 className="text-xl font-bold text-foreground">{role.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{role.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-xl font-bold text-foreground">{about.legalTitle}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {brand.name} {about.legalText} {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}
            .
          </p>
          <a
            href="https://annuaire-entreprises.data.gouv.fr/entreprise/943812297"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {about.publicRecord}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
