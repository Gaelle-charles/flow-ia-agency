import { createFileRoute } from "@tanstack/react-router";

import {
  ClosingCta,
  DeliveryPanel,
  ExpertisePanel,
  FaqSection,
  FeaturedWork,
  HomeHero,
  HumanAndStats,
} from "@/components/site/HomeSections";
import { PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { hero } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(hero.title, hero.body) };
  },
  component: HomePage,
});

function OrganizationStructuredData() {
  const { common } = useLocalizedContent();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    legalName: brand.legalName,
    identifier: brand.siren,
    description: common.brandCategory,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function HomePage() {
  return (
    <PageShell>
      <OrganizationStructuredData />
      <HomeHero />
      <ExpertisePanel />
      <FeaturedWork />
      <HumanAndStats />
      <FaqSection />
      <DeliveryPanel />
      <ClosingCta />
    </PageShell>
  );
}
