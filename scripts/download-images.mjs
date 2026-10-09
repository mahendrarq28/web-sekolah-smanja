// Mengunduh foto dari website resmi sekolah ke public/images (butuh Node 18+).
// Jalankan: npm run images
import { writeFile, mkdir } from "node:fs/promises";

const infra = "https://smansaboja.sch.id/storage/thumbnail/infrastructure/";
const post = "https://smansaboja.sch.id/storage/thumbnail/post/";

const daftar = [
  ["ruang-lobby-sma", infra + "ay0rcBF7bkIZY11swhQj8NjVp6a9fqXPhOy5Juxr4O0AGhLTd3.JPG"],
  ["lab-trcc", infra + "j7i3Xw4B1V9IbUzQdQpRCzjTZeSHTLFXWQQQHJERSvc3Xzbcir.JPG"],
  ["perpustakaan", infra + "8RHznxOVHLNWEppftlVx8pba6NaOsmfVn9KzCvDVlD6dEoKuPz.JPG"],
  ["lapangan-olahraga-basket", infra + "ALTgDqUNn7d5shNnsqjkScy5JxAwM0swRPUrwYYsSPw563xapP.JPG"],
  ["toilet-bersih", infra + "XSR5rDdmHiXF08r1EKMhfn3iphjIouGXKz9CeKlFhRHBDJpOsS.JPG"],
  ["gedung-serba-guna", infra + "VhgfbmsTA5rQmww3oiS64Jx8j1jLqRo1Dodb6mS4Moy5t4MLtP.JPG"],
  ["masjid", infra + "DeERnb1aaQ8uHdHkOLv50zrWxLSYxoObhJZqMzpFYEZwjci1u3.jpeg"],
  ["ruang-uks", infra + "l4YX5rjxasFYFehZvfoLZwiQ6Wl6HqeiD0SEaQoJtKLqGW77Kk.JPG"],
  ["laboratorium-komputer-1", infra + "Mmew1Fcn9Ht9FvSqTk336WKvXIoEecXm9zlRQDABX7vVykVDqG.JPG"],
  ["laboratorium-bahasa", infra + "dXjAVLuyuh8v6NN0bcydOce0gJNFz1gqMSAHwD2aHdn1R9hSjU.jpeg"],
  ["laboratorium-fisika", infra + "Oczet5V9DtUbxGVFI1DadcVx82tXjGYHXnchI6E9RAVVfWdQ1w.JPG"],
  ["laboratorium-biologi", infra + "WSKn461joY02Zy4HB5kQ5RIMEJKi4YHkO142F7f0f7ThD2PyAd.JPG"],
  ["ruang-rapat-lantai-2", infra + "kQYC45CSl145FVPzJrcvxg38yRGNW0RMLPQURNsQuE78cMWKDY.jpeg"],
  ["laboratorium-komputer-2", infra + "oyS3WzVvRDLftP9Jok1gvyjUhusxPKvaJs8sb6PlVWBjZnUmlS.JPG"],
  ["tempat-parkir-motor-siswa", infra + "vh2OoK6rBnwpfMBfevpSjVz73fIDDezMARVTDsOGtu7h8pYKaP.jpeg"],
  ["lapangan-olahraga-volly-1", infra + "1bNs5OBLVKtP3OnN4vWcKPptkyd6vO9d1fppooqE0EXBluhV67.jpeg"],
  ["lapangan-olahraga-volly-2", infra + "CEJ7vZvjwiR1hwldT8ouvHOauTiGx9zEYbfdlqrZURxk7w4ULv.jpeg"],
  ["lapangan-olahraga-volly-3", infra + "OVx6hKZw2SMhmgjFcqGuT0BSI8gAi2SRhvQu7y3zZFeM5dAfpR.jpeg"],
  ["lapangan-olahraga-sepak-bola", infra + "MuA829Gv0iPL5d7kdMgJokjp0JZtaw5YJW5SVl8tiwsECyNfmD.jpeg"],
  ["lapangan-upacara-bendera", infra + "fOgnnFbrAG7sTelgDajcHPV7MNkwXAX2ND0kYYxLkzwo1N1e6E.jpeg"],
  ["kantin-sekolah", infra + "imISeMaXsUoEGiPxGKANFI62Wdj5gpVva2tQn1ikk9pamEirhp.jpeg"],
  ["climbing", infra + "hVHLh1h5ElONFxcDdN1KFKnIZyly1DXRyum5MoczYPANYH19TN.jpeg"],
].map(([slug, url]) => [url, `public/images/fasilitas/${slug}.jpg`]);

const berita = [
  ["berita-1", post + "pac5GNKAXN0R7Cge7C1e4zb6hYTXD0aya1GAcrYSpDNvQcYeEH.png"],
  ["berita-2", post + "qGNnQoWlBOZyfeQvZEl9nAsKeVheup4DCLpgw7GGkHjRX2FKBp.png"],
  ["berita-3", post + "jaNtHDERUtwLF9oZJvtxLCZ5ChFCRc8eS8AFPyZyvqYVHquLMG.jpeg"],
  ["berita-4", post + "eUFIqDxdgfqGwHwiCcouxSLPeRO3Jn0ErmfL8hziSxAbZaigDX.jpeg"],
  ["berita-5", post + "T2VfZ8t05ZJK7tE7z6bhS2daNPKCZTX2TmltP233LOnxOjFOy4.jpeg"],
].map(([nama, url]) => [url, `public/images/${nama}.jpg`]);

await mkdir("public/images/fasilitas", { recursive: true });

for (const [url, tujuan] of [...daftar, ...berita]) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);
    await writeFile(tujuan, Buffer.from(await res.arrayBuffer()));
    console.log("OK   ", tujuan);
  } catch (err) {
    console.log("GAGAL", tujuan, "-", err.message);
  }
}
