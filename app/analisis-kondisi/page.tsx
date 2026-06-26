import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

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
      "Memahami kondisi persaingan untuk menentukan pendekatan pengembangan yang sesuai.",
  },
];

const priorities = [
  {
    area: "Kabupaten Kediri",
    level: "Prioritas Utama",
    reason:
      "Potensi pengembangan paling besar dan menjadi fokus utama implementasi.",
  },
  {
    area: "Kota Kediri",
    level: "Penguatan",
    reason:
      "Mengoptimalkan jaringan yang telah berjalan untuk meningkatkan produktivitas.",
  },
  {
    area: "Kabupaten Nganjuk",
    level: "Pengembangan Bertahap",
    reason:
      "Pengembangan dilakukan sesuai hasil evaluasi dan kesiapan implementasi.",
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
                peluang pengembangan, kesiapan distribusi, serta
                karakteristik wilayah sebagai dasar penyusunan strategi.
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

        <Section>

          <Container>

            <h2 className="mb-12 text-center">
              Prioritas Wilayah
            </h2>

            <div className="grid gap-8 lg:grid-cols-3">

              {priorities.map((item) => (

                <Card
                  key={item.area}
                  title={item.area}
                >

                  <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {item.level}
                  </span>

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.reason}
                  </p>

                </Card>

              ))}

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="executive-box">

              <h2 className="text-white">
                Kesimpulan Analisis
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Analisis kondisi menunjukkan bahwa pengembangan pasar perlu
                difokuskan pada wilayah yang memiliki peluang terbesar,
                didukung oleh distribusi yang efektif serta pendekatan yang
                sesuai dengan karakteristik masing-masing wilayah.
              </p>

              <div className="mt-10">
                <Button href="/strategi-pengembangan">
                  Lanjut ke Strategi
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