import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Mengumpulkan Informasi",
    description:
      "Mengidentifikasi kondisi wilayah, karakteristik pasar, dan peluang yang tersedia sebagai dasar pengambilan keputusan.",
  },
  {
    number: "02",
    title: "Menganalisis Potensi",
    description:
      "Membandingkan berbagai wilayah dan segmen pasar menggunakan kriteria yang sama agar hasil analisis lebih objektif.",
  },
  {
    number: "03",
    title: "Menentukan Prioritas",
    description:
      "Memilih wilayah dan segmen yang memberikan peluang terbesar dengan mempertimbangkan sumber daya yang dimiliki perusahaan.",
  },
  {
    number: "04",
    title: "Menyusun Implementasi",
    description:
      "Mengubah strategi menjadi rencana kerja yang dapat dilaksanakan, dipantau, dan dievaluasi secara berkala.",
  },
];

export default function StrategyApproach() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Pendekatan Strategi
          </span>

          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Strategi Dibangun Melalui Tahapan Yang Terstruktur
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            Pendekatan ini memastikan setiap keputusan tidak hanya berdasarkan
            intuisi, tetapi melalui proses analisis yang sistematis sehingga
            strategi yang dihasilkan lebih terarah dan mudah diterapkan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative"
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
      </Container>
    </Section>
  );
}