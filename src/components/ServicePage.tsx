import { Link } from "@tanstack/react-router";

export type ServiceContent = {
  eyebrow: string;
  title: string;
  intro: string;
  tags: string[];
  offers: { title: string; text: string }[];
  steps: { title: string; text: string }[];
};

export function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <div className="min-h-screen bg-secondary/30 px-3 py-4 font-sans sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1250px] rounded-3xl bg-background p-4 sm:p-8">
        <header className="sticky top-0 z-50 -mx-4 -mt-4 flex items-center justify-between gap-4 border-b border-border/50 bg-background/85 px-4 py-4 backdrop-blur-xl transition-colors duration-300 sm:-mx-8 sm:-mt-8 sm:px-8">
          <Link
            to="/"
            className="text-xl font-black uppercase tracking-[0.35em] text-foreground"
          >
            Flow
          </Link>
          <nav className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest sm:gap-6">
            <Link
              to="/services/agentic"
              activeProps={{ className: "text-foreground" }}
              className="text-muted-foreground hover:text-foreground"
            >
              Agentic
            </Link>
            <Link
              to="/services/automatisation"
              activeProps={{ className: "text-foreground" }}
              className="text-muted-foreground hover:text-foreground"
            >
              Automatisation
            </Link>
            <Link
              to="/services/crm"
              activeProps={{ className: "text-foreground" }}
              className="text-muted-foreground hover:text-foreground"
            >
              CRM
            </Link>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </nav>
        </header>

        <section className="animate-fade-in rounded-3xl border border-border bg-card p-6 sm:p-12">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 break-words text-5xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-8xl">
            {content.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground sm:text-base">
            {content.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {content.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-3">
          {content.offers.map((o, i) => (
            <article
              key={o.title}
              className="animate-fade-in rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
              style={{ animationDelay: `${200 + i * 150}ms`, animationFillMode: "backwards" }}
            >
              <h2 className="break-words text-2xl font-black uppercase tracking-tight text-foreground">
                {o.title}
              </h2>
              <p className="mt-4 text-xs font-bold uppercase leading-relaxed tracking-wide text-muted-foreground">
                {o.text}
              </p>
            </article>
          ))}
        </section>

        <section className="animate-fade-in mt-4 rounded-3xl bg-secondary p-7 [animation-delay:400ms] [animation-fill-mode:backwards] sm:p-12">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Méthode
          </p>
          <ol className="mt-8 grid gap-8 md:grid-cols-4">
            {content.steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-wide text-muted-foreground">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-4 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:p-12">
          <h2 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-5xl">
            Parlons de votre projet<span className="text-accent">.</span>
          </h2>
          <Link
            to="/"
            hash="contact"
            className="hover-scale rounded-full bg-accent px-6 py-4 text-xs font-black uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
          >
            Nous contacter →
          </Link>
        </section>

        <footer className="flex flex-col gap-3 px-2 py-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Flow · Agence IA</p>
          <Link to="/" className="hover:text-foreground">
            ← Retour à l'accueil
          </Link>
          <p>Paris · Remote</p>
        </footer>
      </div>
    </div>
  );
}
