import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const recommendations = [
  {
    priority: "Prioritas 1",
    title: "Fokus Pada Wilayah Dengan Peluang Terbesar",
    description:
      "Alokasikan sumber daya pada wilayah yang menunjukkan peluang pertumbuhan terbaik berdasarkan hasil analisis sehingga investasi memberikan dampak yang lebih optimal.",
  },
  {
    priority: "Prioritas 2",
    title: "Perkuat Outlet Yang Sudah Berjalan",
    description:
      "Sebelum membuka outlet baru, tingkatkan produktivitas outlet yang sudah ada melalui pelayanan, promosi, dan penguatan hubungan dengan pelanggan.",
  },
  {
    priority: "Prioritas 3",
    title: "Bangun Kemitraan Dengan Institusi",
    description:
      "Perluas kerja sama dengan sekolah, kampus, instansi pemerintah, rumah sakit, dan perusahaan untuk menciptakan pasar yang lebih stabil.",
  },
  {
    priority: "Prioritas 4",
    title: "Perkuat Hubungan Dengan Komunitas",
    description:
      "Komunitas menjadi media yang efektif untuk meningkatkan kepercayaan masyarakat serta memperluas penyebaran informasi secara alami.",
  },
  {
    priority: "Prioritas 5",
    title: "Lakukan Evaluasi Secara Berkala",
    description:
      "Seluruh program perlu dievaluasi secara berkala agar strategi dapat disesuaikan dengan perkembangan kondisi pasar.",
  },
];

export default function RekomendasiPage() {
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
              <span className="inline-flex rounded-full border border-amber-200 bg-white/80 px-5 py-2 text-sm font-semibold text-amber-700 shadow-sm backdrop-blur">
                Rekomendasi Strategis
              </span>

              <h1 className="mt-6 max-w-4xl">
                Langkah Prioritas Yang
                <span className="gradient-text">
                  {" "}Direkomendasikan
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
                Berdasarkan pendekatan yang telah dijelaskan, berikut merupakan
                rekomendasi yang dapat dijadikan acuan dalam menjalankan strategi
                pengembangan pasar secara bertahap.
              </p>
            </div>
          </Container>
        </Section>

        {/* Recommendation List */}
        <Section background="white">
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
                Prioritas Strategis
              </span>

              <h2 className="mt-5 font-semibold">
                Rekomendasi Pelaksanaan
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rekomendasi berikut disusun berdasarkan keseluruhan pendekatan
                yang telah dijelaskan sehingga dapat menjadi acuan dalam
                pelaksanaan strategi secara bertahap.
              </p>
            </div>

            <div className="grid gap-8">
              {recommendations.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                >
                  <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {item.priority}
                  </span>

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Closing */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white lg:p-12">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur">
                  Penutup
                </span>

                <h2 className="mt-5 font-semibold text-white">
                  Presentasi Ini Adalah Awal Dari Implementasi
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Seluruh pendekatan yang disampaikan pada website ini dapat
                  dikembangkan lebih lanjut menggunakan data lapangan, hasil
                  observasi, dan evaluasi berkala sehingga strategi selalu
                  relevan terhadap kondisi pasar yang sebenarnya.
                </p>

                <div className="mt-10">
                  <Button href="/">
                    Kembali ke Beranda
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}