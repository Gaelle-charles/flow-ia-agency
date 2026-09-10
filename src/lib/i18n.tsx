import { useRouter } from "@tanstack/react-router";
import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";

import { I18nContext } from "@/lib/i18n-context";
import { localeCookieName, type Locale } from "@/lib/locale";

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      document.cookie = `${localeCookieName}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
      // Every page reads its copy from this context, so the swap is instant.
      // Reloading the document here left the app un-hydrated and froze the UI;
      // invalidating re-runs the loaders that feed <head> from the new cookie.
      // sync waits for those loaders: without it they reload in the background
      // and the title and meta tags keep the previous locale.
      void router.invalidate({ sync: true });
    },
    [router],
  );

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
