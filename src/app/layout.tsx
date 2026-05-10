import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/typefolio/layout/header";
import Footer from "@/components/typefolio/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
  description:
    "Portfolio Aditias Muktiyanto, Fullstack Developer & System Architect yang fokus pada realtime systems, AI integration, omnichannel platform, dan scalable backend architecture menggunakan Node.js, React, Redis, dan MySQL.",
  keywords: [
    "Fullstack Developer",
    "System Architect",
    "Node.js",
    "React",
    "Socket.IO",
    "Redis",
    "AI Integration",
    "Realtime Systems",
    "Omnichannel Platform",
    "Backend Architecture",
    "WebSocket",
    "Portfolio",
  ],
  authors: [{ name: "Aditias Muktiyanto" }],
  creator: "Aditias Muktiyanto",
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
    description:
      "Portfolio Aditias Muktiyanto, Fullstack Developer & System Architect yang fokus pada realtime systems, AI integration, dan scalable backend architecture.",
    siteName: "aditias.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
    description:
      "Portfolio Aditias Muktiyanto — Realtime Systems, AI Integration, Scalable Backend.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
