import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-24 lg:pt-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="fade-up">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              Presentasi Strategi Pengembangan Pasar
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Membangun
              <span className="gradient-text"> Pertumbuhan Pasar </span>
              Secara Terarah dan Berkelanjutan
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              Website ini menjelaskan pendekatan yang digunakan untuk
              mengidentifikasi potensi wilayah, menentukan prioritas pasar,
              menyusun strategi pengembangan, hingga menyusun langkah
              implementasi secara bertahap.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/analisis-kondisi">
                Mulai Presentasi
              </Button>

              <Button
                href="/strategi-pengembangan"
                variant="outline"
              >
                Lihat Strategi
              </Button>
            </div>
          </div>

          <div className="fade-up">
            <div className="card rounded-[36px] p-10">
              <div className="grid gap-6">
                <div className="rounded-2xl bg-blue-50 p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Memahami Kondisi Pasar
                  </h3>

                  <p className="text-slate-600">
                    Analisis wilayah menjadi dasar dalam menentukan
                    peluang pengembangan yang paling potensial.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Menentukan Prioritas
                  </h3>

                  <p className="text-slate-600">
                    Setiap wilayah dievaluasi menggunakan kriteria yang
                    konsisten agar keputusan lebih objektif.
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Menjalankan Implementasi
                  </h3>

                  <p className="text-slate-600">
                    Strategi diterjemahkan menjadi rencana kerja yang
                    realistis, bertahap, dan mudah dipantau.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}