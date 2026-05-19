import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityasmukti.github.io"),
  title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
  description:
    "Portfolio of Aditias Muktiyanto, Fullstack Developer & System Architect focused on realtime systems, AI integration, omnichannel platform, and scalable backend architecture using Node.js, React, Redis, and MySQL.",
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
    locale: "en_US",
    url: "https://adityasmukti.github.io",
    title: "Aditias Muktiyanto — Fullstack Developer & System Architect",
    description:
      "Portfolio of Aditias Muktiyanto, Fullstack Developer & System Architect focused on realtime systems, AI integration, and scalable backend architecture.",
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
      "Portfolio of Aditias Muktiyanto — Realtime Systems, AI Integration, Scalable Backend.",
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
  description: "Senior Software Engineer focused on Realtime Systems and AI Integration.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
