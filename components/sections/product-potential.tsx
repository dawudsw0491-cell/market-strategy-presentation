import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const mapping = [
  {
    channel: "Toko Kelontong",
    products: [
      "Produk kebutuhan harian",
      "Minuman",
      "Makanan ringan",
      "Bumbu dan bahan pelengkap",
    ],
    reason:
      "Memiliki frekuensi transaksi tinggi dan menjadi jalur distribusi utama pada kawasan permukiman.",
  },
  {
    channel: "Grosir & Semi Grosir",
    products: [
      "Produk volume besar",
      "Produk dengan perputaran cepat",
      "Produk kebutuhan usaha",
      "Produk distribusi ulang",
    ],
    reason:
      "Menjadi pusat distribusi bagi outlet yang lebih kecil sehingga mampu meningkatkan volume penjualan.",
  },
  {
    channel: "Bakery & Horeca",
    products: [
      "Bahan baku",
      "Bahan pendukung produksi",
      "Produk pelengkap operasional",
      "Kebutuhan usaha makanan",
    ],
    reason:
      "Membutuhkan pasokan yang konsisten serta memiliki potensi pembelian berulang.",
  },
  {
    channel: "UMKM",
    products: [
      "Produk bernilai ekonomis",
      "Produk pendukung usaha",
      "Produk dengan rotasi cepat",
      "Produk kebutuhan harian",
    ],
    reason:
      "Mendukung pertumbuhan pelaku usaha lokal dan memperluas jangkauan distribusi.",
  },
  {
    channel: "Institusi",
    products: [
      "Produk konsumsi",
      "Produk operasional",
      "Produk kebutuhan kegiatan",
      "Produk distribusi rutin",
    ],
    reason:
      "Memberikan peluang kerja sama jangka panjang dengan kebutuhan distribusi yang stabil.",
  },
  {
    channel: "Event & Komunitas",
    products: [
      "Produk promosi",
      "Produk sampling",
      "Produk dengan awareness tinggi",
      "Produk pendukung kegiatan",
    ],
    reason:
      "Mendukung peningkatan brand awareness sekaligus memperluas penetrasi pasar.",
  },
];

export default function ProductPotential() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Potensi Produk
          </span>

          <h2 className="mt-6">
            Kategori Produk Berdasarkan Channel Distribusi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap channel memiliki karakter kebutuhan yang berbeda sehingga
            kategori produk yang ditawarkan disesuaikan dengan pola transaksi,
            aktivitas usaha, serta potensi distribusinya.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {mapping.map((item) => (
            <Card
              key={item.channel}
              className="h-full"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.channel}
              </h3>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Kategori Produk Potensial
                </p>

                <ul className="mt-4 space-y-3">
                  {item.products.map((product) => (
                    <li
                      key={product}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                      <span className="leading-7 text-slate-600">
                        {product}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Alasan
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.reason}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}