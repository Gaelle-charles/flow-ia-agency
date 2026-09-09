import { useLocalizedContent } from "@/content/localized-content";

type UseCase = {
  shortTitle: string;
  before: string;
  context: string;
  execution: string;
  intelligence: string;
  humanControl: string;
  outcome: string;
  examples: readonly string[];
};

export function UseCaseCard({ item, index }: { item: UseCase; index: number }) {
  const { useCasesPage } = useLocalizedContent();

  return (
    <details className="use-case-row" name="use-case" open={index === 0}>
      <summary>
        <span className="text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h2>{item.shortTitle}</h2>
          <p>{item.before}</p>
        </div>
        <span className="use-case-toggle" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="use-case-content">
        <dl>
          <div>
            <dt>Context</dt>
            <dd>{item.context}</dd>
          </div>
          <div>
            <dt>Execution</dt>
            <dd>{item.execution}</dd>
          </div>
          <div>
            <dt>Intelligence</dt>
            <dd>{item.intelligence}</dd>
          </div>
        </dl>
        <div className="use-case-outcome">
          <p>
            <strong>{useCasesPage.humanControl}</strong>
            {item.humanControl}
          </p>
          <p>
            <strong>{useCasesPage.targetOutcome}</strong>
            {item.outcome}
          </p>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">{item.examples.join(" · ")}</p>
      </div>
    </details>
  );
}
