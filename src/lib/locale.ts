import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader } from "@tanstack/react-start/server";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeCookieName = "sway_locale";

export function isLocale(value: unknown): value is Locale {
  return value === "fr" || value === "en";
}

export const getInitialLocale = createServerFn({ method: "GET" }).handler((): Locale => {
  const savedLocale = getCookie(localeCookieName);
  if (isLocale(savedLocale)) return savedLocale;

  const acceptedLanguages = getRequestHeader("accept-language")?.toLowerCase() ?? "";
  return acceptedLanguages.startsWith("en") ? "en" : "fr";
});
