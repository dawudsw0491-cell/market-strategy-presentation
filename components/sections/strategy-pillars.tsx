import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const pillars = [
  {
    icon: "🗺️",
    title: "Analisis Wilayah",
    focus:
      "Memetakan karakter wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk berdasarkan potensi pasar, persebaran outlet, aktivitas ekonomi, institusi, serta komunitas yang dapat menjadi sasaran pengembangan distribusi.",
    result:
      "Perusahaan memiliki dasar yang lebih jelas dalam menentukan wilayah prioritas sehingga pengembangan pasar dilakukan secara lebih terarah dan sesuai dengan potensi masing-masing area.",
  },
  {
    icon: "🏪",
    title: "Pengembangan Outlet",
    focus:
      "Mengembangkan outlet aktif, mengaktivasi outlet potensial, serta membuka outlet baru melalui pendekatan yang disesuaikan dengan karakter setiap segmen, seperti kelontong, grosir, semi grosir, bakery, horeca, dan pelaku UMKM.",
    result:
      "Jaringan distribusi menjadi lebih luas, hubungan dengan outlet semakin kuat, serta peluang peningkatan distribusi berbagai kategori produk FMCG dapat berkembang secara berkelanjutan.",
  },
  {
    icon: "🏫",
    title: "Pengembangan Institusi",
    focus:
      "Membangun kerja sama dengan sekolah, perguruan tinggi, pondok pesantren, rumah sakit, instansi pemerintah, perusahaan, dan lembaga lainnya melalui pendekatan yang sesuai dengan kebutuhan masing-masing institusi.",
    result:
      "Terbentuk hubungan kerja sama yang lebih stabil, memperluas peluang distribusi, serta menciptakan pasar jangka panjang di luar outlet perdagangan tradisional.",
  },
  {
    icon: "🤝",
    title: "Pengembangan Komunitas",
    focus:
      "Meningkatkan keterlibatan perusahaan bersama komunitas UMKM, komunitas kuliner, bakery, organisasi masyarakat, dan komunitas lokal sebagai bagian dari penguatan hubungan dengan pasar.",
    result:
      "Kepercayaan masyarakat meningkat, jaringan pemasaran berkembang lebih luas, serta tercipta peluang distribusi baru melalui hubungan yang berkelanjutan dengan komunitas.",
  },
  {
    icon: "🎯",
    title: "Program Aktivasi Pasar",
    focus:
      "Melaksanakan kegiatan promosi, edukasi produk, event, gathering pelanggan, serta aktivitas lapangan yang mendukung pengembangan outlet, institusi, dan komunitas sesuai karakter wilayah pengembangan.",
    result:
      "Kesadaran terhadap produk meningkat, hubungan dengan pelanggan menjadi lebih kuat, serta mendukung percepatan penetrasi pasar pada wilayah prioritas.",
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
      <div className="mb-5 text-4xl">
        {icon}
      </div>

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
            Hasil Yang Diharapkan
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
            Strategi Pengembangan Pasar Dibangun Melalui Lima Pilar Utama
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kelima pilar saling melengkapi untuk mendukung pengembangan pasar,
            memperkuat jaringan distribusi, meningkatkan kualitas hubungan
            dengan outlet dan institusi, serta memperluas penetrasi pasar di
            wilayah Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.
          </p>
        </div>

        {/* Desktop & Laptop */}
        <div className="hidden xl:block">
          <div className="flex justify-center gap-8">
            {pillars.slice(0, 3).map((pillar) => (
              <div
                key={pillar.title}
                className="w-full max-w-sm"
              >
                <PillarCard {...pillar} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-8">
            {pillars.slice(3).map((pillar) => (
              <div
                key={pillar.title}
                className="w-full max-w-sm"
              >
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