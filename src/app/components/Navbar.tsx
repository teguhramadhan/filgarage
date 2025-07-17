"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-primary shadow-md">
      <div className="max-w-full px-4 sm:px-28 lg:px-32 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0 w-28 sm:w-32 md:w-40">
          <Link href="/">
            <Image
              src="/images/home/logo/logo_nav.png"
              alt="My Logo"
              width={200}
              height={60}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-white text-lg uppercase">
          <Link href="#home">Home</Link>
          <Link href="#about">Services</Link>
          <Link href="#contact">Projects</Link>
          <Link href="#contact">Workshop</Link>
          <Link href="#contact">Why Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center md:w-10 md:h-10"
            aria-label="Menu"
          >
            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <FaBars className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <FaTimes className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-2 pt-2 pb-3 space-y-1 uppercase text-white"
          >
            <Link href="#home" className="block px-2 py-4">
              Home
            </Link>
            <Link href="#about" className="block px-2 py-4">
              Services
            </Link>
            <Link href="#contact" className="block px-2 py-4">
              Projects
            </Link>
            <Link href="#contact" className="block px-2 py-4">
              Workshop
            </Link>
            <Link href="#contact" className="block px-2 py-4">
              Why Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
