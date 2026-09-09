import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import legal from "@/content/legal.config.json";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { legalPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(legalPage.introTitle, legalPage.introBody, false) };
  },
  component: LegalPage,
});

function LegalPage() {
  const { legalPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro
        eyebrow={legalPage.introEyebrow}
        title={legalPage.introTitle}
        body={legalPage.introBody}
      />
      <article className="mx-auto max-w-4xl px-2 py-12 sm:py-14 lg:py-16">
        <div className="space-y-10 rounded-[1.5rem] border border-border bg-card p-6 sm:p-10">
          <section>
            <h2 className="text-2xl font-black text-foreground">{legalPage.publisher}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}. {brand.name}{" "}
              {legalPage.publisherBody}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{legalPage.publicationDirector}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {legal.publicationDirector}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{legalPage.contactHosting}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {legalPage.contactHostingBody}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{legalPage.contents}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {legalPage.contentsBody}
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
