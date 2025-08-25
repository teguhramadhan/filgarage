"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/home/hero/gallery_hero/white_front.jpeg",
    alt: "White Car Front",
  },
  {
    src: "/images/home/hero/gallery_hero/red_right.jpeg",
    alt: "White Car Left",
  },
  {
    src: "/images/home/hero/gallery_hero/white_right.jpeg",
    alt: "White Car Right",
  },
  {
    src: "/images/home/hero/gallery_hero/white_left.jpeg",
    alt: "Red Car Right",
  },
  {
    src: "/images/home/hero/gallery_hero/white_front.jpeg",
    alt: "Black Car",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(2.5);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1.5);
      } else {
        setVisibleSlides(2.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = galleryImages.length - visibleSlides;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden text-white bg-black"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/50"></div>

        {/* Animated Grid Pattern */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #E6212A 1px, transparent 1px),
              linear-gradient(180deg, #E6212A 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></motion.div>

        {/* Floating Geometric Elements */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-40 h-40 border-4 border-primary opacity-20"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary opacity-15"
        ></motion.div>
      </div>

      {/* Side Accent Bars */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 top-0 hidden md:block w-1 lg:w-4 bg-primary/70 z-10"
      ></motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute right-0 top-0 hidden md:block w-1 lg:w-4 bg-white/70 z-10"
      ></motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-6 py-20">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 100, scale: 0.8 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-white mx-auto mb-8"
          ></motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-6 font-bebas">
            <span className="text-primary">Mobil yang bagus </span>
            layak
            <br />
            mendapatkan
            <span className="text-primary"> perawatan yang luar biasa</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
        </motion.div>

        {/* CTA + Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-7xl"
        >
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* CTA Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-bebas">
                  PESAN PERAWATAN
                  <br />
                  <span className="text-primary"> EKSKLUSIF ANDA</span>
                  <br />
                  HARI INI
                </h2>

                <div className="w-20 h-1 bg-primary"></div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Nikmati perawatan otomotif premium yang layak untuk kendaraan
                  Anda. Perawatan profesional dengan hasil luar biasa.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6282120748682?text=Halo%2C%20saya%20ingin%20booking%20treatment%20coating%20di%20SR%20Point%20Cars%20untuk%20mobil%20saya.%20Boleh%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-black uppercase text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300 group"
              >
                BOOK NOW
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-2xl group-hover:translate-x-2 transition-transform"
                >
                  →
                </motion.div>
              </motion.a>

              {/* Stats */}
              <div className="flex gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">500+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">
                    Mobil Dirawat
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">
                    Pelanggan Puas
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="lg:col-span-3">
              {/* Gallery Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 font-bebas">
                    Pekerjaan kami
                  </h3>
                  <div className="w-12 h-1 bg-primary"></div>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    disabled={isPrevDisabled}
                    className={`w-12 h-12 flex items-center justify-center font-bold text-xl transition-all ${
                      isPrevDisabled
                        ? "bg-gray-600 cursor-not-allowed opacity-50"
                        : "bg-primary hover:bg-white hover:text-black"
                    }`}
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    disabled={isNextDisabled}
                    className={`w-12 h-12 flex items-center justify-center font-bold text-xl transition-all ${
                      isNextDisabled
                        ? "bg-gray-600 cursor-not-allowed opacity-50"
                        : "bg-primary hover:bg-white hover:text-black"
                    }`}
                  >
                    →
                  </motion.button>
                </div>
              </div>

              {/* Gallery Slides */}
              <div className="overflow-hidden relative">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                  }}
                >
                  {galleryImages.map((image, i) => (
                    <motion.div
                      key={i}
                      className="flex-shrink-0 px-3"
                      style={{ width: `${100 / visibleSlides}%` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden bg-gray-200 aspect-square">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4">
                            <div className="w-8 h-1 bg-primary mb-2"></div>
                            <p className="text-white text-sm font-bold uppercase">
                              Premium Result
                            </p>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-primary border-b-transparent"></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({
                  length: Math.ceil(galleryImages.length - visibleSlides + 1),
                }).map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 transition-all duration-300 ${
                      index === i ? "bg-primary w-8" : "bg-gray-500 w-4"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  ></motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-white to-primary origin-left"
      ></motion.div>
    </section>
  );
}
