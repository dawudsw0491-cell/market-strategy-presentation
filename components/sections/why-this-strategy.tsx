import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

const challenges = [
  {
    title: "Potensi Pasar Belum Terpetakan",
    description:
      "Keputusan pengembangan pasar sering dilakukan berdasarkan pengalaman, bukan berdasarkan analisis yang terstruktur.",
  },
  {
    title: "Prioritas Belum Jelas",
    description:
      "Wilayah, outlet, institusi, komunitas, dan kegiatan pemasaran belum memiliki dasar prioritas yang sama.",
  },
  {
    title: "Sumber Daya Terbatas",
    description:
      "Tenaga, waktu, dan anggaran harus diarahkan pada peluang yang memberikan dampak paling besar.",
  },
];

export default function WhyThisStrategy() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Mengapa Strategi Ini Dibutuhkan
          </span>

          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Setiap Keputusan Dimulai Dari Memahami Kondisi Lapangan
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            Sebelum menentukan langkah pengembangan, perusahaan perlu memahami
            kondisi pasar, mengenali peluang, dan menyusun prioritas berdasarkan
            pendekatan yang konsisten agar sumber daya dapat dimanfaatkan secara
            lebih efektif.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {challenges.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            >
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}