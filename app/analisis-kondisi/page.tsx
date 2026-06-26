import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const marketFactors = [
  {
    title: "Karakteristik Wilayah",
    score: 92,
    description:
      "Menganalisis perkembangan wilayah, kepadatan penduduk, aktivitas ekonomi, akses distribusi, serta pertumbuhan kawasan.",
  },
  {
    title: "Potensi Pasar",
    score: 95,
    description:
      "Mengidentifikasi peluang berdasarkan kebutuhan pelanggan, daya beli, dan perkembangan channel distribusi.",
  },
  {
    title: "Jaringan Distribusi",
    score: 90,
    description:
      "Mengukur kesiapan distribusi, jangkauan layanan, efektivitas rute, dan coverage wilayah.",
  },
  {
    title: "Persaingan",
    score: 84,
    description:
      "Mengevaluasi tingkat kompetisi untuk menentukan strategi penetrasi yang paling sesuai.",
  },
];

const opportunities = [
  {
    area: "Kabupaten Kediri",
    focus: "Prioritas Utama",
    color: "bg-emerald-500",
  },
  {
    area: "Kota Kediri",
    focus: "Penguatan",
    color: "bg-blue-500",
  },
  {
    area: "Kabupaten Nganjuk",
    focus: "Ekspansi Bertahap",
    color: "bg-amber-500",
  },
];

function Progress({
  value,
}: {
  value: number;
}) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-500">
          Opportunity Score
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

export default function AnalisisKondisiPage() {
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
                Analisis Kondisi
              </span>

              <h1 className="mt-6">
                Business Market
                <span className="gradient-text">
                  {" "}Analysis Dashboard
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Analisis kondisi dilakukan untuk memahami peluang pasar,
                kesiapan distribusi, karakteristik wilayah, dan tingkat
                persaingan sebagai dasar penyusunan strategi pengembangan
                pasar.
              </p>

            </div>

          </Container>
        </Section>

        <Section background="white">

          <Container>

            <div className="grid gap-8 lg:grid-cols-2">

              {marketFactors.map((item) => (

                <Card
                  key={item.title}
                  title={item.title}
                >

                  <Progress value={item.score} />

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.description}
                  </p>

                </Card>

              ))}

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

              <h2 className="mb-10 text-center">
                Area Opportunity
              </h2>

              <div className="grid gap-8 lg:grid-cols-3">

                {opportunities.map((item) => (

                  <div
                    key={item.area}
                    className="rounded-3xl border border-slate-200 p-8"
                  >

                    <div
                      className={`h-5 w-5 rounded-full ${item.color}`}
                    />

                    <h3 className="mt-5">
                      {item.area}
                    </h3>

                    <p className="mt-4 text-lg font-semibold text-blue-600">
                      {item.focus}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 p-10 text-white">

              <h2 className="text-white">
                Executive Insight
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
                Hasil analisis menunjukkan Kabupaten Kediri menjadi wilayah
                utama pengembangan pasar, Kota Kediri difokuskan pada
                peningkatan produktivitas jaringan yang telah berjalan,
                sedangkan Kabupaten Nganjuk dikembangkan melalui ekspansi
                bertahap berdasarkan peluang distribusi dan pembukaan outlet
                baru.
              </p>

              <div className="mt-10">
                <Button
                  href="/strategi-pengembangan"
                  variant="secondary"
                >
                  Lanjut ke Strategi Pengembangan
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