import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const strategies = [
  {
    title: "Pengembangan Wilayah",
    score: 95,
    objective:
      "Menentukan wilayah prioritas berdasarkan peluang pasar dan kesiapan distribusi.",
    impact:
      "Mempercepat penetrasi pasar pada area dengan potensi pertumbuhan tertinggi.",
  },
  {
    title: "Pengembangan Outlet",
    score: 92,
    objective:
      "Meningkatkan produktivitas outlet existing dan memperluas outlet baru.",
    impact:
      "Meningkatkan coverage distribusi dan ketersediaan produk.",
  },
  {
    title: "Pengembangan Institusi",
    score: 90,
    objective:
      "Membangun kerja sama jangka panjang dengan institusi strategis.",
    impact:
      "Menciptakan pasar yang stabil dan berkelanjutan.",
  },
  {
    title: "Pengembangan Komunitas",
    score: 84,
    objective:
      "Membangun hubungan dengan komunitas lokal sebagai media penetrasi pasar.",
    impact:
      "Meningkatkan awareness, kepercayaan, dan jaringan distribusi.",
  },
  {
    title: "Program Event",
    score: 86,
    objective:
      "Meningkatkan interaksi langsung dengan pelanggan dan calon pelanggan.",
    impact:
      "Meningkatkan eksposur produk dan memperkuat hubungan pasar.",
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
          Strategy Readiness
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

export default function StrategiPengembanganPage() {
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

              <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-sm font-semibold text-emerald-700">
                Strategi Pengembangan
              </span>

              <h1 className="mt-6">
                Business Strategy
                <span className="gradient-text">
                  {" "}Execution Plan
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Strategi disusun berdasarkan hasil analisis pasar sehingga
                setiap aktivitas pengembangan memiliki tujuan, prioritas,
                serta dampak yang dapat diukur.
              </p>

            </div>

          </Container>

        </Section>

        <Section background="white">

          <Container>

            <div className="grid gap-8 lg:grid-cols-2">

              {strategies.map((item) => (

                <Card
                  key={item.title}
                  title={item.title}
                >

                  <Progress value={item.score} />

                  <div className="mt-8">

                    <h3 className="text-base font-semibold text-slate-900">
                      Tujuan
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {item.objective}
                    </p>

                  </div>

                  <div className="mt-8">

                    <h3 className="text-base font-semibold text-slate-900">
                      Dampak Yang Diharapkan
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {item.impact}
                    </p>

                  </div>

                </Card>

              ))}

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 p-10 text-white">

              <h2 className="text-white">
                Executive Strategy
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
                Strategi difokuskan pada pengembangan wilayah prioritas,
                peningkatan produktivitas outlet, perluasan kerja sama
                institusi, penguatan komunitas, dan pelaksanaan program
                pemasaran secara bertahap agar implementasi berjalan efektif.
              </p>

              <div className="mt-10">
                <Button href="/rencana-implementasi">
                  Lanjut ke Rencana Implementasi
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