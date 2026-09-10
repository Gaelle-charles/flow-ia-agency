import type { ReactNode } from "react";

import { LegalFooter, SiteHeader } from "@/components/SiteChrome";
import { MediaFrame } from "@/components/site/MediaFrame";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-page font-sans">
      <div className="mx-auto flex min-h-screen max-w-[1360px] flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <LegalFooter />
      </div>
    </div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  /** One entry per rendered line, as drawn in the mockups. */
  title: readonly string[];
  body: string;
  /** Adds the lime square that closes single-line page titles. */
  dot?: boolean;
  media?: { src: string; alt: string; label: readonly string[] };
};

export function PageHero({ eyebrow, title, body, dot = false, media }: PageHeroProps) {
  return (
    <section className="band grid gap-8 pb-10 pt-10 sm:pt-14 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
      <div>
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="display-2 mt-5 max-w-[17ch] text-foreground">
          {title.map((line, index) => (
            <span
              key={line}
              className={`block ${dot && index === title.length - 1 ? "display-dot" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-7 text-muted-foreground">{body}</p>
      </div>

      {media && (
        <MediaFrame
          src={media.src}
          alt={media.alt}
          topRight={media.label}
          className="aspect-[16/9]"
        />
      )}
    </section>
  );
}

/** Simple intro block for the pages the mockups do not cover (journal, legal…). */
export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="band pb-10 pt-8 sm:pt-10">
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h1 className="display-2 mt-5 max-w-4xl text-foreground">{title}</h1>
      <p className="mt-5 max-w-[58ch] text-[0.9375rem] leading-7 text-muted-foreground">{body}</p>
    </section>
  );
}
