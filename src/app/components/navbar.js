"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import ikon moden dari lucide

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Varian animasi dikekalkan
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0.07, 1, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      // Ubah latar belakang: transparent dengan blur, tetapi teks kini lebih gelap
      // bg-white/70 untuk latar belakang putih transparent
      className="fixed w-full z-20 top-0 left-0 bg-white/70 py-4 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              // Warna logo: text-gray-800, hover:text-black
              className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
            >
              AqilMustaqim
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  // Warna link desktop: text-gray-600, hover:text-gray-900
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              // Warna butang mobile: text-gray-800, hover:text-black, focus:ring-gray-900
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menggantikan SVG dengan ikon Lucide untuk estetika moden */}
              {!isOpen ? (
                <Menu className="block h-6 w-6" /> // Ikon Menu
              ) : (
                <X className="block h-6 w-6" /> // Ikon Tutup
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Latar belakang menu mobile: bg-gray-950/95 ditukar kepada bg-gray-900 (tema gelap untuk menu)
            // Latar belakang gelap pada menu mobile masih estetik walaupun tema utama cerah
            className="md:hidden origin-top absolute top-0 left-0 w-full h-screen bg-gray-900/95 pt-20"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-8 py-8">
              {navLinks.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      // Warna link mobile: text-white dikekalkan (kontras pada latar belakang gelap)
                      className="block text-4xl font-bold text-white hover:text-gray-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
