"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const arrowBtn =
  "flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-950 shadow transition hover:bg-blue-50";

export default function FasilitasGallery({ items }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false); // lightbox
  const [paused, setPaused] = useState(false);
  const total = items.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  // Slideshow otomatis (berhenti saat lightbox terbuka atau kursor di atas slide)
  useEffect(() => {
    if (open || paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [open, paused, next]);

  // Keyboard + kunci scroll saat lightbox terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  const aktif = items[index];

  return (
    <>
      {/* SLIDESHOW (preview) */}
      <div
        className="relative overflow-hidden rounded-3xl bg-blue-950"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setOpen(true)}
              className="relative h-72 w-full shrink-0 cursor-zoom-in sm:h-[28rem]"
              aria-label={`Lihat foto ${item.nama}`}
            >
              <Image
                src={item.image}
                alt={item.nama}
                fill
                priority={i === 0}
                sizes="(min-width: 1152px) 1100px, 100vw"
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-blue-950/75 px-5 py-4 text-left text-white">
                <span className="font-semibold">{item.nama}</span>
                <span className="hidden text-xs text-blue-200 sm:inline">Klik untuk melihat foto</span>
              </span>
            </button>
          ))}
        </div>

        <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-1 text-xs font-medium text-blue-950">
          {index + 1} / {total}
        </span>
        <button onClick={prev} className={`${arrowBtn} absolute left-4 top-1/2 -translate-y-1/2`} aria-label="Sebelumnya">←</button>
        <button onClick={next} className={`${arrowBtn} absolute right-4 top-1/2 -translate-y-1/2`} aria-label="Berikutnya">→</button>
      </div>

      {/* LIGHTBOX (isi) */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-blue-950/95" role="dialog" aria-modal="true" aria-label={aktif.nama}>
          <div className="flex items-center justify-between px-4 py-4 text-white sm:px-8">
            <div>
              <p className="font-semibold">{aktif.nama}</p>
              <p className="text-xs text-blue-200">{index + 1} dari {total}</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full bg-white px-5 py-2 text-sm font-medium text-blue-950 hover:bg-blue-50">
              Tutup
            </button>
          </div>

          <div className="relative flex-1">
            <Image src={aktif.image} alt={aktif.nama} fill sizes="100vw" className="object-contain" />
            <button onClick={prev} className={`${arrowBtn} absolute left-4 top-1/2 -translate-y-1/2`} aria-label="Sebelumnya">←</button>
            <button onClick={next} className={`${arrowBtn} absolute right-4 top-1/2 -translate-y-1/2`} aria-label="Berikutnya">→</button>
          </div>
          <div className="h-6" />
        </div>
      )}
    </>
  );
}
