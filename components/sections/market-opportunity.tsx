import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const opportunities = [
  {
    area: "Kabupaten Kediri",
    priority: "Prioritas Utama",
    conclusion:
      "Wilayah utama pengembangan karena memiliki kombinasi potensi pasar, aktivitas perdagangan, peluang outlet, dan institusi yang paling kuat.",
    indicators: [
      {
        title: "Aktivitas Perdagangan",
        value: 95,
      },
      {
        title: "Potensi Outlet",
        value: 94,
      },
      {
        title: "Potensi Institusi",
        value: 92,
      },
      {
        title: "Komunitas",
        value: 88,
      },
    ],
  },
  {
    area: "Kota Kediri",
    priority: "Penguatan Distribusi",
    conclusion:
      "Difokuskan pada peningkatan produktivitas outlet, bakery, horeca, dan institusi yang telah berjalan.",
    indicators: [
      {
        title: "Aktivitas Ekonomi",
        value: 91,
      },
      {
        title: "Outlet Existing",
        value: 89,
      },
      {
        title: "Institusi",
        value: 90,
      },
      {
        title: "Persaingan",
        value: 82,
      },
    ],
  },
  {
    area: "Kabupaten Nganjuk",
    priority: "Ekspansi Bertahap",
    conclusion:
      "Menjadi wilayah ekspansi melalui pembukaan outlet baru dan perluasan jaringan distribusi secara bertahap.",
    indicators: [
      {
        title: "Coverage",
        value: 72,
      },
      {
        title: "Potensi Baru",
        value: 80,
      },
      {
        title: "Institusi",
        value: 68,
      },
      {
        title: "Komunitas",
        value: 70,
      },
    ],
  },
];

function Progress({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium text-slate-600">
          {title}
        </span>

        <span className="font-semibold text-slate-800">
          {value}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function MarketOpportunity() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Market Opportunity
          </span>

          <h2 className="mt-6">
            Analisis Peluang Pengembangan Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Prioritas wilayah ditentukan berdasarkan kombinasi aktivitas
            perdagangan, peluang outlet, institusi, komunitas, serta potensi
            pertumbuhan distribusi.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {opportunities.map((item) => (
            <Card
              key={item.area}
              className="h-full"
            >
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {item.priority}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {item.area}
              </h3>

              <div className="mt-8 space-y-6">
                {item.indicators.map((indicator) => (
                  <Progress
                    key={indicator.title}
                    title={indicator.title}
                    value={indicator.value}
                  />
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Kesimpulan
                </p>

                <p className="mt-3 leading-8 text-slate-600">
                  {item.conclusion}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}