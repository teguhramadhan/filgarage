"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurServicesHero() {
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
      className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          backgroundImage: "url('/images/services/hero-bg.png')",
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
        <h1 className="text-4xl md:text-7xl font-bebas mb-4">Our Services</h1>
        <p className="text-lg md:text-xl font-thin uppercase">
          Home / <span className="font-bold">Services</span>
        </p>
      </motion.div>
    </section>
  );
}
