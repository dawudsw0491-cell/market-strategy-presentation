import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const highlights = [
  "Menganalisis karakter wilayah, potensi pasar, dan peluang distribusi.",
  "Menentukan wilayah prioritas berdasarkan hasil pemetaan lapangan.",
  "Menyusun strategi pengembangan outlet, institusi, dan komunitas.",
  "Merancang implementasi secara bertahap sesuai prioritas perusahaan.",
  "Menyusun rekomendasi sebagai dasar pengembangan pasar berkelanjutan.",
];

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-14 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 xl:grid-cols-[1.08fr_0.92fr]">
          {/* Left */}
          <div className="fade-up">
            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              Blueprint Strategi Pengembangan Pasar FMCG
            </span>

            <h1 className="mt-6 max-w-3xl">
              Pengembangan Pasar
              <span className="gradient-text">
                {" "}Kabupaten Kediri
              </span>
              <br />
              Kota Kediri dan Kabupaten Nganjuk
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 lg:text-lg">
              Blueprint ini disusun sebagai panduan pengembangan pasar PT Sakti
              Setia Sentosa dengan fokus pada penguatan jaringan distribusi,
              pengembangan outlet, peningkatan kualitas SDM, perluasan kerja
              sama dengan institusi dan komunitas, serta peningkatan penetrasi
              pasar melalui pendekatan yang terarah sesuai karakter setiap
              wilayah.
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
                  Presentasi ini memberikan gambaran menyeluruh mengenai proses
                  analisis wilayah, penentuan prioritas, pengembangan outlet,
                  institusi, komunitas, implementasi program, hingga
                  rekomendasi strategis sebagai dasar pengembangan pasar FMCG
                  di wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten
                  Nganjuk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}