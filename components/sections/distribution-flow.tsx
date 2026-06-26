import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  "Kelontong",
  "Grosir",
  "Bakery",
  "Horeca",
  "Institusi",
  "UMKM",
];

export default function DistributionFlow() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Distribution Flow
          </span>

          <h2 className="mt-6">
            Alur Distribusi Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Strategi distribusi dimulai dari pusat distribusi perusahaan,
            dilanjutkan oleh tim penjualan menuju berbagai channel utama,
            kemudian diteruskan kepada pelanggan akhir pada wilayah prioritas.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          <div className="flex flex-col items-center">

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 text-center text-white shadow-lg">
              <h3 className="text-xl font-bold">
                Principal / Supplier
              </h3>
            </div>

            <div className="my-4 h-12 w-1 rounded bg-blue-300" />

            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-8 py-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                Warehouse / Distribution Center
              </h3>
            </div>

            <div className="my-4 h-12 w-1 rounded bg-blue-300" />

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                Sales Team
              </h3>
            </div>

            <div className="my-4 h-12 w-1 rounded bg-blue-300" />

          </div>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">

            {channels.map((channel) => (
              <div
                key={channel}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {channel}
                </h3>
              </div>
            ))}

          </div>

          <div className="mt-6 flex justify-center">
            <div className="h-12 w-1 rounded bg-blue-300" />
          </div>

          <div className="flex justify-center">

            <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-5 text-center text-white shadow-lg">
              <h3 className="text-xl font-bold">
                End Customer
              </h3>
            </div>

          </div>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Peran Sales
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Menjalankan aktivitas survey, pendekatan, pembukaan outlet,
              pengembangan institusi, serta menjaga hubungan dengan pelanggan.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Peran Channel
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Menjadi media distribusi yang menghubungkan perusahaan dengan
              berbagai segmen pelanggan sesuai karakter masing-masing wilayah.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Tujuan Akhir
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Meningkatkan coverage distribusi, memperkuat hubungan dengan
              outlet, serta memastikan produk tersedia secara konsisten pada
              wilayah prioritas.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}