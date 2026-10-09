import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { berita } from "@/data/berita";

// Di Next.js 15, params berupa Promise sehingga harus di-await.
export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = berita.find((b) => b.slug === id);
  return { title: item ? `${item.title} | SMA Negeri 1 Boja` : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params; // nilai dari URL, yaitu slug berita
  const item = berita.find((b) => b.slug === id);

  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <nav className="mb-6 text-sm text-blue-900/60">
        <Link href="/" className="hover:text-blue-950">Beranda</Link> /{" "}
        <Link href="/berita" className="hover:text-blue-950">Berita</Link> /{" "}
        <span className="text-blue-900/80">{item.title}</span>
      </nav>

      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">{item.category}</span>
      <h1 className="mt-3 text-3xl font-bold leading-tight ">{item.title}</h1>
      <p className="mt-2 text-sm text-blue-900/60">{item.date}</p>

      <div className="relative my-8 h-64 overflow-hidden rounded-3xl sm:h-96">
        <Image src={item.image} alt={item.title} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
      </div>

      <div className="space-y-5 leading-8 text-blue-900/80">
        {item.content.map((paragraf, i) => (
          <p key={i}>{paragraf}</p>
        ))}
      </div>

      {item.sumber && (
        <p className="mt-8 text-sm text-blue-900/60">
          Sumber:{" "}
          <a href={item.sumber} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            artikel di website resmi sekolah
          </a>
        </p>
      )}

      <Link href="/berita" className="mt-10 inline-block rounded-full bg-blue-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
        ← Kembali ke Berita
      </Link>
    </article>
  );
}
