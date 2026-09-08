import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { operationExamples } from "@/content/operation-examples";
import { operatingLayers } from "@/content/site-content";

export function OperationWalkthrough() {
  return (
    <Tabs defaultValue="request" className="operation-workbench">
      <div className="operation-toolbar">
        <TabsList aria-label="Choisir une opération" className="operation-tabs">
          {operationExamples.map((example) => (
            <TabsTrigger key={example.id} value={example.id} className="operation-tab">
              {example.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <p className="operation-caption">Exemples illustratifs</p>
      </div>

      {operationExamples.map((example) => (
        <TabsContent key={example.id} value={example.id} className="operation-panel">
          <div className="operation-before">
            <p className="operation-label">Aujourd’hui</p>
            <p>{example.before}</p>
          </div>

          <ol className="operation-sequence" aria-label="Context, Execution, Intelligence">
            {example.steps.map((step, index) => {
              const layer = operatingLayers[index];
              if (!layer) return null;
              return (
                <li key={step.title}>
                  <div className="operation-stage">
                    <span>{layer.stage}</span>
                    <span className="operation-connector" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p className="operation-description">{step.body}</p>
                  <p className="operation-capability">{layer.capability}</p>
                </li>
              );
            })}
          </ol>

          <div className="operation-result">
            <div>
              <p className="operation-label">Le travail avance</p>
              <p className="operation-outcome">{example.outcome}</p>
            </div>
            <div>
              <p className="operation-label">L’humain garde la main</p>
              <p>{example.humanControl}</p>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
