import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import crmLaptop from "@/assets/crm-laptop.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLOW — Agence IA : agents, automatisation, CRM" },
      {
        name: "description",
        content:
          "FLOW conçoit des agents IA autonomes, automatise vos process no-code et déploie un CRM intelligent. Parlons de votre projet.",
      },
      { property: "og:title", content: "FLOW — Agence IA" },
      {
        property: "og:description",
        content:
          "Agents autonomes, automatisation no-code et CRM intelligent pour votre entreprise.",
      },
    ],
  }),
  component: Index,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-foreground">
      {children}
    </span>
  );
}

function ArrowButton({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? "inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-1"
          : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent text-accent transition-transform group-hover:translate-x-1"
      }
      aria-hidden="true"
    >
      →
    </span>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/30 px-3 py-4 font-sans sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1250px] rounded-3xl bg-background p-4 sm:p-8">
        {/* Nav */}
        <header className="sticky top-0 z-50 -mx-4 -mt-4 flex items-center justify-between gap-4 border-b border-border/50 bg-background/85 px-4 py-4 backdrop-blur-xl transition-colors duration-300 sm:-mx-8 sm:-mt-8 sm:px-8">
          <a
            href="#top"
            className="text-xl font-black uppercase tracking-[0.35em] text-foreground"
          >
            Flow
          </a>
          <nav className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest sm:gap-6">
            <span className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 sm:inline-flex">
              Agence IA
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
                3
              </span>
            </span>
            <a href="#services" className="hidden text-muted-foreground hover:text-foreground md:inline">
              Nos services
            </a>
            <a href="#methode" className="hidden text-muted-foreground hover:text-foreground md:inline">
              Méthode
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </nav>
        </header>

        {/* Hero */}
        <section
          id="top"
          className="grid gap-8 rounded-3xl border border-border bg-card p-6 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center"
        >
          <h1 className="animate-fade-in flex items-end text-[19vw] font-black uppercase leading-[0.8] tracking-tighter text-foreground lg:text-[11rem]">
            Flow
            <span className="pulse mb-[0.12em] ml-2 inline-block h-[0.18em] w-[0.18em] bg-accent" />
          </h1>
          <div className="animate-fade-in [animation-delay:150ms] [animation-fill-mode:backwards]">
            <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground sm:text-base">
              L'agence IA qui rend votre entreprise fluide : agents autonomes,
              automatisation et CRM intelligent. ·
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Agentic / Automatisation / CRM
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-4 grid gap-4 lg:grid-cols-3">
          <Link
            to="/services/agentic"
            className="group flex min-h-[480px] animate-fade-in flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl [animation-delay:200ms] [animation-fill-mode:backwards]"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Agents autonomes
            </p>
            <div className="mt-auto">
              <h2 className="text-4xl font-black uppercase tracking-tight text-foreground">
                Agentic<span className="text-accent">.</span>
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Agents</Tag>
                <Tag>Workflows</Tag>
              </div>
            </div>
            <div className="mt-auto pt-12">
              <p className="text-xs font-bold uppercase leading-relaxed tracking-wide text-muted-foreground">
                Des agents IA qui exécutent vos processus de bout en bout, 24h/24.
              </p>
              <div className="mt-5">
                <ArrowButton />
              </div>
            </div>
          </Link>

          <Link
            to="/services/automatisation"
            className="group flex min-h-[480px] animate-fade-in flex-col rounded-3xl border border-border bg-secondary p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl [animation-delay:350ms] [animation-fill-mode:backwards]"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Processus
            </p>
            <div className="mt-auto">
              <h2 className="break-all text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
                Automatisation
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>No-code</Tag>
              </div>
            </div>
            <div className="mt-auto pt-12">
              <p className="text-xs font-bold uppercase leading-relaxed tracking-wide text-muted-foreground">
                Vos tâches répétitives connectées, orchestrées et supprimées de
                votre agenda.
              </p>
              <div className="mt-5">
                <ArrowButton />
              </div>
            </div>
          </Link>

          <Link
            to="/services/crm"
            className="group flex min-h-[480px] animate-fade-in flex-col overflow-hidden rounded-3xl bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl [animation-delay:500ms] [animation-fill-mode:backwards]"
          >
            <div className="relative">
              <img
                src={crmLaptop.url}
                alt="Interface CRM affichée sur un ordinateur portable"
                loading="lazy"
                className="h-64 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 top-0 flex flex-wrap items-center justify-between gap-2 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">
                  CRM intelligent
                </p>
                <div className="flex gap-2">
                  <Tag>Scoring</Tag>
                  <Tag>Pipeline</Tag>
                  <Tag>Data</Tag>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col bg-muted-foreground/95 p-7 text-background">
              <p className="text-lg leading-snug">
                Un CRM qui pense pour vous : qualification des leads par IA,
                relances automatiques et prévisions de ventes en temps réel.
              </p>
              <div className="mt-auto pt-10">
                <ArrowButton dark />
              </div>
            </div>
          </Link>

        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-4 grid gap-10 rounded-3xl border border-border bg-card p-7 sm:p-12 lg:grid-cols-2"
        >
          <div id="methode">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h2 className="animate-fade-in mt-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-7xl">
              Parlons
              <br />
              de votre
              <br />
              projet<span className="text-accent">.</span>
            </h2>
            <div className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <p>hello@flow.agency</p>
              <p className="mt-1">Réponse sous 24h</p>
            </div>
          </div>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                placeholder="NOM"
                aria-label="Nom"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-4 text-xs font-bold uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder="EMAIL"
                aria-label="Email"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-4 text-xs font-bold uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <input
              placeholder="ENTREPRISE"
              aria-label="Entreprise"
              className="w-full rounded-xl border border-border bg-transparent px-4 py-4 text-xs font-bold uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="VOTRE BESOIN : AGENTS, AUTOMATISATION, CRM…"
              aria-label="Votre besoin"
              className="w-full rounded-xl border border-border bg-transparent px-4 py-4 text-xs font-bold uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-6 py-4 text-xs font-black uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              {sent ? "Message envoyé ✓" : "Envoyer →"}
            </button>
          </form>
        </section>

        <footer className="flex flex-col gap-3 px-2 py-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Flow · Agence IA</p>
          <p>Agentic / Automatisation / CRM intelligent</p>
          <p>Paris · Remote</p>
        </footer>
      </div>
    </div>
  );
}
