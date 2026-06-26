import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const institutions = [
  {
    name: "Sekolah",
    priority: "Prioritas Utama",
    opportunity:
      "Koperasi sekolah, kantin, kegiatan siswa, dan program edukasi.",
    reason: [
      "Jumlah institusi relatif banyak.",
      "Kebutuhan produk bersifat berulang.",
      "Mudah dikembangkan menjadi kerja sama jangka panjang.",
    ],
  },
  {
    name: "Perguruan Tinggi",
    priority: "Prioritas Tinggi",
    opportunity:
      "Unit usaha kampus, koperasi mahasiswa, organisasi kemahasiswaan, dan kegiatan akademik.",
    reason: [
      "Memiliki aktivitas sepanjang tahun.",
      "Potensi kerja sama dengan berbagai unit.",
      "Meningkatkan eksposur merek.",
    ],
  },
  {
    name: "Rumah Sakit",
    priority: "Prioritas Tinggi",
    opportunity:
      "Kantin, minimarket internal, instalasi gizi, dan kebutuhan operasional.",
    reason: [
      "Operasional berlangsung setiap hari.",
      "Kebutuhan distribusi relatif stabil.",
      "Potensi hubungan jangka panjang.",
    ],
  },
  {
    name: "Instansi Pemerintah",
    priority: "Prioritas Tinggi",
    opportunity:
      "Koperasi pegawai, kegiatan resmi, pelatihan, dan pengadaan.",
    reason: [
      "Memiliki jaringan organisasi yang luas.",
      "Mendukung kegiatan promosi institusional.",
      "Meningkatkan kredibilitas perusahaan.",
    ],
  },
  {
    name: "Perusahaan Swasta",
    priority: "Prioritas Menengah",
    opportunity:
      "Kantin karyawan, pantry, dan kebutuhan operasional.",
    reason: [
      "Potensi pembelian berulang.",
      "Dapat dikembangkan menjadi pelanggan tetap.",
      "Mendukung perluasan distribusi.",
    ],
  },
  {
    name: "Pesantren",
    priority: "Pengembangan Bertahap",
    opportunity:
      "Koperasi pondok, kantin, dan kegiatan internal.",
    reason: [
      "Memerlukan pendekatan hubungan yang lebih intensif.",
      "Potensi berkembang dalam jangka panjang.",
      "Dapat diperluas secara bertahap.",
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
            Institusi Yang Menjadi Sasaran Pengembangan
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Prioritas ditentukan berdasarkan peluang kerja sama,
            kesinambungan kebutuhan, dan potensi hubungan bisnis
            jangka panjang, bukan berdasarkan skor atau indikator
            kuantitatif.
          </p>

        </div>

        <div className="grid gap-8 xl:grid-cols-2">

          {institutions.map((item) => (

            <div
              key={item.name}
              className="card p-8"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {item.priority}
                </span>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Peluang
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {item.opportunity}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Alasan Prioritas
                </h4>

                <ul className="mt-4 space-y-3">

                  {item.reason.map((reason) => (

                    <li
                      key={reason}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                      <span className="leading-7 text-slate-600">
                        {reason}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 executive-box">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            Kesimpulan
          </span>

          <h2 className="mt-6 text-white">
            Arah Pengembangan Institusi
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Pengembangan institusi diarahkan pada organisasi yang memiliki
            aktivitas berkelanjutan sehingga mampu menciptakan hubungan
            kerja sama jangka panjang dan mendukung pertumbuhan distribusi
            perusahaan secara konsisten.
          </p>

        </div>

      </Container>
    </Section>
  );
}