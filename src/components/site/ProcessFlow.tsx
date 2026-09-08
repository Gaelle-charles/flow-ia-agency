const flowSteps = [
  { index: "01", label: "Context", detail: "CRM, données, historique et règles" },
  { index: "02", label: "Execution", detail: "Workflows, intégrations et contrôles" },
  { index: "03", label: "Intelligence", detail: "Interprétation et actions autorisées" },
  { index: "04", label: "Human control", detail: "Validation, refus ou escalade" },
  { index: "05", label: "Outcome", detail: "Un résultat opérationnel mesuré" },
] as const;

export function ProcessFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "rounded-3xl border border-border bg-secondary/45 p-4 sm:p-5"
          : "rounded-[1.6rem] border border-border bg-background/70 p-4 shadow-2xl shadow-black/20 sm:p-5"
      }
    >
      <p className="mb-4 text-sm font-semibold text-muted-foreground">
        Context → Execution → Intelligence
      </p>

      <ol aria-label="Context, execution, intelligence, contrôle humain et résultat">
        {flowSteps.map((step) => (
          <li key={step.label}>
            <div className="grid grid-cols-[2.4rem_1fr] gap-2.5 border-t border-border py-3 sm:grid-cols-[2.4rem_0.6fr_1fr] sm:items-center">
              <span className="text-sm font-semibold text-accent">{step.index}</span>
              <strong className="text-sm text-foreground sm:text-base">{step.label}</strong>
              <span
                className={
                  compact
                    ? "col-start-2 text-sm leading-6 text-muted-foreground sm:col-start-auto"
                    : "col-start-2 hidden text-sm leading-6 text-muted-foreground sm:col-start-auto sm:block"
                }
              >
                {step.detail}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
