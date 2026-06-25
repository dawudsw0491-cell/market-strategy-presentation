import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export default function AnalisisKondisiPage() {
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
              <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                Analisis Kondisi
              </span>

              <h1 className="mt-6 max-w-4xl">
                Memahami Kondisi Pasar Sebelum
                <span className="gradient-text">
                  {" "}Menentukan Strategi
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
                Strategi yang baik selalu diawali dengan memahami kondisi
                lapangan. Halaman ini menjelaskan informasi yang perlu
                dikumpulkan sebelum perusahaan menentukan wilayah prioritas
                pengembangan pasar sehingga setiap keputusan memiliki dasar
                yang jelas.
              </p>
            </div>
          </Container>
        </Section>

        {/* Content */}
        <Section background="white">
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
                Fokus Analisis
              </span>

              <h2 className="mt-5 font-semibold">
                Informasi Yang Perlu Dipahami
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Pengambilan keputusan tidak hanya melihat jumlah outlet atau
                luas wilayah. Diperlukan pemahaman yang menyeluruh mengenai
                karakteristik pasar sehingga strategi yang dipilih benar-benar
                sesuai dengan kondisi di lapangan.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card
                title="Karakteristik Wilayah"
                description="Memahami kondisi geografis, kepadatan penduduk, akses transportasi, pusat aktivitas ekonomi, serta perkembangan wilayah."
              />

              <Card
                title="Potensi Pasar"
                description="Mengidentifikasi peluang pertumbuhan berdasarkan aktivitas bisnis, daya beli masyarakat, dan kebutuhan pelanggan."
              />

              <Card
                title="Jaringan Distribusi"
                description="Mengevaluasi kemudahan distribusi, jangkauan layanan, serta efektivitas jaringan yang telah dimiliki."
              />

              <Card
                title="Persaingan"
                description="Memahami tingkat persaingan sehingga perusahaan dapat menentukan pendekatan yang paling tepat."
              />
            </div>
          </Container>
        </Section>

        {/* Summary */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 p-8 text-white lg:p-12">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur">
                  Ringkasan
                </span>

                <h2 className="mt-5 font-semibold text-white">
                  Hasil Analisis Menjadi Dasar Penyusunan Strategi
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Setelah seluruh informasi dikumpulkan dan dianalisis,
                  perusahaan dapat menentukan prioritas wilayah, memilih
                  pendekatan yang sesuai, serta menyusun rencana implementasi
                  secara bertahap sesuai kondisi perusahaan.
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
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}