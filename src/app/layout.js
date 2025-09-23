import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-gray-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
