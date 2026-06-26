import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const highlights = [
  "Analisis kondisi pasar dan karakteristik wilayah.",
  "Penentuan prioritas pengembangan wilayah.",
  "Strategi pengembangan outlet dan distribusi.",
  "Pengembangan institusi, komunitas, dan event.",
  "Roadmap implementasi dan rekomendasi strategis.",
];

const metrics = [
  {
    value: "3",
    label: "Wilayah Prioritas",
  },
  {
    value: "5",
    label: "Strategi Utama",
  },
  {
    value: "4",
    label: "Tahapan Implementasi",
  },
];

export default function Hero() {
  return (
    <Section
      background="gradient"
      className="relative overflow-hidden pt-14 lg:pt-20"
    >
      <Container>

        <div className="grid items-center gap-14 xl:grid-cols-[1.1fr_0.9fr]">

          <div>

            <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              Executive Presentation
            </span>

            <h1 className="mt-7 max-w-4xl">
              Strategi Pengembangan Pasar
              <span className="gradient-text">
                {" "}PT Sakti Setia Sentosa
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Website ini menyajikan pendekatan analisis kondisi pasar,
              penentuan prioritas wilayah, strategi pengembangan,
              roadmap implementasi, serta rekomendasi strategis sebagai
              dasar pengambilan keputusan pengembangan pasar.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="/analisis-kondisi">
                Mulai Presentasi
              </Button>

              <Button
                href="/strategi-pengembangan"
                variant="outline"
              >
                Lihat Strategi
              </Button>

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">

              {metrics.map((metric) => (

                <div
                  key={metric.label}
                  className="dashboard-card text-center"
                >
                  <div className="metric-value text-blue-600">
                    {metric.value}
                  </div>

                  <div className="metric-label">
                    {metric.label}
                  </div>
                </div>

              ))}

            </div>

          </div>

          <div>

            <div className="card p-8 lg:p-10">

              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Ringkasan Presentasi
              </span>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Executive Overview
              </h2>

              <div className="mt-8 space-y-6">

                {highlights.map((item, index) => (

                  <div
                    key={item}
                    className="flex items-start gap-5"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="leading-7 text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              <div className="my-8 h-px bg-slate-200" />

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <p className="leading-7 text-slate-600">
                  Seluruh strategi disusun menggunakan pendekatan yang
                  sistematis sehingga dapat menjadi dasar diskusi,
                  presentasi manajemen, maupun implementasi pengembangan
                  pasar secara bertahap.
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}