import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const pillars = [
  {
    icon: "🗺️",
    title: "Analisis Wilayah",
    description:
      "Menentukan wilayah prioritas berdasarkan karakteristik pasar, akses distribusi, kepadatan aktivitas ekonomi, dan peluang pertumbuhan.",
  },
  {
    icon: "🏪",
    title: "Pengembangan Outlet",
    description:
      "Menentukan outlet yang perlu dipertahankan, dikembangkan, atau diperluas berdasarkan kondisi lapangan dan potensi pasar di sekitarnya.",
  },
  {
    icon: "🏫",
    title: "Pengembangan Institusi",
    description:
      "Mengidentifikasi peluang kerja sama dengan sekolah, perguruan tinggi, instansi pemerintah, rumah sakit, dan perusahaan.",
  },
  {
    icon: "🤝",
    title: "Pengembangan Komunitas",
    description:
      "Membangun hubungan dengan komunitas lokal untuk memperluas jangkauan pasar melalui pendekatan yang lebih personal.",
  },
  {
    icon: "🎯",
    title: "Program Event",
    description:
      "Menggunakan kegiatan promosi dan edukasi sebagai media membangun kepercayaan serta meningkatkan peluang penjualan.",
  },
];

export default function StrategyPillars() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Lima Pilar Strategi
          </span>

          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Strategi Pengembangan Pasar Dibangun Dari Lima Pilar Utama
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            Kelima pilar saling melengkapi sehingga pengembangan pasar tidak
            hanya berfokus pada penjualan, tetapi juga pada perluasan jaringan,
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

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {pillar.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}