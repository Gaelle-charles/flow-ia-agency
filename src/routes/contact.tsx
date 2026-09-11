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
      <PageIntro title={contactPage.introTitle} body={contactPage.introBody} />

      <section className="grid gap-9 px-1 py-12 sm:px-4 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-7 lg:py-16">
        <div>
          <h2 className="display-3 text-balance text-foreground">{contactPage.sectionTitle}</h2>
          <ul className="mt-6 space-y-3 text-[0.875rem] leading-6 text-muted-foreground">
            {contactPage.bullets.map((bullet) => (
              <li key={bullet} className="border-t border-border pt-3">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-panel rounded-[1.5rem] p-5 sm:p-7 lg:p-8">
          <ProcessIntakeForm />
        </div>
      </section>
    </PageShell>
  );
}
