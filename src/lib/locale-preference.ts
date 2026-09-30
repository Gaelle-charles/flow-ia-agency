import type { Locale } from "./locale";

type LanguagePreference = {
  language: string;
  quality: number;
  order: number;
};

/** Pick the first available translation in the visitor's preference order. */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return "fr";

  const preferences: LanguagePreference[] = [];

  for (const [order, entry] of header.split(",").entries()) {
    const [rawTag, ...parameters] = entry.trim().split(";");
    const tag = rawTag?.trim().toLowerCase() ?? "";
    if (!/^[a-z]{2,8}(?:-[a-z0-9]{1,8})*$/u.test(tag)) continue;

    let quality = 1;
    for (const parameter of parameters) {
      const [name, rawValue] = parameter.trim().split("=");
      if (name?.trim().toLowerCase() !== "q") continue;
      quality = Number(rawValue?.trim());
      break;
    }
    if (!Number.isFinite(quality) || quality <= 0 || quality > 1) continue;

    preferences.push({ language: tag.split("-")[0] ?? tag, quality, order });
  }

  preferences.sort((a, b) => b.quality - a.quality || a.order - b.order);
  for (const { language } of preferences) {
    if (language === "fr" || language === "en") return language;
  }

  // English is the international fallback when none of the offered languages match.
  return preferences.length > 0 ? "en" : "fr";
}
