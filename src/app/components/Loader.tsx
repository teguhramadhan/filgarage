"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      <div className="mb-2">
        {/* <Image
          src="/images/home/logo/logo_nav_default.png"
          alt="Loading Logo"
          width={208} // atau sesuai ukuran logo asli
          height={80} // sesuaikan rasio asli
          priority
        /> */}
        <h2 className="text-white">LOGO FIL GARAGE</h2>
      </div>

      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="text-white text-sm lg:text-xl uppercase tracking-widest mt-6"
      >
        Sedang Memuat...
      </motion.p>
    </motion.div>
  );
}
