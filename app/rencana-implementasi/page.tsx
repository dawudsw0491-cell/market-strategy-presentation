import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

const roadmap = [
  {
    phase: "Tahap 1",
    title: "Analisis dan Pemetaan Wilayah",
    duration: "0 – 30 Hari",
    activities: [
      "Memetakan wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.",
      "Mengidentifikasi outlet aktif, outlet potensial, dan wilayah yang belum terjangkau.",
      "Memetakan institusi, organisasi, komunitas, serta pelaku usaha yang berpotensi menjadi mitra distribusi.",
      "Mengidentifikasi kategori produk yang sesuai dengan karakter setiap segmen pasar.",
      "Menetapkan prioritas wilayah dan rencana pengembangan awal.",
    ],
  },
  {
    phase: "Tahap 2",
    title: "Pelaksanaan Program Prioritas",
    duration: "30 – 90 Hari",
    activities: [
      "Mengembangkan outlet prioritas dan mengaktivasi outlet potensial.",
      "Melaksanakan pendekatan kepada sekolah, rumah sakit, perusahaan, dan institusi lainnya.",
      "Membangun hubungan dengan komunitas UMKM, kuliner, bakery, serta organisasi lokal.",
      "Melaksanakan program promosi dan aktivitas lapangan pada wilayah prioritas.",
      "Melakukan evaluasi awal terhadap efektivitas setiap program.",
    ],
  },
  {
    phase: "Tahap 3",
    title: "Perluasan Distribusi",
    duration: "3 – 6 Bulan",
    activities: [
      "Memperluas cakupan distribusi ke wilayah yang memiliki potensi pertumbuhan.",
      "Menambah outlet baru berdasarkan hasil evaluasi tahap sebelumnya.",
      "Mengembangkan kerja sama dengan institusi dan komunitas yang telah menunjukkan potensi.",
      "Meningkatkan intensitas aktivitas promosi dan hubungan dengan pelanggan.",
      "Meningkatkan pemerataan distribusi pada seluruh wilayah prioritas.",
    ],
  },
  {
    phase: "Tahap 4",
    title: "Evaluasi dan Pengembangan Berkelanjutan",
    duration: "6 – 12 Bulan",
    activities: [
      "Melakukan evaluasi terhadap seluruh program pengembangan pasar.",
      "Mengukur perkembangan outlet, institusi, komunitas, dan wilayah distribusi.",
      "Menentukan prioritas pengembangan berikutnya berdasarkan hasil implementasi.",
      "Menyempurnakan pendekatan distribusi sesuai perkembangan kondisi pasar.",
      "Menyusun rencana pengembangan berkelanjutan sebagai dasar implementasi tahun berikutnya.",
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
                Implementasi dilakukan secara bertahap agar setiap program
                memiliki fokus yang jelas, mudah dikendalikan, serta mampu
                menghasilkan pengembangan pasar yang berkelanjutan pada wilayah
                prioritas.
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
                Roadmap Pelaksanaan Strategi Pengembangan
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Setiap tahapan memiliki tujuan yang saling berkaitan sehingga
                pengembangan wilayah, outlet, institusi, komunitas, dan
                aktivitas distribusi dapat berkembang secara bertahap dan
                berkesinambungan.
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