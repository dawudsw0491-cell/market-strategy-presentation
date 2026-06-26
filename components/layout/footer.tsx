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
    <footer className="mt-24 border-t border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="container-app py-16">

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-lg font-bold text-white shadow-lg">
                SS
              </div>

              <div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Strategi Pengembangan Pasar
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  PT Sakti Setia Sentosa
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-2xl leading-8 text-slate-600">
              Website presentasi ini menyajikan analisis kondisi pasar,
              penentuan prioritas wilayah, strategi pengembangan,
              roadmap implementasi, serta rekomendasi strategis sebagai
              dasar pengambilan keputusan pengembangan pasar FMCG.
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Navigasi
            </h3>

            <ul className="space-y-3">

              {menus.map((menu) => (

                <li key={menu.href}>

                  <Link
                    href={menu.href}
                    className="inline-flex text-slate-700 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                  >
                    {menu.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} PT Sakti Setia Sentosa.
            All rights reserved.
          </p>

          <p className="font-medium">
            Market Strategy Presentation · Version 2.0.0
          </p>

        </div>

      </div>
    </footer>
  );
}