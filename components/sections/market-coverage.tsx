import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const areas = [
  {
    area: "Kabupaten Kediri",
    priority: "Prioritas Utama",
    focus: [
      "Perluasan outlet.",
      "Penguatan distribusi.",
      "Kerja sama institusi.",
      "Pengembangan komunitas.",
    ],
    reason: [
      "Aktivitas ekonomi relatif tinggi.",
      "Distribusi lebih mudah dijangkau.",
      "Potensi pertumbuhan pasar masih besar.",
    ],
  },
  {
    area: "Kota Kediri",
    priority: "Penguatan",
    focus: [
      "Optimalisasi outlet.",
      "Peningkatan pelayanan.",
      "Pengembangan pelanggan existing.",
    ],
    reason: [
      "Jaringan telah tersedia.",
      "Lebih efektif meningkatkan produktivitas daripada ekspansi.",
      "Mendukung distribusi wilayah sekitar.",
    ],
  },
  {
    area: "Kabupaten Nganjuk",
    priority: "Pengembangan Bertahap",
    focus: [
      "Identifikasi outlet baru.",
      "Pengembangan institusi.",
      "Perluasan distribusi.",
    ],
    reason: [
      "Masih tersedia peluang pengembangan.",
      "Perlu validasi pasar secara bertahap.",
      "Dilaksanakan sesuai kesiapan perusahaan.",
    ],
  },
];

export default function MarketCoverage() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Cakupan Wilayah
          </span>

          <h2 className="mt-6">
            Fokus Pengembangan Setiap Wilayah
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap wilayah memiliki karakteristik yang berbeda sehingga
            fokus pengembangannya juga disesuaikan dengan kondisi pasar,
            jaringan distribusi, dan peluang yang tersedia.
          </p>

        </div>

        <div className="grid gap-8 xl:grid-cols-3">

          {areas.map((item) => (

            <div
              key={item.area}
              className="card p-8"
            >

              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {item.priority}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.area}
              </h3>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Fokus Pengembangan
                </h4>

                <ul className="mt-4 space-y-3">

                  {item.focus.map((focus) => (

                    <li
                      key={focus}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                      <span className="leading-7 text-slate-600">
                        {focus}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Pertimbangan
                </h4>

                <ul className="mt-4 space-y-3">

                  {item.reason.map((reason) => (

                    <li
                      key={reason}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-400" />

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
            Arah Pengembangan Wilayah
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Kabupaten Kediri menjadi fokus utama pengembangan pasar.
            Kota Kediri diarahkan untuk meningkatkan produktivitas jaringan
            yang telah berjalan, sedangkan Kabupaten Nganjuk dikembangkan
            secara bertahap berdasarkan hasil evaluasi dan kesiapan
            implementasi.
          </p>

        </div>

      </Container>
    </Section>
  );
}