import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const channels = [
  "Kelontong",
  "Grosir",
  "Bakery",
  "Horeca",
  "Institusi",
];

const products = [
  {
    name: "Daily Needs",
    suitability: [
      "Sangat Sesuai",
      "Sangat Sesuai",
      "Pendukung",
      "Pendukung",
      "Sesuai",
    ],
  },
  {
    name: "Snack",
    suitability: [
      "Sangat Sesuai",
      "Sesuai",
      "Pendukung",
      "Pendukung",
      "Pendukung",
    ],
  },
  {
    name: "Minuman",
    suitability: [
      "Sangat Sesuai",
      "Sangat Sesuai",
      "Sesuai",
      "Sesuai",
      "Sesuai",
    ],
  },
  {
    name: "Bahan Bakery",
    suitability: [
      "Pendukung",
      "Sesuai",
      "Sangat Sesuai",
      "Sesuai",
      "Pendukung",
    ],
  },
  {
    name: "Produk Food Service",
    suitability: [
      "Pendukung",
      "Pendukung",
      "Sesuai",
      "Sangat Sesuai",
      "Sesuai",
    ],
  },
  {
    name: "Produk Volume Besar",
    suitability: [
      "Pendukung",
      "Sangat Sesuai",
      "Sesuai",
      "Sangat Sesuai",
      "Sesuai",
    ],
  },
];

function Badge({
  value,
}: {
  value: string;
}) {
  const style =
    value === "Sangat Sesuai"
      ? "bg-emerald-100 text-emerald-700"
      : value === "Sesuai"
      ? "bg-blue-100 text-blue-700"
      : "bg-slate-100 text-slate-600";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style}`}
    >
      {value}
    </span>
  );
}

export default function ProductPotential() {
  return (
    <Section background="white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Potensi Produk
          </span>

          <h2 className="mt-6">
            Kesesuaian Produk Dengan Saluran Distribusi
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Matriks ini digunakan untuk menunjukkan kecenderungan
            kesesuaian setiap kelompok produk terhadap saluran distribusi.
            Klasifikasi ini merupakan dasar penyusunan strategi dan bukan
            ukuran kuantitatif penjualan.
          </p>

        </div>

        <div className="overflow-auto rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          <table className="table-modern min-w-full">

            <thead>

              <tr>

                <th className="text-left">
                  Kelompok Produk
                </th>

                {channels.map((channel) => (

                  <th
                    key={channel}
                    className="text-center"
                  >
                    {channel}
                  </th>

                ))}

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (

                <tr key={product.name}>

                  <td className="font-semibold text-slate-900">
                    {product.name}
                  </td>

                  {product.suitability.map((value) => (

                    <td
                      key={`${product.name}-${value}`}
                      className="text-center"
                    >
                      <Badge value={value} />
                    </td>

                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          <div className="card p-6">

            <h3 className="text-lg font-semibold text-slate-900">
              Sangat Sesuai
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Produk yang menjadi fokus utama pada saluran distribusi
              tersebut karena memiliki karakteristik pelanggan yang paling
              sesuai.
            </p>

          </div>

          <div className="card p-6">

            <h3 className="text-lg font-semibold text-slate-900">
              Sesuai
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Produk layak dipasarkan sebagai bagian dari pengembangan
              distribusi sesuai kebutuhan masing-masing channel.
            </p>

          </div>

          <div className="card p-6">

            <h3 className="text-lg font-semibold text-slate-900">
              Pendukung
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Produk bersifat pelengkap dan dapat dikembangkan apabila
              terdapat peluang pada wilayah atau pelanggan tertentu.
            </p>

          </div>

        </div>

      </Container>
    </Section>
  );
}