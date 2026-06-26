import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  {
    title: "Toko Kelontong",
    role: "Pemerataan distribusi hingga tingkat lingkungan.",
    characteristic:
      "Frekuensi transaksi tinggi dengan kebutuhan produk harian yang berulang.",
    products: [
      "Produk kebutuhan harian",
      "Makanan ringan",
      "Minuman",
      "Bumbu dan pelengkap",
    ],
    objective:
      "Meningkatkan ketersediaan produk pada kawasan permukiman serta memperkuat loyalitas outlet.",
  },
  {
    title: "Grosir & Semi Grosir",
    role: "Pusat distribusi bagi outlet di wilayah sekitarnya.",
    characteristic:
      "Pembelian dalam volume besar dengan perputaran produk yang cepat.",
    products: [
      "Produk fast moving",
      "Produk volume besar",
      "Produk distribusi ulang",
      "Produk kebutuhan usaha",
    ],
    objective:
      "Meningkatkan volume distribusi sekaligus memperluas jangkauan pelayanan.",
  },
  {
    title: "Bakery & Horeca",
    role: "Mendukung operasional usaha makanan dan minuman.",
    characteristic:
      "Membutuhkan pasokan yang stabil dengan pola pembelian berulang.",
    products: [
      "Bahan baku",
      "Bahan pendukung produksi",
      "Produk operasional",
      "Produk pelengkap usaha",
    ],
    objective:
      "Membangun hubungan jangka panjang sebagai mitra distribusi utama.",
  },
  {
    title: "UMKM",
    role: "Mendukung pertumbuhan pelaku usaha lokal.",
    characteristic:
      "Membutuhkan produk yang mudah dipasarkan kembali kepada pelanggan.",
    products: [
      "Produk ekonomis",
      "Produk kebutuhan harian",
      "Produk pendukung usaha",
      "Produk dengan rotasi tinggi",
    ],
    objective:
      "Memperluas jaringan distribusi melalui pertumbuhan usaha lokal.",
  },
  {
    title: "Institusi",
    role: "Membangun distribusi jangka panjang.",
    characteristic:
      "Pembelian dilakukan secara rutin sesuai kebutuhan operasional institusi.",
    products: [
      "Produk konsumsi",
      "Produk operasional",
      "Produk kegiatan",
      "Produk distribusi rutin",
    ],
    objective:
      "Menciptakan hubungan kerja sama yang stabil dan berkelanjutan.",
  },
  {
    title: "Event & Komunitas",
    role: "Meningkatkan penetrasi pasar dan brand awareness.",
    characteristic:
      "Distribusi dilakukan melalui aktivitas promosi dan interaksi langsung dengan masyarakat.",
    products: [
      "Produk promosi",
      "Produk sampling",
      "Produk awareness",
      "Produk pendukung kegiatan",
    ],
    objective:
      "Memperluas jangkauan pasar sekaligus meningkatkan pengenalan produk.",
  },
];

export default function ChannelSegmentation() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Segmentasi Distribusi
          </span>

          <h2 className="mt-6">
            Pengembangan Berdasarkan Karakter Channel
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap channel memiliki karakteristik pembelian, kebutuhan produk,
            dan pola distribusi yang berbeda sehingga pendekatan pengembangan
            disusun sesuai dengan karakter masing-masing segmen pasar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {channels.map((channel) => (
            <Card
              key={channel.title}
              className="h-full"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {channel.title}
              </h3>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Peran
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {channel.role}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Karakteristik
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {channel.characteristic}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                    Kategori Produk
                  </p>

                  <ul className="mt-3 space-y-2">
                    {channel.products.map((product) => (
                      <li
                        key={product}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                        <span className="leading-7 text-slate-600">
                          {product}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                    Tujuan Pengembangan
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    {channel.objective}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Mengapa Segmentasi Channel Penting?
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Setiap channel memiliki karakteristik kebutuhan, frekuensi
            transaksi, serta pola distribusi yang berbeda. Oleh karena itu,
            strategi pengembangan, kategori produk, dan pendekatan penjualan
            disusun berdasarkan karakter masing-masing channel agar distribusi
            menjadi lebih efektif, tepat sasaran, dan mampu menghasilkan
            pertumbuhan pasar yang berkelanjutan.
          </p>
        </div>
      </Container>
    </Section>
  );
}