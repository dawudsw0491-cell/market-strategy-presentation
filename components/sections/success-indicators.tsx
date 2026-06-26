import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const indicators = [
  {
    title: "Coverage Wilayah",
    value: "Prioritas Utama",
    description:
      "Perluasan jangkauan distribusi pada Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk dilakukan secara bertahap sesuai prioritas wilayah.",
  },
  {
    title: "Pengembangan Outlet",
    value: "Distribusi Merata",
    description:
      "Meningkatkan produktivitas outlet aktif sekaligus memperluas jaringan outlet baru pada area yang memiliki potensi pertumbuhan.",
  },
  {
    title: "Kerja Sama Institusi",
    value: "Jangka Panjang",
    description:
      "Membangun hubungan yang berkelanjutan dengan sekolah, rumah sakit, perusahaan, perguruan tinggi, dan instansi lainnya.",
  },
  {
    title: "Aktivasi Komunitas",
    value: "Hubungan Pasar",
    description:
      "Meningkatkan keterlibatan komunitas sebagai media penguatan hubungan dengan pelanggan dan pengembangan distribusi lokal.",
  },
  {
    title: "Peningkatan Distribusi",
    value: "Berkelanjutan",
    description:
      "Distribusi berkembang secara bertahap melalui penguatan wilayah, channel, dan jaringan penjualan yang telah dibangun.",
  },
  {
    title: "Evaluasi Program",
    value: "Perbaikan Berkala",
    description:
      "Seluruh aktivitas dievaluasi secara berkala untuk memastikan strategi tetap relevan terhadap perkembangan pasar.",
  },
];

export default function SuccessIndicators() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Indikator Keberhasilan
          </span>

          <h2 className="mt-6">
            Hasil Yang Diharapkan Dari Implementasi Strategi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Keberhasilan strategi diukur melalui perkembangan distribusi,
            perluasan jaringan pasar, serta peningkatan hubungan dengan outlet,
            institusi, dan komunitas pada wilayah prioritas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {indicators.map((item) => (
            <Card
              key={item.title}
              className="h-full"
            >
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {item.value}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50/70 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Kesimpulan
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Seluruh indikator menunjukkan bahwa pengembangan pasar tidak hanya
            berorientasi pada peningkatan penjualan, tetapi juga pada
            terbentuknya jaringan distribusi yang lebih luas, hubungan yang
            lebih kuat dengan mitra, serta pertumbuhan pasar yang berkelanjutan.
          </p>
        </div>
      </Container>
    </Section>
  );
}