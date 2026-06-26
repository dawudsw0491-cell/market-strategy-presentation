import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const recommendations = [
  {
    priority: "Prioritas 1",
    title: "Fokus Pada Wilayah Prioritas Pengembangan",
    description:
      "Pengembangan diawali pada wilayah yang memiliki potensi distribusi terbesar di Kabupaten Kediri, kemudian diperluas ke Kota Kediri dan Kabupaten Nganjuk berdasarkan hasil analisis wilayah, karakter pasar, serta peluang pertumbuhan outlet.",
  },
  {
    priority: "Prioritas 2",
    title: "Perkuat Jaringan Outlet",
    description:
      "Mengoptimalkan outlet aktif, mengembangkan outlet potensial, serta membuka outlet baru pada area yang belum terjangkau. Pendekatan dilakukan sesuai karakter masing-masing segmen seperti kelontong, grosir, semi grosir, bakery, horeca, dan UMKM agar distribusi menjadi lebih merata.",
  },
  {
    priority: "Prioritas 3",
    title: "Perluas Kerja Sama Dengan Institusi",
    description:
      "Mengembangkan hubungan jangka panjang dengan sekolah, perguruan tinggi, pondok pesantren, rumah sakit, instansi pemerintah, perusahaan, dan lembaga lainnya sebagai bagian dari penguatan jaringan distribusi di luar jalur perdagangan tradisional.",
  },
  {
    priority: "Prioritas 4",
    title: "Bangun Hubungan Dengan Komunitas",
    description:
      "Melibatkan komunitas UMKM, komunitas kuliner, bakery, organisasi masyarakat, serta komunitas lokal sebagai mitra dalam memperluas jaringan, meningkatkan kedekatan dengan pelanggan, dan mendukung aktivitas pengembangan pasar.",
  },
  {
    priority: "Prioritas 5",
    title: "Laksanakan Monitoring dan Evaluasi",
    description:
      "Melakukan evaluasi secara berkala terhadap perkembangan wilayah, outlet, institusi, komunitas, serta efektivitas pelaksanaan program sehingga strategi dapat terus disesuaikan dengan kondisi pasar dan kebutuhan distribusi.",
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
                Rekomendasi ini disusun sebagai arah pelaksanaan pengembangan
                pasar berdasarkan hasil analisis wilayah, strategi
                pengembangan, serta tahapan implementasi yang telah dijelaskan
                pada bagian sebelumnya.
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
                Rekomendasi Pelaksanaan Pengembangan Pasar
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Seluruh rekomendasi saling melengkapi untuk memperkuat jaringan
                distribusi, meningkatkan kualitas pengembangan wilayah, serta
                mendukung pertumbuhan pasar secara berkelanjutan.
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
                  Pengembangan Pasar Dilaksanakan Secara Berkelanjutan
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Pengembangan pasar merupakan proses yang dilakukan secara
                  bertahap melalui analisis wilayah, penguatan jaringan outlet,
                  pengembangan institusi dan komunitas, serta evaluasi yang
                  berkelanjutan sehingga perusahaan mampu memperluas distribusi
                  dan membangun pertumbuhan pasar yang lebih kuat di wilayah
                  Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.
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