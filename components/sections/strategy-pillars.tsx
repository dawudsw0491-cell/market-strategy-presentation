import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const pillars = [
  {
    icon: "🗺️",
    title: "Analisis Wilayah",
    focus: "Memahami potensi setiap wilayah.",
    result:
      "Prioritas wilayah menjadi lebih objektif dan mudah dipertanggungjawabkan.",
  },
  {
    icon: "🏪",
    title: "Pengembangan Outlet",
    focus: "Meningkatkan kualitas dan jangkauan outlet.",
    result:
      "Pelayanan lebih merata dan peluang pasar semakin luas.",
  },
  {
    icon: "🏫",
    title: "Pengembangan Institusi",
    focus: "Membangun kerja sama dengan berbagai institusi.",
    result:
      "Terbentuk hubungan jangka panjang yang lebih stabil.",
  },
  {
    icon: "🤝",
    title: "Pengembangan Komunitas",
    focus: "Membangun hubungan dengan komunitas lokal.",
    result:
      "Meningkatkan kepercayaan dan memperluas jaringan pasar.",
  },
  {
    icon: "🎯",
    title: "Program Event",
    focus: "Meningkatkan interaksi langsung dengan calon pelanggan.",
    result:
      "Brand semakin dikenal dan peluang penjualan meningkat.",
  },
];

function PillarCard({
  icon,
  title,
  focus,
  result,
}: (typeof pillars)[number]) {
  return (
    <Card className="h-full">
      <div className="mb-5 text-4xl">{icon}</div>

      <h3 className="mb-5 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Fokus
          </p>

          <p className="mt-2 leading-7 text-slate-600">
            {focus}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Hasil yang Diharapkan
          </p>

          <p className="mt-2 leading-7 text-slate-600">
            {result}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default function StrategyPillars() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Lima Pilar Strategi
          </span>

          <h2 className="mt-5">
            Seluruh Strategi Berpusat Pada Lima Pilar Utama
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kelima pilar saling mendukung sehingga strategi yang disusun
            tidak hanya berorientasi pada peningkatan penjualan, tetapi juga
            pada pertumbuhan pasar yang berkelanjutan.
          </p>
        </div>

        {/* Desktop & Laptop */}
        <div className="hidden xl:block">
          <div className="flex justify-center gap-8">
            {pillars.slice(0, 3).map((pillar) => (
              <div key={pillar.title} className="w-full max-w-sm">
                <PillarCard {...pillar} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-8">
            {pillars.slice(3).map((pillar) => (
              <div key={pillar.title} className="w-full max-w-sm">
                <PillarCard {...pillar} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile */}
        <div className="space-y-8 xl:hidden">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              {...pillar}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}