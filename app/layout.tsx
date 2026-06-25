import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Strategi Pengembangan Pasar | PT Sakti Setia Sentosa",
  description:
    "Website Presentasi Strategi Pengembangan Pasar PT Sakti Setia Sentosa",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}