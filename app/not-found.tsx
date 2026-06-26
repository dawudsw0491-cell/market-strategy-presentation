import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">

        <div className="text-7xl font-black text-blue-600">
          404
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-6 leading-8 text-slate-600">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan kembali ke halaman utama untuk melanjutkan.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>

      </div>
    </main>
  );
}