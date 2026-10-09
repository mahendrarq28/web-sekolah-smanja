"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 focus:border-blue-700 focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Simulasi saja: tidak ada data yang dikirim ke server.
    setSent(true);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-blue-100 bg-white p-6 sm:p-8">
      <div>
        <label className="mb-1 block text-sm font-medium text-blue-950">Nama</label>
        <input type="text" required className={inputClass} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-blue-950">Email</label>
        <input type="email" required className={inputClass} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-blue-950">Subjek</label>
        <input type="text" required className={inputClass} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-blue-950">Pesan</label>
        <textarea rows={5} required className={inputClass} />
      </div>
      <button type="submit" className="rounded-full bg-blue-950 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
        Kirim
      </button>
      {sent && <p className="text-sm text-blue-700">Terima kasih! Pesan kamu tercatat (simulasi, tidak dikirim ke server).</p>}
    </form>
  );
}
