import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const coverage = [
  {
    area: "Kabupaten Kediri",
    level: "Prioritas Utama",
    color: "bg-emerald-500",
    outlet: 95,
    institution: 90,
    community: 88,
    expansion: 92,
  },
  {
    area: "Kota Kediri",
    level: "Penguatan Distribusi",
    color: "bg-blue-500",
    outlet: 82,
    institution: 90,
    community: 75,
    expansion: 78,
  },
  {
    area: "Kabupaten Nganjuk",
    level: "Ekspansi Bertahap",
    color: "bg-amber-500",
    outlet: 68,
    institution: 62,
    community: 66,
    expansion: 74,
  },
];

function Progress({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          {label}
        </span>

        <span className="text-sm font-semibold text-slate-800">
          {value}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
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
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Market Coverage
          </span>

          <h2 className="mt-6">
            Fokus Pengembangan Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap wilayah memiliki fokus pengembangan yang berbeda sesuai
            tingkat potensi pasar, kesiapan distribusi, dan peluang
            pertumbuhan.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {coverage.map((item) => (
            <div
              key={item.area}
              className="card p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.area}
                </h3>

                <div
                  className={`h-4 w-4 rounded-full ${item.color}`}
                />
              </div>

              <p className="mt-3 font-medium text-blue-700">
                {item.level}
              </p>

              <div className="mt-8 space-y-6">
                <Progress
                  label="Pengembangan Outlet"
                  value={item.outlet}
                />

                <Progress
                  label="Institusi"
                  value={item.institution}
                />

                <Progress
                  label="Komunitas"
                  value={item.community}
                />

                <Progress
                  label="Peluang Ekspansi"
                  value={item.expansion}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50/70 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Ringkasan Coverage
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Kabupaten Kediri menjadi fokus utama pengembangan karena memiliki
            peluang distribusi paling besar. Kota Kediri diarahkan untuk
            meningkatkan produktivitas jaringan yang telah berjalan, sedangkan
            Kabupaten Nganjuk menjadi wilayah ekspansi yang dikembangkan secara
            bertahap agar pertumbuhan distribusi berlangsung lebih efektif.
          </p>
        </div>
      </Container>
    </Section>
  );
}