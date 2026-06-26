import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Analisis Wilayah dan Potensi Pasar",
    description:
      "Tahap awal difokuskan pada pemetaan wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk untuk memahami karakter pasar, persebaran outlet, aktivitas ekonomi, potensi institusi, komunitas, serta peluang pengembangan distribusi pada setiap area.",
  },
  {
    number: "02",
    title: "Menentukan Prioritas Pengembangan",
    description:
      "Hasil analisis digunakan untuk menentukan wilayah prioritas, segmen outlet, institusi, dan komunitas yang memiliki peluang pengembangan terbesar sehingga sumber daya perusahaan dapat difokuskan pada area dengan potensi pertumbuhan yang lebih tinggi.",
  },
  {
    number: "03",
    title: "Menyusun Strategi Pengembangan",
    description:
      "Strategi disusun berdasarkan karakter masing-masing wilayah dengan mengintegrasikan pengembangan outlet, peningkatan kompetensi SDM, perluasan kerja sama institusi, penguatan hubungan dengan komunitas, serta pemilihan kategori produk yang sesuai dengan kebutuhan setiap segmen pasar.",
  },
  {
    number: "04",
    title: "Implementasi, Monitoring, dan Evaluasi",
    description:
      "Program dijalankan secara bertahap melalui pengembangan outlet, pembukaan pasar baru, peningkatan aktivitas distribusi, serta evaluasi berkala terhadap pencapaian setiap wilayah sehingga strategi dapat terus disempurnakan mengikuti perkembangan pasar.",
  },
];

export default function StrategyApproach() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Pendekatan Yang Digunakan
          </span>

          <h2 className="mt-6">
            Strategi Pengembangan Pasar Dilaksanakan Melalui Empat Tahapan
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Pendekatan ini memberikan arah yang sistematis mulai dari memahami
            kondisi pasar, menentukan prioritas pengembangan, menyusun strategi
            berdasarkan karakter wilayah, hingga melaksanakan implementasi yang
            dapat dievaluasi secara berkelanjutan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="h-full"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Hasil Yang Diharapkan
          </h3>

          <p className="mt-4 leading-8 text-slate-700">
            Setiap keputusan pengembangan pasar memiliki dasar yang jelas,
            wilayah prioritas dapat ditentukan secara lebih objektif,
            pengembangan outlet dan institusi berjalan lebih terarah,
            peningkatan kompetensi SDM mendukung aktivitas distribusi, serta
            penetrasi pasar di Kabupaten Kediri, Kota Kediri, dan Kabupaten
            Nganjuk dapat berkembang secara bertahap dan berkelanjutan.
          </p>
        </div>
      </Container>
    </Section>
  );
}