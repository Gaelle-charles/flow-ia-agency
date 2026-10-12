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
import { useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => pageHead("/", loaderData?.locale ?? "fr"),
  component: HomePage,
});

function OrganizationStructuredData() {
  const { common } = useLocalizedContent();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${brand.siteUrl}/#website`,
        name: brand.name,
        url: `${brand.siteUrl}/`,
        publisher: { "@id": `${brand.siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${brand.siteUrl}/#organization`,
        name: brand.name,
        url: `${brand.siteUrl}/`,
        logo: `${brand.siteUrl}/images/brand/mark.png`,
        legalName: brand.legalName,
        identifier: brand.siren,
        description: common.brandCategory,
      },
    ],
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
