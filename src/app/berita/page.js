import SectionTitle from "@/components/SectionTitle";
import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Berita | SMA Negeri 1 Boja" };

export default function BeritaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle label="Berita & Informasi" title="Berita Sekolah" subtitle="Informasi dan kegiatan terbaru di SMA Negeri 1 Boja." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {berita.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 100} className="h-full">
            <BeritaCard berita={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
