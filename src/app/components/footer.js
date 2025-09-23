export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-400 py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
