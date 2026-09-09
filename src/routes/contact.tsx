import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, PageShell } from "@/components/site/PageShell";
import { ProcessIntakeForm } from "@/components/site/ProcessIntakeForm";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { contactPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(contactPage.introTitle, contactPage.introBody) };
  },
  component: ContactPage,
});

function ContactPage() {
  const { contactPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro
        eyebrow={contactPage.introEyebrow}
        title={contactPage.introTitle}
        body={contactPage.introBody}
      />

      <section className="grid gap-9 px-1 py-12 sm:px-4 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-7 lg:py-16">
        <div>
          <p className="text-sm font-semibold text-accent">{contactPage.sectionEyebrow}</p>
          <h2 className="type-feature-title mt-6 text-balance font-semibold text-foreground">
            {contactPage.sectionTitle}
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
            {contactPage.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-card p-5 sm:p-7 lg:p-8">
          <ProcessIntakeForm />
        </div>
      </section>
    </PageShell>
  );
}
