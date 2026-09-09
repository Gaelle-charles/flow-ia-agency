import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import { UseCaseCard } from "@/components/site/UseCaseCard";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/cas-usage")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { useCasesPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(useCasesPage.introTitle, useCasesPage.introBody) };
  },
  component: UseCasesPage,
});

function UseCasesPage() {
  const { useCases, useCasesPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro
        eyebrow={useCasesPage.introEyebrow}
        title={useCasesPage.introTitle}
        body={useCasesPage.introBody}
      />
      <section className="py-8 sm:py-10">
        <p className="mb-6 text-sm text-muted-foreground">{useCasesPage.disclaimer}</p>
        <div>
          {useCases.map((item, index) => (
            <UseCaseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
