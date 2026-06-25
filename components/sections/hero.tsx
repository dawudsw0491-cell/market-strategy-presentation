import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const highlights = [
  "Memahami kondisi pasar saat ini",
  "Menentukan wilayah yang menjadi prioritas",
  "Menyusun strategi pengembangan yang terarah",
  "Merencanakan implementasi secara bertahap",
  "Memberikan rekomendasi sebagai dasar pengambilan keputusan",
];

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-20 lg:pt-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Presentasi Strategi Pengembangan Pasar
            </span>

            <h1 className="mt-6 max-w-4xl">
              Menentukan Prioritas Yang Tepat Untuk
              <span className="gradient-text">
                {" "}Meningkatkan Penetrasi Pasar
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              Presentasi ini memperlihatkan pendekatan yang digunakan untuk
              menentukan prioritas pengembangan pasar secara lebih terarah,
              sehingga keputusan yang diambil memiliki dasar analisis yang jelas
              dan dapat dilaksanakan secara bertahap.
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
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Ringkasan Alur Presentasi
              </span>

              <div className="mt-8 space-y-5">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="pt-1 leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-7 text-slate-600">
                  Seluruh isi presentasi menggunakan pendekatan yang mudah
                  dipahami dan berfokus pada proses pengambilan keputusan,
                  bukan pada angka atau asumsi yang belum memiliki dasar data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}