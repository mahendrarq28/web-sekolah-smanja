import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { sejarah, kepalaSekolah } from "@/data/profil";

export const metadata = { title: "Sejarah | SMA Negeri 1 Boja" };

export default function SejarahPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 text-center">
        <Reveal className="mx-auto max-w-3xl px-4">
          <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-medium text-blue-800">Profil Sekolah</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Sejarah <span className="font-accent font-normal italic text-blue-700">Sekolah</span>
          </h1>
        </Reveal>
      </section>

      {/* AWAL BERDIRI */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <Reveal dari="kiri">
          <SectionTitle label="Awal Berdiri" title="Berdiri sejak 1985" />
          <div className="space-y-4 leading-relaxed text-blue-900/80">
            {sejarah.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-3xl font-bold">1985</p>
              <p className="mt-1 text-sm text-blue-900/70">Tahun berdiri</p>
            </div>
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-3xl font-bold">{kepalaSekolah.length}</p>
              <p className="mt-1 text-sm text-blue-900/70">Kepala sekolah hingga kini</p>
            </div>
          </div>
        </Reveal>
        <Reveal dari="kanan" delay={150}>
          <figure>
            <div className="relative h-72 overflow-hidden rounded-3xl sm:h-96">
              <Image src="/images/sejarah-1985.jpg" alt="SMA Negeri 1 Boja pada tahun 1985 saat awal pembangunan" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-blue-900/60">SMA Negeri 1 Boja pada tahun 1985, saat awal pembangunan.</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* KEPALA SEKOLAH */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle label="Kepemimpinan" title="Kepala Sekolah dari Masa ke Masa" center />
          </Reveal>
          <ol className="relative ml-3 space-y-4 border-l-2 border-blue-200 pl-8">
            {kepalaSekolah.map((k) => (
              <li key={k.nama}>
                <Reveal className="relative">
                  <span className={`absolute -left-[41px] top-5 h-4 w-4 rounded-full border-4 border-blue-50 ${k.sekarang ? "bg-blue-950" : "bg-blue-400"}`} />
                  <div className={`rounded-2xl p-5 ${k.sekarang ? "bg-blue-950 text-white" : "border border-blue-100 bg-white"}`}>
                    <p className="font-semibold">{k.nama}</p>
                    <p className={`mt-1 text-sm ${k.sekarang ? "text-blue-200" : "text-blue-900/70"}`}>{k.periode}</p>
                    {k.sekarang && <span className="mt-3 inline-block rounded-full bg-blue-900 px-3 py-1 text-xs font-medium">Menjabat saat ini</span>}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-blue-950 px-6 py-12 text-center text-white">
            <h2 className="text-xl font-bold sm:text-2xl">Lihat arah dan tujuan sekolah</h2>
            <Link href="/visi-misi" className="mt-5 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-blue-950 transition hover:bg-blue-50">Visi & Misi</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}