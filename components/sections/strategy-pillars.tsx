import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const pillars = [
  {
    icon: "🗺️",
    title: "Analisis Wilayah",
    focus: "Memahami potensi setiap wilayah.",
    result: "Prioritas wilayah menjadi lebih objektif dan mudah dipertanggungjawabkan.",
  },
  {
    icon: "🏪",
    title: "Pengembangan Outlet",
    focus: "Meningkatkan kualitas dan jangkauan outlet.",
    result: "Pelayanan lebih merata dan peluang pasar semakin luas.",
  },
  {
    icon: "🏫",
    title: "Pengembangan Institusi",
    focus: "Membangun kerja sama dengan berbagai institusi.",
    result: "Terbentuk hubungan jangka panjang yang lebih stabil.",
  },
  {
    icon: "🤝",
    title: "Pengembangan Komunitas",
    focus: "Membangun hubungan dengan komunitas lokal.",
    result: "Meningkatkan kepercayaan dan memperluas jaringan pasar.",
  },
  {
    icon: "🎯",
    title: "Program Event",
    focus: "Meningkatkan interaksi langsung dengan calon pelanggan.",
    result: "Brand semakin dikenal dan peluang penjualan meningkat.",
  },
];

export default function StrategyPillars() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Lima Pilar Strategi
          </span>

          <h2 className="mt-6">
            Seluruh Strategi Berpusat Pada Lima Pilar Utama
          </h2>

          <p className="mt-8 text-lg text-slate-600">
            Kelima pilar ini saling mendukung sehingga strategi tidak hanya
            berorientasi pada penjualan, tetapi juga pada perluasan jaringan,
            peningkatan hubungan dengan pelanggan, dan pertumbuhan yang
            berkelanjutan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="h-full"
            >
              <div className="mb-6 text-5xl">
                {pillar.icon}
              </div>

              <h3 className="mb-5 text-2xl font-bold text-slate-900">
                {pillar.title}
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    Fokus
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {pillar.focus}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                    Hasil Yang Diharapkan
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {pillar.result}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}