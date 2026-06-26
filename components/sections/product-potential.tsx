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
    values: [5, 5, 2, 2, 3],
  },
  {
    name: "Snack",
    values: [5, 4, 2, 3, 2],
  },
  {
    name: "Beverage",
    values: [5, 5, 3, 4, 4],
  },
  {
    name: "Bakery Ingredients",
    values: [1, 3, 5, 4, 1],
  },
  {
    name: "Food Service",
    values: [1, 2, 3, 5, 4],
  },
  {
    name: "Bulk Product",
    values: [2, 5, 4, 5, 4],
  },
];

function Cell({ value }: { value: number }) {
  const colors = [
    "bg-slate-100",
    "bg-sky-100",
    "bg-sky-200",
    "bg-cyan-300",
    "bg-blue-500",
    "bg-emerald-500",
  ];

  return (
    <div
      className={`flex h-12 items-center justify-center rounded-xl font-semibold text-white ${
        value >= 4 ? colors[value] : colors[value]
      } ${value >= 4 ? "text-white" : "text-slate-700"}`}
    >
      {value}
    </div>
  );
}

export default function ProductPotential() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Product Potential
          </span>

          <h2 className="mt-6">
            Product × Channel Opportunity Matrix
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Setiap channel memiliki karakteristik yang berbeda sehingga
            penempatan kategori produk perlu disesuaikan dengan potensi
            penjualan, frekuensi pembelian, dan pola distribusi.
          </p>
        </div>

        <div className="overflow-auto rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <table className="min-w-full border-separate border-spacing-3">
            <thead>
              <tr>
                <th className="text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Produk
                </th>

                {channels.map((channel) => (
                  <th
                    key={channel}
                    className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {channel}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td className="py-3 pr-6 font-semibold text-slate-900">
                    {product.name}
                  </td>

                  {product.values.map((value, index) => (
                    <td key={index}>
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Potensi Tinggi
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Daily Needs, Beverage, dan Snack memiliki peluang terbesar pada
              channel Kelontong serta Grosir karena frekuensi transaksi yang
              tinggi.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Potensi Menengah
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Bakery dan Horeca lebih sesuai untuk kategori Bakery
              Ingredients, Food Service, dan Bulk Product.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Strategi Penempatan
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Fokuskan produk fast moving pada channel dengan volume tinggi,
              sedangkan produk spesifik diarahkan pada institusi dan Horeca
              untuk meningkatkan nilai transaksi.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}