# Website SMA Negeri 1 Boja (Next.js + Tailwind CSS)

## Menjalankan
    npm install
    npm run dev        # buka http://localhost:3000

## Build & produksi lokal
    npm run build
    npm start

## Mengganti gambar
Timpa file di `public/images/` dengan nama yang sama (logo.png, sekolah.jpg, berita-1.jpg ... berita-6.jpg).
Gambar bawaan hanya placeholder.

## Mengganti konten berita
Edit `src/data/berita.js`. Home, /berita, dan /berita/[id] otomatis ikut berubah.
Kalau menambah berita, buat `slug` unik karena dipakai sebagai URL.

## Deploy ke Vercel
1. Push project ke GitHub.
2. Buka vercel.com, Add New Project, import repository.
3. Framework terdeteksi otomatis sebagai Next.js, klik Deploy.

## Logo & gambar dari website resmi
- Logo: `public/images/logo.png` (juga dipakai sebagai favicon di `src/app/icon.png`).
- Gambar berita bisa diunduh dari artikel aslinya (tautan ada di field `sumber` pada `src/data/berita.js`),
  lalu simpan sebagai `berita-1.jpg` ... `berita-6.jpg`. Gambar kepala sekolah dan gedung: `kepala-sekolah.jpg`, `sekolah.jpg`.
