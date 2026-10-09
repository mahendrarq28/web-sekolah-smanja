import SectionTitle from "@/components/SectionTitle";
import FasilitasGallery from "@/components/FasilitasGallery";
import { fasilitas } from "@/data/fasilitas";

export const metadata = { title: "Fasilitas | SMA Negeri 1 Boja" };

export default function FasilitasPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        label="Sarana Prasarana"
        title="Fasilitas Sekolah"
        subtitle={`${fasilitas.length} sarana dan prasarana SMA Negeri 1 Boja. Klik foto pada slideshow untuk melihatnya lebih besar.`}
      />
      <FasilitasGallery items={fasilitas} />
    </section>
  );
}
