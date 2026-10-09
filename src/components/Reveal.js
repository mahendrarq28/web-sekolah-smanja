"use client";

import { useEffect, useRef, useState } from "react";

// Posisi awal sebelum elemen muncul
const awal = {
  bawah: "translate-y-6",
  kiri: "-translate-x-6",
  kanan: "translate-x-6",
};

export default function Reveal({ children, dari = "bawah", delay = 0, className = "" }) {
  const ref = useRef(null);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTampil(true);
          observer.disconnect(); // animasi cukup sekali
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        tampil ? "translate-x-0 translate-y-0 opacity-100" : `${awal[dari]} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}