import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const summary = [
  {
    title: "Tujuan Pengembangan Pasar",
    description:
      "Menyusun arah pengembangan pasar PT Sakti Setia Sentosa melalui pendekatan yang terstruktur agar aktivitas distribusi, pengembangan outlet, peningkatan kualitas SDM, serta perluasan kerja sama dapat berjalan selaras dengan karakteristik wilayah Kediri Raya.",
  },
  {
    title: "Kondisi Yang Menjadi Perhatian",
    description:
      "Setiap wilayah memiliki karakter pasar, potensi outlet, institusi, dan komunitas yang berbeda. Tanpa pemetaan yang jelas, pengembangan pasar berisiko tidak tepat sasaran, pemanfaatan sumber daya menjadi kurang optimal, serta peluang pertumbuhan tidak dapat dimanfaatkan secara maksimal.",
  },
  {
    title: "Pendekatan Yang Digunakan",
    description:
      "Pengembangan pasar diawali dengan memahami kondisi wilayah, memetakan potensi outlet dan segmen pelanggan, menentukan prioritas pengembangan, menyusun strategi berdasarkan karakter pasar, kemudian melaksanakan implementasi secara bertahap dan terukur pada wilayah prioritas.",
  },
  {
    title: "Hasil Yang Ingin Dicapai",
    description:
      "Terbentuk arah pengembangan pasar yang lebih terfokus, peningkatan kualitas jaringan distribusi, bertambahnya outlet aktif dan kerja sama institusi, peningkatan kompetensi SDM lapangan, serta perluasan penetrasi pasar secara berkelanjutan di wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.",
  },
];

export default function ExecutiveSummary() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Ringkasan Eksekutif
          </span>

          <h2 className="mt-6">
            Gambaran Umum Strategi Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Ringkasan ini memberikan gambaran mengenai tujuan, kondisi yang
            menjadi perhatian, pendekatan yang digunakan, serta hasil yang ingin
            dicapai sebagai dasar pengembangan pasar PT Sakti Setia Sentosa di
            wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {summary.map((item) => (
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
      </Container>
    </Section>
  );
}