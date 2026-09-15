import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

declare global {
  interface Window {
    __revealFallback?: number;
  }
}

const REVEAL_SELECTOR = "main section, main section :is(ul, ol) > li";
const STAGGER_MS = 70;
const MAX_STAGGER_MS = 420;

/**
 * Reveals sections and list items as they scroll into view. The CSS keeps
 * them transparent while <html> carries `reveal-ready` (set inline before
 * first paint) and `reveal-done` is the safety net that shows everything
 * if this hook never runs.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // The hook is live: stand the no-JS safety net down.
    window.clearTimeout(window.__revealFallback);
    document.documentElement.classList.remove("reveal-done");

    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const target of targets) {
      if (target.matches("li")) {
        const index = Array.prototype.indexOf.call(target.parentElement?.children ?? [], target);
        target.style.transitionDelay = `${Math.min(index * STAGGER_MS, MAX_STAGGER_MS)}ms`;
      }
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [pathname]);
}
