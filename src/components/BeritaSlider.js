"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";

const arrowBtn =
  "flex h-11 w-11 items-center justify-center rounded-full border border-blue-700 text-white transition hover:bg-blue-900";

export default function BeritaSlider({ items }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  // arah: 1 = maju, -1 = mundur. Kembali ke awal/akhir saat sampai ujung.
  function geser(arah) {
    const el = ref.current;
    if (!el) return;
    const langkah = el.firstElementChild.offsetWidth + 24;
    const maks = el.scrollWidth - el.clientWidth;
    if (arah > 0 && el.scrollLeft >= maks - 4) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (arah < 0 && el.scrollLeft <= 4) el.scrollTo({ left: maks, behavior: "smooth" });
    else el.scrollBy({ left: arah * langkah, behavior: "smooth" });
  }

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => geser(1), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-[85%] shrink-0 snap-start sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]">
            <BeritaCard berita={item} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3">
          <button onClick={() => geser(-1)} className={arrowBtn} aria-label="Berita sebelumnya">←</button>
          <button onClick={() => geser(1)} className={arrowBtn} aria-label="Berita berikutnya">→</button>
        </div>
        <Link href="/berita" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-950 transition hover:bg-blue-50">
          Lihat Semua Berita
        </Link>
      </div>
    </div>
  );
}
