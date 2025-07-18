"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/projects/projects_hero.jpeg')",
        }}
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
        <h1 className="text-4xl md:text-7xl font-bebas mb-4 text-center max-w-[70%] mx-auto md:max-w-none">
          THIS IS OUR PROJECT SHOW CASE
        </h1>

        <p className="text-lg md:text-xl font-thin uppercase">
          Home / <span className="font-bold">Projects</span>
        </p>
      </motion.div>
    </section>
  );
}
