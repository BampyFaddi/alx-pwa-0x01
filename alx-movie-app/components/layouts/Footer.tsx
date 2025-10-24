import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-10 lg:px-20 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Brand */}
        <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-0">
          ALX<span className="text-yellow-400">Movies</span>
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/movies" className="hover:text-yellow-400 transition">Movies</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ALX Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
}
