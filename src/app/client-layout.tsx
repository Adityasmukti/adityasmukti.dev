'use client';

import { type ReactNode } from 'react';
import LocaleInit from '@/lib/locale-init';
import Header from "@/components/typefolio/layout/header";
import Footer from "@/components/typefolio/layout/footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocaleInit />
      <Header />
      {children}
      <Footer />
    </>
  );
}
