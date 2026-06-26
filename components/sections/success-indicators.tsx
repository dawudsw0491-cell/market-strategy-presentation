import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const indicators = [
  {
    title: "Peluang Pasar",
    status: "Prioritas Utama",
    description:
      "Wilayah yang memiliki aktivitas ekonomi tinggi, peluang distribusi besar, dan potensi pertumbuhan pasar.",
  },
  {
    title: "Distribusi",
    status: "Fokus Penguatan",
    description:
      "Meningkatkan jangkauan distribusi agar produk lebih mudah tersedia pada wilayah prioritas.",
  },
  {
    title: "Pengembangan Outlet",
    status: "Berjalan Bertahap",
    description:
      "Mengoptimalkan outlet yang telah berjalan sekaligus membuka peluang outlet baru pada area potensial.",
  },
  {
    title: "Pengembangan Institusi",
    status: "Prioritas Tinggi",
    description:
      "Membangun kerja sama jangka panjang dengan sekolah, rumah sakit, perusahaan, dan instansi.",
  },
  {
    title: "Pengembangan Komunitas",
    status: "Pendukung Strategi",
    description:
      "Memperkuat hubungan dengan komunitas sebagai media penyebaran informasi dan peningkatan kepercayaan.",
  },
  {
    title: "Implementasi",
    status: "Dilaksanakan Bertahap",
    description:
      "Seluruh program dijalankan sesuai prioritas wilayah dan dievaluasi secara berkala.",
  },
];

export default function SuccessIndicators() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Ringkasan Strategi
          </span>

          <h2 className="mt-6">
            Fokus Implementasi Strategi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Ringkasan berikut menggambarkan fokus utama pelaksanaan strategi
            tanpa menggunakan indikator kuantitatif yang belum didukung data
            lapangan.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {indicators.map((item) => (

            <div
              key={item.title}
              className="dashboard-card"
            >

              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {item.status}
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Kesimpulan Strategis
          </span>

          <h2 className="mt-6 text-white">
            Arah Pengembangan Pasar
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Pengembangan pasar difokuskan pada wilayah prioritas,
            peningkatan kualitas distribusi, penguatan outlet,
            kerja sama institusi, pengembangan komunitas,
            serta implementasi yang dilakukan secara bertahap
            sesuai kondisi lapangan.
          </p>

        </div>

      </Container>
    </Section>
  );
}