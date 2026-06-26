import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Market Assessment",
    duration: "0 – 30 Hari",
    readiness: 100,
    objectives: [
      "Analisis wilayah prioritas",
      "Validasi outlet existing",
      "Pemetaan institusi potensial",
      "Identifikasi komunitas",
      "Penentuan target pengembangan",
    ],
  },
  {
    phase: "Phase 2",
    title: "Market Penetration",
    duration: "30 – 90 Hari",
    readiness: 92,
    objectives: [
      "Pengembangan outlet",
      "Pendekatan institusi",
      "Program komunitas",
      "Aktivasi event",
      "Monitoring hasil awal",
    ],
  },
  {
    phase: "Phase 3",
    title: "Market Expansion",
    duration: "3 – 6 Bulan",
    readiness: 86,
    objectives: [
      "Perluasan coverage",
      "Penambahan outlet baru",
      "Perluasan channel distribusi",
      "Penguatan relationship",
      "Peningkatan repeat order",
    ],
  },
  {
    phase: "Phase 4",
    title: "Business Optimization",
    duration: "6 – 12 Bulan",
    readiness: 80,
    objectives: [
      "Evaluasi KPI",
      "Optimasi distribusi",
      "Perbaikan strategi",
      "Penguatan market share",
      "Roadmap pengembangan berikutnya",
    ],
  },
];

function Progress({
  value,
}: {
  value: number;
}) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex justify-between">
        <span className="text-sm text-slate-500">
          Readiness
        </span>

        <span className="font-semibold text-slate-900">
          {value}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

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

            <div className="max-w-4xl">

              <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700">
                Rencana Implementasi
              </span>

              <h1 className="mt-6">
                Business Implementation
                <span className="gradient-text">
                  {" "}Roadmap
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Implementasi dilakukan secara bertahap agar setiap program
                memiliki fokus, target, dan indikator keberhasilan yang
                dapat dipantau selama proses pengembangan pasar.
              </p>

            </div>

          </Container>

        </Section>

        <Section background="white">

          <Container>

            <div className="grid gap-8">

              {roadmap.map((item) => (

                <Card
                  key={item.phase}
                  title={`${item.phase} · ${item.title}`}
                >

                  <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {item.duration}
                  </div>

                  <Progress value={item.readiness} />

                  <ul className="mt-8 space-y-4">

                    {item.objectives.map((objective) => (

                      <li
                        key={objective}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                        <span className="leading-7 text-slate-600">
                          {objective}
                        </span>

                      </li>

                    ))}

                  </ul>

                </Card>

              ))}

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 p-10 text-white">

              <h2 className="text-white">
                Executive Roadmap
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
                Roadmap implementasi difokuskan pada percepatan penetrasi
                pasar, peningkatan coverage distribusi, pengembangan outlet,
                penguatan institusi, serta evaluasi berkelanjutan agar
                strategi dapat berkembang sesuai dinamika pasar.
              </p>

            </div>

          </Container>

        </Section>

      </main>

      <Footer />

    </>
  );
}