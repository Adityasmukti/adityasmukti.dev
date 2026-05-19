'use client';

import { useEffect } from 'react';
import { setLocale } from './i18n-store';

export default function LocaleInit() {
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'id' || saved === 'en') {
      setLocale(saved);
    }
  }, []);

  return null;
}
