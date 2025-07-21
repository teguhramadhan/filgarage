"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  LiaLongArrowAltRightSolid,
  LiaArrowLeftSolid,
  LiaArrowRightSolid,
} from "react-icons/lia";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  "/images/home/hero/gallery_hero/white_front.jpeg",
  "/images/home/hero/gallery_hero/white_left.jpeg",
  "/images/home/hero/gallery_hero/white_right.jpeg",
  "/images/home/hero/gallery_hero/red_right.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(2.5);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 }); // 👈 always rerun

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
      className="relative w-full min-h-screen overflow-hidden text-white pt-20 bg-black"
    >
      {/* BG */}
      <Image
        src="/images/home/hero/hero-bg.png"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-screen px-4 py-12 gap-48 overflow-hidden">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center font-bebas"
        >
          <h1 className="text-4xl md:text-7xl mb-2">
            <span className="text-primary">Good Car</span> Deserves
          </h1>
          <h1 className="text-4xl md:text-7xl">
            Exceptional <span className="text-primary">Treatment.</span>
          </h1>
        </motion.div>

        {/* CTA + Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 w-full max-w-full px-0 md:px-32 items-center justify-evenly"
        >
          {/* CTA */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="max-w-2xl text-2xl md:text-6xl text-gray-200 font-bebas text-center md:text-left">
              Reserve Your Exclusive Treatment Today.
            </span>
            <button className="bg-primary hover:bg-primary-dark inline-flex justify-center items-center gap-4 px-8 py-4 rounded-xs text-lg uppercase font-semibold">
              Book Now
              <LiaLongArrowAltRightSolid className="w-8 h-8" />
            </button>
          </div>

          {/* Gallery + Nav */}
          <div className="w-full">
            {/* Slides */}
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                }}
              >
                {galleryImages.map((src, i) => (
                  <div key={i} className="flex-shrink-0 w-[40%] px-2">
                    <Image
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      width={500}
                      height={600}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="flex justify-end mt-4 gap-4">
              <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                className={`p-3 rounded-full transition ${
                  isPrevDisabled
                    ? "bg-black bg-opacity-20 cursor-not-allowed"
                    : "bg-primary hover:bg-opacity-70"
                }`}
              >
                <LiaArrowLeftSolid className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={`p-3 rounded-full transition ${
                  isNextDisabled
                    ? "bg-black bg-opacity-20 cursor-not-allowed"
                    : "bg-primary hover:bg-opacity-70"
                }`}
              >
                <LiaArrowRightSolid className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
