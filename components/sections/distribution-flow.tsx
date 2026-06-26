import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  {
    title: "Kelontong",
    desc: "Distribusi harian dengan frekuensi kunjungan tinggi.",
  },
  {
    title: "Grosir",
    desc: "Volume pembelian besar sebagai pusat distribusi lokal.",
  },
  {
    title: "Bakery",
    desc: "Potensi produk bakery, dairy, dan pendukung produksi.",
  },
  {
    title: "Horeca",
    desc: "Hotel, restoran, café, dan catering dengan repeat order.",
  },
  {
    title: "Institusi",
    desc: "Sekolah, rumah sakit, kantor, dan instansi pemerintah.",
  },
  {
    title: "UMKM",
    desc: "Usaha lokal yang berkembang sebagai channel baru.",
  },
];

export default function DistributionFlow() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Distribution Flow
          </span>

          <h2 className="mt-6">
            Alur Distribusi Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Distribusi dikembangkan melalui jalur yang terstruktur sehingga
            setiap aktivitas penjualan menghasilkan perluasan outlet,
            peningkatan coverage, serta hubungan jangka panjang dengan
            pelanggan.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

          <div className="flex flex-col items-center">

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 text-white shadow-lg">
              <h3 className="text-xl font-bold">
                Distribution Center
              </h3>
            </div>

            <div className="h-12 w-px bg-slate-300" />

            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-8 py-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Area Sales Coordinator
              </h3>
            </div>

            <div className="h-12 w-px bg-slate-300" />

            <div className="grid w-full gap-6 lg:grid-cols-3">

              {["Sales Area Barat", "Sales Area Tengah", "Sales Area Timur"].map(
                (sales) => (
                  <div
                    key={sales}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center"
                  >
                    <h3 className="text-lg font-bold text-slate-900">
                      {sales}
                    </h3>

                    <div className="mt-5 space-y-2 text-sm text-slate-600">
                      <p>Weekly Visit</p>
                      <p>Outlet Development</p>
                      <p>Institution Visit</p>
                      <p>Community Engagement</p>
                    </div>
                  </div>
                )
              )}

            </div>

            <div className="my-10 h-px w-full bg-slate-200" />

            <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">

              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {channel.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {channel.desc}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-10 h-12 w-px bg-slate-300" />

            <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-5 text-white shadow-lg">
              <h3 className="text-xl font-bold">
                End Customer
              </h3>
            </div>

          </div>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-3xl font-bold text-blue-600">
              40+
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Target Weekly Visit
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-3xl font-bold text-emerald-600">
              6
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Channel Distribusi
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-3xl font-bold text-amber-600">
              3
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Fokus Wilayah
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-3xl font-bold text-cyan-600">
              1
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Tujuan Akhir
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}