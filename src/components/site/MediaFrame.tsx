import { Link } from "@tanstack/react-router";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  /** Circular arrow button pinned to the top-right corner. */
  action?: { to: string; label: string };
};

export function MediaFrame({ src, alt, className = "", action }: MediaFrameProps) {
  return (
    <div className={`media-frame ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />

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
