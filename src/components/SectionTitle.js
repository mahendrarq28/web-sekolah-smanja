// label = pill kecil di atas judul. dark = tampil di latar navy.
export default function SectionTitle({ label, title, subtitle, center = false, dark = false }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block rounded-full border px-4 py-1 text-xs font-medium ${
            dark ? "border-blue-700 bg-blue-900 text-blue-100" : "border-blue-200 bg-white text-blue-800"
          }`}
        >
          {label}
        </span>
      )}
      <h2 className={`mt-4 text-2xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-blue-950"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl sm:text-lg ${center ? "mx-auto" : ""} ${dark ? "text-blue-200" : "text-blue-900/70"}`}>{subtitle}</p>
      )}
    </div>
  );
}
