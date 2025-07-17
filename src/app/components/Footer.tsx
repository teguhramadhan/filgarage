"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-12">
        {/* Kiri: Logo + Desc */}
        <div className="w-full md:w-1/3 max-w-xs">
          <div className="mb-4">
            <Image
              src="/images/home/footer/logo_footer.png"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm">
            SR POINT CARS is committed to providing premium car care services
            with precision and passion to make your car always look its best.
          </p>
        </div>

        {/* Newsletter Booking */}
        <div className="w-full md:w-1/3 max-w-xs">
          <h3 className="text-lg font-bold mb-4 uppercase">
            Booking Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest news and exclusive offers by subscribing:
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 flex-grow rounded bg-gray-800 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary hover:bg-primary-dark rounded text-sm uppercase font-semibold"
            >
              Subscribe newsletter
            </button>
          </form>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/3 max-w-xs">
          <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
          <ul className="text-gray-400 text-xs space-y-6">
            <li>
              <span className="flex justify-start items-center gap-6">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                JLN. PASIRLUYU SELATAN NO.25D REGOL BANDUNG
              </span>
            </li>
            <li>
              <span className="flex justify-start items-center gap-6">
                <IoLogoWhatsapp className="text-2xl text-emerald-600" />
                +62 82120748682
              </span>
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
