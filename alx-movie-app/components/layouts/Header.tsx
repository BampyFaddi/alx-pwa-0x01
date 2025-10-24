import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faFilm} className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold tracking-wide">ALX Movie App</h1>
        </div>

        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/movies" className="hover:text-yellow-400 transition">
            Movies
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
