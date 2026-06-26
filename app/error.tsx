"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">

        <div className="text-7xl font-black text-red-500">
          !
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Terjadi Kesalahan
        </h1>

        <p className="mt-6 leading-8 text-slate-600">
          Terjadi kesalahan saat memuat halaman. Silakan coba kembali.
        </p>

        <button
          onClick={reset}
          className="mt-10 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Muat Ulang
        </button>

      </div>
    </main>
  );
}