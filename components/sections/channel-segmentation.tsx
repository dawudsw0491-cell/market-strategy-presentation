import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  {
    name: "Kelontong",
    frequency: "Tinggi",
    volume: "Sedang",
    repeat: "Tinggi",
    priority: 5,
    strategy: "Perluasan outlet dan peningkatan distribusi produk fast moving.",
  },
  {
    name: "Grosir",
    frequency: "Sedang",
    volume: "Sangat Tinggi",
    repeat: "Tinggi",
    priority: 5,
    strategy: "Fokus pada volume penjualan dan distribusi lintas wilayah.",
  },
  {
    name: "Bakery",
    frequency: "Tinggi",
    volume: "Sedang",
    repeat: "Tinggi",
    priority: 4,
    strategy: "Pengembangan produk bakery, dairy, dan bahan pendukung.",
  },
  {
    name: "Horeca",
    frequency: "Sedang",
    volume: "Tinggi",
    repeat: "Tinggi",
    priority: 4,
    strategy: "Memperkuat kerja sama dengan hotel, restoran, café, dan catering.",
  },
  {
    name: "Institusi",
    frequency: "Rendah",
    volume: "Sangat Tinggi",
    repeat: "Tinggi",
    priority: 5,
    strategy: "Kerja sama jangka panjang dengan sekolah, rumah sakit, dan instansi.",
  },
  {
    name: "UMKM",
    frequency: "Sedang",
    volume: "Sedang",
    repeat: "Sedang",
    priority: 3,
    strategy: "Mendukung pertumbuhan outlet baru pada wilayah berkembang.",
  },
];

function Stars(value: number) {
  return "★★★★★".slice(0, value);
}

export default function ChannelSegmentation() {
  return (
    <Section background="gradient">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Channel Segmentation
          </span>

          <h2 className="mt-6">
            Business Channel Analysis
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap channel memiliki karakteristik yang berbeda sehingga
            pendekatan distribusi, aktivitas penjualan, dan prioritas
            pengembangan disesuaikan dengan potensi masing-masing.
          </p>
        </div>

        <div className="overflow-auto rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-sm uppercase tracking-wide text-slate-500">
                <th>Channel</th>
                <th>Frekuensi</th>
                <th>Volume</th>
                <th>Repeat</th>
                <th>Prioritas</th>
              </tr>
            </thead>

            <tbody>
              {channels.map((channel) => (
                <tr
                  key={channel.name}
                  className="rounded-2xl bg-slate-50"
                >
                  <td className="rounded-l-2xl px-5 py-5 font-semibold text-slate-900">
                    {channel.name}
                  </td>

                  <td className="px-5 py-5 text-slate-600">
                    {channel.frequency}
                  </td>

                  <td className="px-5 py-5 text-slate-600">
                    {channel.volume}
                  </td>

                  <td className="px-5 py-5 text-slate-600">
                    {channel.repeat}
                  </td>

                  <td className="rounded-r-2xl px-5 py-5 font-semibold text-amber-500">
                    {Stars(channel.priority)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {channel.name}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {channel.strategy}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Executive Insight
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Channel Kelontong, Grosir, dan Institusi menjadi prioritas utama
            karena memiliki peluang distribusi yang besar serta mampu
            menghasilkan hubungan bisnis jangka panjang. Bakery dan Horeca
            berperan sebagai channel pendukung dengan potensi repeat order
            tinggi, sedangkan UMKM menjadi target pengembangan pada wilayah
            ekspansi.
          </p>
        </div>
      </Container>
    </Section>
  );
}