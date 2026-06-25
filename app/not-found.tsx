import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 text-3xl font-bold text-white shadow-xl">
          404
        </div>

        <h1 className="mt-10 text-4xl font-bold text-slate-900">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-5 leading-8 text-slate-600">
          Halaman yang Anda cari tidak tersedia atau alamat yang dimasukkan
          tidak sesuai. Silakan kembali ke beranda untuk melanjutkan
          presentasi.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}