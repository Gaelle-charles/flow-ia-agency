import { Link } from "@tanstack/react-router";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  /** Mono caption stacked in a corner, one entry per line. */
  topLeft?: readonly string[];
  topRight?: readonly string[];
  bottomRight?: readonly string[];
  /** Circular arrow button pinned to the top-right corner. */
  action?: { to: string; label: string };
};

export function MediaFrame({
  src,
  alt,
  className = "",
  topLeft,
  topRight,
  bottomRight,
  action,
}: MediaFrameProps) {
  return (
    <div className={`media-frame ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />

      {topLeft && <p className="media-label left-5 top-5">{renderLines(topLeft)}</p>}
      {topRight && (
        <p className={`media-label right-5 top-5 text-right ${action ? "pr-12" : ""}`}>
          {renderLines(topRight)}
        </p>
      )}
      {bottomRight && (
        <p className="media-label bottom-5 right-5 text-right">{renderLines(bottomRight)}</p>
      )}

      {action && (
        <Link
          to={action.to}
          aria-label={action.label}
          className="arrow-circle absolute right-5 top-5 z-[2] border-white/40 bg-black/25 backdrop-blur-sm"
        >
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

function renderLines(lines: readonly string[]) {
  return lines.map((line) => <span key={line}>{line}</span>);
}
