import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { visi, misi } from "@/data/profil";

export const metadata = { title: "Visi & Misi | SMA Negeri 1 Boja" };

export default function VisiMisiPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 text-center">
        <Reveal className="mx-auto max-w-3xl px-4">
          <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-medium text-blue-800">Profil Sekolah</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Visi & <span className="font-accent font-normal italic text-blue-700">Misi</span>
          </h1>
        </Reveal>
      </section>

      {/* VISI */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-blue-950 px-6 py-12 text-center text-white sm:px-14 sm:py-16">
            <span className="inline-block rounded-full border border-blue-700 bg-blue-900 px-4 py-1 text-xs font-medium text-blue-100">Visi</span>
            <p className="mt-6 text-xl font-semibold leading-relaxed sm:text-3xl sm:leading-snug">{visi}</p>
          </div>
        </Reveal>
      </section>

      {/* MISI */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <Reveal>
          <SectionTitle label="Misi" title="Misi Sekolah" center />
        </Reveal>
        <ol className="grid gap-5 md:grid-cols-2">
          {misi.map((m, i) => (
            <li
              key={i}
              className={i === misi.length - 1 && misi.length % 2 === 1 ? "md:col-span-2" : ""}
            >
              <Reveal delay={(i % 2) * 120} className="h-full">
                <div className="flex h-full gap-4 rounded-3xl border border-blue-100 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-sm font-bold text-white">{i + 1}</span>
                  <p className="leading-relaxed text-blue-900/80">{m}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-blue-50 px-6 py-12 text-center">
            <h2 className="text-xl font-bold sm:text-2xl">Kenali perjalanan sekolah kami</h2>
            <Link href="/sejarah" className="mt-5 inline-block rounded-full bg-blue-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-800">Lihat Sejarah Sekolah</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}