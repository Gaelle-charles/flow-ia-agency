import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/confidentialite")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { privacyPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(privacyPage.introTitle, privacyPage.introBody, false) };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  const { privacyPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro title={privacyPage.introTitle} body={privacyPage.introBody} />
      <article className="mx-auto max-w-4xl px-2 py-12 sm:py-14 lg:py-16">
        <div className="space-y-10 rounded-[1.5rem] border border-border bg-card p-6 sm:p-10">
          <section>
            <h2 className="text-2xl font-black text-foreground">{privacyPage.controller}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{privacyPage.requested}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {privacyPage.requestedBody}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{privacyPage.purpose}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {privacyPage.purposeBody}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{privacyPage.retention}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {privacyPage.retentionBody}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-foreground">{privacyPage.analytics}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {privacyPage.analyticsBody}
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
