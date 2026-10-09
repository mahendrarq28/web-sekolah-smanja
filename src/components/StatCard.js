// Angka besar dengan garis tipis, dipakai di latar navy.
export default function StatCard({ value, label }) {
  return (
    <div>
      <p className="text-4xl font-bold text-white sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm text-blue-200">{label}</p>
      <div className="mt-4 h-1 w-full rounded-full bg-blue-900">
        <div className="h-1 w-1/3 rounded-full bg-white" />
      </div>
    </div>
  );
}
