"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi route change kalau klik Link
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // NOTE: useRouter dari next/navigation di App Router TIDAK punya .events
    // Workaround: detect pathname change
    setLoading(false); // disable loader pas pertama load
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setLoading(true);
    router.push(href);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      {loading && <Loader />}

      <div className="max-w-full px-4 sm:px-28 lg:px-32 flex items-center justify-between h-16 md:h-24">
        {/* Logo */}
        <div className="flex-shrink-0 w-28 sm:w-32 md:w-40">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src="/images/home/logo/logo_nav_default.png"
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
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/pricelist", label: "Price List" },
            { href: "/projects", label: "Projects" },
            { href: "/workshop", label: "Workshop" },
            { href: "/whyus", label: "Why Us" },
          ].map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleLinkClick(href)}
              className={`uppercase transition-all duration-300 px-4 py-2 border-2 ${
                pathname === href
                  ? "text-primary font-bold bg-white border-white"
                  : "text-white border-transparent hover:border-white hover:bg-white hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center md:w-10 md:h-10 p-2 border-2 border-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300"
            aria-label="Menu"
          >
            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <FaBars className="w-4 h-4 md:w-6 md:h-6 text-current" />
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <FaTimes className="w-4 h-4 md:w-6 md:h-6 text-current" />
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
            className="md:hidden px-2 pt-2 pb-3 space-y-1 uppercase text-white bg-primary border-t border-white/20"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/pricelist", label: "Price List" },
              { href: "/projects", label: "Projects" },
              { href: "/workshop", label: "Workshop" },
              { href: "/whyus", label: "Why Us" },
            ].map(({ href, label }) => (
              <button
                key={href}
                onClick={() => {
                  handleLinkClick(href);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 border-2 transition-all duration-300 ${
                  pathname === href
                    ? "text-primary font-bold bg-white border-white"
                    : "text-white border-transparent hover:border-white hover:bg-white hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
