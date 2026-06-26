import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const matrix = [
  {
    title: "Kabupaten Kediri",
    priority: "Prioritas 1",
    x: "Potensi Tinggi",
    y: "Implementasi Tinggi",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Kota Kediri",
    priority: "Prioritas 2",
    x: "Potensi Tinggi",
    y: "Implementasi Sedang",
    color: "from-blue-500 to-sky-600",
  },
  {
    title: "Kabupaten Nganjuk",
    priority: "Prioritas 3",
    x: "Potensi Menengah",
    y: "Implementasi Bertahap",
    color: "from-amber-500 to-orange-500",
  },
];

export default function MarketPriorityMatrix() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Market Priority Matrix
          </span>

          <h2 className="mt-6">
            Prioritas Pengembangan Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Prioritas wilayah ditentukan berdasarkan kombinasi potensi pasar,
            kesiapan distribusi, serta peluang pengembangan outlet dan
            institusi.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          <div className="mb-10 flex justify-center">
            <div className="text-lg font-semibold text-slate-700">
              Potensi Pasar
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
              <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Kuadran Prioritas Utama
              </div>

              <div className="mt-5 rounded-2xl bg-white p-6">
                <div className="text-2xl font-bold text-slate-900">
                  Kabupaten Kediri
                </div>

                <p className="mt-4 leading-8 text-slate-600">
                  Fokus utama pengembangan outlet, institusi, komunitas,
                  distribusi, dan perluasan coverage.
                </p>
              </div>
            </div>

            <div className="space-y-6">

              {matrix.slice(1).map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div
                    className={`inline-flex rounded-full bg-gradient-to-r ${item.color} px-4 py-2 text-sm font-semibold text-white`}
                  >
                    {item.priority}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-slate-600">

                    <p>
                      Potensi Pasar :
                      {" "}
                      {item.x}
                    </p>

                    <p>
                      Fokus Implementasi :
                      {" "}
                      {item.y}
                    </p>

                  </div>
                </div>
              ))}

            </div>

          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8">

            <h3 className="text-xl font-semibold text-slate-900">
              Interpretasi Matrix
            </h3>

            <p className="mt-5 leading-8 text-slate-700">
              Kabupaten Kediri menjadi fokus utama karena memiliki kombinasi
              potensi pasar, aktivitas perdagangan, dan peluang distribusi
              yang paling besar. Kota Kediri diarahkan sebagai wilayah
              penguatan produktivitas, sedangkan Kabupaten Nganjuk menjadi
              area ekspansi yang dikembangkan secara bertahap.
            </p>

          </div>

        </div>
      </Container>
    </Section>
  );
}