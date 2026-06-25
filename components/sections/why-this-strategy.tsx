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
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Mengapa Strategi Ini Dibutuhkan
          </span>

          <h2 className="mt-5">
            Setiap Strategi Yang Baik Selalu Diawali Dengan Memahami Permasalahan
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Sebelum menentukan langkah pengembangan, perusahaan perlu memahami
            tantangan yang dihadapi agar strategi yang disusun benar-benar
            menjawab kebutuhan di lapangan.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-5 py-8 ${
                index !== reasons.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50/70 p-7 lg:p-9">
          <h3 className="text-xl font-semibold text-slate-900">
            Kesimpulan
          </h3>

          <p className="mt-4 leading-8 text-slate-700">
            Strategi pengembangan pasar bukan hanya tentang memperluas wilayah,
            tetapi juga menentukan prioritas yang tepat, memanfaatkan sumber
            daya secara efektif, dan menjalankan program yang memberikan dampak
            nyata bagi pertumbuhan perusahaan.
          </p>
        </div>
      </Container>
    </Section>
  );
}