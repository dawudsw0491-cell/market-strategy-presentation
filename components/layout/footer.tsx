import Link from "next/link";

const menus = [
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

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <div className="container-app py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-lg font-bold text-white shadow-lg">
                SS
              </div>

              <div>
                <div className="text-lg font-semibold tracking-tight text-slate-900">
                  Strategi Pengembangan Pasar
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  PT Sakti Setia Sentosa
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              Blueprint pengembangan pasar FMCG yang disusun sebagai acuan dalam
              melakukan analisis wilayah, pengembangan outlet, peningkatan
              kualitas SDM, perluasan kerja sama dengan institusi dan komunitas,
              serta penyusunan strategi implementasi untuk mendukung pertumbuhan
              distribusi di wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten
              Nganjuk.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Fokus Wilayah
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  Kediri Raya
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Sektor
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  Distribusi FMCG
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ruang Lingkup
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  Outlet • Institusi • Komunitas
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigasi
            </h3>

            <ul className="space-y-3">
              {menus.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className="inline-flex text-slate-700 transition duration-300 hover:translate-x-1 hover:text-blue-600"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Tujuan Blueprint
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Menjadi acuan dalam menentukan prioritas pengembangan pasar,
                memperkuat jaringan distribusi, serta mendukung pertumbuhan
                bisnis yang berkelanjutan melalui pendekatan yang terstruktur.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} PT Sakti Setia Sentosa. All rights
            reserved.
          </p>

          <p className="font-medium">
            Market Strategy Presentation · Version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}