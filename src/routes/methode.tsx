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
      <section className="band hero-screen grid gap-8 pb-8 pt-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch lg:gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="display-2 text-foreground">
            {methodPage.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-7 text-muted-foreground">
            {methodPage.body}
          </p>
          <p className="mt-6 max-w-[40ch] text-[0.875rem] leading-6 text-muted-foreground">
            {methodPage.aside}
          </p>
        </div>

        <MediaFrame
          src="/images/editorial/facade-garden.webp"
          alt={methodPage.mediaAlt}
          className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
        />
      </section>

      <section className="band grid gap-10 pt-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <p className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
            {methodPage.methodTitle}
          </p>
          <ol className="rule-list mt-4">
            {methodPage.steps.map((step) => (
              <li key={step.id} className="py-6">
                <h2 className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-[46ch] text-[0.8125rem] leading-6 text-muted-foreground">
                  {step.body}
                </p>
                <ul className="mt-3 grid gap-1 text-[0.8125rem] leading-6 text-foreground sm:grid-cols-2">
                  {step.outputs.map((output) => (
                    <li key={output} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        →
                      </span>
                      {output}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="surface-card self-start p-6">
          <h2 className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
            {methodPage.scopeTitle}
          </h2>
          <p className="mt-2 text-[0.8125rem] leading-6 text-muted-foreground">
            {methodPage.scopeBody}
          </p>
        </div>
      </section>

      <section className="band pt-10 sm:pt-14">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-10">
          <div>
            <h2 className="display-2 text-foreground">{methodPage.governanceTitle}</h2>
          </div>
          <p className="max-w-[52ch] text-[0.8125rem] leading-6 text-muted-foreground">
            {methodPage.governanceBody}
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {methodPage.governancePrinciples.map((principle) => (
            <li key={principle.title} className="surface-card p-6">
              <h3 className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-6 text-muted-foreground">
                {principle.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
