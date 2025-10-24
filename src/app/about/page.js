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
  title: "Web Developer | Quality Assurance Enthusiast | Business Analyst",
  location: "Kuala Lumpur, Malaysia",
  introduction:
    "I am a final-year Business Computing student with a strong interest in Quality Assurance, Business Analysis, and Web Development. I enjoy exploring how technology can improve business processes while ensuring software quality and user satisfaction. With a solid foundation in both business and technical skills, including database management, programming, and UI design, I aim to build a career that bridges analytical problem-solving with creative digital solutions.",
  // Laluan lokal di sini. Sila letakkan fail gambar anda (contoh: aqil-profile.jpg)
  // di dalam folder 'public/images/' projek anda.
  imageUrl: "/images/profile.jpg",
};

const expertise = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Proficient in HTML, CSS, JavaScript, and building responsive, user-friendly interfaces. Experienced with frameworks such as React and Next.js for creating modern web experiences.",
    color: "text-blue-600",
    delay: 0.1,
  },
  {
    icon: Database,
    title: "Backend & API",
    description:
      "Skilled in PHP, MySQL, and basic API integration. Understands how to structure data efficiently and maintain seamless system communication between frontend and backend.",
    color: "text-green-600",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Quality Assurance & Testing",
    description:
      "Detail-oriented in identifying software issues, performing test cases, and ensuring system reliability and functionality through structured validation.",
    color: "text-yellow-600",
    delay: 0.3,
  },
  {
    icon: Cpu,
    title: "Business & Analytical Thinking",
    description:
      "Adept at translating business requirements into clear technical tasks, bridging the gap between users and developers to deliver practical, value-driven solutions.",
    color: "text-red-600",
    delay: 0.4,
  },
];

const philosophy = [
  {
    icon: Lightbulb,
    title: "Innovation",
    detail:
      "Constantly exploring new and better ways to solve technological challenges with creativity and efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    detail:
      "Committed to staying up to date with the latest trends in software development, quality assurance, and digital innovation.",
  },
  {
    icon: Coffee,
    title: "Strong Collaboration",
    detail:
      "Thrive in open communication and teamwork, believing that the best results come from shared ideas and mutual support.",
  },
];

// --- Komponen Pembantu untuk Animasi Gulir (Scroll Animation) ---
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
              Get to Know Me
            </p>
            <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">
                {personalBio.name}
              </span>
            </h1>
            {/* Jarak dipertingkatkan di sini dengan mt-4 dan menggunakan text-2xl yang betul */}
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mt-4">
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
                  Professional Summary
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed text-justify">
                  {personalBio.introduction}
                </p>

                {/* Lokasi dan Butang Portfolio */}
                <div className="flex items-center space-x-3 text-gray-700 font-medium pt-4">
                  <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <span>Based in {personalBio.location}</span>
                </div>
                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors mt-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.5)",
                  }}
                >
                  <Briefcase size={20} />
                  See My Projects
                </motion.a>
              </div>
            </div>
          </ScrollFadeIn>
        </section>

        {/* --- Bahagian Kepakaran Teras (Grid) --- */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-600">
            The tools and skills I bring to every modern project.
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
            Work Philosophy
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide my approach to development.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl shadow-gray-200">
          {philosophy.map((item, index) => (
            <motion.div
              key={index}
              className="flex-1 p-6 space-y-3 text-center border-l-4 border-indigo-600/70 bg-white rounded-lg shadow-inner"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} // Animasi dicetuskan apabila dalam pandangan
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <item.icon className="w-8 h-8 text-indigo-600" />
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
