import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocalizedContent } from "@/content/localized-content";

export function OperationWalkthrough() {
  const { component, operatingLayers, operationExamples } = useLocalizedContent();

  return (
    <Tabs defaultValue="request" className="operation-workbench">
      <div className="operation-toolbar">
        <TabsList aria-label={component.operationAria} className="operation-tabs">
          {operationExamples.map((example) => (
            <TabsTrigger key={example.id} value={example.id} className="operation-tab">
              {example.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <p className="operation-caption">{component.illustrativeExamples}</p>
      </div>

      {operationExamples.map((example) => (
        <TabsContent key={example.id} value={example.id} className="operation-panel">
          <div className="operation-before">
            <p className="operation-label">{component.today}</p>
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
              <p className="operation-label">{component.workMoves}</p>
              <p className="operation-outcome">{example.outcome}</p>
            </div>
            <div>
              <p className="operation-label">{component.humanKeepsControl}</p>
              <p>{example.humanControl}</p>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
