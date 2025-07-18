"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaDirections, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";

export default function WorkshopMap() {
  const ref = useRef<HTMLDivElement>(null);

  // Hook scroll progress section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Buat translateY - Parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* SECTION PARALLAX */}
      <section
        ref={ref}
        className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background image with parallax */}
        <motion.div
          style={{
            backgroundImage: "url('/images/workshop/workshop_bg.jpeg')",
            y: y,
          }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-7xl font-bebas mb-4">Our Workshop</h1>
          <p className="text-lg md:text-xl font-thin uppercase">
            Home / <span className="font-bold">Workshop</span>
          </p>
        </motion.div>
      </section>

      {/* SECTION MAPS & INFO */}
      <section className="w-full py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="w-full h-64 md:h-[450px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5344436970795!2d107.61856827528663!3d-6.946104993054056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e88a86ac3c2f%3A0x12fb2bdb4c9260a!2sSR%20POINT%20CARS!5e0!3m2!1sid!2sid!4v1752831171732!5m2!1sid!2sid"
              width="600"
              height="450"
              className="h-full w-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="py-4">
              <h2 className="text-3xl md:text-2xl font-inter uppercase font-bold">
                Alamat Workshop Kami
              </h2>
              <p className="w-full lg:max-w-sm flex flex-row justify-start items-center gap-4 text-lg text-gray-600 py-2">
                <span>
                  <FaMapMarkerAlt className="text-5xl text-primary" />
                </span>
                JLN. PASIRLUYU SELATAN NO.25D REGOL BANDUNG
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-3xl md:text-2xl font-inter uppercase font-bold">
                Kordinat Workshop Kami
              </h2>
              <p className="w-full lg:max-w-sm flex flex-row justify-start items-center gap-4 text-lg text-gray-600 py-2">
                <span>
                  <FaDirections className="text-5xl text-primary" />
                </span>
                -6.946038670144801, 107.62108480630076
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-3xl md:text-2xl font-inter uppercase font-bold">
                Kontak Kami
              </h2>
              <div className="flex">
                <p className="w-full lg:max-w-sm flex flex-row justify-start items-center gap-4 text-lg text-gray-600 py-2">
                  <span>
                    <IoLogoWhatsapp className="text-2xl text-emerald-600" />
                  </span>
                  +62 82120748682
                </p>
                <p className="w-full lg:max-w-sm flex flex-row justify-start items-center gap-4 text-lg text-gray-600 py-2">
                  <span>
                    <RiInstagramFill className="text-2xl text-pink-600" />
                  </span>
                  @sr_point_cars
                </p>
              </div>
            </div>
            <button className="bg-primary text-white w-fit hover:bg-primary-dark inline-flex justify-center items-center gap-4 px-8 py-4 rounded-xs text-lg uppercase font-semibold mt-12">
              OPEN WORKSHOP IN MAP
              <LiaLongArrowAltRightSolid className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
