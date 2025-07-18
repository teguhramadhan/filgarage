"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Tagline() {
  return (
    <section className="w-full">
      {/* TAGLINE PARALLAX */}
      <div className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/home/tagline/tagline_bg.jpeg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-7xl text-white mb-2 font-bebas">
            Platinum Care
          </h1>
          <p className="text-lg md:text-2xl text-white uppercase">
            For Your Car
          </p>
        </motion.div>
      </div>

      {/* ABOUT US */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full px-4 lg:px-8 py-20"
      >
        {/* SLOGAN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-center px-4"
        >
          <h1 className="text-4xl md:text-7xl text-gray-700 font-bebas text-center leading-tight lg:mb-12">
            Good <span className="text-primary">Car,</span> Good{" "}
            <span className="text-primary">Treatment</span>
          </h1>
        </motion.div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Kiri: Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full md:w-2/3 flex justify-center"
          >
            <Image
              src="/images/home/tagline/tagline_img.png"
              alt="About Us"
              width={400}
              height={200}
              className="w-full md:max-w-g lg:max-w-lg rounded-lg object-cover"
            />
          </motion.div>

          {/* Kanan: Teks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="w-full"
          >
            <div className="text-gray-700 text-md md:text-lg lg:text-3xl text-justify md:text-justify">
              <p>
                Memiliki mobil yang baik berarti juga harus memberikan perhatian
                khusus pada perawatan eksteriornya. Perawatan eksterior yang
                tepat tidak hanya meningkatkan penampilan mobil Anda tetapi juga
                melindungi nilai investasinya.
              </p>
              <p>
                Rutin mencuci mobil untuk menghilangkan kotoran, debu, dan Stone
                Chip adalah langkah dasar yang penting. Penggunaan produk
                pembersih yang tepat dan teknik pencucian yang benar akan
                mencegah goresan pada cat.
              </p>
              <p>
                Selain itu, coating secara berkala akan memberikan lapisan
                pelindung tambahan terhadap sinar UV, hujan asam, dan elemen
                lainnya yang dapat merusak cat dan tampilan mobil.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
