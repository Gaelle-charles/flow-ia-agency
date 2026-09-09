type Engagement = {
  title: string;
  body: string;
  outputs: readonly string[];
};

export function EngagementCard({ item }: { item: Engagement }) {
  return (
    <article className="mb-3 grid gap-5 rounded-[1.4rem] border border-border bg-card p-5 sm:p-7 lg:grid-cols-[0.9fr_1fr_1fr] lg:gap-10">
      <h3 className="text-xl font-semibold leading-tight text-foreground">{item.title}</h3>
      <p className="text-base leading-7 text-muted-foreground">{item.body}</p>
      <ul className="space-y-2">
        {item.outputs.map((output) => (
          <li key={output} className="text-sm leading-6 text-foreground">
            {output}
          </li>
        ))}
      </ul>
    </article>
  );
}
