"use client";

import Image from "next/image";
import { FaTools } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full min-h-screen py-20 px-4 lg:px-8 bg-white">
      <div className="flex flex-col gap-2 lg:gap-32">
        <div className="flex flex-col gap-2 lg:gap-32">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24"
          >
            {/* Kiri: Gambar */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/home/about/about_us.png"
                alt="About Us"
                width={400}
                height={200}
                className="w-full md:max-w-md lg:max-w-lg rounded-lg object-cover"
              />
            </div>

            {/* Kanan: Teks */}
            <div className="w-full">
              <h2 className="text-4xl md:text-7xl font-bebas text-primary leading-tight lg:mb-6">
                About Us
              </h2>
              <p className="text-gray-700 text-md md:text-lg lg:text-3xl text-justify mb-6">
                SR Point adalah pilihan terbaik untuk Anda yang peduli terhadap
                perawatan mobil dengan kualitas terbaik. Sebagai ahli dalam
                layanan coating, detailing, PPF (Paint Protection Film), dan
                perlindungan anti karat, kami menghadirkan kombinasi sempurna
                antara keahlian teknis tinggi dan perhatian terhadap detail.
                Setiap mobil yang kami tangani tidak hanya mendapatkan perlakuan
                istimewa untuk penampilan yang memukau, tetapi juga perlindungan
                yang kokoh dari cuaca, debu, dan kerusakan lainnya
              </p>
            </div>
          </motion.div>

          {/* Professional Detailer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-2 lg:gap-24"
          >
            {/* Kiri: Desc */}
            <div className="w-full">
              <p className="text-gray-700 text-md md:text-lg lg:text-3xl text-justify">
                Percayakan mobil Anda kepada detailer profesional kami di SR
                Point untuk mendapatkan perlakuan istimewa yang membuatnya
                tampak seperti baru kembali. Dengan keahlian mendalam dalam
                coating, detailing, dan perlindungan mobil, tim kami siap
                memberikan kualitas terbaik dan hasil yang memuaskan setiap kali
                Anda berkunjung. Temukan perbedaan yang nyata dengan layanan
                detailer kami yang berdedikasi hanya di SR Point.
              </p>
            </div>
            {/* Kanan: Title */}
            <div className="w-full md:w-1/2 flex lg:justify-end lg:text-right">
              <div className="relative inline-block">
                <h2 className="relative z-10 text-4xl md:text-7xl font-bebas text-primary leading-tight">
                  Professional Detailer
                </h2>
                <FaTools className="absolute -top-2 -right-6 md:-top-4 md:-right-8 w-24 h-24 md:w-20 md:h-20 text-gray-700 opacity-20 z-0" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 mt-12 lg:mt-0">
            <div className="flex items-center text-4xl md:text-7xl font-bebas text-primary leading-tight">
              The Process
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/images/home/about/about_gallery1.png"
                alt="Gallery 1"
                width={400}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/images/home/about/about_gallery2.png"
                alt="Gallery 2"
                width={400}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/images/home/about/about_gallery3.png"
                alt="Gallery 3"
                width={400}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex justify-end items-end mt-4">
            <button className="bg-primary text-white inline-flex justify-center items-center gap-2 lg:gap-4 px-4 lg:px-8 py-2 lg:py-4 rounded-xs text-xs lg:text-lg uppercase font-semibold">
              See our Projects
              <LiaLongArrowAltRightSolid className="w-8 h-8" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
