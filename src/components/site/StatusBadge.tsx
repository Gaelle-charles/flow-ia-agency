import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  children: string;
  tone?: "signal" | "neutral";
  className?: string;
};

export function StatusBadge({ children, tone = "neutral", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 py-1 font-mono text-xs font-bold uppercase leading-none tracking-[0.12em]",
        tone === "signal"
          ? "border-accent/45 bg-accent/10 text-accent"
          : "border-border bg-secondary/70 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
