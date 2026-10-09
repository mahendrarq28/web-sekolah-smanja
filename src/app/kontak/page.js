import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Kontak | SMA Negeri 1 Boja" };

const info = [
  { label: "Nama Sekolah", value: "SMA Negeri 1 Boja Kabupaten Kendal" },
  { label: "Alamat", value: "Jl. Raya No. 203 D, Simbang, Bebengan, Kecamatan Boja, Kabupaten Kendal, Jawa Tengah 51381" },
  { label: "Telepon", value: "+62-294-571089" },
  { label: "Email", value: "[isi email resmi sekolah]" },
  { label: "Jam Layanan", value: "[isi jam layanan resmi]" },
];

export default function KontakPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
      <Reveal dari="kiri">
        <SectionTitle label="Kontak" title="Hubungi Kami" subtitle="Hubungi SMA Negeri 1 Boja Kabupaten Kendal." />
        <ul className="space-y-3">
          {info.map((i) => (
            <li key={i.label} className="rounded-2xl bg-blue-50 px-5 py-4 text-sm">
              <strong className="block text-blue-950">{i.label}</strong>
              <span className="text-blue-900/80">{i.value}</span>
            </li>
          ))}
          <li className="rounded-2xl bg-blue-50 px-5 py-4 text-sm">
            <strong className="block text-blue-950">Website</strong>
            <a href="https://smansaboja.sch.id/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">https://smansaboja.sch.id/</a>
          </li>
        </ul>
      </Reveal>

      <Reveal dari="kanan" delay={150}>
        <ContactForm />
      </Reveal>

      <Reveal className="md:col-span-2">
        <iframe
          title="Lokasi SMA Negeri 1 Boja"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1652497954456!2d110.25678477604727!3d-7.106839469685622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706303268cdb2d%3A0x10b438946cd72f62!2sSMAN%201%20Boja!5e0!3m2!1sen!2sid!4v1703961415269!5m2!1sen!2sid"
          className="h-80 w-full rounded-3xl border border-blue-100"
          loading="lazy"
        />
      </Reveal>
    </section>
  );
}