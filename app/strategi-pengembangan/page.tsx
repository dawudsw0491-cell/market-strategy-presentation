import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const strategies = [
  {
    title: "Pengembangan Wilayah",
    objective:
      "Menentukan wilayah yang paling layak menjadi prioritas pengembangan.",
    explanation:
      "Wilayah dipilih berdasarkan hasil analisis kondisi lapangan, akses distribusi, aktivitas ekonomi, dan peluang pertumbuhan pasar.",
  },
  {
    title: "Pengembangan Outlet",
    objective:
      "Meningkatkan produktivitas outlet yang sudah ada sekaligus membuka peluang outlet baru.",
    explanation:
      "Fokus pada peningkatan kualitas pelayanan, pemerataan jangkauan, dan pemanfaatan peluang di wilayah yang belum terlayani.",
  },
  {
    title: "Pengembangan Institusi",
    objective:
      "Membangun hubungan kerja sama jangka panjang dengan berbagai institusi.",
    explanation:
      "Meliputi sekolah, perguruan tinggi, instansi pemerintah, rumah sakit, perusahaan, dan organisasi lainnya.",
  },
  {
    title: "Pengembangan Komunitas",
    objective:
      "Mendekatkan perusahaan dengan masyarakat melalui kegiatan komunitas.",
    explanation:
      "Komunitas menjadi media untuk memperluas jaringan, membangun kepercayaan, dan memperkenalkan produk secara lebih personal.",
  },
  {
    title: "Program Event",
    objective:
      "Meningkatkan interaksi langsung dengan calon pelanggan.",
    explanation:
      "Kegiatan promosi, seminar, pameran, gathering, maupun aktivasi lapangan digunakan untuk memperkenalkan produk dan membangun hubungan yang lebih kuat.",
  },
];

export default function StrategiPengembanganPage() {
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
              <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
                Strategi Pengembangan
              </span>

              <h1 className="mt-6 max-w-4xl">
                Lima Strategi Untuk
                <span className="gradient-text">
                  {" "}Mendorong Pertumbuhan Pasar
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
                Strategi disusun agar setiap aktivitas pengembangan memiliki
                tujuan yang jelas, mudah dipahami, serta dapat dilaksanakan
                secara bertahap sesuai prioritas perusahaan.
              </p>
            </div>
          </Container>
        </Section>

        {/* Strategy List */}
        <Section background="white">
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                Fokus Strategi
              </span>

              <h2 className="mt-5 font-semibold">
                Lima Strategi Pengembangan Pasar
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Setiap strategi memiliki tujuan yang berbeda, namun seluruhnya
                saling mendukung dalam memperluas pasar serta meningkatkan
                pertumbuhan perusahaan secara berkelanjutan.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {strategies.map((strategy) => (
                <Card
                  key={strategy.title}
                  title={strategy.title}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Tujuan
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {strategy.objective}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Pendekatan
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {strategy.explanation}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
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
                  Strategi Harus Dapat Dilaksanakan
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Setelah strategi ditentukan, langkah berikutnya adalah
                  menyusun rencana implementasi yang realistis, bertahap,
                  memiliki target yang jelas, serta dapat dipantau secara
                  berkala.
                </p>

                <div className="mt-10">
                  <Button href="/rencana-implementasi">
                    Lanjut ke Rencana Implementasi
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