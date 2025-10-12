"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Zap,
  Database,
  Briefcase,
  Coffee,
  TrendingUp,
  Cpu,
  Lightbulb,
  MapPin,
} from "lucide-react";

// --- Data Placeholder (Sila Ganti dengan Maklumat Anda) ---

const personalBio = {
  name: "Aqil Mustaqim",
  title: "Pembangun Perisian | Inovator Web Moden",
  location: "Kuala Lumpur, Malaysia",
  introduction:
    "Saya seorang pembangun perisian yang bersemangat dengan fokus yang mendalam dalam mencipta pengalaman pengguna yang lancar dan antara muka yang berprestasi tinggi. Berpegang kepada prinsip kod yang bersih dan seni bina yang mampan, saya sentiasa berusaha untuk merapatkan jurang antara reka bentuk dan fungsi. Saya percaya pada automasi dan membina penyelesaian yang berorientasikan masa depan.",
  // Laluan lokal di sini. Sila letakkan fail gambar anda (contoh: aqil-profile.jpg)
  // di dalam folder 'public/images/' projek anda.
  imageUrl: "/images/profile.jpg",
};

const expertise = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Mahir dalam React, Next.js, dan membina antaramuka responsif menggunakan Tailwind CSS.",
    color: "text-blue-600",
    delay: 0.1,
  },
  {
    icon: Database,
    title: "Backend & API",
    description:
      "Pengalaman dengan Node.js, Express, dan menguruskan data dengan PostgreSQL/MongoDB/Firestore.",
    color: "text-green-600",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Fokus untuk menyampaikan laman web dengan kelajuan muatan yang sangat pantas dan skor Lighthouse yang tinggi.",
    color: "text-yellow-600",
    delay: 0.3,
  },
  {
    icon: Cpu,
    title: "Problem Solving",
    description:
      "Cekap dalam menterjemahkan keperluan perniagaan yang kompleks kepada penyelesaian kod yang elegan dan praktikal.",
    color: "text-red-600",
    delay: 0.4,
  },
];

const philosophy = [
  {
    icon: Lightbulb,
    title: "Inovasi",
    detail:
      "Sentiasa mencari cara baharu dan lebih baik untuk menyelesaikan masalah teknologi.",
  },
  {
    icon: TrendingUp,
    title: "Pembelajaran Berterusan",
    detail:
      "Mengikuti perkembangan terkini dalam ekosistem JavaScript dan cloud computing.",
  },
  {
    icon: Coffee,
    title: "Kolaborasi Kuat",
    detail:
      "Berjaya melalui komunikasi yang terbuka dan kerja berpasukan yang utuh.",
  },
];

// --- Komponen Pembantu untuk Animasi Gulir (Scroll Animation) ---
// Ini membalut elemen untuk mencetuskan animasi apabila ia memasuki viewport.
const ScrollFadeIn = ({ children, delay = 0, yOffset = 50 }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset / 2 }}
      whileInView={{ opacity: 1, y: 0 }} // Animasi dicetuskan apabila dalam pandangan
      viewport={{ once: true, amount: 0.2 }} // Hanya animasi sekali sahaja
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// --- Komponen Utama ---
// Varian asas dikekalkan untuk animasi bebanan awal (initial load animation)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-gray-900 pt-28 pb-20 px-4 md:px-8 font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* --- Bahagian Header & Pengenalan --- */}
        <ScrollFadeIn delay={0.1} yOffset={40}>
          <header className="text-center space-y-4">
            <p className="text-lg uppercase tracking-[0.3em] text-gray-500 font-medium">
              Jom Kenali Saya
            </p>
            <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">
                {personalBio.name}
              </span>
            </h1>
            <p className="2xl text-gray-600 max-w-4xl mx-auto">
              {personalBio.title}
            </p>
          </header>
        </ScrollFadeIn>

        {/* --- Bahagian Profil Utama --- */}
        <section className="relative">
          <ScrollFadeIn delay={0.2} yOffset={30}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-white/70 backdrop-blur-sm p-8 md:p-16 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-200">
              {/* Gambar/Avatar */}
              <motion.div
                className="lg:col-span-1 flex justify-center lg:justify-start"
                initial={{ scale: 0.9, rotate: -3 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
              >
                <img
                  src={personalBio.imageUrl}
                  alt={`Potret ${personalBio.name}`}
                  className="w-72 h-72 object-cover rounded-full border-[6px] border-indigo-500/30 shadow-2xl shadow-gray-400/50 transform hover:scale-[1.03] transition-transform duration-500"
                  // Fallback: Jika gambar lokal tiada, ia akan menggunakan placeholder
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x400/374151/ffffff?text=AQIL";
                  }}
                />
              </motion.div>

              {/* Bio dan Ringkasan */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 border-b border-indigo-500/30 pb-3">
                  Cerita di Sebalik Kod
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {personalBio.introduction}
                </p>

                {/* START EDIT: Lokasi diletakkan di atas butang portfolio */}
                <div className="flex items-center space-x-3 text-gray-700 font-medium pt-4">
                  <MapPin className="w-6 h-6 text-black-600 flex-shrink-0" />
                  <span>Berasaskan di **{personalBio.location}**</span>
                </div>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors mt-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.5)",
                  }}
                >
                  <Briefcase size={20} />
                  Lihat Portfolio Saya
                </motion.a>
                {/* END EDIT */}
              </div>
            </div>
          </ScrollFadeIn>
        </section>

        {/* --- Bahagian Kepakaran Teras (Grid) --- */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Kepakaran Teras
          </h2>
          <p className="text-xl text-gray-600">
            Alat dan kemahiran yang saya bawa untuk setiap projek moden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-xl border border-gray-200 space-y-3 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} // Animasi dicetuskan apabila dalam pandangan
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Staggered delay
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            >
              <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Bahagian Falsafah (Senarai/Row) --- */}
        <div className="text-center space-y-4 pt-10">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Falsafah Bekerja
          </h2>
          <p className="text-xl text-gray-600">
            Prinsip yang membimbing proses pembangunan saya.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl shadow-gray-200">
          {philosophy.map((item, index) => (
            <motion.div
              key={index}
              className="flex-1 p-6 space-y-3 text-center border-l-4 border-black bg-white rounded-lg shadow-inner"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} // Animasi dicetuskan apabila dalam pandangan
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <item.icon className="w-8 h-8 text-black-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-base text-gray-600">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
