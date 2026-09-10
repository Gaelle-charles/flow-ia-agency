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
          <p className="eyebrow text-accent">{hero.eyebrow}</p>
          <h1 className="display-1 display-dot mt-6 text-foreground">{hero.title}</h1>
          <p className="mt-6 max-w-[42ch] text-[0.9375rem] leading-7 text-muted-foreground">
            {hero.body}
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

        <ul className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 pt-2">
          {hero.keywords.map((keyword, index) => (
            <li key={keyword} className="eyebrow flex items-center gap-2 text-muted-foreground">
              {index > 0 && <span aria-hidden="true">/</span>}
              {keyword}
            </li>
          ))}
        </ul>
      </div>

      <MediaFrame
        src="/images/editorial/operations-room-v2.webp"
        alt={hero.mediaAlt}
        className="min-h-[17rem] sm:min-h-[20rem] lg:min-h-[22rem]"
        topLeft={hero.mediaTopLabel}
        bottomRight={hero.mediaBottomLabel}
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
          <p className="eyebrow">{home.expertise.eyebrow}</p>
          <h2 className="display-2 mt-5 max-w-[15ch]">{home.expertise.title}</h2>
          <p className="mt-5 max-w-[34ch] text-[0.875rem] leading-6 text-ivory-muted">
            {home.expertise.body}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-3">
          {expertise.map((item) => {
            const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];
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
  const { cases, component, home } = useLocalizedContent();

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.3fr_auto] lg:items-start lg:gap-10">
        <div>
          <p className="eyebrow text-muted-foreground">{home.work.eyebrow}</p>
          <h2 className="display-2 mt-4 text-foreground">
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
        {cases.map((item) => (
          <li key={item.id} className="surface-card overflow-hidden">
            <div className="media-frame rounded-none">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10]"
              />
            </div>
            <div className="p-5">
              <p className="eyebrow text-muted-foreground">{item.sectorLabel}</p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.025em] text-foreground">
                  {item.title}
                </h3>
                <Link
                  to="/realisations"
                  aria-label={`${component.readCase} — ${item.title}`}
                  className="arrow-circle"
                >
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="mt-4 text-[0.75rem] text-muted-foreground">{item.tags}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HumanAndStats() {
  const { home } = useLocalizedContent();

  return (
    <section className="band grid gap-3 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr]">
      <div className="relative isolate overflow-hidden rounded-[1.15rem] border border-white/10 bg-forest p-6 sm:p-8">
        <img
          src="/images/editorial/data-decision.webp"
          alt={home.human.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/85 to-forest/45"
        />

        <p className="media-label right-6 top-6 text-right">
          {home.human.label.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <div className="flex min-h-[16rem] flex-col justify-end pt-24">
          <h2 className="display-2 display-dot max-w-[16ch] text-foreground">{home.human.title}</h2>
          <p className="mt-5 max-w-[36ch] text-[0.875rem] leading-6 text-muted-foreground">
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

      <ul className="surface-card rule-list flex flex-col justify-center px-6 sm:px-8">
        {home.stats.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-7 sm:py-8"
          >
            <p className="font-display text-[3.25rem] font-extrabold leading-none tracking-[-0.05em] text-accent sm:text-[3.75rem]">
              {stat.value}
              <span className="text-[0.5em]">{stat.unit}</span>
            </p>
            <div className="min-w-[12rem] flex-1">
              <p className="text-sm font-bold text-foreground">{stat.label}</p>
              <p className="mt-1 text-[0.75rem] leading-5 text-muted-foreground">{stat.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Testimonials() {
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
          <p className="eyebrow text-muted-foreground">{home.testimonials.eyebrow}</p>
          <h2 className="display-2 mt-4 text-foreground">
            {home.testimonials.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[44ch] text-[0.8125rem] leading-6 text-muted-foreground lg:mt-8">
          {home.testimonials.intro}
        </p>
        <div className="flex gap-2 lg:mt-6">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={home.testimonials.previous}
            className="arrow-circle"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={home.testimonials.next}
            className="arrow-circle"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="mt-8 grid auto-cols-[minmax(17rem,1fr)] grid-flow-col gap-3 overflow-x-auto pb-2 [scrollbar-width:none] md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:overflow-visible"
      >
        {home.testimonials.items.map((item) => (
          <li key={item.id} className="surface-card flex flex-col p-6">
            <blockquote className="text-[0.875rem] leading-7 text-foreground">
              “{item.quote}”
            </blockquote>
            <div className="mt-auto pt-8">
              <p className="text-sm font-bold text-foreground">{item.name}</p>
              <p className="mt-1 text-[0.75rem] text-muted-foreground">{item.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function InsightsPanel() {
  const { component, home } = useLocalizedContent();

  return (
    <section className="band pt-14 sm:pt-20">
      <div className="panel-ivory p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">{home.insights.eyebrow}</p>
          <Link
            to="/journal"
            className="cta-ghost text-ivory-foreground decoration-[color:var(--ivory-border)]"
          >
            {home.insights.link}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.75fr] lg:gap-10">
          <h2 className="display-2 max-w-[16ch]">
            {home.insights.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <ul className="grid gap-3 sm:grid-cols-3">
            {home.insights.items.map((item) => (
              <li key={item.id}>
                <Link
                  to="/journal"
                  aria-label={`${component.readArticle} — ${item.title}`}
                  className="group block"
                >
                  <div className="media-frame">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="eyebrow mt-4 text-ivory-muted">{item.category}</p>
                  <h3 className="mt-2 font-display text-[0.9375rem] font-bold leading-snug tracking-[-0.02em] text-ivory-foreground">
                    {item.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
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
          <p className="eyebrow text-muted-foreground">{home.cta.eyebrow}</p>
          <h2 className="display-2 mt-4 text-foreground">
            {home.cta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="max-w-[34ch] text-[0.8125rem] leading-6 text-muted-foreground">
            {home.cta.body}
          </p>
          <Link to="/contact" className="cta-pill">
            {home.cta.action}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
