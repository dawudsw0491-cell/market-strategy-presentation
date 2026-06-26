"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { title: "Beranda", href: "/" },
  { title: "Analisis Kondisi", href: "/analisis-kondisi" },
  { title: "Strategi", href: "/strategi-pengembangan" },
  { title: "Implementasi", href: "/rencana-implementasi" },
  { title: "Rekomendasi", href: "/rekomendasi" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/70">
      <div className="container-app flex h-[72px] items-center justify-between lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20 lg:h-12 lg:w-12 lg:text-base">
            SS
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-900 lg:text-base">
              Strategi Pengembangan Pasar
            </div>

            <div className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-slate-500 lg:text-xs">
              PT Sakti Setia Sentosa
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-2 xl:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:border-blue-200 hover:bg-slate-50 xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${
          open ? "max-h-[600px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <nav className="container-app bg-white py-5">
          <div className="space-y-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[50px] items-center rounded-2xl px-4 text-sm font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Fokus Pengembangan
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              Blueprint pengembangan pasar FMCG yang berfokus pada wilayah
              Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk melalui
              penguatan outlet, institusi, komunitas, serta jaringan distribusi.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}