import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyFeatured } from "@/components/site/CaseStudyFeatured";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { getLocalizedContent, useLocalizedContent } from "@/content/localized-content";
import { getInitialLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/realisations")({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { workPage } = getLocalizedContent(loaderData?.locale ?? "fr");
    return { meta: pageMeta(workPage.introTitle, workPage.introBody) };
  },
  component: RealisationsPage,
});

function RealisationsPage() {
  const { publicProjects, workPage } = useLocalizedContent();

  return (
    <PageShell>
      <PageIntro
        eyebrow={workPage.introEyebrow}
        title={workPage.introTitle}
        body={workPage.introBody}
      />

      <section className="py-10 sm:py-12">
        <SectionHeader eyebrow={workPage.clientEyebrow} title={workPage.clientTitle} />
        <div className="mt-9">
          <CaseStudyFeatured />
        </div>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <SectionHeader
          eyebrow={workPage.productEyebrow}
          title={workPage.productTitle}
          body={workPage.productBody}
        />
        <div className="mt-9 space-y-4">
          {publicProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <p className="text-sm font-semibold text-accent">{workPage.publicationEyebrow}</p>
          <div>
            <h2 className="type-feature-title text-balance font-semibold text-foreground">
              {workPage.publicationTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              {workPage.publicationBody}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
