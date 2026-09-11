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
        title={[workPage.title]}
        body={workPage.body}
        dot
        media={{
          src: "/images/editorial/office-desk.webp",
          alt: workPage.mediaAlt,
        }}
      />

      <section className="band">
        <div className="surface-card p-6 sm:p-8">
          <h2 className="display-3 max-w-[32ch] text-foreground">{workPage.problem.title}</h2>
          <p className="mt-4 max-w-[60ch] text-[0.875rem] leading-6 text-muted-foreground">
            {workPage.problem.body}
          </p>
        </div>
      </section>

      <section className="band pt-12 sm:pt-16">
        <h2 className="display-3 text-foreground">{workPage.layersTitle}</h2>
        <p className="mt-3 max-w-[64ch] text-[0.875rem] leading-6 text-muted-foreground">
          {workPage.layersIntro}
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-3">
          {expertise.map((item) => {
            const Icon = expertiseIcons[item.icon];
            return (
              <li key={item.id} className="surface-card flex flex-col p-6">
                <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-6 font-display text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-6 text-muted-foreground">{item.body}</p>
                <p className="field-label mt-6 border-t border-border pt-4">
                  {workPage.outputsLabel}
                </p>
                <ul className="mt-2 space-y-1 text-[0.8125rem] leading-6 text-foreground">
                  {item.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>
    </PageShell>
  );
}
