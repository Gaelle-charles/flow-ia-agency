import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Database, Zap } from "lucide-react";

import { PageHero, PageShell } from "@/components/site/PageShell";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

const expertiseIcons = { zap: Zap, database: Database, chart: BarChart3 } as const;

export const Route = createFileRoute("/work")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { workPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(workPage.title, workPage.body) };
  },
  component: WorkPage,
});

function WorkPage() {
  const { expertise, workPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageHero
        eyebrow={workPage.eyebrow}
        title={[workPage.title]}
        body={workPage.body}
        dot
        media={{
          src: "/images/editorial/office-desk.webp",
          alt: workPage.mediaAlt,
          label: workPage.mediaLabel,
        }}
      />

      <section className="band">
        <ul className="surface-card grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {workPage.stats.map((stat) => (
            <li key={stat.label} className="px-6 py-5">
              <p className="font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.04em] text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-[0.8125rem] text-muted-foreground">{stat.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band pt-12 sm:pt-16">
        <h2 className="display-3 text-foreground">{workPage.expertiseTitle}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {expertise.map((item) => {
            const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];
            return (
              <li key={item.id} className="surface-card flex flex-col p-6">
                <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-10 font-display text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </section>
    </PageShell>
  );
}
