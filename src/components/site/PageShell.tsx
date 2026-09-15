import type { ReactNode } from "react";

import { LegalFooter, SiteHeader } from "@/components/SiteChrome";
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

type HeroCoverProps = {
  /** One entry per rendered line. */
  title: readonly string[];
  body: string;
  image?: { src: string; alt: string };
  /** Anything below the body: buttons, an extra line… */
  children?: ReactNode;
};

/**
 * Screen-high hero: the photo fills the whole block and the copy sits over
 * it, centred vertically so it stays in view even when the visible area is
 * shorter than the computed screen height (embedded previews, toolbars). Without a photo the block keeps the same
 * size and alignment on the plain dark ground.
 */
export function HeroCover({ title, body, image, children }: HeroCoverProps) {
  // Every hero title ends on the lime square, which replaces a closing period.
  const lines = title.map((line, index) =>
    index === title.length - 1 ? line.replace(/\.$/u, "") : line,
  );

  return (
    <section className="band hero-screen flex pb-6 pt-3">
      <div className="relative isolate flex w-full flex-1 flex-col justify-center overflow-hidden rounded-[1.15rem] border border-white/10 bg-card p-6 sm:p-10 lg:p-14">
        {image && (
          <>
            <img
              src={image.src}
              alt={image.alt}
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-r from-page/90 via-page/60 to-page/25"
            />
          </>
        )}

        <h1 className="display-1 relative z-10 max-w-[16ch] text-foreground">
          {lines.map((line, index) => (
            <span key={line} className={`block ${index === lines.length - 1 ? "display-dot" : ""}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="relative z-10 mt-6 max-w-[52ch] text-[0.9375rem] leading-7 text-foreground/85 sm:text-base">
          {body}
        </p>
        {children}
      </div>
    </section>
  );
}
