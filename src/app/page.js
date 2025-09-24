"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Data kemahiran anda (boleh ubah atau tambah)
const skills = [
  { name: "HTML", level: "Advanced", icon: "/icons/html.svg" },
  { name: "CSS", level: "Advanced", icon: "/icons/css.svg" },
  { name: "JavaScript", level: "Intermediate", icon: "/icons/js.svg" },
  { name: "React", level: "Intermediate", icon: "/icons/react.svg" },
  { name: "Next.js", level: "Beginner", icon: "/icons/nextjs.svg" },
  { name: "Tailwind CSS", level: "Advanced", icon: "/icons/tailwind.svg" },
];

// Data projek contoh (anda perlu ganti dengan projek anda)
const featuredProjects = [
  {
    title: "E-Commerce Store",
    description: "A full-stack e-commerce platform with Stripe integration.",
    image: "/images/project1.jpg",
    link: "/projects/ecommerce",
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard to track social media performance.",
    image: "/images/project2.jpg",
    link: "/projects/social-dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "My own personal portfolio, designed with Next.js and Tailwind.",
    image: "/images/project3.jpg",
    link: "/projects/my-portfolio",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 md:px-8 bg-[#0a0a0a] text-gray-200">
      {/* Section: Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-20 min-h-[80vh]"
      >
        {/* Bahagian Kiri: Teks Perkenalan */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 p-4 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-white">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-gray-500 to-gray-200 text-transparent bg-clip-text">
              [Your Name]
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "UI/UX Developer",
              2000,
              "Data Analyst",
              2000,
              "Full-Stack Developer",
              2000,
              "Web Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl font-light text-gray-400 mb-6"
          />

          <p className="text-lg md:text-xl font-light mb-8 text-gray-400">
            A passionate web developer creating modern and responsive web
            experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors"
            >
              See My Projects
            </motion.a>
            <motion.a
              href="/path-to-your-resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-400 text-gray-400 font-semibold rounded-full shadow-lg hover:bg-gray-400 hover:text-black transition-colors"
            >
              View My Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Bahagian Kanan: Imej Profil dengan Kesan Kaca dan Cahaya */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
        >
          {/* Efek Cahaya Latar */}
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div
              className="absolute inset-0 bg-gray-800"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="My Photo"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-xl hover:ring-2 hover:ring-gray-600"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section: Skills */}
      <section className="w-full max-w-6xl py-20 px-4 md:px-0">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg text-center transition-colors duration-300 transform hover:-translate-y-2"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-2"
              />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Featured Projects */}
      <section className="w-full max-w-6xl py-20 px-4 md:px-0">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white/5 backdrop-blur-sm"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                objectFit="cover"
                className="w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
