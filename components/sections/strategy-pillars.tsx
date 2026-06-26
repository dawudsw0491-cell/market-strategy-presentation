import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const pillars = [
  {
    title: "Pengembangan Wilayah",
    objective:
      "Menentukan wilayah prioritas sebagai fokus pengembangan pasar.",
    reason:
      "Setiap wilayah memiliki karakteristik, potensi, dan tantangan yang berbeda sehingga diperlukan prioritas implementasi.",
    outcome:
      "Pengembangan pasar menjadi lebih terarah dan penggunaan sumber daya lebih efektif.",
  },
  {
    title: "Pengembangan Outlet",
    objective:
      "Meningkatkan jumlah dan produktivitas outlet pada wilayah prioritas.",
    reason:
      "Outlet merupakan titik utama distribusi yang berpengaruh terhadap ketersediaan produk di pasar.",
    outcome:
      "Jangkauan distribusi meningkat dan akses pelanggan terhadap produk menjadi lebih luas.",
  },
  {
    title: "Pengembangan Institusi",
    objective:
      "Membangun kerja sama dengan institusi yang memiliki kebutuhan berkelanjutan.",
    reason:
      "Institusi memberikan peluang hubungan bisnis jangka panjang dan permintaan yang relatif stabil.",
    outcome:
      "Terbentuk kerja sama yang mendukung pertumbuhan penjualan secara berkesinambungan.",
  },
  {
    title: "Pengembangan Komunitas",
    objective:
      "Membangun hubungan yang lebih dekat dengan komunitas di wilayah sasaran.",
    reason:
      "Komunitas dapat menjadi media penyebaran informasi dan meningkatkan kepercayaan terhadap perusahaan.",
    outcome:
      "Meningkatkan keterlibatan masyarakat serta memperkuat citra perusahaan.",
  },
  {
    title: "Penguatan Distribusi",
    objective:
      "Meningkatkan efektivitas penyaluran produk ke seluruh wilayah layanan.",
    reason:
      "Distribusi yang baik memastikan produk tersedia sesuai kebutuhan pelanggan.",
    outcome:
      "Pelayanan menjadi lebih konsisten dan mendukung pertumbuhan pasar.",
  },
];

export default function StrategyPillars() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Pilar Strategi
          </span>

          <h2 className="mt-6">
            Pilar Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Pilar strategi menjadi landasan pelaksanaan pengembangan pasar
            sehingga setiap program memiliki tujuan, alasan, dan hasil yang
            diharapkan secara jelas.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {pillars.map((pillar) => (

            <div
              key={pillar.title}
              className="card p-8"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {pillar.title}
              </h3>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Tujuan
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {pillar.objective}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Alasan
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {pillar.reason}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Hasil yang Diharapkan
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {pillar.outcome}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Kesimpulan
          </span>

          <h2 className="mt-6 text-white">
            Arah Pelaksanaan Strategi
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Kelima pilar strategi saling melengkapi dalam mendukung
            pengembangan pasar. Pelaksanaan dilakukan secara bertahap sesuai
            prioritas wilayah, kapasitas distribusi, serta peluang kerja sama
            yang tersedia sehingga implementasi dapat berjalan secara
            terarah dan berkelanjutan.
          </p>

        </div>

      </Container>
    </Section>
  );
}