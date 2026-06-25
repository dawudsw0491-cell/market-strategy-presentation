import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const highlights = [
  "Memahami kondisi dan karakteristik pasar.",
  "Menentukan prioritas wilayah pengembangan.",
  "Menyusun strategi yang terarah dan realistis.",
  "Merancang implementasi secara bertahap.",
  "Menyajikan rekomendasi sebagai dasar pengambilan keputusan.",
];

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-16 lg:pt-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-up">
            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              Presentasi Strategi Pengembangan Pasar
            </span>

            <h1 className="mt-7 max-w-3xl">
              Menentukan Prioritas
              <span className="gradient-text">
                {" "}Pengembangan Pasar
              </span>
              <br />
              Secara Lebih Terarah
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 lg:text-lg">
              Presentasi ini menggambarkan pendekatan yang digunakan untuk
              memahami kondisi pasar, menentukan prioritas pengembangan,
              menyusun strategi, dan merencanakan implementasi sehingga setiap
              keputusan memiliki dasar yang jelas dan dapat dilaksanakan secara
              bertahap.
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
            <div className="card">
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Ringkasan Presentasi
                </span>

                <h2 className="mt-5 text-2xl font-semibold text-slate-900">
                  Alur Pembahasan
                </h2>
              </div>

              <div className="space-y-5">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-md">
                      {index + 1}
                    </div>

                    <p className="pt-1 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50/80 p-5">
                <p className="text-sm leading-7 text-slate-600">
                  Seluruh strategi dalam presentasi ini disusun menggunakan
                  pendekatan yang sistematis, sehingga mudah dipahami sebagai
                  dasar diskusi maupun pengambilan keputusan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}