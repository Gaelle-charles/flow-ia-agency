import { createFileRoute } from "@tanstack/react-router";

import { EngagementCard } from "@/components/site/EngagementCard";
import { GovernancePrinciple } from "@/components/site/GovernancePrinciple";
import { MethodStep } from "@/components/site/MethodStep";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { SectionHeader } from "@/components/site/SectionHeader";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/methode")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { methodPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(methodPage.introTitle, methodPage.introBody) };
  },
  component: MethodPage,
});

function MethodPage() {
  const { deliverySteps, engagements, governancePrinciples, methodPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro
        eyebrow={methodPage.introEyebrow}
        title={methodPage.introTitle}
        body={methodPage.introBody}
      />

      <section className="px-1 py-14 sm:px-4 sm:py-16 lg:px-7 lg:py-20">
        <SectionHeader
          eyebrow={methodPage.methodEyebrow}
          title={methodPage.methodTitle}
          body={methodPage.methodBody}
        />
        <ol className="mt-9">
          {deliverySteps.map((item) => (
            <MethodStep key={item.index} item={item} />
          ))}
        </ol>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <SectionHeader
          eyebrow={methodPage.scopeEyebrow}
          title={methodPage.scopeTitle}
          body={methodPage.scopeBody}
        />
        <div className="mt-9">
          {engagements.map((item) => (
            <EngagementCard key={item.index} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-2 rounded-[1.4rem] bg-ivory px-5 py-12 text-background sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <SectionHeader
          eyebrow={methodPage.governanceEyebrow}
          title={methodPage.governanceTitle}
          body={methodPage.governanceBody}
          inverted
        />
        <div className="mt-9">
          {governancePrinciples.map((item) => (
            <GovernancePrinciple key={item.title} item={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
