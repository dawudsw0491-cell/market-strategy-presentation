import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const indicators = [
  {
    title: "Peningkatan Coverage Wilayah",
    target: "Ekspansi Distribusi",
    description:
      "Perluasan jangkauan distribusi difokuskan pada Kabupaten Kediri sebagai prioritas utama, diikuti penguatan Kota Kediri serta ekspansi bertahap ke Kabupaten Nganjuk.",
  },
  {
    title: "Pertumbuhan Outlet Aktif",
    target: "Produktivitas Outlet",
    description:
      "Meningkatkan produktivitas outlet yang telah berjalan sekaligus menambah outlet baru pada wilayah dengan potensi pertumbuhan yang tinggi.",
  },
  {
    title: "Kerja Sama Institusi",
    target: "Hubungan Jangka Panjang",
    description:
      "Membangun kemitraan berkelanjutan dengan sekolah, pondok pesantren, rumah sakit, perguruan tinggi, perusahaan, dan instansi pemerintah.",
  },
  {
    title: "Penguatan Channel Distribusi",
    target: "Distribusi Merata",
    description:
      "Memperkuat channel kelontong, grosir, horeca, bakery, UMKM, komunitas, dan institusi agar distribusi lebih efektif sesuai karakter pasar.",
  },
  {
    title: "Aktivasi Komunitas",
    target: "Brand Engagement",
    description:
      "Meningkatkan hubungan dengan komunitas lokal melalui kegiatan promosi, event, dan kolaborasi untuk memperluas penetrasi pasar.",
  },
  {
    title: "Evaluasi Berkala",
    target: "Continuous Improvement",
    description:
      "Melakukan evaluasi terhadap perkembangan wilayah, outlet, distribusi, serta kerja sama sehingga strategi dapat terus disempurnakan.",
  },
];

const conclusions = [
  "Prioritas utama pengembangan difokuskan pada wilayah Kabupaten Kediri.",
  "Distribusi diperluas melalui penguatan outlet, institusi, dan komunitas.",
  "Kategori produk disesuaikan dengan karakter setiap channel distribusi.",
  "Implementasi dilakukan secara bertahap agar sumber daya digunakan lebih efektif.",
  "Evaluasi berkala menjadi dasar penyempurnaan strategi pengembangan pasar.",
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
            pertumbuhan outlet, perluasan kerja sama, serta peningkatan
            efektivitas pengembangan pasar pada wilayah prioritas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {indicators.map((item) => (
            <Card
              key={item.title}
              className="h-full"
            >
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {item.target}
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
            Kesimpulan Strategi
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {conclusions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/80 p-5"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                <p className="leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}