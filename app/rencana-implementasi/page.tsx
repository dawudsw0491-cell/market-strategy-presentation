import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import DistributionFlow from "@/components/sections/distribution-flow";

const roadmap = [
  {
    phase: "Tahap 1",
    period: "0 – 30 Hari",
    title: "Persiapan",
    activities: [
      "Validasi wilayah prioritas.",
      "Pemetaan outlet dan institusi.",
      "Penyusunan rencana implementasi.",
    ],
  },
  {
    phase: "Tahap 2",
    period: "1 – 3 Bulan",
    title: "Pelaksanaan Awal",
    activities: [
      "Pengembangan outlet.",
      "Pendekatan institusi.",
      "Penguatan distribusi.",
    ],
  },
  {
    phase: "Tahap 3",
    period: "3 – 6 Bulan",
    title: "Pengembangan",
    activities: [
      "Perluasan wilayah.",
      "Evaluasi implementasi.",
      "Optimalisasi distribusi.",
    ],
  },
  {
    phase: "Tahap 4",
    period: "6 – 12 Bulan",
    title: "Evaluasi",
    activities: [
      "Review strategi.",
      "Perbaikan implementasi.",
      "Penyusunan pengembangan lanjutan.",
    ],
  },
];

export default function RencanaImplementasiPage() {
  return (
    <>
      <Navbar />

      <main>

        <Section
          background="gradient"
          className="pt-14 lg:pt-20"
        >
          <Container>

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                Rencana Implementasi
              </span>

              <h1 className="mt-6">
                Tahapan Pelaksanaan Strategi
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Implementasi dilakukan secara bertahap agar setiap program
                dapat dijalankan sesuai prioritas, kapasitas sumber daya,
                dan hasil evaluasi pada setiap tahap pelaksanaan.
              </p>

            </div>

          </Container>

        </Section>

        <Section background="white">

          <Container>

            <div className="grid gap-8">

              {roadmap.map((item) => (

                <div
                  key={item.phase}
                  className="card p-8"
                >

                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        {item.phase}
                      </span>

                      <h3 className="mt-5 text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                    </div>

                    <div className="text-sm font-medium text-slate-500">
                      {item.period}
                    </div>

                  </div>

                  <ul className="mt-8 space-y-3">

                    {item.activities.map((activity) => (

                      <li
                        key={activity}
                        className="flex items-start gap-3"
                      >

                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                        <span className="leading-7 text-slate-600">
                          {activity}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              ))}

            </div>

          </Container>

        </Section>

        <DistributionFlow />

        <Section>

          <Container>

            <div className="executive-box">

              <h2 className="text-white">
                Kesimpulan Implementasi
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Implementasi dilakukan secara bertahap dengan fokus pada
                wilayah prioritas, penguatan distribusi, pengembangan outlet,
                dan kerja sama institusi. Setiap tahap dievaluasi sebagai
                dasar penyempurnaan pelaksanaan berikutnya.
              </p>

              <div className="mt-10">
                <Button href="/rekomendasi">
                  Lanjut ke Rekomendasi
                </Button>
              </div>

            </div>

          </Container>

        </Section>

      </main>

      <Footer />

    </>
  );
}