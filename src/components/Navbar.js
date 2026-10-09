"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/about",
    children: [
      { label: "Tentang Sekolah", href: "/about" },
      { label: "Visi & Misi", href: "/visi-misi" },
      { label: "Sejarah", href: "/sejarah" },
    ],
  },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const cocok = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isActive = (item) => (item.children ? item.children.some((c) => cocok(c.href)) : cocok(item.href));

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Logo SMA Negeri 1 Boja" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="text-sm font-bold leading-tight text-blue-950">
            SMA Negeri 1 Boja
            <span className="block text-xs font-normal text-blue-900/60">Kabupaten Kendal</span>
          </span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1 rounded-full bg-blue-50 p-1">
            {menu.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(item) ? "bg-blue-950 text-white" : "text-blue-950 hover:bg-blue-100"
                  }`}
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs">▾</span>}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-10 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-48 rounded-2xl border border-blue-100 bg-white p-2 shadow-lg">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={`block rounded-xl px-4 py-2 text-sm ${
                              pathname === c.href ? "bg-blue-50 font-semibold text-blue-950" : "text-blue-900 hover:bg-blue-50"
                            }`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <a href="tel:+62294571089" className="hidden rounded-full border border-blue-200 px-5 py-2.5 text-sm font-medium text-blue-950 transition hover:bg-blue-50 xl:block">
            +62-294-571089
          </a>
        </div>

        {/* Tombol hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-blue-200 px-4 py-2 text-sm font-medium text-blue-950 md:hidden"
          aria-label="Buka menu"
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-blue-100 bg-white px-4 py-3 md:hidden">
          {menu.map((item) =>
            item.children ? (
              <li key={item.href}>
                <p className="px-5 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-blue-900/50">{item.label}</p>
                <ul className="space-y-1">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-full px-5 py-3 text-sm font-medium ${
                          pathname === c.href ? "bg-blue-950 text-white" : "text-blue-950 hover:bg-blue-50"
                        }`}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-5 py-3 text-sm font-medium ${
                    cocok(item.href) ? "bg-blue-950 text-white" : "text-blue-950 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}
