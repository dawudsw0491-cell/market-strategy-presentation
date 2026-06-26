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
                Pengembangan pasar diawali dengan memahami karakter wilayah,
                persebaran outlet, potensi pelanggan, serta peluang distribusi
                pada Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.
                Analisis ini menjadi dasar dalam menentukan prioritas
                pengembangan pasar agar setiap program memiliki arah yang jelas
                dan sesuai dengan kebutuhan di lapangan.
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
                Informasi Yang Menjadi Dasar Pengembangan Pasar
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Analisis dilakukan untuk memahami kondisi wilayah, karakter
                outlet, peluang distribusi, serta potensi pengembangan pada
                setiap segmen pasar sehingga strategi yang disusun dapat
                diterapkan secara lebih terarah.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card
                title="Karakteristik Wilayah"
                description="Mengidentifikasi karakter wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk berdasarkan aktivitas perdagangan, pertumbuhan kawasan, akses distribusi, pusat ekonomi, serta potensi pengembangan pasar pada masing-masing area."
              />

              <Card
                title="Potensi Pasar dan Segmen Outlet"
                description="Menganalisis peluang pengembangan pada outlet tradisional, grosir, semi grosir, bakery, horeca, UMKM, serta institusi untuk menentukan pendekatan distribusi yang sesuai dengan karakter masing-masing segmen."
              />

              <Card
                title="Jaringan Distribusi"
                description="Memahami jangkauan distribusi, persebaran outlet aktif, peluang pembukaan outlet baru, efektivitas kunjungan sales, serta keterjangkauan layanan pada setiap wilayah pengembangan."
              />

              <Card
                title="Peluang Pengembangan"
                description="Mengidentifikasi peluang kerja sama dengan institusi, organisasi, komunitas, pelaku usaha lokal, serta kategori produk yang memiliki potensi lebih tinggi pada setiap segmen pasar sebagai dasar penyusunan strategi pengembangan."
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
                  Hasil analisis memberikan gambaran mengenai wilayah prioritas,
                  potensi outlet, peluang kerja sama dengan institusi dan
                  komunitas, serta kategori produk yang sesuai dengan karakter
                  setiap segmen pasar sehingga strategi pengembangan dapat
                  dilaksanakan secara bertahap, terarah, dan berkelanjutan.
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