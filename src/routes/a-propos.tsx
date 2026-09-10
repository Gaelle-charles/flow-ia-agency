import { createFileRoute } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/site/PageShell";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { about } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(about.title.join(" "), about.body) };
  },
  component: AboutPage,
});

function AboutPage() {
  const { about, certification } = useLocalizedContent();

  return (
    <PageShell>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        body={about.body}
        media={{
          src: "/images/editorial/operations-room-v2.webp",
          alt: about.mediaAlt,
          label: about.mediaLabel,
        }}
      />

      <section className="band">
        <ul className="grid gap-8 border-t border-border pt-6 sm:grid-cols-3 sm:gap-6">
          {about.roles.map((role) => (
            <li key={role.id}>
              <h2 className="text-sm font-bold text-accent">{role.title}</h2>
              <p className="mt-3 max-w-[32ch] text-[0.8125rem] leading-6 text-muted-foreground">
                {role.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band pt-10 sm:pt-12">
        <div className="surface-card flex flex-wrap items-center gap-6 p-6 sm:gap-9 sm:p-8">
          <img
            src={certification.image}
            alt={about.credential.alt}
            loading="lazy"
            decoding="async"
            className="h-24 w-24 flex-none object-contain sm:h-28 sm:w-28"
          />
          <div>
            <h2 className="display-3 max-w-[18ch] text-foreground">{about.credential.title}</h2>
            <p className="mt-3 max-w-[38ch] text-[0.8125rem] leading-6 text-muted-foreground">
              {about.credential.body}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
