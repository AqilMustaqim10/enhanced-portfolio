import Link from "next/link";
import { Twitter, Linkedin, Github, Code } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/[your-handle]",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/[your-profile]",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/[your-username]",
      label: "GitHub",
    },
  ];

  // navigation links telah dibuang

  return (
    // Latar Belakang Hitam Tajam (bg-gray-950) dan Teks Kelabu Lembut
    <footer className="w-full bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bahagian Atas: Grid 2 Kolum (sekarang 2 kolum) untuk Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-800 pb-8 space-y-8 md:space-y-0">
          {/* Kolum 1: Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-gray-200 transition-colors flex items-center justify-center md:justify-start gap-2"
            >
              <Code size={20} className="text-gray-400" /> {/* Ikon moden */}
              Abdul Aqil Mustaqim Bin Abdul Aziz
            </Link>
            <p className="text-sm mt-2 text-gray-500 max-w-xs">
              Crafting modern digital experiences with precision.
            </p>
          </div>

          {/* Kolum 2: Social Media Links (Ikon) - bergerak ke kanan desktop */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-semibold text-white mb-3">Connect</h3>
            <div className="flex space-x-5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  // Ikon & Efek Hover
                  className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"
                >
                  <item.icon size={22} strokeWidth={1.5} />{" "}
                  {/* Saiz ikon yang lebih kemas */}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bahagian Bawah: Copyright */}
        <div className="text-center pt-6">
          <p className="text-xs text-gray-600">
            &copy; 2024 Aqil Mustaqim. All rights reserved. Built with Next.js &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
