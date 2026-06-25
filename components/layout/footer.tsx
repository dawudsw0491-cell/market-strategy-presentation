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
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-app py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-xl font-bold text-white">
                S
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Strategi Pengembangan Pasar
                </h2>

                <p className="text-sm text-slate-500">
                  PT Sakti Setia Sentosa
                </p>
              </div>
            </div>

            <p className="max-w-sm leading-7 text-slate-600">
              Website presentasi interaktif yang menjelaskan pendekatan,
              metode, serta rencana implementasi strategi pengembangan pasar
              secara sederhana, terstruktur, dan mudah dipahami.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-slate-900">
              Navigasi
            </h3>

            <ul className="space-y-3">
              {menus.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-slate-900">
              Tujuan Website
            </h3>

            <p className="leading-7 text-slate-600">
              Menyampaikan strategi pengembangan pasar melalui pendekatan
              visual yang modern sehingga mudah dipahami oleh manajemen,
              pimpinan perusahaan, maupun pihak yang berkepentingan.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PT Sakti Setia Sentosa · Strategy Presentation
        </div>
      </div>
    </footer>
  );
}