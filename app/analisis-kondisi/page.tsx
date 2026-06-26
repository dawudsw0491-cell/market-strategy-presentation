import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import MarketCoverage from "@/components/sections/market-coverage";

const analysis = [
  {
    title: "Karakteristik Wilayah",
    description:
      "Menganalisis kondisi geografis, aktivitas ekonomi, kepadatan penduduk, dan akses distribusi sebagai dasar penentuan wilayah prioritas.",
  },
  {
    title: "Potensi Pasar",
    description:
      "Mengidentifikasi peluang pengembangan berdasarkan kebutuhan pelanggan, pertumbuhan wilayah, dan karakteristik pasar.",
  },
  {
    title: "Distribusi",
    description:
      "Menilai kesiapan jaringan distribusi agar perluasan pasar dapat dilakukan secara efektif.",
  },
  {
    title: "Persaingan",
    description:
      "Memahami kondisi persaingan sebagai dasar penyusunan strategi pengembangan pasar.",
  },
];

export default function AnalisisKondisiPage() {
  return (
    <>
      <Navbar />

      <main>

        <Section background="gradient">
          <Container>

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                Analisis Kondisi
              </span>

              <h1 className="mt-6">
                Analisis Kondisi Pasar
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Tahap analisis dilakukan untuk memahami kondisi pasar,
                karakteristik wilayah, kesiapan distribusi, dan peluang
                pengembangan sebagai dasar penyusunan strategi.
              </p>

            </div>

          </Container>
        </Section>

        <Section background="white">

          <Container>

            <div className="grid gap-8 lg:grid-cols-2">

              {analysis.map((item) => (

                <Card
                  key={item.title}
                  title={item.title}
                >
                  <p className="leading-8 text-slate-600">
                    {item.description}
                  </p>
                </Card>

              ))}

            </div>

          </Container>

        </Section>

        <MarketCoverage />

        <Section>

          <Container>

            <div className="executive-box">

              <h2 className="text-white">
                Kesimpulan Analisis
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Berdasarkan hasil analisis, pengembangan pasar difokuskan
                pada wilayah yang memiliki peluang terbesar dengan tetap
                mempertimbangkan kesiapan distribusi dan karakteristik
                masing-masing wilayah.
              </p>

              <div className="mt-10">
                <Button href="/strategi-pengembangan">
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