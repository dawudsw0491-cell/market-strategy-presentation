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
      "Menentukan wilayah prioritas berdasarkan karakter pasar, potensi distribusi, serta peluang pertumbuhan di Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.",
    explanation:
      "Pengembangan wilayah diawali melalui pemetaan area, identifikasi potensi outlet, aktivitas ekonomi, institusi, komunitas, serta akses distribusi sehingga setiap wilayah memperoleh pendekatan yang sesuai dengan karakter pasarnya.",
  },
  {
    title: "Pengembangan Outlet",
    objective:
      "Meningkatkan produktivitas outlet aktif sekaligus memperluas jaringan distribusi melalui outlet potensial dan outlet baru.",
    explanation:
      "Pendekatan disesuaikan dengan karakter setiap segmen seperti kelontong, grosir, semi grosir, bakery, horeca, dan UMKM. Setiap segmen memiliki kebutuhan kategori produk yang berbeda sehingga pengembangan dilakukan secara lebih terarah dan berkelanjutan.",
  },
  {
    title: "Pengembangan Institusi",
    objective:
      "Membangun hubungan kerja sama jangka panjang dengan institusi yang memiliki kebutuhan distribusi secara berkelanjutan.",
    explanation:
      "Fokus pengembangan meliputi sekolah, perguruan tinggi, pondok pesantren, rumah sakit, instansi pemerintah, perusahaan, dan lembaga lainnya melalui pendekatan yang disesuaikan dengan karakter kebutuhan masing-masing institusi.",
  },
  {
    title: "Pengembangan Komunitas",
    objective:
      "Meningkatkan keterlibatan perusahaan bersama komunitas sebagai bagian dari penguatan hubungan dengan pasar lokal.",
    explanation:
      "Pengembangan dilakukan melalui komunitas UMKM, komunitas kuliner, bakery, organisasi masyarakat, serta komunitas lokal yang berpotensi mendukung perluasan jaringan distribusi dan memperkuat hubungan jangka panjang dengan pelanggan.",
  },
  {
    title: "Program Aktivasi Pasar",
    objective:
      "Meningkatkan interaksi langsung dengan outlet, institusi, komunitas, dan pelanggan melalui berbagai aktivitas pemasaran lapangan.",
    explanation:
      "Program meliputi promosi, edukasi produk, gathering pelanggan, kegiatan komunitas, serta event wilayah yang mendukung peningkatan hubungan dengan pelanggan sekaligus memperkuat penetrasi pasar pada area prioritas.",
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
                Strategi pengembangan pasar disusun untuk memperkuat jaringan
                distribusi, meningkatkan produktivitas outlet, memperluas kerja
                sama dengan institusi dan komunitas, serta mendukung
                pengembangan pasar FMCG secara bertahap pada wilayah prioritas.
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
                Seluruh strategi saling mendukung untuk membangun pertumbuhan
                pasar melalui pengembangan wilayah, penguatan jaringan outlet,
                peningkatan kerja sama dengan institusi, keterlibatan
                komunitas, serta aktivitas pemasaran yang berkesinambungan.
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
                  Strategi Menjadi Dasar Pelaksanaan Program
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Setiap strategi diterjemahkan ke dalam rencana implementasi
                  yang bertahap, terukur, dan sesuai dengan karakter wilayah,
                  sehingga pengembangan outlet, institusi, komunitas, serta
                  aktivitas distribusi dapat berjalan secara lebih efektif dan
                  berkelanjutan.
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