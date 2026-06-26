import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const areas = [
  {
    area: "Kabupaten Kediri",
    priority: "Prioritas Utama",
    characteristics:
      "Menjadi fokus utama pengembangan karena memiliki kombinasi kawasan perdagangan, pasar tradisional, permukiman, sentra UMKM, serta pertumbuhan aktivitas ekonomi yang mendukung perluasan distribusi FMCG.",
    opportunities: [
      "Pengembangan outlet tradisional dan semi grosir",
      "Perluasan distribusi pada wilayah yang belum optimal",
      "Kerja sama dengan institusi pendidikan dan pemerintah",
      "Aktivasi komunitas UMKM dan pelaku usaha lokal",
    ],
  },
  {
    area: "Kota Kediri",
    priority: "Prioritas Penguatan",
    characteristics:
      "Berperan sebagai pusat aktivitas perdagangan, jasa, pendidikan, dan layanan kesehatan sehingga memiliki potensi tinggi untuk memperkuat distribusi pada outlet modern maupun institusi.",
    opportunities: [
      "Optimalisasi outlet dengan produktivitas tinggi",
      "Pengembangan kerja sama dengan horeca dan bakery",
      "Kemitraan dengan rumah sakit dan perguruan tinggi",
      "Program promosi pada pusat aktivitas masyarakat",
    ],
  },
  {
    area: "Kabupaten Nganjuk",
    priority: "Prioritas Ekspansi",
    characteristics:
      "Menjadi wilayah pengembangan lanjutan melalui perluasan jaringan distribusi, pembukaan outlet baru, serta penguatan hubungan dengan distributor dan mitra lokal.",
    opportunities: [
      "Pembukaan outlet pada area potensial",
      "Perluasan jaringan distribusi",
      "Pendekatan kepada institusi dan komunitas",
      "Peningkatan coverage wilayah secara bertahap",
    ],
  },
];

export default function AreaPriority() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Area Prioritas
          </span>

          <h2 className="mt-6">
            Wilayah Pengembangan Pasar
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Strategi pengembangan pasar difokuskan berdasarkan karakter wilayah,
            potensi distribusi, peluang pertumbuhan outlet, serta aktivitas
            ekonomi pada masing-masing area sehingga implementasi dapat berjalan
            lebih efektif dan terarah.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {areas.map((area) => (
            <Card
              key={area.area}
              className="h-full"
            >
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {area.priority}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {area.area}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {area.characteristics}
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Fokus Pengembangan
                </p>

                <ul className="mt-4 space-y-3">
                  {area.opportunities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                      <span className="leading-7 text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50/70 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Arah Pengembangan Wilayah
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Kabupaten Kediri menjadi pusat pengembangan utama, Kota Kediri
            berperan sebagai penguatan distribusi dan kerja sama institusi,
            sedangkan Kabupaten Nganjuk menjadi area ekspansi yang dikembangkan
            secara bertahap untuk memperluas jaringan distribusi perusahaan.
          </p>
        </div>
      </Container>
    </Section>
  );
}