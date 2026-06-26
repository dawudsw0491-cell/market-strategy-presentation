import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const institutions = [
  {
    name: "Sekolah",
    priority: "Sangat Tinggi",
    score: 95,
    opportunity:
      "Program edukasi, kantin, koperasi sekolah, sponsorship, dan kegiatan siswa.",
    strategy:
      "Pendekatan kepada kepala sekolah, yayasan, serta koperasi untuk membangun kerja sama berkelanjutan.",
  },
  {
    name: "Perguruan Tinggi",
    priority: "Tinggi",
    score: 88,
    opportunity:
      "Unit bisnis kampus, koperasi mahasiswa, event akademik, dan organisasi mahasiswa.",
    strategy:
      "Kolaborasi dengan biro kemahasiswaan, UKM, dan koperasi kampus.",
  },
  {
    name: "Rumah Sakit",
    priority: "Sangat Tinggi",
    score: 91,
    opportunity:
      "Kantin, minimarket internal, instalasi gizi, serta kebutuhan operasional.",
    strategy:
      "Pendekatan kepada bagian pengadaan dan unit usaha rumah sakit.",
  },
  {
    name: "Instansi Pemerintah",
    priority: "Tinggi",
    score: 86,
    opportunity:
      "Koperasi pegawai, kegiatan resmi, pelatihan, seminar, dan pengadaan.",
    strategy:
      "Membangun hubungan dengan bagian umum, koperasi, dan sekretariat.",
  },
  {
    name: "Perusahaan Swasta",
    priority: "Tinggi",
    score: 84,
    opportunity:
      "Kantin karyawan, pantry, event internal, dan kebutuhan operasional.",
    strategy:
      "Pendekatan kepada HRGA, Procurement, dan General Affair.",
  },
  {
    name: "Pesantren & Lembaga Keagamaan",
    priority: "Menengah",
    score: 80,
    opportunity:
      "Koperasi, kantin, kegiatan santri, dan acara keagamaan.",
    strategy:
      "Membangun hubungan dengan pengurus yayasan dan koperasi pondok.",
  },
];

function ScoreBar({ value }: { value: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm text-slate-600">
          Opportunity Score
        </span>

        <span className="font-semibold text-slate-900">
          {value}
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

export default function InstitutionPriority() {
  return (
    <Section background="white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Institution Opportunity
          </span>

          <h2 className="mt-6">
            Prioritas Pengembangan Institusi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Institusi dipilih berdasarkan peluang kerja sama jangka panjang,
            potensi distribusi, serta kemampuan menghasilkan transaksi yang
            berkelanjutan.
          </p>

        </div>

        <div className="grid gap-8 xl:grid-cols-2">

          {institutions.map((institution) => (

            <div
              key={institution.name}
              className="card p-8"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {institution.name}
                  </h3>

                  <div className="mt-3 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {institution.priority}
                  </div>

                </div>

                <div className="text-4xl">
                  🏢
                </div>

              </div>

              <div className="mt-8">
                <ScoreBar value={institution.score} />
              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Peluang
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {institution.opportunity}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Strategi Pendekatan
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {institution.strategy}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-14 rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Executive Insight
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Sekolah, rumah sakit, perguruan tinggi, instansi pemerintah,
            dan perusahaan merupakan target utama karena memiliki aktivitas
            operasional yang berkelanjutan. Pendekatan pada institusi ini
            diharapkan mampu menciptakan hubungan bisnis jangka panjang,
            meningkatkan stabilitas distribusi, serta memperkuat penetrasi
            pasar di Kabupaten Kediri, Kota Kediri, dan Kabupaten Nganjuk.
          </p>

        </div>

      </Container>
    </Section>
  );
}