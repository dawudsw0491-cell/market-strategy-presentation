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
    <Section className="relative overflow-hidden pt-14 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 xl:grid-cols-[1.08fr_0.92fr]">
          {/* Left */}
          <div className="fade-up">
            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              Presentasi Strategi Pengembangan Pasar
            </span>

            <h1 className="mt-6 max-w-3xl">
              Menentukan Prioritas
              <span className="gradient-text">
                {" "}Pengembangan Pasar
              </span>
              <br />
              Secara Lebih Terarah
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 lg:text-lg">
              Presentasi ini menggambarkan pendekatan yang digunakan untuk
              memahami kondisi pasar, menentukan prioritas pengembangan,
              menyusun strategi, dan merencanakan implementasi sehingga setiap
              keputusan memiliki dasar yang jelas dan dapat dilaksanakan secara
              bertahap.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
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

          {/* Right */}
          <div className="fade-up">
            <div className="card p-7 lg:p-9">
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Ringkasan Presentasi
              </span>

              <h2 className="mt-5 text-2xl font-semibold text-slate-900">
                Alur Pembahasan
              </h2>

              <div className="mt-7 space-y-6">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-5"
                  >
                    <div
                      className="
                        mt-1
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-xs
                        font-semibold
                        text-white
                        shadow
                      "
                    >
                      {index + 1}
                    </div>

                    <p className="leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-5">
                <p className="text-sm leading-7 text-slate-600">
                  Seluruh strategi dalam presentasi ini disusun menggunakan
                  pendekatan yang sistematis sehingga mudah dipahami sebagai
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