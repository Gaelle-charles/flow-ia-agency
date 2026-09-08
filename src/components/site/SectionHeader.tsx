import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  inverted?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  inverted = false,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("grid gap-4 lg:grid-cols-[0.3fr_1fr] lg:gap-10", className)}>
      <p
        className={cn(
          "text-sm font-semibold",
          inverted ? "text-background/65" : "text-muted-foreground",
        )}
      >
        {eyebrow}
      </p>
      <div>
        <h2
          className={cn(
            "type-section-title max-w-4xl text-balance font-semibold",
            inverted ? "text-background" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {body ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-7",
              inverted ? "text-background/70" : "text-muted-foreground",
            )}
          >
            {body}
          </p>
        ) : null}
      </div>
    </header>
  );
}
