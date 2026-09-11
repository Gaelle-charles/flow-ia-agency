import { Link } from "@tanstack/react-router";
import { BarChart3, Database, Zap } from "lucide-react";
import { useRef } from "react";

import { MediaFrame } from "@/components/site/MediaFrame";
import { useLocalizedContent } from "@/content/localized-content";

const expertiseIcons = { zap: Zap, database: Database, chart: BarChart3 } as const;

export function HomeHero() {
  const { hero } = useLocalizedContent();

  return (
    <section className="band grid gap-7 pb-4 pt-6 lg:grid-cols-[1fr_1.04fr] lg:gap-10">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="display-1 display-dot text-foreground">{hero.title}</h1>
          <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-7 text-muted-foreground">
            {hero.body}
          </p>
          <p className="mt-4 max-w-[46ch] font-display text-[0.9375rem] font-semibold text-foreground">
            {hero.principle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link to="/contact" className="cta-pill">
              {hero.primaryCta}
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/realisations" className="cta-ghost text-foreground">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      <MediaFrame
        src="/images/editorial/operations-room-v2.webp"
        alt={hero.mediaAlt}
        className="min-h-[17rem] sm:min-h-[20rem] lg:min-h-[22rem]"
        action={{ to: "/realisations", label: hero.mediaCta }}
      />
    </section>
  );
}

export function ExpertisePanel() {
  const { expertise, home } = useLocalizedContent();

  return (
    <section className="band pt-12 sm:pt-16">
      <div className="panel-ivory grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.75fr] lg:gap-10 lg:p-10">
        <div>
          <h2 className="display-2 max-w-[15ch]">{home.expertise.title}</h2>
          <p className="mt-5 max-w-[34ch] text-[0.875rem] leading-6 text-ivory-muted">
            {home.expertise.body}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-3">
          {expertise.map((item) => {
            const Icon = expertiseIcons[item.icon];
            return (
              <li
                key={item.id}
                className="flex flex-col rounded-[1.05rem] border border-white/10 bg-page p-5 text-foreground"
              >
                <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-5 font-display text-base font-bold leading-tight tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-6 text-muted-foreground">{item.body}</p>
                <Link
                  to="/work"
                  aria-label={item.title}
                  className="arrow-circle mt-6 border-white/25"
                >
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function FeaturedWork() {
  const { examples, home } = useLocalizedContent();

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.3fr_auto] lg:items-start lg:gap-10">
        <div>
          <h2 className="display-2 text-foreground">
            {home.work.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[46ch] text-[0.8125rem] leading-6 text-muted-foreground lg:mt-8">
          {home.work.intro}
        </p>
        <Link to="/realisations" className="cta-ghost text-foreground lg:mt-8">
          {home.work.link}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <ul className="mt-8 grid gap-3 md:grid-cols-3">
        {examples.map((item) => (
          <li key={item.id} className="surface-card flex flex-col overflow-hidden">
            <div className="media-frame rounded-none">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[16/10]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.025em] text-foreground">
                  {item.before}
                </h3>
                <Link to="/realisations" aria-label={item.outcome} className="arrow-circle">
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="mt-4 text-[0.8125rem] leading-6 text-foreground">{item.outcome}</p>
              <p className="mt-auto pt-4 text-[0.75rem] text-muted-foreground">
                {item.steps.map((step) => step.title).join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HumanAndStats() {
  const { home } = useLocalizedContent();
  const { evidence } = home;

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative isolate overflow-hidden rounded-[1.15rem] border border-white/10 bg-forest p-6 sm:p-8">
          <img
            src="/images/editorial/desk-review.webp"
            alt={home.human.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/85 to-forest/45"
          />

          <div className="flex min-h-[16rem] flex-col justify-end pt-24">
            <h2 className="display-2 max-w-[18ch] text-foreground">{home.human.title}</h2>
            <p className="mt-5 max-w-[44ch] text-[0.875rem] leading-6 text-muted-foreground">
              {home.human.body}
            </p>
            <Link
              to="/methode"
              aria-label={home.human.cta}
              className="arrow-circle mt-7 border-white/30"
            >
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="surface-card flex flex-col px-6 pt-6 sm:px-8 sm:pt-7">
          <h2 className="display-3 text-foreground">{evidence.title}</h2>
          <ul className="rule-list mt-2 flex flex-1 flex-col justify-center">
            {evidence.metrics.map((stat) => (
              <li key={stat.id} className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-6">
                <p className="font-display text-[3rem] font-extrabold leading-none tracking-[-0.05em] text-accent sm:text-[3.5rem]">
                  {stat.value}
                  <span className="text-[0.5em]">{stat.unit}</span>
                </p>
                <div className="min-w-[12rem] flex-1">
                  <p className="text-sm font-bold text-foreground">{stat.title}</p>
                  <p className="mt-1 text-[0.75rem] leading-5 text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <details className="group mt-3 rounded-[1.15rem] border border-border px-5 py-3 text-[0.75rem] leading-6 text-muted-foreground">
        <summary className="cursor-pointer list-none font-semibold [&::-webkit-details-marker]:hidden">
          {evidence.disclaimer} · {evidence.studyScope}
          <span
            aria-hidden="true"
            className="ml-2 inline-block transition-transform group-open:rotate-90"
          >
            →
          </span>
        </summary>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {evidence.sources.map((source) => (
            <li key={source.id}>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-foreground underline underline-offset-4"
              >
                {source.label}
              </a>
              <p className="mt-1">{source.scope}</p>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

export function FaqSection() {
  const { home } = useLocalizedContent();
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.3fr_auto] lg:items-start lg:gap-10">
        <div>
          <h2 className="display-2 text-foreground">
            {home.faq.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[44ch] text-[0.8125rem] leading-6 text-muted-foreground lg:mt-8">
          {home.faq.intro}
        </p>
        <div className="flex gap-2 lg:mt-6">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={home.faq.previous}
            className="arrow-circle"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={home.faq.next}
            className="arrow-circle"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="mt-8 grid auto-cols-[minmax(17rem,22rem)] grid-flow-col gap-3 overflow-x-auto pb-2 [scrollbar-width:none]"
      >
        {home.faq.items.map((item) => (
          <li key={item.question} className="surface-card flex flex-col p-6">
            <h3 className="font-display text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
              {item.question}
            </h3>
            <p className="mt-4 text-[0.8125rem] leading-6 text-muted-foreground">{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DeliveryPanel() {
  const { home } = useLocalizedContent();

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="panel-ivory p-6 sm:p-8 lg:p-10">
        <div className="flex justify-end">
          <Link
            to="/methode"
            className="cta-ghost text-ivory-foreground decoration-[color:var(--ivory-border)]"
          >
            {home.delivery.link}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.75fr] lg:gap-10">
          <h2 className="display-2 max-w-[16ch]">
            {home.delivery.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <ol className="grid gap-3 sm:grid-cols-3">
            {home.delivery.items.map((item) => (
              <li key={item.index} className="flex flex-col">
                <div className="media-frame">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10]"
                  />
                </div>
                <h3 className="mt-4 font-display text-[0.9375rem] font-bold leading-snug tracking-[-0.02em] text-ivory-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-6 text-ivory-muted">{item.body}</p>
                <p className="mt-3 border-t border-ivory-border pt-3 text-[0.75rem] leading-5 text-ivory-foreground">
                  <span className="font-semibold">{home.delivery.deliverable} · </span>
                  {item.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  const { home } = useLocalizedContent();

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="relative isolate grid gap-8 overflow-hidden rounded-[1.15rem] border border-border bg-card p-6 sm:p-9 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 lg:p-11">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-[30rem] w-[34rem] -translate-y-1/2 rounded-full bg-accent/30 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-8 -z-10 flex gap-2"
        >
          {[0, 1, 2].map((line) => (
            <span key={line} className="block h-28 w-[3px] -skew-x-[28deg] bg-accent/80" />
          ))}
        </div>

        <div>
          <h2 className="display-2 text-foreground">
            {home.cta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col items-start gap-5">
          <p className="max-w-[38ch] text-[0.8125rem] leading-6 text-muted-foreground">
            {home.cta.body}
          </p>
          <Link to="/contact" className="cta-pill">
            {home.cta.action}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="text-[0.75rem] text-muted-foreground">{home.cta.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
