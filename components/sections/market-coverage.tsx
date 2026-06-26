import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const coverage = [
  {
    area: "Kabupaten Kediri",
    focus: "Prioritas Utama",
    color: "emerald",
    metrics: [
      { label: "Outlet", value: 92 },
      { label: "Institusi", value: 90 },
      { label: "Komunitas", value: 86 },
      { label: "Distribusi", value: 94 },
    ],
  },
  {
    area: "Kota Kediri",
    focus: "Penguatan",
    color: "blue",
    metrics: [
      { label: "Outlet", value: 86 },
      { label: "Institusi", value: 88 },
      { label: "Komunitas", value: 78 },
      { label: "Distribusi", value: 89 },
    ],
  },
  {
    area: "Kabupaten Nganjuk",
    focus: "Ekspansi",
    color: "amber",
    metrics: [
      { label: "Outlet", value: 71 },
      { label: "Institusi", value: 69 },
      { label: "Komunitas", value: 66 },
      { label: "Distribusi", value: 74 },
    ],
  },
];

function Progress({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const gradient =
    color === "emerald"
      ? "from-emerald-500 to-green-600"
      : color === "blue"
      ? "from-blue-600 to-sky-500"
      : "from-amber-500 to-orange-500";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          {label}
        </span>

        <span className="text-sm font-bold text-slate-900">
          {value}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${gradient}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function MarketCoverage() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Market Coverage
          </span>

          <h2 className="mt-6">
            Dashboard Coverage Pengembangan Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Coverage digunakan untuk melihat kesiapan setiap wilayah dalam
            mendukung pengembangan outlet, institusi, komunitas, dan
            distribusi secara berkelanjutan.
          </p>

        </div>

        <div className="grid gap-8 xl:grid-cols-3">

          {coverage.map((item) => (

            <div
              key={item.area}
              className="card p-8"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.area}
                  </h3>

                  <div className="mt-3 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {item.focus}
                  </div>

                </div>

                <div className="text-4xl">
                  📍
                </div>

              </div>

              <div className="mt-8 space-y-6">

                {item.metrics.map((metric) => (

                  <Progress
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    color={item.color}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>

        <div className="mt-14 rounded-3xl border border-sky-100 bg-sky-50 p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Executive Insight
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Kabupaten Kediri menjadi wilayah dengan tingkat kesiapan tertinggi
            sehingga difokuskan sebagai pusat pengembangan pasar. Kota Kediri
            diarahkan untuk meningkatkan produktivitas jaringan yang telah
            berjalan, sedangkan Kabupaten Nganjuk menjadi target perluasan
            coverage melalui pembukaan outlet baru dan pengembangan institusi
            secara bertahap.
          </p>

        </div>

      </Container>
    </Section>
  );
}