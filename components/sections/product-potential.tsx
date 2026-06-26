import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const mapping = [
  {
    channel: "Toko Kelontong",
    categories: [
      "Produk kebutuhan harian",
      "Minuman",
      "Makanan ringan",
      "Bumbu dan pelengkap",
    ],
    customer:
      "Rumah tangga dan pelanggan dengan kebutuhan harian.",
    strategy:
      "Menjaga ketersediaan produk fast moving agar outlet mampu memenuhi kebutuhan pelanggan setiap hari.",
  },
  {
    channel: "Grosir & Semi Grosir",
    categories: [
      "Produk volume besar",
      "Produk fast moving",
      "Produk distribusi ulang",
      "Produk kebutuhan usaha",
    ],
    customer:
      "Reseller, toko kelontong, dan pelaku usaha.",
    strategy:
      "Mendorong peningkatan volume distribusi melalui pembelian dalam jumlah besar dan hubungan jangka panjang.",
  },
  {
    channel: "Bakery & Horeca",
    categories: [
      "Bahan baku",
      "Produk pendukung produksi",
      "Produk operasional",
      "Produk pelengkap usaha",
    ],
    customer:
      "Bakery, café, restoran, hotel, dan usaha makanan.",
    strategy:
      "Menjadi mitra distribusi yang mampu menyediakan pasokan secara konsisten sesuai kebutuhan operasional usaha.",
  },
  {
    channel: "UMKM",
    categories: [
      "Produk ekonomis",
      "Produk kebutuhan usaha",
      "Produk dengan rotasi tinggi",
      "Produk konsumsi",
    ],
    customer:
      "Pelaku usaha mikro, kecil, dan menengah.",
    strategy:
      "Mendukung pertumbuhan UMKM melalui produk yang mudah dipasarkan kembali serta memiliki tingkat permintaan yang stabil.",
  },
  {
    channel: "Institusi",
    categories: [
      "Produk konsumsi",
      "Produk operasional",
      "Produk kegiatan",
      "Produk distribusi rutin",
    ],
    customer:
      "Sekolah, rumah sakit, perusahaan, dan instansi.",
    strategy:
      "Membangun kerja sama distribusi jangka panjang melalui kebutuhan operasional yang berulang.",
  },
  {
    channel: "Event & Komunitas",
    categories: [
      "Produk promosi",
      "Produk sampling",
      "Produk awareness",
      "Produk pendukung kegiatan",
    ],
    customer:
      "Komunitas, organisasi, dan peserta kegiatan.",
    strategy:
      "Meningkatkan penetrasi pasar melalui aktivitas lapangan yang memperluas pengenalan produk kepada calon pelanggan.",
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
            Kesesuaian Produk Dengan Channel Distribusi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Pengembangan produk tidak dilakukan secara seragam. Setiap channel
            memiliki karakter pelanggan dan pola pembelian yang berbeda sehingga
            kategori produk disesuaikan dengan kebutuhan masing-masing segmen.
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
                  Target Pelanggan
                </p>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.customer}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Kategori Produk
                </p>

                <ul className="mt-3 space-y-2">
                  {item.categories.map((category) => (
                    <li
                      key={category}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                      <span className="leading-7 text-slate-600">
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                  Strategi Distribusi
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.strategy}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50/70 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Prinsip Pengembangan Produk
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Penempatan kategori produk mengikuti karakter channel distribusi,
            pola pembelian pelanggan, dan kebutuhan operasional masing-masing
            segmen sehingga peluang peningkatan distribusi menjadi lebih besar
            serta hubungan dengan pelanggan dapat berkembang secara
            berkelanjutan.
          </p>
        </div>
      </Container>
    </Section>
  );
}