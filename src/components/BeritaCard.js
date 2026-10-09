import Link from "next/link";
import Image from "next/image";

export default function BeritaCard({ berita }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <Image
          src={berita.image}
          alt={berita.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-800">{berita.category}</span>
          <span className="text-blue-900/60">{berita.date}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-blue-950">{berita.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-blue-900/70">{berita.excerpt}</p>
        <Link
          href={`/berita/${berita.slug}`}
          className="mt-5 block rounded-full bg-blue-50 px-5 py-3 text-center text-sm font-medium text-blue-950 transition hover:bg-blue-950 hover:text-white"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
}
