"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-12 md:gap-8">
        {/* Kiri: Logo + Desc */}
        <div className="w-full md:flex-1 max-w-md">
          <div className="mb-4">
            <Image
              src="/images/home/footer/logo_footer.png"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            SR POINT CARS berkomitmen untuk menyediakan layanan perawatan mobil
            premium dengan presisi dan semangat untuk membuat mobil Anda selalu
            terlihat terbaik.
          </p>
        </div>

        {/* Newsletter Booking */}
        <div className="w-full md:flex-1 max-w-md">
          <h3 className="text-lg font-bold mb-4 uppercase">
            Booking Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Dapatkan berita terbaru dan penawaran eksklusif dengan berlangganan:
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Masukan Email Anda"
              className="px-4 py-2 flex-grow rounded bg-gray-800 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary hover:bg-primary-dark rounded text-sm uppercase font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Us */}
        <div className="w-full md:flex-1 max-w-md">
          <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
          <ul className="text-gray-400 text-sm space-y-6">
            <li>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl text-red-600 flex-shrink-0" />
                <span className="leading-relaxed">
                  JLN. PASIRLUYU SELATAN NO.25D REGOL BANDUNG
                </span>
              </div>
            </li>
            <li>
              <a
                href="https://wa.me/6282120748682"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-emerald-400 transition"
              >
                <IoLogoWhatsapp className="text-xl text-emerald-600 flex-shrink-0" />
                +62 821 2074 8682
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} SR POINT CARS. All rights reserved.
      </div>
    </footer>
  );
}
