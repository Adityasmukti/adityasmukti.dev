import type { Locale } from '@/data/locales';

type Listener = () => void;

let _locale: Locale = 'en';
const listeners = new Set<Listener>();

export function getLocale(): Locale {
  return _locale;
}

export function setLocale(l: Locale) {
  _locale = l;
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  }
  listeners.forEach((fn) => fn());
}

export function subscribeToLocale(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
