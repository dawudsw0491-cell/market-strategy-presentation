export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <h2 className="mt-8 text-xl font-semibold text-slate-900">
          Memuat Halaman...
        </h2>

        <p className="mt-3 text-slate-500">
          Mohon tunggu sebentar.
        </p>

      </div>
    </main>
  );
}