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
        <Section background="gradient">
          <Container>
            <span className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Rekomendasi Strategis
            </span>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Langkah Prioritas Yang Direkomendasikan
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Berdasarkan pendekatan yang telah dijelaskan, berikut merupakan
              rekomendasi yang dapat dijadikan acuan dalam menjalankan strategi
              pengembangan pasar secara bertahap.
            </p>
          </Container>
        </Section>

        <Section background="white">
          <Container>
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

        <Section>
          <Container>
            <div className="rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-12 text-white">
              <h2 className="text-4xl font-bold">
                Presentasi Ini Adalah Awal Dari Implementasi
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Seluruh pendekatan yang disampaikan pada website ini dapat
                dikembangkan lebih lanjut menggunakan data lapangan, hasil
                observasi, dan evaluasi berkala sehingga strategi selalu relevan
                terhadap kondisi pasar yang sebenarnya.
              </p>

              <div className="mt-10">
                <Button href="/">
                  Kembali ke Beranda
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