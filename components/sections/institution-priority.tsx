import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const institutions = [
  {
    title: "Sekolah",
    focus: "Kebutuhan operasional sekolah serta aktivitas pendukung pembelajaran.",
  },
  {
    title: "Pondok Pesantren",
    focus: "Distribusi produk untuk kebutuhan santri, koperasi, dan kegiatan harian.",
  },
  {
    title: "Perguruan Tinggi",
    focus: "Pengembangan kerja sama melalui kantin, koperasi, dan kegiatan mahasiswa.",
  },
  {
    title: "Rumah Sakit & Klinik",
    focus: "Kebutuhan operasional, kantin, serta area pelayanan kesehatan.",
  },
  {
    title: "Instansi Pemerintah",
    focus: "Mendukung kebutuhan kegiatan pemerintahan dan aktivitas pelayanan publik.",
  },
  {
    title: "Perusahaan",
    focus: "Kerja sama distribusi untuk operasional, pantry, maupun program perusahaan.",
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
            Institusi Dengan Potensi Pengembangan
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Institusi menjadi salah satu jalur distribusi yang mampu membangun
            hubungan jangka panjang dan memberikan stabilitas terhadap
            pertumbuhan pasar.
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
                {item.focus}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}