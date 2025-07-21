"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PriceListHero() {
  const ref = useRef<HTMLDivElement>(null);

  // Hook scroll progress section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Buat translateY - Parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          backgroundImage: "url('/images/whyus/whyushero-bg.jpeg')",
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
        <h1 className="text-4xl md:text-7xl font-bebas mb-4">Price List</h1>
        <p className="text-lg md:text-xl font-thin uppercase">
          Home / <span className="font-bold">Pricelist</span>
        </p>
      </motion.div>
    </section>
  );
}
