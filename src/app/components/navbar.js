"use client";

import { useState } from "react";
// Import Link telah dibuang untuk menyelesaikan ralat "Could not resolve next/link"
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import ikon moden dari lucide

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menutup menu apabila pautan diklik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // VARIAN UTAMA (Menu Wrapper)
  // Menggunakan staggerChildren untuk mengawal bila pautan individu muncul.
  const menuVariants = {
    initial: {
      opacity: 0,
      y: -10,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1, // Tambah stagger pada link
        delayChildren: 0.1, // Sedikit kelewatan sebelum link muncul
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  // VARIAN ITEM Pautan Individu
  // Animasi ringkas untuk setiap pautan, dikawal oleh staggerChildren
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 30, // Bermula dari bawah
    },
    animate: {
      opacity: 1,
      y: 0, // Naik ke posisi sedia ada
    },
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Menetapkan ketinggian konsisten untuk Nav Header
  const HEADER_HEIGHT_PX = "80px";

  return (
    <nav
      className="fixed w-full z-50 top-0 left-0 bg-white/90 py-4 backdrop-blur-md shadow-lg"
      style={{ height: HEADER_HEIGHT_PX }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            {/* Menggunakan <a> standard ganti <Link> */}
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
            >
              AqilMustaqim
            </a>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* SINTAKS DIPERBAIKI: Memastikan JSX dikembalikan dengan betul dari map */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Butang Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="block h-6 w-6" /> // Ikon Menu
              ) : (
                <X className="block h-6 w-6" /> // Ikon Tutup
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mudah Alih (Mobile Menu) - PERBAIKAN PENTING DI SINI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Menggunakan variants menu baru (opacity/y) dan staggerChildren
            className="md:hidden absolute left-0 w-full bg-gray-900/95"
            style={{
              top: HEADER_HEIGHT_PX,
              height: `calc(100vh - ${HEADER_HEIGHT_PX})`,
            }}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-10 py-10 h-full overflow-y-auto">
              {navLinks.map((link) => (
                // Struktur dipermudah: motion.div dengan itemVariants.
                // overflow-hidden tidak lagi diperlukan kerana offset y adalah kecil.
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="text-center" // Penting untuk tengah link
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick} // Tutup menu apabila pautan diklik
                    className="block text-5xl font-extrabold text-white hover:text-gray-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
