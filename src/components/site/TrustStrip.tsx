import { trustItems } from "@/content/site-content";

export function TrustStrip() {
  return (
    <section
      aria-label="Engagements de confiance"
      className="border-b border-x border-border bg-card"
    >
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <li
            key={item}
            className="flex min-h-14 items-center border-border px-4 py-3 text-sm font-medium leading-5 text-muted-foreground odd:border-r [&:nth-child(-n+2)]:border-b lg:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
