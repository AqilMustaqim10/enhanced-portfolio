"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  TestTube,
  LayoutDashboard,
  Search,
  Settings,
} from "lucide-react";

// --- Data Placeholder Projek ---
const projects = [
  {
    title: "Job Tracking Apps",
    description:
      "A full-stack job application tracking web app built with React, Supabase, and TanStack Query — featuring kanban boards, drag and drop, file attachments, and real-time filtering.",
    techStack: ["React", "Supabase", "TanStack Query"],
    imageUrl: "/images/projects1.png",
    liveLink: "https://job-tracker-gold-nine.vercel.app/",
    githubLink: "https://github.com/AqilMustaqim10/job-tracker",
  },
  {
    title: "Todo App",
    description:
      "A full-stack todo application built with React and Vite, featuring Supabase PostgreSQL backend with row-level security, Google OAuth and email authentication, real-time data synchronization, optimistic UI updates, and deployed on Vercel with automated CI/CD.",
    techStack: ["React", "CSS", "PostgreSQL"],
    imageUrl: "/images/soon.jpg",
    liveLink: "https://todo-app-mu-gold.vercel.app/",
    githubLink: "https://github.com/AqilMustaqim10/todo-app.git",
  },
  {
    title: "Fitness Diet App",
    description:
      "A beautiful, installable web app for tracking calories, workouts, and weight. Built with React, Vite, and Supabase. Features real-time data sync, offline support, and a modern pink-themed UI with smooth animations. Fully responsive and PWA-enabled for native app-like experience.",
    techStack: ["React", "Vite", "Supabase", "PWA"],
    imageUrl: "/images/soon.jpg",
    liveLink: "https://fitness-diet-app-sigma.vercel.app/",
    githubLink: "https://github.com/AqilMustaqim10/fitness-diet-app.git",
  },
];

// --- Komponen Pembantu untuk Animasi Gulir (Scroll Animation) ---
const ScrollFadeIn = ({ children, delay = 0, yOffset = 50 }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset / 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// --- Komponen Kad Projek Tunggal ---
const ProjectCard = ({ project, index }) => {
  return (
    <ScrollFadeIn delay={0.1 + index * 0.1} yOffset={30}>
      <motion.div
        className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:shadow-indigo-400/50 hover:scale-[1.02]"
        whileHover={{ y: -5 }} // Lifter sedikit apabila hover
      >
        {/* Visual Placeholder */}
        <div className="relative h-60 w-full overflow-hidden bg-gray-800">
          <img
            src={project.imageUrl}
            alt={`Visual projek ${project.title}`}
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/1e293b/ffffff?text=PROJECT+VISUAL";
            }}
          />
        </div>

        {/* Kandungan Kad */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Saiz tajuk dikurangkan sedikit untuk 3 kolum */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Butang Pautan */}
          <div className="flex gap-4 mt-auto border-t border-gray-100 pt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-full shadow-md shadow-indigo-500/30 hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={18} />
              Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold text-sm rounded-full shadow-md hover:bg-gray-700 transition-colors"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollFadeIn>
  );
};

// --- Komponen Utama Halaman Projek ---
export default function ProjectPage() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-gray-900 pt-28 pb-20 px-4 md:px-8 font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* --- Bahagian Header Projek --- */}
        <ScrollFadeIn delay={0.1} yOffset={40}>
          <header className="text-center space-y-4">
            <p className="text-lg uppercase tracking-[0.3em] text-gray-500 font-medium">
              Proof of Competence
            </p>
            <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">
                My Projects
              </span>
            </h1>
          </header>
        </ScrollFadeIn>

        {/* --- Grid Kad Projek --- */}
        {/* Tukar kepada 3 kolum pada skrin besar (lg) dan 2 kolum pada skrin sederhana (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* --- Bahagian Call to Action Tambahan --- */}
        <ScrollFadeIn delay={0.5}>
          <div className="text-center p-12 bg-indigo-50 rounded-2xl border-2 border-dashed border-indigo-200 mt-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Looking for More ?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              If you are interested in the full scope of my work, please visit
              my GitHub repository.
            </p>
            <motion.a
              href="https://github.com/AqilMustaqim10" // Ganti dengan pautan Github sebenar anda
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/40 hover:bg-purple-700 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(147, 51, 234, 0.5)",
              }}
            >
              <Github size={20} />
              View All Projects on GitHub
            </motion.a>
          </div>
        </ScrollFadeIn>
      </div>
    </motion.div>
  );
}
