import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const areas = [
  {
    area: "Kabupaten Kediri",
    priority: "Prioritas Utama",
    characteristics:
      "Menjadi wilayah utama pengembangan karena memiliki cakupan pasar yang luas, aktivitas perdagangan yang terus berkembang, serta peluang distribusi yang tinggi pada berbagai segmen pelanggan.",
    focus: [
      "Memperluas outlet tradisional dan semi grosir.",
      "Meningkatkan distribusi pada kecamatan dengan potensi pertumbuhan.",
      "Mengembangkan kerja sama dengan sekolah, pondok pesantren, dan instansi pemerintah.",
      "Mengaktifkan komunitas UMKM dan pelaku usaha lokal sebagai mitra pengembangan pasar.",
    ],
  },
  {
    area: "Kota Kediri",
    priority: "Prioritas Penguatan",
    characteristics:
      "Berfungsi sebagai pusat perdagangan, jasa, pendidikan, dan layanan kesehatan sehingga menjadi wilayah strategis untuk meningkatkan produktivitas distribusi yang telah berjalan.",
    focus: [
      "Meningkatkan produktivitas outlet dengan performa terbaik.",
      "Mengembangkan channel bakery, horeca, dan modern trade.",
      "Memperkuat kerja sama dengan perguruan tinggi, rumah sakit, dan perusahaan.",
      "Mendukung aktivitas promosi pada pusat perdagangan dan kawasan bisnis.",
    ],
  },
  {
    area: "Kabupaten Nganjuk",
    priority: "Prioritas Ekspansi",
    characteristics:
      "Menjadi wilayah pengembangan lanjutan melalui perluasan jaringan distribusi secara bertahap berdasarkan potensi pertumbuhan dan efektivitas operasional.",
    focus: [
      "Membuka outlet baru pada area yang belum terjangkau.",
      "Memperluas jaringan distribusi ke wilayah potensial.",
      "Mengembangkan kerja sama dengan institusi dan komunitas lokal.",
      "Meningkatkan pemerataan distribusi secara berkelanjutan.",
    ],
  },
];

const priorities = [
  "Potensi pertumbuhan wilayah.",
  "Kepadatan aktivitas perdagangan.",
  "Kemudahan akses distribusi.",
  "Peluang pengembangan outlet.",
  "Potensi kerja sama institusi.",
  "Keberadaan komunitas dan pelaku UMKM.",
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
            Prioritas Pengembangan Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Pengembangan pasar difokuskan pada wilayah yang memiliki potensi
            distribusi, aktivitas ekonomi, dan peluang pertumbuhan yang paling
            besar sehingga sumber daya perusahaan dapat dimanfaatkan secara
            lebih efektif.
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
                  {area.focus.map((item) => (
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
            Dasar Penentuan Prioritas
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Prioritas wilayah ditentukan berdasarkan kombinasi beberapa faktor
            utama sehingga pengembangan pasar tidak hanya mempertimbangkan luas
            wilayah, tetapi juga peluang pertumbuhan bisnis dan efektivitas
            distribusi.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priorities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/70 bg-white/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}