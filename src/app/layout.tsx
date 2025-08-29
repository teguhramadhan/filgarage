import type { Metadata } from "next";
import { Outfit, Archivo_Black, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollUpBtn";

// Outfit → default font
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Archivo Black
const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

// Orbitron
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIL GARAGE | Layanan Otomotif",
  description: "Velg, oli, audio system, lampu custom, dan layanan premium.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${archivoBlack.variable} ${orbitron.variable} antialiased font-outfit`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
