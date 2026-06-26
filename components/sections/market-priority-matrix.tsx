import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const areas = [
  {
    title: "Kabupaten Kediri",
    priority: "Prioritas Utama",
    score: 92,
    left: "68%",
    top: "18%",
    color: "bg-emerald-500",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    description:
      "Fokus pengembangan outlet, institusi, komunitas, dan perluasan distribusi.",
  },
  {
    title: "Kota Kediri",
    priority: "Penguatan",
    score: 84,
    left: "22%",
    top: "28%",
    color: "bg-blue-500",
    border: "border-blue-200",
    bg: "bg-blue-50",
    description:
      "Optimalisasi outlet existing, bakery, horeca, dan peningkatan produktivitas.",
  },
  {
    title: "Kabupaten Nganjuk",
    priority: "Ekspansi Bertahap",
    score: 71,
    left: "62%",
    top: "72%",
    color: "bg-amber-500",
    border: "border-amber-200",
    bg: "bg-amber-50",
    description:
      "Pengembangan coverage melalui pembukaan outlet dan institusi baru.",
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
            Matriks Prioritas Pengembangan Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Prioritas wilayah ditentukan berdasarkan kombinasi potensi pasar,
            kesiapan implementasi, akses distribusi, peluang outlet,
            institusi, dan aktivitas ekonomi.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          {/* Axis */}
          <div className="relative mx-auto h-[620px] max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">

            <div className="absolute left-1/2 top-0 h-full w-px bg-slate-300" />

            <div className="absolute left-0 top-1/2 h-px w-full bg-slate-300" />

            <div className="absolute left-1/2 top-4 -translate-x-1/2 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Potensi Pasar Tinggi
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Potensi Pasar Rendah
            </div>

            <div className="absolute left-5 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Implementasi Mudah
            </div>

            <div className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Implementasi Sulit
            </div>

            {/* Quadrant */}

            <div className="absolute left-[8%] top-[8%] rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Penguatan
            </div>

            <div className="absolute right-[8%] top-[8%] rounded-xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Prioritas Utama
            </div>

            <div className="absolute left-[8%] bottom-[8%] rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Monitoring
            </div>

            <div className="absolute right-[8%] bottom-[8%] rounded-xl bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Ekspansi Bertahap
            </div>

            {areas.map((area) => (
              <div
                key={area.title}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: area.left,
                  top: area.top,
                }}
              >
                <div
                  className={`w-72 rounded-3xl border ${area.border} ${area.bg} p-5 shadow-lg`}
                >
                  <div className="flex items-center gap-3">

                    <div
                      className={`h-5 w-5 rounded-full ${area.color}`}
                    />

                    <div className="text-lg font-bold text-slate-900">
                      {area.title}
                    </div>

                  </div>

                  <div className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                    {area.priority}
                  </div>

                  <div className="mt-5">

                    <div className="mb-2 flex justify-between">

                      <span className="font-medium text-slate-600">
                        Priority Score
                      </span>

                      <span className="font-bold text-slate-900">
                        {area.score}
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-white">

                      <div
                        className={`h-3 rounded-full ${area.color}`}
                        style={{
                          width: `${area.score}%`,
                        }}
                      />

                    </div>

                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {area.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">

              <h3 className="text-xl font-bold text-slate-900">
                Prioritas Utama
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Kabupaten Kediri menjadi pusat pengembangan karena memiliki
                kombinasi peluang distribusi, outlet, institusi, dan aktivitas
                perdagangan yang paling tinggi.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">

              <h3 className="text-xl font-bold text-slate-900">
                Penguatan
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Kota Kediri difokuskan pada peningkatan produktivitas jaringan
                yang telah berjalan melalui optimalisasi outlet dan channel.
              </p>

            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">

              <h3 className="text-xl font-bold text-slate-900">
                Ekspansi
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Kabupaten Nganjuk menjadi wilayah ekspansi melalui pembukaan
                outlet baru, kerja sama institusi, dan perluasan coverage.
              </p>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}