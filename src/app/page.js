"use client";

import React from "react";
// Pustaka 'react-type-animation' telah dialih keluar kerana ralat kompilasi.
import { motion } from "framer-motion";
import { ArrowRight, FileText, Briefcase, Code } from "lucide-react";

// Komponen Tersuai untuk Efek Menaip (Menggantikan TypeAnimation)
// Komponen ini menyediakan fungsi yang sama tanpa memerlukan pustaka luaran.
const TypeAnimationComponent = ({ sequence, speed, className }) => {
  // Hanya ambil string dari array sequence (indeks genap), abaikan delay
  const words = sequence.filter((_, i) => i % 2 === 0);

  const [text, setText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  // Tetapan kelajuan
  const typingSpeed = 50; // ms
  const deletingSpeed = 30; // ms
  const pauseTime = 1500; // Jeda 1.5 saat selepas menaip penuh

  React.useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      // Fasa 1: Memadam
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Selesai padam, tukar ke perkataan seterusnya
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      // Fasa 2: Menaip
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Selesai menaip, tunggu seketika, kemudian padam
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  // Mengembalikan teks dengan kursor berkedip (blinking cursor)
  return (
    <span className={className}>
      {text}
      {/* Kursor berkedip */}
      <span
        className="inline-block w-1 h-6 bg-gray-600 animate-pulse ml-1 align-middle"
        style={{ minHeight: "1.5rem", marginTop: "-3px" }}
      ></span>
    </span>
  );
};

// Data kemahiran anda (boleh ubah atau tambah)
const skills = [
  { name: "HTML", level: "Advanced", icon: "/icons/html.png" },
  { name: "CSS", level: "Advanced", icon: "/icons/css-3.png" },
  { name: "JavaScript", level: "Intermediate", icon: "/icons/js.png" },
  { name: "React", level: "Beginner", icon: "/icons/react.png" },
  { name: "Next.js", level: "Beginner", icon: "/icons/nextjs.png" },
  { name: "Supabase", level: "Beginner", icon: "/icons/supabase.png" },
];

// Data projek contoh (anda perlu ganti dengan projek anda)
const featuredProjects = [
  {
    title: "StocktakeEase-POS",
    description:
      "A web-based Point of Sale and inventory management system developed using HTML, CSS, JavaScript, PHP, and MySQL",
    image: "/images/soon.jpg",
    link: "/projects/ecommerce",
  },
  {
    title: "Todo App",
    description:
      "A full-stack todo app with React, Supabase PostgreSQL, Google OAuth authentication and real-time synchronization",
    image: "/images/todo.png",
    link: "/projects/social-dashboard",
  },
  {
    title: "Fitness Diet App",
    description:
      "A Progressive Web App (PWA) fitness tracker built with React, Vite, and Supabase",
    image: "/images/soon.jpg",
    link: "/projects/my-portfolio",
  },
];

// Fallback image source function
const getFallbackImage = (size = "300x300", text = "Placeholder") =>
  `https://placehold.co/${size}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

export default function Home() {
  return (
    // Latar belakang putih dan teks hitam yang tajam
    <div className="flex flex-col items-center min-h-screen px-4 md:px-8 bg-white text-gray-900 font-sans">
      {/* Section: Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto pt-32 pb-20 min-h-[80vh] gap-12" // Padding Hero yang lebih tinggi
      >
        {/* Bahagian Kiri: Imej Profil Estetik BARU (Menggunakan <img>) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0"
        >
          {/* Container utama untuk bentuk condong */}
          <div
            className="absolute inset-0 overflow-hidden shadow-2xl shadow-gray-300/80 transition-all duration-500 hover:shadow-gray-400/80"
            style={{
              // Bentuk Segi Empat Condong (Trapezoid) yang Estetik
              clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)",
            }}
          >
            {/* Menggantikan Next/Image dengan <img> standard */}
            <img
              src="/images/profile.jpg"
              alt="My Photo"
              // Menggunakan gaya CSS untuk mencapai kesan 'layout="fill"' dan 'objectFit="cover"'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="transition-all duration-500 transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getFallbackImage("400x400", "Aqil");
              }}
            />
          </div>
          {/* Border halus di luar bentuk condong (hanya untuk visual) */}
          <div
            className="absolute inset-0 ring-1 ring-gray-100/50 pointer-events-none"
            style={{
              clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)",
            }}
          ></div>
        </motion.div>

        {/* Bahagian Kanan: Teks Perkenalan Minimalis */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 p-4 text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Introduce
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-gray-700 to-black text-transparent bg-clip-text whitespace-nowrap">
              Aqil Mustaqim
            </span>
          </h1>

          {/* Menggunakan komponen buatan sendiri TypeAnimationComponent */}
          <TypeAnimationComponent
            sequence={[
              "Web Enthusiast",
              2000,
              "Quality Assurance",
              2000,
              "Business Analyst",
              2000,
              "Full-Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl font-normal text-gray-600 mb-6 block"
          />

          <p className="text-lg font-light mb-10 text-gray-600 max-w-lg text-justify">
            As a final-year Business Computing student, my goal is to ensure
            technological solutions not only function well but also drive
            business value. I am building a strong foundation in Full-Stack
            Development principles, backed by a keen focus on Software Quality
            Assurance and translating complex needs through Business Analysis. I
            am actively seeking roles that allow me to combine analytical
            thinking with creative digital execution.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow-md hover:bg-black transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <Briefcase size={18} />
              See My Projects
            </motion.a>
            <motion.a
              href="/Resume_Abdul Aqil Mustaqim Bin Abdul Aziz.pdf"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <FileText size={18} />
              View My Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      {/* Section: Skills */}
      <section className="w-full max-w-6xl py-20 px-4 md:px-0 border-t border-gray-100">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-extrabold text-center mb-4 text-gray-900"
        >
          Technology Stack
        </motion.h2>
        <p className="text-center text-lg text-gray-500 mb-12">
          Tools and technologies I use to bring ideas to life.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-center transition-all duration-300 transform hover:shadow-lg hover:border-gray-300"
            >
              <div className="p-3 mb-2 bg-gray-100 rounded-full">
                {/* Menggantikan Next/Image dengan <img> standard */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]" // Pastikan saiz dikekalkan
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getFallbackImage("30x30", "S");
                  }}
                />
              </div>
              <h3 className="text-base font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Featured Projects */}
      <section className="w-full max-w-6xl py-20 px-4 md:px-0 border-t border-gray-100">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-extrabold text-center mb-4 text-gray-900"
        >
          My Creations
        </motion.h2>
        <p className="text-center text-lg text-gray-500 mb-12">
          A selection of my best work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }} // Efek hover yang lebih halus
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 block"
            >
              <div className="aspect-video relative overflow-hidden">
                {/* Menggantikan Next/Image dengan <img> standard */}
                <img
                  src={project.image}
                  alt={project.title}
                  // Menggunakan gaya CSS untuk mencapai kesan 'layout="fill"' dan 'objectFit="cover"'
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getFallbackImage("600x400", project.title);
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {project.description}
                </p>
                <span className="flex items-center text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
