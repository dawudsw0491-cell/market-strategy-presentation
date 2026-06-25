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
        <Section background="gradient">
          <Container>
            <span className="mb-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Strategi Pengembangan
            </span>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Lima Strategi Untuk Mendorong Pertumbuhan Pasar
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Strategi disusun agar setiap aktivitas pengembangan memiliki
              tujuan yang jelas, mudah dipahami, dan dapat dilaksanakan secara
              bertahap sesuai prioritas perusahaan.
            </p>
          </Container>
        </Section>

        <Section background="white">
          <Container>
            <div className="mb-14 max-w-3xl">
              <h2 className="text-4xl font-bold text-slate-900">
                Fokus Strategi
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Setiap strategi memiliki tujuan yang berbeda, namun seluruhnya
                saling mendukung dalam memperluas pasar dan meningkatkan
                pertumbuhan perusahaan secara berkelanjutan.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {strategies.map((strategy) => (
                <Card
                  key={strategy.title}
                  title={strategy.title}
                >
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Tujuan
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {strategy.objective}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
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

        <Section>
          <Container>
            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 p-10 text-white lg:p-14">
              <h2 className="text-4xl font-bold">
                Strategi Harus Dapat Dilaksanakan
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
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
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}