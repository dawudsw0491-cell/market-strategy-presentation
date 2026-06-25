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
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="container-app py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-lg font-bold text-white shadow-lg">
                SS
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Strategi Pengembangan Pasar
                </h2>

                <p className="text-sm text-slate-500">
                  PT Sakti Setia Sentosa
                </p>
              </div>
            </div>

            <p className="max-w-md leading-8 text-slate-600">
              Website presentasi yang menyampaikan pendekatan, strategi, dan
              rencana implementasi pengembangan pasar secara sederhana,
              sistematis, dan mudah dipahami.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-slate-900">
              Navigasi
            </h3>

            <ul className="space-y-3">
              {menus.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className="transition duration-200 hover:text-blue-600"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-slate-900">
              Tujuan Presentasi
            </h3>

            <p className="leading-8 text-slate-600">
              Memberikan gambaran mengenai pendekatan yang digunakan dalam
              menentukan prioritas pengembangan pasar sehingga keputusan dapat
              diambil secara lebih terarah dan bertahap.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} PT Sakti Setia Sentosa
          </p>

          <p>
            Market Strategy Presentation • Version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}