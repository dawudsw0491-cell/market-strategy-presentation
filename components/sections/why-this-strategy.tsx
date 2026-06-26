import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const reasons = [
  {
    title: "Karakter Pasar Setiap Wilayah Berbeda",
    description:
      "Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk memiliki karakteristik wilayah, pola belanja, jenis outlet, serta potensi pertumbuhan yang berbeda. Pengembangan pasar memerlukan pemetaan wilayah agar setiap program sesuai dengan kebutuhan dan peluang pada masing-masing area.",
  },
  {
    title: "Pengembangan Outlet Memerlukan Prioritas",
    description:
      "Setiap outlet memiliki potensi yang berbeda berdasarkan lokasi, jenis usaha, serta karakter pelanggan. Prioritas pengembangan diarahkan pada peningkatan produktivitas outlet aktif, aktivasi outlet potensial, serta pembukaan outlet baru pada wilayah yang masih memiliki peluang distribusi.",
  },
  {
    title: "Distribusi Tidak Hanya Berfokus Pada Outlet",
    description:
      "Pertumbuhan pasar juga didukung melalui pengembangan kerja sama dengan institusi, organisasi, komunitas, serta pelaku usaha lokal yang memiliki kebutuhan produk sesuai dengan karakter distribusi FMCG sehingga jangkauan pasar dapat berkembang lebih luas dan berkelanjutan.",
  },
];

export default function WhyThisStrategy() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Mengapa Strategi Ini Dibutuhkan
          </span>

          <h2 className="mt-5">
            Pengembangan Pasar Memerlukan Pendekatan Yang Terarah
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Pengembangan pasar tidak hanya bertujuan menambah jumlah outlet,
            tetapi juga memastikan setiap wilayah, segmen pelanggan, serta
            potensi distribusi dikembangkan melalui pendekatan yang sesuai
            sehingga pertumbuhan dapat berlangsung secara berkelanjutan.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-5 py-8 ${
                index !== reasons.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50/70 p-7 lg:p-9">
          <h3 className="text-xl font-semibold text-slate-900">
            Kesimpulan
          </h3>

          <p className="mt-4 leading-8 text-slate-700">
            Strategi pengembangan pasar disusun untuk membangun jaringan
            distribusi yang lebih kuat melalui pemetaan wilayah, pengembangan
            outlet, peningkatan kerja sama dengan institusi dan komunitas,
            serta pemanfaatan sumber daya secara lebih terarah sehingga
            penetrasi pasar di Kabupaten Kediri, Kota Kediri, dan Kabupaten
            Nganjuk dapat berkembang secara optimal.
          </p>
        </div>
      </Container>
    </Section>
  );
}