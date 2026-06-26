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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-2xl">
      <div className="container-app flex h-20 items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-base font-bold text-white shadow-lg shadow-blue-500/20">
            SS
          </div>

          <div>

            <div className="text-base font-bold tracking-tight text-slate-900">
              Strategi Pengembangan Pasar
            </div>

            <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-slate-500">
              PT Sakti Setia Sentosa
            </div>

          </div>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex">

          {navigation.map((item) => {

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
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

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white xl:hidden"
          aria-label="Toggle Navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${
          open
            ? "max-h-[500px] border-t border-slate-200"
            : "max-h-0"
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
                  className={`flex min-h-[52px] items-center rounded-2xl px-5 font-medium transition-all ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

          </div>

        </nav>

      </div>
    </header>
  );
}