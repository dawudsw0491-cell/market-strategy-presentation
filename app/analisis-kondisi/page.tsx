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
        <Section background="gradient">
          <Container>
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Analisis Kondisi
              </span>

              <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                Memahami Kondisi Pasar Sebelum Menentukan Strategi
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                Strategi yang baik selalu diawali dengan memahami kondisi
                lapangan. Halaman ini menjelaskan informasi apa saja yang perlu
                dikumpulkan sebelum perusahaan menentukan wilayah prioritas
                pengembangan pasar.
              </p>
            </div>
          </Container>
        </Section>

        <Section background="white">
          <Container>
            <div className="mb-14 max-w-3xl">
              <h2 className="text-4xl font-bold text-slate-900">
                Informasi Yang Perlu Dipahami
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Pengambilan keputusan tidak hanya melihat jumlah outlet atau
                luas wilayah. Diperlukan pemahaman yang menyeluruh mengenai
                karakteristik pasar agar strategi yang dipilih benar-benar
                sesuai dengan kondisi di lapangan.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
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

        <Section>
          <Container>
            <div className="rounded-[36px] bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 p-10 text-white lg:p-14">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold">
                  Hasil Analisis Menjadi Dasar Penyusunan Strategi
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Setelah seluruh informasi dikumpulkan dan dianalisis,
                  perusahaan dapat menentukan prioritas wilayah, memilih
                  pendekatan yang sesuai, dan menyusun rencana implementasi
                  secara bertahap.
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