import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

const roadmap = [
  {
    phase: "Tahap 1",
    title: "Memahami Kondisi Saat Ini",
    duration: "0 – 30 Hari",
    activities: [
      "Mengumpulkan data wilayah",
      "Memetakan outlet yang telah berjalan",
      "Mengidentifikasi institusi potensial",
      "Mengidentifikasi komunitas aktif",
      "Menyusun prioritas awal",
    ],
  },
  {
    phase: "Tahap 2",
    title: "Menjalankan Program Prioritas",
    duration: "30 – 90 Hari",
    activities: [
      "Pengembangan outlet prioritas",
      "Pendekatan institusi",
      "Aktivasi komunitas",
      "Pelaksanaan event",
      "Evaluasi hasil awal",
    ],
  },
  {
    phase: "Tahap 3",
    title: "Perluasan Pasar",
    duration: "3 – 6 Bulan",
    activities: [
      "Ekspansi wilayah",
      "Penambahan outlet",
      "Perluasan kerja sama",
      "Peningkatan aktivitas promosi",
      "Penguatan hubungan pelanggan",
    ],
  },
  {
    phase: "Tahap 4",
    title: "Evaluasi dan Penyempurnaan",
    duration: "6 – 12 Bulan",
    activities: [
      "Evaluasi seluruh program",
      "Mengukur capaian",
      "Menentukan strategi lanjutan",
      "Perbaikan proses",
      "Menyiapkan roadmap tahun berikutnya",
    ],
  },
];

export default function RencanaImplementasiPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Section
          background="gradient"
          className="pt-14 lg:pt-20"
        >
          <Container>
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                Rencana Implementasi
              </span>

              <h1 className="mt-6 max-w-4xl">
                Strategi Akan Berhasil Jika
                <span className="gradient-text">
                  {" "}Dilaksanakan Secara Bertahap
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
                Implementasi disusun menjadi beberapa tahapan agar setiap
                program memiliki tujuan, fokus, serta indikator keberhasilan
                yang jelas dan mudah dievaluasi.
              </p>
            </div>
          </Container>
        </Section>

        {/* Roadmap */}
        <Section background="white">
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                Tahapan Implementasi
              </span>

              <h2 className="mt-5 font-semibold">
                Roadmap Pelaksanaan Strategi
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Setiap tahapan memiliki fokus yang berbeda sehingga proses
                implementasi dapat dilakukan secara bertahap, terukur, dan
                berkelanjutan.
              </p>
            </div>

            <div className="grid gap-8">
              {roadmap.map((step) => (
                <Card
                  key={step.phase}
                  title={`${step.phase} • ${step.title}`}
                >
                  <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-blue-600">
                    {step.duration}
                  </p>

                  <ul className="space-y-3">
                    {step.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                        <span className="leading-7 text-slate-600">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}