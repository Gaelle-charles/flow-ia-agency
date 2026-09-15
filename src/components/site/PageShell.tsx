import type { ReactNode } from "react";

import { LegalFooter, SiteHeader } from "@/components/SiteChrome";
import { MediaFrame } from "@/components/site/MediaFrame";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function PageShell({ children }: { children: ReactNode }) {
  useScrollReveal();

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
  /** One entry per rendered line, as drawn in the mockups. */
  title: readonly string[];
  body: string;
  /** Adds the lime square that closes single-line page titles. */
  dot?: boolean;
  media?: { src: string; alt: string };
};

export function PageHero({ title, body, dot = false, media }: PageHeroProps) {
  return (
    <section className="band hero-screen grid gap-8 pb-10 pt-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch lg:gap-12 lg:pb-8">
      <div className="flex flex-col justify-center">
        <h1 className="display-2 max-w-[17ch] text-foreground">
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
          className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
        />
      )}
    </section>
  );
}

/** Simple intro block for the pages the mockups do not cover (journal, legal…). */
export function PageIntro({ title, body }: { title: string; body: string }) {
  return (
    <section className="band hero-screen flex flex-col justify-center pb-10 pt-8">
      <h1 className="display-2 max-w-4xl text-foreground">{title}</h1>
      <p className="mt-5 max-w-[58ch] text-[0.9375rem] leading-7 text-muted-foreground">{body}</p>
    </section>
  );
}
