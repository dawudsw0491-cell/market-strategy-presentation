import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const steps = [
  {
    title: "Identifikasi Area",
    description:
      "Menentukan wilayah yang memiliki potensi pembukaan outlet berdasarkan analisis pasar dan distribusi.",
  },
  {
    title: "Survey Outlet",
    description:
      "Melakukan observasi lapangan untuk mengetahui kondisi outlet, aktivitas perdagangan, dan potensi kerja sama.",
  },
  {
    title: "Pendekatan",
    description:
      "Membangun komunikasi dengan pemilik outlet untuk memperkenalkan perusahaan dan peluang kerja sama.",
  },
  {
    title: "Negosiasi",
    description:
      "Menyusun kesepakatan distribusi yang memberikan manfaat bagi kedua belah pihak.",
  },
  {
    title: "Aktivasi Outlet",
    description:
      "Melakukan distribusi awal, penataan produk, serta memastikan outlet mulai aktif melakukan penjualan.",
  },
  {
    title: "Repeat Order",
    description:
      "Menjaga hubungan dengan outlet melalui kunjungan rutin, evaluasi, dan pengembangan volume distribusi.",
  },
];

export default function OutletDevelopmentFunnel() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Outlet Development
          </span>

          <h2 className="mt-6">
            Tahapan Pengembangan Outlet
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Pengembangan outlet dilakukan secara bertahap mulai dari
            identifikasi peluang hingga terbentuk hubungan distribusi yang
            berkelanjutan.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="card p-7"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Tujuan Pengembangan Outlet
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Setiap outlet yang berhasil dikembangkan diharapkan mampu menjadi
            titik distribusi yang aktif, memiliki hubungan jangka panjang
            dengan perusahaan, serta mendukung perluasan coverage pada wilayah
            prioritas.
          </p>
        </div>
      </Container>
    </Section>
  );
}