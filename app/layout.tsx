import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Strategi Pengembangan Pasar | PT Sakti Setia Sentosa",
  description:
    "Website presentasi strategi pengembangan pasar PT Sakti Setia Sentosa.",
  keywords: [
    "Strategi Pengembangan Pasar",
    "Market Development",
    "Presentasi",
    "PT Sakti Setia Sentosa",
  ],
  authors: [
    {
      name: "Dawud",
    },
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}