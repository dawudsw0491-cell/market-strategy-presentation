import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const flow = [
  {
    title: "Gudang Distribusi",
    description:
      "Seluruh produk didistribusikan dari gudang sebagai pusat pengelolaan persediaan dan pengiriman.",
  },
  {
    title: "Koordinator Area",
    description:
      "Mengatur wilayah distribusi, jadwal kunjungan, serta koordinasi aktivitas pengembangan pasar.",
  },
  {
    title: "Saluran Distribusi",
    description:
      "Produk disalurkan melalui outlet, grosir, institusi, bakery, horeca, dan pelanggan bisnis lainnya sesuai karakteristik wilayah.",
  },
  {
    title: "Pelanggan",
    description:
      "Produk diterima oleh pelanggan akhir melalui saluran distribusi yang telah ditetapkan.",
  },
];

export default function DistributionFlow() {
  return (
    <Section background="white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Alur Distribusi
          </span>

          <h2 className="mt-6">
            Gambaran Alur Penyaluran Produk
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Alur distribusi menggambarkan proses penyaluran produk mulai dari
            pusat distribusi hingga diterima oleh pelanggan melalui saluran
            distribusi yang sesuai dengan karakteristik pasar.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {flow.map((item, index) => (

            <div
              key={item.title}
              className="card relative p-8"
            >

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>

              {index < flow.length - 1 && (
                <div className="absolute -right-4 top-10 hidden h-0.5 w-8 bg-blue-300 lg:block" />
              )}

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Kesimpulan
          </span>

          <h2 className="mt-6 text-white">
            Prinsip Distribusi
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Distribusi diarahkan agar setiap wilayah memperoleh layanan yang
            konsisten melalui saluran yang paling sesuai. Pendekatan ini
            mendukung perluasan pasar sekaligus menjaga efektivitas operasional
            distribusi.
          </p>

        </div>

      </Container>
    </Section>
  );
}