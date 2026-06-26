import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const institutions = [
  {
    title: "Sekolah",
    opportunity:
      "Memiliki kebutuhan operasional yang berlangsung sepanjang tahun ajaran.",
    focus: [
      "Kantin sekolah",
      "Koperasi sekolah",
      "Kegiatan pendidikan",
      "Program promosi edukatif",
    ],
  },
  {
    title: "Pondok Pesantren",
    opportunity:
      "Memiliki komunitas yang besar dengan kebutuhan distribusi yang berulang.",
    focus: [
      "Koperasi pesantren",
      "Kebutuhan santri",
      "Kegiatan pesantren",
      "Distribusi harian",
    ],
  },
  {
    title: "Perguruan Tinggi",
    opportunity:
      "Menjadi pusat aktivitas mahasiswa dengan peluang kerja sama yang luas.",
    focus: [
      "Kantin kampus",
      "Koperasi mahasiswa",
      "Event kampus",
      "Organisasi mahasiswa",
    ],
  },
  {
    title: "Rumah Sakit & Klinik",
    opportunity:
      "Memiliki kebutuhan operasional yang stabil dan berkesinambungan.",
    focus: [
      "Kantin",
      "Pantry",
      "Kegiatan internal",
      "Distribusi operasional",
    ],
  },
  {
    title: "Instansi Pemerintah",
    opportunity:
      "Mendukung kebutuhan kegiatan pemerintahan serta pelayanan masyarakat.",
    focus: [
      "Kegiatan resmi",
      "Operasional kantor",
      "Program daerah",
      "Kemitraan distribusi",
    ],
  },
  {
    title: "Perusahaan",
    opportunity:
      "Berpotensi menghasilkan kerja sama distribusi dalam jangka panjang.",
    focus: [
      "Pantry perusahaan",
      "Program karyawan",
      "Corporate event",
      "Kebutuhan operasional",
    ],
  },
];

export default function InstitutionPriority() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Prioritas Institusi
          </span>

          <h2 className="mt-6">
            Institusi Dengan Potensi Pengembangan Jangka Panjang
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Institusi menjadi salah satu jalur distribusi yang mampu memberikan
            stabilitas permintaan sekaligus memperluas hubungan bisnis secara
            berkelanjutan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {institutions.map((item) => (
            <Card
              key={item.title}
              className="h-full"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.opportunity}
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Fokus Pengembangan
                </p>

                <ul className="mt-4 space-y-2">
                  {item.focus.map((focus) => (
                    <li
                      key={focus}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                      <span className="leading-7 text-slate-600">
                        {focus}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Arah Pengembangan
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Pengembangan institusi diarahkan untuk membangun hubungan jangka
            panjang yang mampu mendukung kestabilan distribusi, memperluas
            jaringan pelanggan, serta meningkatkan kehadiran perusahaan pada
            berbagai sektor aktivitas masyarakat.
          </p>
        </div>
      </Container>
    </Section>
  );
}