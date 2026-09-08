import { deliverySteps } from "@/content/site-content";

type Method = (typeof deliverySteps)[number];

export function MethodStep({ item }: { item: Method }) {
  return (
    <li className="grid gap-4 border-t border-border py-5 sm:grid-cols-[3rem_0.55fr_1fr] sm:items-start sm:gap-6">
      <span className="text-sm font-semibold text-accent">{item.stage}</span>
      <h3 className="text-lg font-bold tracking-[-0.01em] text-foreground sm:text-xl">
        {item.title}
      </h3>
      <div>
        <p className="text-base leading-7 text-muted-foreground">{item.body}</p>
        <p className="mt-3 text-sm font-bold leading-6 text-foreground">{item.deliverable}</p>
      </div>
    </li>
  );
}
