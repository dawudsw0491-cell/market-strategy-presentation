"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Analisis Kondisi",
    href: "/analisis-kondisi",
  },
  {
    title: "Strategi",
    href: "/strategi-pengembangan",
  },
  {
    title: "Implementasi",
    href: "/rencana-implementasi",
  },
  {
    title: "Rekomendasi",
    href: "/rekomendasi",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/72 backdrop-blur-2xl">
      <div className="container-app flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-base font-bold text-white shadow-lg shadow-blue-500/20">
            SS
          </div>

          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-slate-900">
              Strategi Pengembangan Pasar
            </div>

            <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
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
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-md"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-2xl border border-slate-200 bg-white p-3 transition duration-300 hover:border-blue-200 hover:bg-blue-50 xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/70 bg-white/95 backdrop-blur-xl xl:hidden">
          <div className="container-app flex flex-col gap-2 py-5">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-5 py-3 text-sm font-medium transition ${
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
        </div>
      )}
    </header>
  );
}