import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { fasilitas } from "@/data/fasilitas";

export const metadata = { title: "Tentang | SMA Negeri 1 Boja" };

const ekskul = ["OSIS", "Paskibra", "Kegiatan Literasi", "Alumni Mengajar", "P5", "Peduli Lingkungan"];

const ringkasan = [
  { title: "Sejarah", text: "Berdiri pada tahun 1985 melalui SK Menteri Pendidikan dan Kebudayaan No. 0601/0/1985.", href: "/sejarah", aksi: "Baca Sejarah" },
  { title: "Visi & Misi", text: "Mewujudkan peserta didik yang religious, unggul, berdaya saing global, berwawasan kependudukan, budaya dan lingkungan.", href: "/visi-misi", aksi: "Lihat Visi & Misi" },
  { title: "Fasilitas", text: `${fasilitas.length} sarana dan prasarana, dari laboratorium, perpustakaan, hingga lapangan olahraga.`, href: "/fasilitas", aksi: "Lihat Galeri" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 text-center">
        <Reveal className="mx-auto max-w-3xl px-4">
          <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-medium text-blue-800">Tentang Kami</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Tentang <span className="font-accent font-normal italic text-blue-700">SMA Negeri 1 Boja</span>
          </h1>
          <p className="mt-4 text-blue-900/70">Mengenal profil dan lingkungan sekolah.</p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <Reveal dari="kiri">
          <SectionTitle label="Profil" title="Profil Sekolah" />
          <p className="leading-relaxed text-blue-900/70">
            SMA Negeri 1 Boja adalah sekolah menengah atas negeri yang berlokasi di Kecamatan Boja, Kabupaten Kendal, Jawa Tengah.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-blue-900/80">
            <li><strong className="text-blue-950">Kepala Sekolah:</strong> Nurhadi, S.Pd., M.Pd.</li>
            <li><strong className="text-blue-950">Telepon:</strong> +62-294-571089</li>
            <li><strong className="text-blue-950">Alamat:</strong> Jl. Raya No. 203 D, Simbang, Bebengan, Kecamatan Boja, Kabupaten Kendal, Jawa Tengah 51381</li>
          </ul>
        </Reveal>
        <Reveal dari="kanan" delay={150} className="relative h-72 overflow-hidden rounded-3xl sm:h-96">
          <Image src="/images/sekolah.jpg" alt="Gedung SMA Negeri 1 Boja" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </Reveal>
      </section>

      <section className="bg-blue-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
          {ringkasan.map((r, i) => (
            <Reveal key={r.title} delay={i * 120} className="h-full">
              <div className="flex h-full flex-col rounded-3xl bg-blue-900 p-6">
                <h2 className="text-xl font-bold text-white">{r.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-200">{r.text}</p>
                <Link href={r.href} className="mt-6 block rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-blue-950 transition hover:bg-blue-50">
                  {r.aksi} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle label="Kegiatan" title="Kegiatan dan Ekstrakurikuler" />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {ekskul.map((e) => (
                <span key={e} className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-medium text-blue-900">{e}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-blue-950 px-6 py-14 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Ikuti Kabar Terbaru Sekolah</h2>
            <Link href="/berita" className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-blue-950 transition hover:bg-blue-50">Lihat Berita</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}