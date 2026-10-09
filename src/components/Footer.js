import Link from "next/link";

const tautan = [
  { label: "Jateng Pintar", href: "https://pintar.pdk.jatengprov.go.id/" },
  { label: "Rumah Belajar", href: "https://rumah.pendidikan.go.id/ruang/murid" },
  { label: "PDK Jateng", href: "https://www.pdkjateng.go.id" },
  { label: "Kemendikbud", href: "https://www.kemdikbud.go.id" },
];

export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-3xl bg-blue-950 text-blue-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-white">SMA Negeri 1 Boja Kabupaten Kendal</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-blue-200">
            Jl. Raya No. 203 D, Simbang, Bebengan, Kecamatan Boja, Kabupaten Kendal, Jawa Tengah 51381
          </p>
          <p className="mt-3 text-sm text-blue-200">Telepon: +62-294-571089</p>
          <p className="text-sm text-blue-200">Email: mail@smansaboja.sch.id</p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Menu</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
            <li><Link href="/about" className="hover:text-white">Tentang</Link></li>
            <li><Link href="/visi-misi" className="hover:text-white">Visi & Misi</Link></li>
            <li><Link href="/sejarah" className="hover:text-white">Sejarah</Link></li>
            <li><Link href="/fasilitas" className="hover:text-white">Fasilitas</Link></li>
            <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
            <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Tautan Terkait</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {tautan.map((t) => (
              <li key={t.href}>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{t.label}</a>
              </li>
            ))}
            <li>
              <a href="https://smansaboja.sch.id/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Website Resmi</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900 py-5 text-center text-xs text-blue-300">
        © 2026 SMA Negeri 1 Boja Kabupaten Kendal. All rights reserved.
      </div>
    </footer>
  );
}
