"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Kiri: Logo + Desc */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo/main_logo_notext.png"
                alt="Fil Garage"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              FIL GARAGE berkomitmen untuk menyediakan layanan perawatan mobil
              premium dengan presisi dan semangat untuk membuat mobil Anda
              selalu terlihat terbaik.
            </p>
          </div>

          {/* Newsletter Booking */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Booking Newsletter
            </h3>
            <p className="text-white/80">
              Dapatkan berita terbaru dan penawaran eksklusif dengan
              berlangganan:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt
                  className="text-white mt-1 flex-shrink-0"
                  size={18}
                />
                <p className="text-white/80 leading-relaxed">
                  JLN. PASIRLUYU SELATAN NO.25D REGOL, BANDUNG
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <IoLogoWhatsapp
                  className="text-white flex-shrink-0"
                  size={18}
                />
                <a
                  href="https://wa.me/6282258692970"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +62 822-5869-2970{" "}
                  <span className="font-bold">ADMIN (Arief Maulana)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} FIL GARAGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
