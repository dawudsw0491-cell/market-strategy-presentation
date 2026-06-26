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
    "Website presentasi strategi pengembangan pasar PT Sakti Setia Sentosa yang menyajikan analisis kondisi, strategi pengembangan, rencana implementasi, serta rekomendasi sebagai dasar pengambilan keputusan.",

  applicationName: "Strategi Pengembangan Pasar",

  keywords: [
    "Strategi Pengembangan Pasar",
    "Market Strategy",
    "Market Development",
    "Presentasi Strategi",
    "Distribusi",
    "Outlet",
    "Institusi",
    "PT Sakti Setia Sentosa",
  ],

  authors: [
    {
      name: "Dawud",
    },
  ],

  creator: "Dawud",

  publisher: "PT Sakti Setia Sentosa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Strategi Pengembangan Pasar",
    description:
      "Presentasi strategi pengembangan pasar PT Sakti Setia Sentosa.",

    url: "https://market-strategy-presentation.vercel.app",

    siteName: "Strategi Pengembangan Pasar",

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strategi Pengembangan Pasar",
    description:
      "Presentasi strategi pengembangan pasar PT Sakti Setia Sentosa.",
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