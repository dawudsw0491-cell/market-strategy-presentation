import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const recommendations = [
  {
    title: "Prioritaskan Kabupaten Kediri",
    description:
      "Menjadikan Kabupaten Kediri sebagai wilayah utama pengembangan melalui perluasan outlet, distribusi, dan kerja sama institusi.",
  },
  {
    title: "Perkuat Kota Kediri",
    description:
      "Mengoptimalkan jaringan distribusi dan outlet yang telah berjalan untuk meningkatkan produktivitas.",
  },
  {
    title: "Kembangkan Kabupaten Nganjuk",
    description:
      "Melaksanakan pengembangan secara bertahap sesuai hasil evaluasi dan kesiapan implementasi.",
  },
  {
    title: "Perluas Kerja Sama Institusi",
    description:
      "Mengembangkan hubungan jangka panjang dengan sekolah, rumah sakit, perusahaan, dan instansi pemerintah.",
  },
  {
    title: "Laksanakan Evaluasi Berkala",
    description:
      "Melakukan evaluasi secara berkala untuk memastikan implementasi berjalan sesuai tujuan pengembangan pasar.",
  },
];

export default function RekomendasiPage() {
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

              <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
                Rekomendasi
              </span>

              <h1 className="mt-6">
                Rekomendasi Strategis
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Rekomendasi berikut merupakan rangkuman dari hasil analisis,
                strategi, dan rencana implementasi sebagai arah pengembangan
                pasar PT Sakti Setia Sentosa.
              </p>

            </div>

          </Container>

        </Section>

        <Section background="white">

          <Container>

            <div className="grid gap-8">

              {recommendations.map((item, index) => (

                <Card
                  key={item.title}
                  title={`${index + 1}. ${item.title}`}
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

            <div className="executive-box">

              <h2 className="text-white">
                Kesimpulan Akhir
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Strategi pengembangan pasar diarahkan pada wilayah yang memiliki
                peluang terbesar dengan dukungan distribusi yang efektif,
                pengembangan outlet, kerja sama institusi, serta implementasi
                bertahap. Pendekatan ini diharapkan mampu mendukung pertumbuhan
                pasar yang berkelanjutan dan memperkuat posisi perusahaan pada
                wilayah sasaran.
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