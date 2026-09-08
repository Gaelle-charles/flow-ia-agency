import { governancePrinciples } from "@/content/site-content";

type Principle = (typeof governancePrinciples)[number];

export function GovernancePrinciple({ item }: { item: Principle }) {
  return (
    <article className="border-t border-background/15 py-5">
      <div className="grid gap-3 sm:grid-cols-[0.55fr_1fr] sm:items-start sm:gap-8">
        <h3 className="text-lg font-bold text-background">{item.title}</h3>
        <p className="text-base leading-7 text-background/70">{item.body}</p>
      </div>
    </article>
  );
}
