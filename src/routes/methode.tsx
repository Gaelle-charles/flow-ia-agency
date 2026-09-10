import { createFileRoute } from "@tanstack/react-router";

import { MediaFrame } from "@/components/site/MediaFrame";
import { PageShell } from "@/components/site/PageShell";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/methode")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { methodPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(methodPage.title.join(" "), methodPage.body) };
  },
  component: MethodPage,
});

function MethodPage() {
  const { methodPage } = useLocalizedContent();

  return (
    <PageShell>
      <section className="band grid gap-10 pb-14 pt-8 sm:pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <p className="eyebrow text-accent">{methodPage.eyebrow}</p>
          <h1 className="display-2 mt-5 text-foreground">
            {methodPage.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-7 text-muted-foreground">
            {methodPage.body}
          </p>

          <ol className="rule-list mt-10">
            {methodPage.steps.map((step, index) => (
              <li key={step.id} className="flex gap-6 py-6">
                <p className="font-mono text-[0.75rem] font-medium tracking-[0.12em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-2 max-w-[42ch] text-[0.8125rem] leading-6 text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          <p className="max-w-[28ch] text-[0.875rem] leading-6 text-muted-foreground">
            {methodPage.aside}
          </p>
          <MediaFrame
            src="/images/editorial/facade-garden.webp"
            alt={methodPage.mediaAlt}
            topRight={methodPage.mediaLabel}
            className="aspect-[4/3]"
          />
        </div>
      </section>
    </PageShell>
  );
}
