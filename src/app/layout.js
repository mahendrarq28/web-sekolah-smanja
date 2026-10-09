import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair" });

export const metadata = {
  title: "SMA Negeri 1 Boja Kabupaten Kendal",
  description: "Website profil dan informasi SMA Negeri 1 Boja Kabupaten Kendal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} ${playfair.variable} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
