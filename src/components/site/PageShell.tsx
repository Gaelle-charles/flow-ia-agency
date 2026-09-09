import type { ReactNode } from "react";

import { LegalFooter, SiteHeader } from "@/components/SiteChrome";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-page font-sans">
      <div className="mx-auto min-h-screen max-w-[1440px] bg-background">
        <SiteHeader />
        <main id="main-content" className="px-2 sm:px-3">
          {children}
        </main>
        <LegalFooter />
      </div>
    </div>
  );
}

type PageIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageIntro({ eyebrow, title, body }: PageIntroProps) {
  return (
    <section className="rounded-[1.4rem] border border-border bg-card px-5 py-10 sm:px-9 sm:py-12 lg:px-12">
      <div className="max-w-5xl">
        <p className="text-sm font-semibold text-accent">{eyebrow}</p>
        <h1 className="type-page-title mt-5 max-w-4xl text-balance font-semibold text-foreground">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {body}
        </p>
      </div>
    </section>
  );
}
