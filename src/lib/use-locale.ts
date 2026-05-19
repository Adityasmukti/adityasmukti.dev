'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { getLocale, subscribeToLocale, setLocale } from './i18n-store';
import locales, { type Locale } from '@/data/locales';

export function useLocale() {
  const locale = useSyncExternalStore(subscribeToLocale, getLocale, () => 'en' as Locale);

  const t = useCallback(
    (key: string, vars?: Record<string, string>): string => {
      let text = (locales as Record<string, Record<string, string>>)[locale]?.[key] ?? locales['en']?.[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, v);
        }
      }
      return text;
    },
    [locale]
  );

  return { locale, setLocale, t };
}
