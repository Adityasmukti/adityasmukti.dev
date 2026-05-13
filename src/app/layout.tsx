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
  metadataBase: new URL("https://adityasmukti.github.io"),
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
    "Aditias Muktiyanto",
  ],
  authors: [{ name: "Aditias Muktiyanto" }],
  creator: "Aditias Muktiyanto",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://adityasmukti.github.io",
    title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
    description:
      "Portfolio Aditias Muktiyanto, Fullstack Developer & System Architect yang fokus pada realtime systems, AI integration, dan scalable backend architecture.",
    siteName: "aditias.dev",
    images: [
      {
        url: "/icon.jpg",
        width: 150,
        height: 150,
        alt: "Aditias Muktiyanto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
    description:
      "Portfolio Aditias Muktiyanto — Realtime Systems, AI Integration, Scalable Backend.",
    images: ["/icon.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditias Muktiyanto",
  url: "https://adityasmukti.github.io",
  jobTitle: "Fullstack Developer & System Architect",
  description: "Senior Software Engineer fokus pada Realtime Systems dan AI Integration.",
  sameAs: [
    "https://github.com/adityasmukti",
    "https://linkedin.com/in/adityasmukti",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
