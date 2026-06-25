import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const reasons = [
  {
    title: "Pasar Terus Berubah",
    description:
      "Perubahan perilaku pelanggan, pertumbuhan wilayah, dan persaingan menuntut perusahaan untuk selalu menyesuaikan strategi pengembangan pasar.",
  },
  {
    title: "Sumber Daya Harus Tepat Sasaran",
    description:
      "Tenaga kerja, waktu, dan anggaran perlu difokuskan pada wilayah dan program yang memberikan peluang pertumbuhan terbesar.",
  },
  {
    title: "Keputusan Perlu Dasar Yang Jelas",
    description:
      "Setiap keputusan sebaiknya didukung oleh analisis kondisi lapangan sehingga langkah yang diambil lebih terukur dan mudah dipertanggungjawabkan.",
  },
];

export default function WhyThisStrategy() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Mengapa Strategi Ini Dibutuhkan
          </span>

          <h2 className="mt-6">
            Setiap Strategi Yang Baik Selalu Diawali Dengan Memahami Permasalahan
          </h2>

          <p className="mt-8 text-lg text-slate-600">
            Sebelum menentukan langkah pengembangan, perusahaan perlu memahami
            tantangan yang dihadapi saat ini agar strategi yang disusun benar-benar
            menjawab kebutuhan di lapangan, bukan hanya berdasarkan asumsi.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reasons.map((item) => (
            <Card
              key={item.title}
              title={item.title}
            >
              <p className="leading-8 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Kesimpulan
          </h3>

          <p className="mt-4 leading-8 text-slate-700">
            Strategi pengembangan pasar bukan hanya tentang memperluas wilayah,
            tetapi tentang menentukan prioritas yang tepat, memanfaatkan sumber
            daya secara efektif, dan menjalankan program yang memberikan dampak
            nyata bagi pertumbuhan perusahaan.
          </p>
        </div>
      </Container>
    </Section>
  );
}