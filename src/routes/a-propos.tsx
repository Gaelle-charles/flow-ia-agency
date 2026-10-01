import { createFileRoute } from "@tanstack/react-router";

import { HeroCover, PageShell } from "@/components/site/PageShell";
import brand from "@/content/brand.config.json";
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
  const { about, certification, partner } = useLocalizedContent();
  const { recognitions } = about;

  return (
    <PageShell>
      <HeroCover
        title={about.title}
        body={about.body}
        image={{ src: "/images/editorial/operations-room-v2.webp", alt: about.mediaAlt }}
      />

      <section className="band">
        <div className="border-t border-border pt-6">
          <h2 className="display-3 max-w-[30ch] text-foreground">{about.modelTitle}</h2>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {about.roles.map((role) => (
            <li key={role.id}>
              <h3 className="text-sm font-bold text-accent">{role.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[0.8125rem] leading-6 text-muted-foreground">
                {role.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[70ch] border-t border-border pt-6 text-[0.875rem] leading-6 text-muted-foreground">
          {about.team}
        </p>
      </section>

      <section className="band pt-10 sm:pt-12" aria-labelledby="recognitions-title">
        <div className="border-t border-border pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            {recognitions.eyebrow}
          </p>
          <h2
            id="recognitions-title"
            className="display-2 mt-4 max-w-[22ch] scroll-mt-24 text-foreground"
          >
            {recognitions.title}
          </h2>
          <p className="mt-5 max-w-[75ch] text-[0.875rem] leading-7 text-muted-foreground">
            {recognitions.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="surface-card flex flex-col p-6 sm:p-8">
            <div className="flex min-h-40 items-center">
              <img
                src={partner.image}
                alt={recognitions.partnerAlt}
                width={375}
                height={177}
                loading="lazy"
                decoding="async"
                className="h-auto w-full max-w-[280px]"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-accent">
              {recognitions.partnerLabel}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
              {recognitions.partnerTitle}
            </h3>
            <p className="mt-4 max-w-[60ch] text-[0.875rem] leading-7 text-muted-foreground">
              {recognitions.partnerBody}
            </p>
            <a
              href={partner.programUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-ghost mt-auto self-start pt-6 text-foreground"
            >
              {recognitions.partnerLink}
              <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="surface-card flex flex-col p-6 sm:p-8">
            <div className="flex min-h-40 items-center">
              <img
                src={certification.image}
                alt={about.credential.alt}
                width={402}
                height={402}
                loading="lazy"
                decoding="async"
                className="h-32 w-32 object-contain"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-accent">
              {recognitions.certificationLabel}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
              {recognitions.certificationTitle}
            </h3>
            <p className="mt-4 max-w-[60ch] text-[0.875rem] leading-7 text-muted-foreground">
              {recognitions.certificationBody}
            </p>
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-ghost mt-auto self-start pt-6 text-foreground"
            >
              {recognitions.certificationLink}
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <h3 className="display-3 max-w-[28ch] text-foreground">
            {recognitions.commitmentsTitle}
          </h3>
          <ul className="mt-7 grid gap-6 md:grid-cols-3">
            {recognitions.commitments.map((commitment) => (
              <li key={commitment.title}>
                <h4 className="font-display text-base font-bold text-foreground">
                  {commitment.title}
                </h4>
                <p className="mt-3 text-[0.8125rem] leading-6 text-muted-foreground">
                  {commitment.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band pt-10 sm:pt-12">
        <div className="border-t border-border pt-6">
          <h2 className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
            {about.legalTitle}
          </h2>
          <p className="mt-3 max-w-[70ch] text-[0.875rem] leading-6 text-foreground">
            {brand.name} {about.legalText} {brand.legalName}, {brand.legalForm}, SIREN {brand.siren}
            .
          </p>
          <a
            href={about.publicRecordUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="cta-ghost mt-3 text-foreground"
          >
            {about.publicRecord}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
