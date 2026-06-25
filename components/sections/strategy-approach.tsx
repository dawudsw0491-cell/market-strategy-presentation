import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Memahami Kondisi Saat Ini",
    description:
      "Tahap pertama adalah mengumpulkan informasi mengenai kondisi pasar, karakteristik wilayah, aktivitas pelanggan, dan peluang yang tersedia sebagai dasar penyusunan strategi.",
  },
  {
    number: "02",
    title: "Menentukan Prioritas",
    description:
      "Setelah kondisi dipahami, setiap wilayah dan peluang dibandingkan menggunakan kriteria yang sama sehingga dapat ditentukan prioritas yang paling layak untuk dikembangkan.",
  },
  {
    number: "03",
    title: "Menyusun Strategi",
    description:
      "Strategi disusun berdasarkan prioritas yang telah ditetapkan agar setiap program memiliki tujuan yang jelas serta dapat dijalankan sesuai kemampuan perusahaan.",
  },
  {
    number: "04",
    title: "Melaksanakan dan Mengevaluasi",
    description:
      "Implementasi dilakukan secara bertahap kemudian dievaluasi secara berkala agar strategi dapat disempurnakan mengikuti perkembangan kondisi pasar.",
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
            Strategi Dibangun Melalui Empat Tahapan Yang Sederhana
          </h2>

          <p className="mt-8 text-lg text-slate-600">
            Pendekatan ini dirancang agar proses pengambilan keputusan mudah
            dipahami, dapat diterapkan secara bertahap, dan memiliki dasar yang
            jelas pada setiap langkahnya.
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
            Melalui pendekatan ini, setiap keputusan pengembangan pasar memiliki
            dasar yang jelas, lebih mudah diprioritaskan, dan dapat diterapkan
            secara bertahap sesuai kondisi perusahaan.
          </p>
        </div>
      </Container>
    </Section>
  );
}