import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const drivers = [
  {
    title: "Potensi Pasar",
    icon: "📈",
    description:
      "Pertumbuhan wilayah dan aktivitas ekonomi membuka peluang perluasan distribusi serta pengembangan outlet baru.",
  },
  {
    title: "Jaringan Distribusi",
    icon: "🚚",
    description:
      "Distribusi yang efektif menjadi faktor utama dalam meningkatkan coverage dan ketersediaan produk.",
  },
  {
    title: "Institusi",
    icon: "🏢",
    description:
      "Kerja sama dengan institusi menciptakan hubungan bisnis jangka panjang dan pasar yang lebih stabil.",
  },
  {
    title: "Komunitas",
    icon: "🤝",
    description:
      "Komunitas membantu meningkatkan awareness, loyalitas pelanggan, dan penyebaran informasi secara organik.",
  },
];

export default function WhyThisStrategy() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Business Drivers
          </span>

          <h2 className="mt-6">
            Faktor Yang Mendorong Strategi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Strategi pengembangan pasar disusun berdasarkan faktor-faktor
            utama yang memberikan pengaruh terhadap pertumbuhan penjualan,
            perluasan distribusi, dan keberlanjutan bisnis.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {drivers.map((driver) => (

            <div
              key={driver.title}
              className="dashboard-card"
            >

              <div className="text-5xl">
                {driver.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {driver.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {driver.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Executive Insight
          </span>

          <h2 className="mt-6 text-white">
            Mengapa Strategi Ini Dipilih
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Kombinasi analisis wilayah, distribusi, outlet, institusi,
            dan komunitas memberikan dasar yang lebih objektif dalam
            menentukan prioritas pengembangan pasar. Pendekatan ini
            memungkinkan implementasi dilakukan secara bertahap dengan
            risiko yang lebih terkendali dan peluang keberhasilan yang
            lebih tinggi.
          </p>

        </div>

      </Container>
    </Section>
  );
}