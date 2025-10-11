"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react"; // Ikon moden

// Data Kontak
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+60 12-345 6789",
    link: "tel:+60123456789",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kuala Lumpur, Malaysia",
    link: "#",
  },
];

export default function ContactPage() {
  return (
    // Container utama dengan padding dan latar belakang putih
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Halaman */}
        <header className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Let's Talk
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project idea or just want to chat? Send me a message!
          </p>
        </header>

        {/* Bahagian Utama: Grid Borang dan Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Kolum 1: Maklumat Kontak Tepi */}
          <div className="lg:col-span-1 space-y-8 p-6 lg:p-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
              Info
            </h2>
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 group block"
              >
                <item.icon className="h-6 w-6 text-gray-500 group-hover:text-black transition-colors flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {item.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Kolum 2 & 3: Borang Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 p-8 bg-gray-50 border border-gray-100 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              {/* Input Nama Penuh */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g., Aqil Mustaqim"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all outline-none bg-white text-gray-900"
                />
              </div>

              {/* Input Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="your.email@domain.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all outline-none bg-white text-gray-900"
                />
              </div>

              {/* Input Subjek */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry / Job Offer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all outline-none bg-white text-gray-900"
                />
              </div>

              {/* Textarea Mesej */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Tell me more about your project or inquiry..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all outline-none bg-white text-gray-900"
                ></textarea>
              </div>

              {/* Butang Hantar */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
