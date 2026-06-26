import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const summary = [
  {
    title: "Wilayah Prioritas",
    value: "3",
    description:
      "Kabupaten Kediri sebagai prioritas utama, Kota Kediri untuk penguatan, dan Kabupaten Nganjuk sebagai wilayah ekspansi.",
  },
  {
    title: "Strategi Utama",
    value: "5",
    description:
      "Pengembangan wilayah, outlet, institusi, komunitas, dan program event.",
  },
  {
    title: "Tahapan Implementasi",
    value: "4",
    description:
      "Roadmap implementasi dimulai dari analisis hingga evaluasi berkelanjutan.",
  },
  {
    title: "Target Akhir",
    value: "Growth",
    description:
      "Mendorong pertumbuhan pasar yang terukur melalui distribusi, outlet, dan kerja sama institusi.",
  },
];

export default function ExecutiveSummary() {
  return (
    <Section background="white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Executive Summary
          </span>

          <h2 className="mt-6">
            Ringkasan Strategi Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Seluruh strategi yang disajikan pada website ini merupakan
            rangkaian proses mulai dari analisis kondisi pasar,
            penentuan prioritas wilayah, penyusunan strategi,
            implementasi bertahap, hingga rekomendasi sebagai dasar
            pengambilan keputusan.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {summary.map((item) => (

            <div
              key={item.title}
              className="dashboard-card text-center"
            >

              <div className="metric-value gradient-text">
                {item.value}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Executive Insight
          </span>

          <h2 className="mt-6 text-white">
            Fokus Pengembangan Pasar
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Strategi difokuskan pada peningkatan coverage distribusi,
            pengembangan outlet, perluasan kerja sama institusi,
            penguatan komunitas, serta implementasi program pemasaran
            secara bertahap sehingga perusahaan memiliki arah
            pengembangan pasar yang lebih terukur, realistis, dan
            berkelanjutan.
          </p>

        </div>

      </Container>
    </Section>
  );
}