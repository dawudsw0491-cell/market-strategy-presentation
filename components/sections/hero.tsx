import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-24 lg:pt-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Presentasi Strategi Pengembangan Pasar
            </span>

            <h1 className="mt-6 max-w-4xl">
              Strategi Yang Terarah Untuk
              <span className="gradient-text">
                {" "}Meningkatkan Penetrasi Pasar
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-slate-600">
              Website ini menjelaskan langkah yang diusulkan untuk
              meningkatkan penetrasi pasar PT Sakti Setia Sentosa melalui
              analisis kondisi lapangan, penyusunan strategi, dan rencana
              implementasi yang dilakukan secara bertahap.
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
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Alur Presentasi
              </h2>

              <div className="mt-8 space-y-6">
                {[
                  "1. Memahami kondisi pasar saat ini",
                  "2. Mengidentifikasi peluang pengembangan",
                  "3. Menentukan strategi yang tepat",
                  "4. Menyusun rencana implementasi",
                  "5. Memberikan rekomendasi tindak lanjut",
                ].map((step) => (
                  <div
                    key={step}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                    <p className="text-slate-700">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm leading-7 text-slate-600">
                  Seluruh isi presentasi menggunakan pendekatan yang mudah
                  dipahami dan tidak bergantung pada angka atau asumsi yang
                  belum memiliki dasar data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}