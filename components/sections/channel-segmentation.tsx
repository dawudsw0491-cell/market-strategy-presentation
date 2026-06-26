import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  {
    name: "Kelontong",
    priority: "Prioritas Utama",
    characteristic: "Frekuensi transaksi tinggi dan jangkauan pasar luas.",
    strategy:
      "Menjadi fokus utama distribusi produk fast moving dengan kunjungan rutin dan penguatan hubungan dengan pemilik outlet.",
  },
  {
    name: "Grosir",
    priority: "Prioritas Utama",
    characteristic: "Volume pembelian besar dan menjadi pusat distribusi lokal.",
    strategy:
      "Difokuskan untuk meningkatkan volume penjualan dan memperluas distribusi ke outlet yang lebih kecil.",
  },
  {
    name: "Bakery",
    priority: "Prioritas Tinggi",
    characteristic: "Membutuhkan produk yang spesifik dan berulang.",
    strategy:
      "Mengembangkan hubungan jangka panjang dengan menawarkan produk pendukung kebutuhan operasional bakery.",
  },
  {
    name: "Horeca",
    priority: "Prioritas Tinggi",
    characteristic: "Memiliki kebutuhan produk yang konsisten.",
    strategy:
      "Pendekatan dilakukan melalui hotel, restoran, café, dan usaha catering yang memiliki potensi pembelian berulang.",
  },
  {
    name: "Institusi",
    priority: "Prioritas Tinggi",
    characteristic: "Mampu menciptakan kerja sama jangka panjang.",
    strategy:
      "Pengembangan dilakukan melalui sekolah, rumah sakit, perusahaan, dan instansi pemerintah.",
  },
  {
    name: "UMKM",
    priority: "Pengembangan Bertahap",
    characteristic: "Jumlah banyak dengan karakteristik yang beragam.",
    strategy:
      "Dikembangkan secara bertahap sesuai potensi wilayah dan kesiapan distribusi.",
  },
];

export default function ChannelSegmentation() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Segmentasi Saluran Distribusi
          </span>

          <h2 className="mt-6">
            Prioritas Pengembangan Setiap Saluran Distribusi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap saluran distribusi memiliki karakteristik yang berbeda,
            sehingga strategi pengembangannya disesuaikan dengan kebutuhan,
            pola transaksi, dan peluang pertumbuhan yang dimiliki.
          </p>

        </div>

        <div className="grid gap-8 xl:grid-cols-2">

          {channels.map((channel) => (

            <div
              key={channel.name}
              className="card p-8"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold text-slate-900">
                  {channel.name}
                </h3>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {channel.priority}
                </span>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Karakteristik
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {channel.characteristic}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Strategi Pengembangan
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {channel.strategy}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Kesimpulan Analisis
          </span>

          <h2 className="mt-6 text-white">
            Arah Pengembangan Saluran Distribusi
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Pengembangan difokuskan pada saluran distribusi yang mampu
            memberikan kesinambungan penjualan, memperluas jangkauan pasar,
            dan membangun hubungan jangka panjang dengan pelanggan.
            Setiap saluran memiliki peran yang saling melengkapi sehingga
            strategi dapat dijalankan secara bertahap sesuai prioritas.
          </p>

        </div>

      </Container>
    </Section>
  );
}