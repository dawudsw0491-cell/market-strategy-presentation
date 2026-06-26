import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const kpis = [
  {
    title: "Market Opportunity",
    value: "92%",
    description:
      "Potensi pengembangan wilayah berdasarkan analisis pasar, distribusi, dan aktivitas ekonomi.",
    color: "from-blue-600 to-sky-500",
  },
  {
    title: "Distribution Readiness",
    value: "90%",
    description:
      "Kesiapan jaringan distribusi untuk mendukung perluasan outlet dan institusi.",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Outlet Development",
    value: "88%",
    description:
      "Peluang peningkatan outlet existing serta pembukaan outlet baru.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Institution Development",
    value: "86%",
    description:
      "Potensi kerja sama jangka panjang dengan sekolah, rumah sakit, perusahaan, dan instansi.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    title: "Community Engagement",
    value: "81%",
    description:
      "Kesiapan komunitas sebagai media penetrasi pasar dan penguatan brand.",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Implementation Readiness",
    value: "89%",
    description:
      "Kesiapan pelaksanaan strategi berdasarkan prioritas wilayah dan channel distribusi.",
    color: "from-rose-500 to-pink-600",
  },
];

export default function SuccessIndicators() {
  return (
    <Section background="white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Executive Dashboard
          </span>

          <h2 className="mt-6">
            Ringkasan Indikator Strategi Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Dashboard ini merangkum indikator utama yang menjadi dasar
            pengambilan keputusan dalam pengembangan pasar, perluasan
            distribusi, dan implementasi strategi.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {kpis.map((item) => (

            <div
              key={item.title}
              className="card p-8"
            >

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} px-5 py-3 text-3xl font-bold text-white`}
              >
                {item.value}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-white">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Executive Conclusion
          </span>

          <h2 className="mt-6 text-white">
            Prioritas Strategi Pengembangan Pasar
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div>
              <h3 className="text-xl font-semibold text-white">
                Fokus Utama
              </h3>

              <ul className="mt-5 space-y-4 text-slate-200">
                <li>• Kabupaten Kediri menjadi prioritas utama pengembangan pasar.</li>
                <li>• Kota Kediri difokuskan pada penguatan jaringan distribusi.</li>
                <li>• Kabupaten Nganjuk menjadi wilayah ekspansi bertahap.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Arah Implementasi
              </h3>

              <ul className="mt-5 space-y-4 text-slate-200">
                <li>• Memperluas outlet dan channel distribusi prioritas.</li>
                <li>• Meningkatkan kerja sama dengan institusi potensial.</li>
                <li>• Memanfaatkan komunitas sebagai media penetrasi pasar.</li>
                <li>• Melaksanakan implementasi secara bertahap dan terukur.</li>
              </ul>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}