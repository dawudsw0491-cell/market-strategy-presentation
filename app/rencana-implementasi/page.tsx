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
        <Section background="gradient">
          <Container>
            <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Rencana Implementasi
            </span>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Strategi Akan Berhasil Jika Dilaksanakan Secara Bertahap
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Implementasi disusun menjadi beberapa tahapan agar setiap program
              memiliki tujuan, fokus, dan indikator keberhasilan yang jelas.
            </p>
          </Container>
        </Section>

        <Section background="white">
          <Container>
            <div className="grid gap-8">
              {roadmap.map((step) => (
                <Card
                  key={step.phase}
                  title={`${step.phase} • ${step.title}`}
                >
                  <p className="mb-6 font-semibold text-blue-600">
                    {step.duration}
                  </p>

                  <ul className="space-y-3">
                    {step.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />

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