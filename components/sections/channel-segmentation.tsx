import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  {
    title: "Toko Kelontong",
    objective: "Memperluas pemerataan distribusi hingga tingkat lingkungan.",
    products: "Produk kebutuhan harian dengan perputaran tinggi.",
  },
  {
    title: "Grosir & Semi Grosir",
    objective: "Meningkatkan volume distribusi pada area perdagangan utama.",
    products: "Produk dengan kebutuhan pembelian dalam jumlah besar.",
  },
  {
    title: "Bakery & Horeca",
    objective: "Membangun distribusi pada sektor usaha makanan dan minuman.",
    products: "Bahan baku dan produk pendukung operasional usaha.",
  },
  {
    title: "UMKM",
    objective: "Mendukung pertumbuhan pelaku usaha lokal.",
    products: "Produk yang mudah dipasarkan kembali kepada pelanggan akhir.",
  },
  {
    title: "Institusi",
    objective: "Membangun hubungan distribusi jangka panjang.",
    products: "Produk yang mendukung kebutuhan operasional institusi.",
  },
  {
    title: "Event & Komunitas",
    objective: "Meningkatkan penetrasi pasar melalui aktivitas lapangan.",
    products: "Produk promosi serta produk dengan tingkat awareness tinggi.",
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
            Fokus Channel Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap channel memiliki karakteristik yang berbeda sehingga
            pendekatan distribusi dan pengembangan outlet disusun sesuai
            kebutuhan masing-masing segmen pasar.
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

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Fokus
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {channel.objective}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Produk Potensial
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {channel.products}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}