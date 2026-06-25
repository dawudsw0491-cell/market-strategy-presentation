import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://market-strategy-presentation.vercel.app"),

  title: {
    default: "Strategi Pengembangan Pasar | PT Sakti Setia Sentosa",
    template: "%s | Strategi Pengembangan Pasar",
  },

  description:
    "Website presentasi strategi pengembangan pasar PT Sakti Setia Sentosa yang menjelaskan analisis kondisi, penyusunan strategi, rencana implementasi, dan rekomendasi secara sistematis.",

  keywords: [
    "Strategi Pengembangan Pasar",
    "Market Development",
    "Market Strategy",
    "Presentasi",
    "PT Sakti Setia Sentosa",
  ],

  authors: [
    {
      name: "Dawud",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Strategi Pengembangan Pasar",
    description:
      "Presentasi strategi pengembangan pasar PT Sakti Setia Sentosa.",
    type: "website",
    locale: "id_ID",
  },
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