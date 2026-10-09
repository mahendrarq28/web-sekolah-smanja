import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-3 text-blue-900/70">Berita atau halaman yang kamu cari tidak tersedia.</p>
      <Link href="/berita" className="mt-6 inline-block rounded-full bg-blue-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
        Kembali ke Berita
      </Link>
    </section>
  );
}
