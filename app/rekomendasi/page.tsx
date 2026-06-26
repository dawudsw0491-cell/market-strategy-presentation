import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const recommendations = [
  {
    priority: "Prioritas 1",
    title: "Fokus Pada Kabupaten Kediri",
    score: 95,
    description:
      "Menjadikan Kabupaten Kediri sebagai pusat pengembangan pasar melalui peningkatan outlet, distribusi, institusi, dan komunitas.",
  },
  {
    priority: "Prioritas 2",
    title: "Perkuat Produktivitas Kota Kediri",
    score: 90,
    description:
      "Mengoptimalkan outlet existing, bakery, horeca, dan channel distribusi yang telah berjalan untuk meningkatkan produktivitas.",
  },
  {
    priority: "Prioritas 3",
    title: "Perluasan Kabupaten Nganjuk",
    score: 84,
    description:
      "Melaksanakan ekspansi bertahap melalui pembukaan outlet baru, pengembangan institusi, dan peningkatan coverage distribusi.",
  },
  {
    priority: "Prioritas 4",
    title: "Pengembangan Institusi",
    score: 88,
    description:
      "Membangun kerja sama jangka panjang dengan sekolah, rumah sakit, perguruan tinggi, perusahaan, dan instansi pemerintah.",
  },
  {
    priority: "Prioritas 5",
    title: "Evaluasi Berkala",
    score: 92,
    description:
      "Melakukan monitoring dan evaluasi secara berkala agar implementasi strategi tetap selaras dengan perkembangan pasar.",
  },
];

function Progress({
  value,
}: {
  value: number;
}) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex justify-between">
        <span className="text-sm text-slate-500">
          Priority Score
        </span>

        <span className="font-semibold text-slate-900">
          {value}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

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

            <div className="max-w-4xl">

              <span className="inline-flex rounded-full border border-amber-200 bg-white/80 px-5 py-2 text-sm font-semibold text-amber-700">
                Rekomendasi Strategis
              </span>

              <h1 className="mt-6">
                Executive
                <span className="gradient-text">
                  {" "}Recommendation
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Rekomendasi disusun berdasarkan keseluruhan analisis,
                strategi, dan roadmap implementasi sehingga dapat menjadi
                acuan dalam pengembangan pasar secara bertahap.
              </p>

            </div>

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

                  <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {item.priority}
                  </div>

                  <Progress value={item.score} />

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

            <div className="rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-white">

              <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
                Executive Conclusion
              </span>

              <h2 className="mt-6 text-white">
                Kesimpulan Strategi Pengembangan Pasar
              </h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    Prioritas Wilayah
                  </h3>

                  <ul className="mt-5 space-y-4 text-slate-200">
                    <li>• Kabupaten Kediri sebagai fokus utama pengembangan.</li>
                    <li>• Kota Kediri untuk penguatan outlet dan distribusi.</li>
                    <li>• Kabupaten Nganjuk sebagai wilayah ekspansi bertahap.</li>
                  </ul>

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    Prioritas Implementasi
                  </h3>

                  <ul className="mt-5 space-y-4 text-slate-200">
                    <li>• Pengembangan outlet prioritas.</li>
                    <li>• Penguatan channel distribusi.</li>
                    <li>• Kerja sama institusi strategis.</li>
                    <li>• Aktivasi komunitas dan program event.</li>
                    <li>• Evaluasi berkala berdasarkan KPI.</li>
                  </ul>

                </div>

              </div>

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