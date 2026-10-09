import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import BeritaSlider from "@/components/BeritaSlider";
import StatCard from "@/components/StatCard";
import Reveal from "@/components/Reveal";
import { berita } from "@/data/berita";

const btnDark = "rounded-full bg-blue-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-800";
const btnLight = "rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-medium text-blue-950 transition hover:bg-blue-50";

const highlight = [
  { no: "01", title: "Lingkungan Belajar", desc: "Suasana sekolah yang mendukung kegiatan belajar yang nyaman dan tertib.", href: "/fasilitas" },
  { no: "02", title: "Prestasi Siswa", desc: "Dorongan bagi peserta didik untuk berprestasi di bidang akademik dan non-akademik.", href: "/berita" },
  { no: "03", title: "Kegiatan Siswa", desc: "Beragam organisasi dan kegiatan untuk mengembangkan minat dan bakat.", href: "/about" },
];

const kegiatan = [
  "MPLS Ramah", "Penyambutan Murid Baru Kelas X", "Welcome Back School", "Hari Peduli Sampah Nasional",
  "P5", "Pemilihan Ketua OSIS", "Paskibra", "Alumni Mengajar", "Penguatan Literasi",
];

const pengumuman = [
  { title: "Rekapitulasi Realisasi Penggunaan Dana BOSP Tahap 1 Tahun 2026", href: "https://smansaboja.sch.id/announcement/rekapitulasi-realisasi-penggunaan-dana-bosp-tahap-1-tahun-2026" },
  { title: "Laporan Realisasi Penerimaan dan Belanja Dana BOSP Reguler Semester 1 Tahun 2026", href: "https://smansaboja.sch.id/announcement/laporan-realisasi-penerimaan-dan-belanja-dana-bosp-reguler-semester-1-tahun-2026" },
  { title: "Rekapitulasi Realisasi Penggunaan Dana BOS Kinerja Tahun 2025", href: "https://smansaboja.sch.id/announcement/rekapitulasi-realisasi-penggunaan-dana-bos-kinerja-tahun-2025" },
  { title: "SPMB SMA N 1 Boja TA. 2026/2027", href: "https://smansaboja.sch.id/announcement/ketentuan-daftar-ulang-spmb-sma-n-1-boja-ta-2025-2026" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal dari="kiri">
          <span className="inline-block rounded-full border border-blue-200 px-4 py-1 text-xs font-medium text-blue-800">
            SMA Negeri 1 Boja · Kabupaten Kendal
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Belajar, Berkarakter, <span className="font-accent font-normal italic text-blue-700">Berprestasi</span>
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-blue-900/70">
            Informasi kegiatan, prestasi, dan agenda penting SMA Negeri 1 Boja untuk peserta didik, guru, orang tua, dan alumni.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className={btnDark}>Tentang Sekolah →</Link>
            <Link href="/berita" className={btnLight}>Lihat Berita</Link>
          </div>
          <div className="mt-10 flex items-end gap-3">
            <p className="text-5xl font-bold">23</p>
            <p className="pb-1 text-sm text-blue-900/70">siswa lolos SNBT 2026</p>
          </div>
        </Reveal>

        <Reveal dari="kanan" delay={150} className="relative pb-10 pl-0 sm:pl-10">
          <div className="relative h-72 overflow-hidden rounded-3xl sm:h-96 md:h-[28rem]">
            <Image src="/images/sekolah.jpg" alt="Gedung SMA Negeri 1 Boja" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 hidden h-36 w-44 overflow-hidden rounded-3xl border-4 border-white sm:block">
            <Image src="/images/berita-1.jpg" alt="Kegiatan siswa SMA Negeri 1 Boja" fill sizes="176px" className="object-cover" />
          </div>
        </Reveal>
      </section>

      {/* SAMBUTAN + ANGKA (navy) */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <Reveal dari="kiri" className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl sm:h-96 md:max-w-none">
            <Image src="/images/kepala-sekolah.jpg" alt="Kepala SMA Negeri 1 Boja" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal dari="kanan" delay={150}>
            <span className="inline-block rounded-full border border-blue-700 bg-blue-900 px-4 py-1 text-xs font-medium text-blue-100">Sambutan Kepala Sekolah</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
              Website sekolah sebagai <span className="font-accent font-normal italic text-blue-300">wahana informasi</span>
            </h2>
            <p className="mt-4 leading-relaxed text-blue-200">
              SMA Negeri 1 Boja mengembangkan website sebagai sarana informasi dan komunikasi yang efektif antara guru, peserta didik, orang tua, alumni, dan pihak eksternal. Sekolah juga terbuka terhadap saran dan kritik untuk penyempurnaan website.
            </p>
            <p className="mt-5 font-semibold">Nurhadi, S.Pd., M.Pd.</p>
            <p className="text-sm text-blue-300">Kepala SMA Negeri 1 Boja</p>

            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-blue-900 pt-8">
              <StatCard value="23" label="Siswa lolos SNBT 2026" />
              <StatCard value="10" label="Siswa lolos Paskibraka Kab. Kendal 2026" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionTitle label="Sekilas Sekolah" title="Lingkungan yang mendukung tumbuhnya potensi" subtitle="Beberapa hal yang menjadi bagian dari kehidupan di SMA Negeri 1 Boja." center />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {highlight.map((h, i) => {
            const aktif = i === 1;
            return (
              <Reveal key={h.title} delay={i * 120} className="h-full">
                <div className={`h-full rounded-3xl bg-white p-6 text-center ${aktif ? "border-2 border-blue-950" : "border border-blue-100"}`}>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">{h.no}</div>
                  <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-900/70">{h.desc}</p>
                  <Link
                    href={h.href}
                    className={`mt-6 block rounded-xl px-5 py-3 text-sm font-medium transition ${aktif ? "bg-blue-950 text-white hover:bg-blue-800" : "bg-blue-50 text-blue-950 hover:bg-blue-100"}`}
                  >
                    Selengkapnya →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* KEGIATAN */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle label="Kegiatan" title="Kegiatan Sekolah" subtitle="Beberapa kegiatan yang tampil di galeri dan berita sekolah." />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {kegiatan.map((k) => (
                <span key={k} className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-medium text-blue-900">{k}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BERITA TERBARU (navy, slideshow) */}
      <section className="bg-blue-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle label="Berita & Informasi" title="Berita Terbaru" subtitle="Geser untuk melihat berita lainnya, atau klik kartu untuk membaca." dark />
          </Reveal>
          <Reveal delay={100}>
            <BeritaSlider items={berita} />
          </Reveal>
        </div>
      </section>

      {/* PENGUMUMAN */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionTitle label="Pengumuman" title="Pengumuman Terbaru" subtitle="Tautan membuka website resmi sekolah." center />
        </Reveal>
        <ul className="space-y-3">
          {pengumuman.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={i * 100}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-2xl bg-blue-50 px-5 py-4 text-sm font-medium text-blue-950 transition hover:bg-blue-100">
                  <span>{p.title}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">→</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 px-6 py-14 text-center">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Kenali Lebih Dekat <span className="font-accent font-normal italic text-blue-700">SMA Negeri 1 Boja</span>
            </h2>
            <Link href="/about" className={`${btnDark} mt-6 inline-block`}>Lihat Profil Sekolah</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}